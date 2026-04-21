import React, { useState } from 'react';
import Home from './components/Home';
import Quiz from './components/Quiz';
import Result from './components/Result';
import { MAIN_QUESTIONS, EXTRA_QUESTIONS, VELOG_QUESTIONS } from './data/questions';
import './styles/App.css';

function App() {
  const [screen, setScreen] = useState('home'); // 'home', 'quiz', 'result'
  const [quizData, setQuizData] = useState(null);
  const [results, setResults] = useState(null);

  const handleStartQuiz = (mode) => {
    let pool = [];

    if (mode === 'main') {
      pool = [...MAIN_QUESTIONS];
    } else if (mode === 'practice') {
      pool = [...EXTRA_QUESTIONS];
    } else if (mode === 'mixed') {
      pool = [...MAIN_QUESTIONS, ...EXTRA_QUESTIONS];
    } else if (mode === 'velog') {
      pool = [...VELOG_QUESTIONS];
    } else if (mode === 'short') {
      pool = shuffle([...MAIN_QUESTIONS, ...EXTRA_QUESTIONS]).slice(0, 10);
    }

    if (mode !== 'short') {
      pool = shuffle(pool);
    }

    pool = rebalanceAnswerPositions(pool);

    setQuizData({ mode, questions: pool });
    setScreen('quiz');
  };

  const handleQuizComplete = (result) => {
    if (result === null) {
      // User clicked exit
      setScreen('home');
    } else {
      // Quiz complete
      setResults(result);
      setScreen('result');
    }
  };

  const handleRetry = () => {
    handleStartQuiz(quizData.mode);
  };

  const handleHome = () => {
    setScreen('home');
    setQuizData(null);
    setResults(null);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header-content">
          <span className="diamond">◆</span>
          <div>
            <h1>Spring Quiz</h1>
            <span className="subtitle">웹프레임워크2 복습</span>
          </div>
        </div>
      </header>

      {screen === 'home' && <Home onStartQuiz={handleStartQuiz} />}
      {screen === 'quiz' && quizData && (
        <Quiz
          questions={quizData.questions}
          mode={quizData.mode}
          onComplete={handleQuizComplete}
        />
      )}
      {screen === 'result' && results && (
        <Result
          results={results}
          onRetry={handleRetry}
          onHome={handleHome}
        />
      )}
    </div>
  );
}

// Utility function: shuffle array
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

function rebalanceAnswerPositions(questions) {
  const cloned = questions.map(question => ({
    ...question,
    options: Array.isArray(question.options) ? [...question.options] : []
  }));

  const groups = new Map();

  cloned.forEach((question, index) => {
    const optionCount = question.options.length;
    const hasValidAnswer = Number.isInteger(question.answer)
      && question.answer >= 0
      && question.answer < optionCount;

    if (!hasValidAnswer || optionCount < 2) {
      return;
    }

    if (!groups.has(optionCount)) {
      groups.set(optionCount, []);
    }
    groups.get(optionCount).push(index);
  });

  groups.forEach((indices, optionCount) => {
    const shuffledIndices = shuffle(indices);
    const offset = Math.floor(Math.random() * optionCount);

    shuffledIndices.forEach((questionIndex, order) => {
      const targetAnswer = (order + offset) % optionCount;
      cloned[questionIndex] = moveCorrectAnswerToIndex(cloned[questionIndex], targetAnswer);
    });
  });

  return cloned;
}

function moveCorrectAnswerToIndex(question, targetIndex) {
  const currentAnswer = question.answer;

  if (currentAnswer === targetIndex) {
    return question;
  }

  const nextOptions = [...question.options];
  [nextOptions[currentAnswer], nextOptions[targetIndex]] = [nextOptions[targetIndex], nextOptions[currentAnswer]];

  return {
    ...question,
    options: nextOptions,
    answer: targetIndex
  };
}

export default App;
