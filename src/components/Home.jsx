import React from 'react';

const Home = ({ onStartQuiz }) => {
  const modes = [
    {
      id: 'main',
      emoji: '🎯',
      title: '본문제 50',
      description: '시험용 핵심 50문항을 랜덤 순서로 풀어보세요',
      count: 50,
      level: '실전'
    },
    {
      id: 'practice',
      emoji: '🔄',
      title: '예비문제 30',
      description: '추가 연습용 30문항으로 복습하세요',
      count: 30,
      level: '복습'
    },
    {
      id: 'mixed',
      emoji: '🌀',
      title: '전체 랜덤 80',
      description: '본문제 + 예비문제를 전부 섞어서 마스터',
      count: 80,
      level: '종합'
    },
    {
      id: 'velog',
      emoji: '📖',
      title: 'velog에서 출제한 문제',
      description: '블로그 시리즈 기반 50문항으로 심화 학습',
      count: 50,
      level: '심화'
    },
    {
      id: 'short',
      emoji: '⚡',
      title: '빠른 10문항',
      description: '전체에서 무작위 10문항만 골라 짧게',
      count: 10,
      level: '스프린트'
    }
  ];

  return (
    <main className="main">
      <div className="hero">
        <h1>
          <span>스프링, 퀴즈로</span>
          <span>자연스럽게.</span>
        </h1>
        <p>1번 PPT부터 6번 PPT까지 핵심 개념을 집중 복습하세요.</p>
        <div className="hero-meta">
          <span>총 130문항</span>
          <span>객관식 4지선다</span>
          <span>문항 순서 랜덤</span>
        </div>
      </div>

      <div className="mode-grid">
        {modes.map(mode => (
          <button
            key={mode.id}
            className="mode-card"
            onClick={() => onStartQuiz(mode.id)}
          >
            <div className="mode-top">
              <span className="emoji">{mode.emoji}</span>
              <span className="mode-level">{mode.level}</span>
            </div>
            <h3>{mode.title}</h3>
            <p>{mode.description}</p>
            <div className="mode-count">{mode.count}문항</div>
          </button>
        ))}
      </div>

      <div className="topics-section">
        <h4>📚 수록 주제</h4>
        <ul>
          <li>Spring Overview</li>
          <li>Dependency Injection</li>
          <li>Spring MVC</li>
          <li>Web Form</li>
          <li>JPA Core</li>
          <li>Entity Relationships</li>
        </ul>
      </div>
    </main>
  );
};

export default Home;
