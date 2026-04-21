import React from 'react';

const Result = ({ results, onRetry, onHome }) => {
  const { correct, wrong, maxStreak, wrongList, total } = results;
  const percentage = total === 0 ? 0 : Math.round((correct / total) * 100);

  let grade;
  if (percentage >= 90) {
    grade = { emoji: '🏆', title: '완벽해요!', color: 'var(--primary-d)' };
  } else if (percentage >= 75) {
    grade = { emoji: '🎉', title: '아주 좋아요', color: 'var(--primary-d)' };
  } else if (percentage >= 60) {
    grade = { emoji: '👍', title: '괜찮아요', color: 'var(--accent)' };
  } else if (percentage >= 40) {
    grade = { emoji: '📚', title: '조금 더!', color: 'var(--warn)' };
  } else {
    grade = { emoji: '💪', title: '다시 도전!', color: 'var(--danger)' };
  }

  return (
    <main className="main">
      <div className="card">
        <div className="result">
          <div className="result-emoji" style={{ color: grade.color }}>
            {grade.emoji}
          </div>
          <h2>채점 결과</h2>
          <div className="score">
            {correct} / {total}
          </div>
          <p className="grade-text">{grade.title}</p>
          <p className="percentage">{percentage}%</p>
          {maxStreak > 0 && (
            <p className="max-streak">🔥 최대 연속 정답: {maxStreak}번</p>
          )}
        </div>

        <div className="result-stats">
          <div className="stat-item">
            <span className="stat-label">정답률</span>
            <strong className="stat-value">{percentage}%</strong>
          </div>
          <div className="stat-item">
            <span className="stat-label">정답 수</span>
            <strong className="stat-value">{correct}개</strong>
          </div>
          <div className="stat-item">
            <span className="stat-label">오답 수</span>
            <strong className="stat-value">{wrong}개</strong>
          </div>
        </div>

        {wrongList.length > 0 && (
          <div className="wrong-list">
            <h3>❌ 틀린 문제들 ({wrongList.length}개)</h3>
            {wrongList.map((item, idx) => (
              <div key={idx} className="wrong-item">
                <div className="wrong-q">{idx + 1}. {item.q}</div>
                <div className="wrong-info">
                  <span className="wrong-chosen">내 답: {item.chosen}</span>
                  <span className="correct-answer">정답: {item.answer}</span>
                </div>
                {item.explain && (
                  <div className="wrong-explain">{item.explain}</div>
                )}
              </div>
            ))}
          </div>
        )}
        {wrongList.length === 0 && (
          <div className="perfect-review">
            오답이 없어요. 아주 좋습니다. 동일 모드를 다시 풀어 정확도를 유지해보세요.
          </div>
        )}

        <div className="result-actions">
          <button className="btn btn-ghost" onClick={onHome}>
            홈으로
          </button>
          <button className="btn btn-primary" onClick={onRetry}>
            다시 풀기
          </button>
        </div>
      </div>
    </main>
  );
};

export default Result;
