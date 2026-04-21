import React, { useState } from 'react';

const MODE_LABELS = {
  main: '본문제 50',
  practice: '예비문제 30',
  mixed: '전체 랜덤 80',
  velog: 'Velog 문제',
  short: '빠른 10문항'
};

const Quiz = ({ questions, mode, onComplete }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedIdx, setSelectedIdx] = useState(null);
  const [answered, setAnswered] = useState(false);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [streak, setStreak] = useState(0);
  const [maxStreak, setMaxStreak] = useState(0);
  const [wrongList, setWrongList] = useState([]);

  const totalQuestions = questions.length;
  const currentQuestion = questions[currentIdx];
  const progress = totalQuestions > 0
    ? ((currentIdx + 1) / totalQuestions) * 100
    : 0;
  const modeLabel = MODE_LABELS[mode] || '퀴즈';

  const handleSelectOption = (idx) => {
    if (!answered) {
      setSelectedIdx(idx);
    }
  };

  const handleConfirm = () => {
    if (!currentQuestion) {
      return;
    }

    if (!answered) {
      checkAnswer();
    } else if (currentIdx + 1 >= totalQuestions) {
      handleComplete();
    } else {
      nextQuestion();
    }
  };

  const checkAnswer = () => {
    if (selectedIdx === null || !currentQuestion) {
      return;
    }

    const isCorrect = selectedIdx === currentQuestion.answer;
    setAnswered(true);

    if (isCorrect) {
      setCorrect(c => c + 1);
      setStreak(prevStreak => {
        const newStreak = prevStreak + 1;
        setMaxStreak(prevMax => Math.max(prevMax, newStreak));
        return newStreak;
      });
    } else {
      setWrong(w => w + 1);
      setStreak(0);
      setWrongList(prevWrongList => [
        ...prevWrongList,
        {
          q: currentQuestion.q,
          chosen: currentQuestion.options[selectedIdx],
          answer: currentQuestion.options[currentQuestion.answer],
          explain: currentQuestion.explain
        }
      ]);
    }
  };

  const nextQuestion = () => {
    setCurrentIdx(prevIdx => prevIdx + 1);
    setSelectedIdx(null);
    setAnswered(false);
  };

  const handleComplete = () => {
    onComplete({
      correct,
      wrong,
      maxStreak,
      wrongList,
      mode,
      total: totalQuestions
    });
  };

  if (!currentQuestion) {
    return (
      <main className="main">
        <div className="card">
          <div className="result">
            <h2>문제가 없습니다</h2>
            <p>문항 데이터를 확인한 뒤 다시 시도해주세요.</p>
          </div>
          <div className="actions">
            <button
              className="btn btn-ghost"
              onClick={() => onComplete(null)}
            >
              나가기
            </button>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="main">
      <div className="progress-bar-wrapper">
        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </div>

      <div className="hearts">
        🔥 <span>{streak}</span>
      </div>

      <div className="card">
        <div className="quiz-head">
          <span className="quiz-mode">{modeLabel}</span>
          <span className="quiz-progress-text">
            {currentIdx + 1} / {totalQuestions} · {Math.round(progress)}%
          </span>
        </div>

        <div className="q-counter">
          <span>{currentIdx + 1} / {totalQuestions}</span>
          <span className="streak-mini">정답 {correct} · 오답 {wrong}</span>
        </div>

        <div className="topic-badge">● {currentQuestion.topic}</div>

        <div className="question">{currentQuestion.q}</div>

        <div className="options">
          {currentQuestion.options.map((opt, i) => (
            <button
              key={i}
              className={`option ${
                selectedIdx === i ? 'selected' : ''
              } ${
                answered
                  ? i === currentQuestion.answer
                    ? 'correct'
                    : i === selectedIdx
                    ? 'wrong'
                    : ''
                  : ''
              }`}
              onClick={() => handleSelectOption(i)}
              disabled={answered}
              aria-pressed={selectedIdx === i}
            >
              <span className="idx">{String.fromCharCode(65 + i)}</span>
              <span className="txt">{opt}</span>
            </button>
          ))}
        </div>

        {answered && (
          <div className={`feedback ${selectedIdx === currentQuestion.answer ? 'ok' : 'no'}`}>
            <div className="verdict">
              {selectedIdx === currentQuestion.answer ? '✅ 정답입니다!' : '❌ 오답이에요'}
            </div>
            <div className="explain">{currentQuestion.explain}</div>
          </div>
        )}

        <div className="actions">
          <button
            className="btn btn-ghost"
            onClick={() => onComplete(null)}
          >
            나가기
          </button>
          <button
            className="btn btn-primary btn-block"
            onClick={handleConfirm}
            disabled={selectedIdx === null && !answered}
          >
            {answered
              ? currentIdx + 1 >= totalQuestions
                ? '결과 보기'
                : '다음 문제'
              : '확인'}
          </button>
        </div>
      </div>
    </main>
  );
};

export default Quiz;
