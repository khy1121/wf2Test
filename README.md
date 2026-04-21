# Spring Quiz React

Spring Framework 웹프레임워크2 강의 내용을 바탕으로 한 **대화형 퀴즈 애플리케이션**의 React 버전입니다.

Duolingo 스타일의 몰입감 있는 학습 경험을 제공합니다. 🚀

## ✨ 기능

- **5가지 퀴즈 모드**
  - 🎯 본문제 50 - 핵심 50문항 (시험용)
  - 🔄 예비문제 30 - 추가 연습용 30문항
  - 🌀 전체 랜덤 80 - 본문제 + 예비문제 혼합
  - 📖 velog에서 출제한 문제 - 심화 학습용 50문항
  - ⚡ 빠른 10문항 - 짧은 세션

- **실시간 피드백**
  - 정답 여부 즉시 확인
  - 상세한 설명 제공
  - 연속 정답율 추적 (스트릭)

- **성적 분석**
  - 정답률 계산
  - 등급 판정 (🏆 ~ 💪)
  - 틀린 문제 복습 리스트

- **학습 주제**
  - Spring Overview
  - Dependency Injection (DI)
  - Spring MVC
  - Web Form & Validation
  - JPA Core
  - Entity Relationships

## 🛠 기술 스택

- **Frontend**: React 18 + Vite
- **Styling**: Vanilla CSS (Custom Design System)
- **Build**: Vite
- **Package Manager**: npm / yarn

## 📦 설치 및 실행

### 1. 의존성 설치
```bash
cd spring-quiz-react
npm install
```

### 2. 개발 서버 실행
```bash
npm run dev
```
- 자동으로 http://localhost:3000 에서 브라우저 실행됨

### 3. 빌드
```bash
npm run build
```
- `dist/` 폴더에 프로덕션 빌드 생성

### 4. 프리뷰
```bash
npm run preview
```

## 📁 프로젝트 구조

```
spring-quiz-react/
├── public/
│   └── index.html              # HTML 진입점
├── src/
│   ├── components/
│   │   ├── Home.jsx            # 홈 화면 (모드 선택)
│   │   ├── Quiz.jsx            # 퀴즈 화면 (문제 풀이)
│   │   └── Result.jsx          # 결과 화면 (채점 결과)
│   ├── data/
│   │   └── questions.js        # 문제 데이터 (50+30+50)
│   ├── styles/
│   │   └── App.css             # 전역 스타일
│   ├── App.jsx                 # 메인 애플리케이션 컴포넌트
│   └── main.jsx                # Vite 진입점
├── vite.config.js              # Vite 설정
├── package.json                # 의존성 관리
└── .gitignore                  # Git 무시 설정
```

## 🎨 Design System

- **Color Palette**
  - Primary: #10B981 (Duolingo 민트)
  - Accent: #2563EB (네이비 블루)
  - Danger: #EF4444 (빨강)
  - Warn: #F59E0B (주황)

- **Typography**
  - Display: Plus Jakarta Sans
  - Body: Gowun Dodum
  - Mono: JetBrains Mono

- **Spacing & Border Radius**
  - Gap: 12px - 32px
  - Border Radius: 10px - 14px

## 🚀 주요 컴포넌트

### Home.jsx
- 5가지 퀴즈 모드 버튼 제공
- 학습 주제 목록 표시

### Quiz.jsx
- 문제 표시 및 선택지 제공
- 실시간 진행 상태 표시
- 정답 여부 즉시 피드백
- 연속 정답율(스트릭) 추적

### Result.jsx
- 정답률 및 등급 표시
- 최대 연속 정답율 표시
- 틀린 문제 복습 리스트
- 다시 풀기 / 홈 버튼

## 💡 주요 기능 상세

### 상태 관리
- React `useState` 훅으로 전역 상태 관리
  - screen: 현재 화면 (home / quiz / result)
  - quizData: 퀴즈 문제 및 모드 정보
  - results: 최종 채점 결과

### 문제 섞기 (Shuffle)
```javascript
function shuffle(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}
```

### 등급 판정 로직
```javascript
- 90% 이상: 🏆 완벽해요!
- 75% 이상: 🎉 아주 좋아요
- 60% 이상: 👍 괜찮아요
- 40% 이상: 📚 조금 더!
- 40% 미만: 💪 다시 도전!
```

## 📊 문제 데이터 형식

```javascript
{
  topic: "Spring Overview",  // 학습 주제
  q: "질문?",               // 문제
  options: [               // 선택지 배열
    "① 선택지",
    "② 선택지",
    "③ 선택지",
    "④ 선택지"
  ],
  answer: 1,              // 정답 인덱스 (0-3)
  explain: "설명"         // 상세 설명
}
```

## 🎯 향후 개선 사항

- [ ] TypeScript 마이그레이션
- [ ] 로컬 스토리지 학습 진progress 저장
- [ ] 카테고리별 필터링
- [ ] 스트릭 보너스 애니메이션
- [ ] 다크모드 지원
- [ ] PWA 지원 (오프라인 모드)
- [ ] API 연동 (백엔드)

## 📝 라이선스

MIT

## 👨‍💻 개발자

React 마이그레이션: GitHub Copilot

---

**즐거운 학습되세요! 🎓**
