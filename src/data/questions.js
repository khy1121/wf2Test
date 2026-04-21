// questions.js — 웹프레임워크2 Spring 퀴즈 문항 (50+30)
// 주제 커버리지: Spring Overview(1), DI(2), MVC(3), Web Form(4), JPA Core(5-1, 5-2), Entity Relationships(6)

const MAIN_QUESTIONS = [
  // ─────────────── [1] Spring Overview (8문항) ───────────────
  {
    topic: "Spring Overview",
    q: "라이브러리와 프레임워크의 가장 핵심적인 차이점은?",
    options: [
      "라이브러리는 유료, 프레임워크는 무료이다",
      "제어의 주체 — 라이브러리는 개발자가 호출, 프레임워크는 프레임워크가 개발자 코드를 호출(IoC)",
      "라이브러리는 함수, 프레임워크는 클래스로만 구성된다",
      "프레임워크가 라이브러리보다 항상 더 가볍다"
    ],
    answer: 1,
    explain: "핵심 차이는 Inversion of Control(제어의 역전). 라이브러리는 개발자가 호출하지만, 프레임워크는 정해진 골격에 따라 프레임워크가 개발자의 코드를 호출합니다."
  },
  {
    topic: "Spring Overview",
    q: "Spring의 4대 주요 특징이 아닌 것은?",
    options: ["POJO", "DI", "AOP", "DAO"],
    answer: 3,
    explain: "Spring의 4대 특징은 POJO, DI(Dependency Injection), AOP(Aspect-Oriented Programming), PSA(Portable Service Abstraction)입니다. DAO는 설계 패턴이지 Spring의 특징은 아닙니다."
  },
  {
    topic: "Spring Overview",
    q: "POJO(Plain Old Java Object)의 정의로 가장 적절한 것은?",
    options: [
      "특정 인터페이스를 반드시 구현해야 하는 자바 객체",
      "특수한 인터페이스 구현이나 특정 클래스 상속 없이도 사용 가능한 일반 자바 객체",
      "EJB의 후속 규격으로 정의된 객체 표준",
      "Spring Container가 컴파일 시점에 생성하는 객체"
    ],
    answer: 1,
    explain: "POJO는 특별한 인터페이스 구현이나 특정 클래스 상속 없이 Spring Container가 관리할 수 있는 평범한 자바 객체입니다."
  },
  {
    topic: "Spring Overview",
    q: "AOP(Aspect-Oriented Programming)가 해결하려는 문제는?",
    options: [
      "DB 연결 실패 문제",
      "로깅, 트랜잭션, 보안 같은 공통 관심사가 여러 클래스에 흩어지는 문제",
      "자바의 동시성 문제",
      "객체의 불변성 문제"
    ],
    answer: 1,
    explain: "AOP는 로깅, 트랜잭션, 보안처럼 여러 클래스에 공통으로 반복되는 관심사(Cross-Cutting Concern)를 핵심 비즈니스 로직과 분리해 관리하기 위한 기법입니다."
  },
  {
    topic: "Spring Overview",
    q: "PSA(Portable Service Abstraction)의 목적은?",
    options: [
      "Spring 코드를 다른 언어로 이식하기 위함",
      "다양한 서비스 제공자의 구현을 공통 인터페이스로 추상화해 교체가 용이하도록 하기 위함",
      "Spring의 빌드 속도를 높이기 위함",
      "메모리 사용량을 줄이기 위함"
    ],
    answer: 1,
    explain: "PSA는 OpenAI, Anthropic 등 다양한 서비스 제공자의 구현체를 공통 인터페이스로 추상화해, 특정 구현에 종속되지 않고 쉽게 교체할 수 있도록 해줍니다."
  },
  {
    topic: "Spring Overview",
    q: "Java 21 가상 스레드(Virtual Threads)의 특징으로 옳은 것은?",
    options: [
      "OS 스레드보다 무거워 동시성 처리에 불리하다",
      "OS 스레드보다 가볍고 I/O 블로킹 시 자원을 반납해 수백만 개의 동시 접속을 처리할 수 있다",
      "CPU 위주 작업에 가장 유리하다",
      "가상 스레드는 자바 11부터 도입되었다"
    ],
    answer: 1,
    explain: "가상 스레드는 OS 스레드보다 가벼운 경량 스레드로, I/O 블로킹 시 자원을 반납해 I/O 위주 애플리케이션에서 높은 처리량을 달성할 수 있습니다."
  },
  {
    topic: "Spring Overview",
    q: "GraalVM의 Native Image(AOT 컴파일)가 제공하는 효과로 옳은 것은?",
    options: [
      "빌드 시간이 대폭 단축된다",
      "밀리초 단위 즉시 실행(Instant Startup)과 메모리 비용 절감(Small Footprint)",
      "JVM이 필요하지 않은 인터프리터 방식으로 실행된다",
      "코드 가독성이 향상된다"
    ],
    answer: 1,
    explain: "AOT(Ahead-Of-Time) 컴파일은 빌드 시점에 기계어로 변환하여 즉시 실행과 메모리 절감을 제공합니다. 서버리스/오토스케일링 환경에 최적화됩니다."
  },
  {
    topic: "Spring Overview",
    q: "프레임워크를 사용하는 주요 이점으로 옳은 것은?",
    options: [
      "높은 생산성과 코드 품질 보장",
      "실행 속도가 무조건 빨라진다",
      "코드를 전혀 작성하지 않아도 된다",
      "DB 스키마가 자동으로 설계된다"
    ],
    answer: 0,
    explain: "프레임워크는 반제품으로서 구조와 기반 클래스를 제공하여, 개발자는 핵심 로직에 집중할 수 있고 생산성과 코드 품질이 향상됩니다."
  },

  // ─────────────── [2] Dependency Injection (8문항) ───────────────
  {
    topic: "Dependency Injection",
    q: "DI(Dependency Injection)의 정의로 가장 적절한 것은?",
    options: [
      "객체가 new 키워드로 자신의 의존 객체를 직접 생성하는 것",
      "Spring Container가 외부에서 필요한 객체(의존성)를 주입해주는 방식",
      "객체의 필드를 직접 public으로 노출하는 것",
      "인터페이스 없이 구현 클래스끼리 직접 연결하는 것"
    ],
    answer: 1,
    explain: "DI는 객체가 직접 의존 객체를 new로 생성하지 않고, Spring Container가 외부에서 주입해주는 방식입니다. 이를 통해 Loose Coupling(느슨한 결합)을 달성합니다."
  },
  {
    topic: "Dependency Injection",
    q: "Tight Coupling(강한 결합)의 문제점으로 가장 옳지 않은 것은?",
    options: [
      "구현체를 바꾸려면 소스 코드를 수정해야 한다",
      "단위 테스트에서 Mock 객체를 주입하기 어렵다",
      "두 클래스가 강하게 묶여 있다",
      "컴파일 속도가 느려진다"
    ],
    answer: 3,
    explain: "Tight Coupling은 변경 어려움과 테스트 어려움이 주요 문제이지, 컴파일 속도와는 직접 관련이 없습니다."
  },
  {
    topic: "Dependency Injection",
    q: "@Autowired를 통한 생성자 주입(Constructor Injection)이 권장되는 이유로 옳지 않은 것은?",
    options: [
      "의존성을 final 필드로 선언할 수 있다",
      "의존성이 명시적으로 드러난다",
      "순환 의존성을 컴파일 시점에 감지할 수 있다",
      "객체 생성 후 아무 때나 의존성을 변경할 수 있다"
    ],
    answer: 3,
    explain: "생성자 주입을 쓰면 final 필드로 선언할 수 있어 오히려 객체 생성 후 의존성 변경이 불가능합니다. 이것이 안전성의 장점입니다."
  },
  {
    topic: "Dependency Injection",
    q: "Spring의 설정 메타데이터 표현 방식 세 가지가 아닌 것은?",
    options: ["XML 기반", "Annotation 기반", "@Configuration (Java 기반)", "YAML 트리거 기반"],
    answer: 3,
    explain: "Spring 설정은 XML, Annotation, @Configuration(Java) 세 가지 방식이 있으며, YAML 트리거는 Spring 설정 방식이 아닙니다."
  },
  {
    topic: "Dependency Injection",
    q: "Spring Bean의 기본(default) Scope는?",
    options: ["prototype", "singleton", "request", "session"],
    answer: 1,
    explain: "Spring Bean은 명시하지 않으면 기본값이 singleton입니다. 컨테이너당 하나만 생성되어 공유됩니다."
  },
  {
    topic: "Dependency Injection",
    q: "singleton Bean에 관한 설명 중 옳지 않은 것은?",
    options: [
      "컨테이너에서 한 번만 생성되어 공유된다",
      "여러 스레드가 공유하므로 가변(mutable) 멤버 변수를 가지면 Thread-Safe 문제가 생긴다",
      "매 요청마다 새 객체를 생성한다",
      "컨테이너 종료 시점에 Garbage Collection된다"
    ],
    answer: 2,
    explain: "매 요청마다 새 객체를 생성하는 것은 prototype Scope입니다. singleton은 한 번만 생성되어 공유됩니다."
  },
  {
    topic: "Dependency Injection",
    q: "@Component를 붙인 클래스를 Spring이 Bean으로 등록하려면 반드시 필요한 것은?",
    options: [
      "@Autowired 어노테이션",
      "Component Scan 설정",
      "XML 설정 파일",
      "public 기본 생성자만 있으면 된다"
    ],
    answer: 1,
    explain: "@Component 기반 등록은 Component Scan이 필요합니다. @ComponentScan 또는 <context:component-scan> 설정이 있어야 Spring이 해당 클래스를 Bean으로 등록합니다."
  },
  {
    topic: "Dependency Injection",
    q: "아래 코드에서 Spring이 보장해주는 것은?\n\npublic class PetOwner {\n    private AnimalType animal;\n    public PetOwner(AnimalType animal) { this.animal = animal; }\n}",
    options: [
      "PetOwner가 구체 클래스(Dog, Cat)에 강하게 결합된다",
      "PetOwner는 AnimalType 인터페이스에만 의존하며, 구현체는 Container가 주입 시점에 결정한다",
      "PetOwner가 스스로 new Dog()를 호출한다",
      "PetOwner는 static 메서드로만 사용 가능하다"
    ],
    answer: 1,
    explain: "인터페이스 기반 프로그래밍 + 생성자 주입으로, PetOwner는 구체 클래스를 모르고 AnimalType에만 의존합니다. Spring Container가 Dog나 Cat 중 어떤 것을 주입할지 결정합니다."
  },

  // ─────────────── [3] Spring MVC (8문항) ───────────────
  {
    topic: "Spring MVC",
    q: "Spring MVC에서 DispatcherServlet의 역할은?",
    options: [
      "데이터베이스 연결을 관리한다",
      "모든 HTTP 요청의 단일 진입점(Front Controller) 역할을 하며 HandlerMapping으로 적절한 Controller로 위임한다",
      "Thymeleaf 템플릿을 컴파일한다",
      "Spring Bean의 생명주기를 직접 관리한다"
    ],
    answer: 1,
    explain: "DispatcherServlet은 Front Controller 패턴의 구현체로, 모든 HTTP 요청을 받아 HandlerMapping을 통해 적절한 Controller에게 요청을 위임하고, ViewResolver로 View를 선택합니다."
  },
  {
    topic: "Spring MVC",
    q: "MVC 패턴에서 Controller의 주된 책임이 아닌 것은?",
    options: [
      "HTTP 요청을 받아 처리",
      "Service를 호출하여 비즈니스 로직 수행 위임",
      "Model에 데이터를 담아 View에 전달",
      "DB에 직접 SQL을 실행"
    ],
    answer: 3,
    explain: "Controller는 DB에 직접 접근하지 않습니다. DB 접근은 Repository 계층이, 비즈니스 로직은 Service 계층이 담당합니다."
  },
  {
    topic: "Spring MVC",
    q: "Spring MVC의 두 ApplicationContext 중 Root Context가 관리하는 Bean은?",
    options: [
      "@Controller, ViewResolver, HandlerMapping",
      "@Service, @Repository, DataSource, Security",
      "Thymeleaf 템플릿 엔진만",
      "어떤 Bean도 관리하지 않는다"
    ],
    answer: 1,
    explain: "Root Context는 @Service, @Repository, DataSource 등 비즈니스/데이터 계층 Bean을 관리하고, Servlet Context는 @Controller, ViewResolver 등 웹 계층 Bean을 관리합니다."
  },
  {
    topic: "Spring MVC",
    q: "Spring MVC의 Context 부모-자식 관계에서 옳은 것은?",
    options: [
      "부모(Root)가 자식(Servlet)의 Bean에 접근할 수 있다",
      "자식(Servlet)이 부모(Root)의 Bean에 접근할 수 있다",
      "부모와 자식이 서로 완전히 독립적이어서 접근할 수 없다",
      "자식이 부모의 Bean을 복사해서 사용한다"
    ],
    answer: 1,
    explain: "자식 Context(Servlet)가 부모 Context(Root)의 Bean에 접근할 수 있습니다(@Controller → @Service ✅). 반대는 불가능합니다(@Service → @Controller ❌)."
  },
  {
    topic: "Spring MVC",
    q: "Spring 6/7에서 java.servlet 네임스페이스가 바뀐 것은?",
    options: [
      "javax.* → jakarta.*",
      "jakarta.* → javax.*",
      "javax.* → org.springframework.*",
      "변경되지 않았다"
    ],
    answer: 0,
    explain: "Jakarta EE 표준에 따라 Spring 6 이상부터 javax.* 패키지가 jakarta.*로 변경되었습니다."
  },
  {
    topic: "Spring MVC",
    q: "@Controller와 @RestController의 차이점으로 옳은 것은?",
    options: [
      "@Controller는 View 이름을 반환하고, @RestController는 데이터를 JSON/XML로 직접 반환한다",
      "@Controller만 Spring 7에서 사용 가능하다",
      "@RestController는 @Service의 특수화이다",
      "@Controller는 GET 요청만 처리할 수 있다"
    ],
    answer: 0,
    explain: "@RestController = @Controller + @ResponseBody입니다. 메서드 반환값을 HTTP 응답 본문에 직접 써서 JSON/XML 형태로 반환합니다. REST API 엔드포인트에 주로 사용됩니다."
  },
  {
    topic: "Spring MVC",
    q: "아래 Controller 메서드에서 사용된 어노테이션의 역할은?\n\n@GetMapping(\"/users/{id}\")\npublic String getUser(@PathVariable Long id, Model model) { ... }",
    options: [
      "@PathVariable은 쿼리 파라미터(?id=1)를 바인딩한다",
      "@PathVariable은 URI 경로의 변수(/users/1)를 메서드 파라미터로 바인딩한다",
      "@PathVariable은 HTTP 요청 본문을 바인딩한다",
      "@PathVariable은 세션 속성을 바인딩한다"
    ],
    answer: 1,
    explain: "@PathVariable은 URI 경로의 변수를 바인딩합니다. 예: GET /users/1 → id = 1L. 쿼리 파라미터는 @RequestParam을 사용합니다."
  },
  {
    topic: "Spring MVC",
    q: "WebApplicationInitializer의 역할로 옳은 것은?",
    options: [
      "web.xml을 대체하여 Java 코드로 서블릿과 Spring Context 설정",
      "Maven 의존성을 관리",
      "데이터베이스 풀 설정",
      "HTML 템플릿을 컴파일"
    ],
    answer: 0,
    explain: "WebApplicationInitializer(또는 AbstractAnnotationConfigDispatcherServletInitializer)는 web.xml을 대체하는 프로그래밍 방식 설정으로, getRootConfigClasses(), getServletConfigClasses(), getServletMappings()를 제공합니다."
  },

  // ─────────────── [4] Spring Web Form / Validation (8문항) ───────────────
  {
    topic: "Web Form",
    q: "Spring의 데이터 바인딩(@ModelAttribute)에 대해 옳은 것은?",
    options: [
      "HTTP 요청 파라미터를 자동으로 Java 객체의 필드에 매핑한다",
      "오직 GET 요청에서만 동작한다",
      "모든 필드를 final로 선언해야 한다",
      "Entity 클래스에만 사용 가능하다"
    ],
    answer: 0,
    explain: "@ModelAttribute는 HTTP 요청 파라미터를 이름 기준으로 자동으로 Java 객체의 필드에 매핑해줍니다. 기본 생성자와 getter/setter만 있으면 됩니다."
  },
  {
    topic: "Web Form",
    q: "@NotNull, @NotEmpty, @NotBlank의 차이는?",
    options: [
      "세 어노테이션 모두 동일하다",
      "@NotNull은 null만 막고, @NotEmpty는 빈 문자열까지 막고, @NotBlank는 공백만 있는 문자열까지 막는다",
      "@NotBlank는 숫자 타입에만 사용 가능하다",
      "@NotNull은 Collection에만 사용 가능하다"
    ],
    answer: 1,
    explain: "@NotNull은 null만 거부, @NotEmpty는 null + 빈 문자열(\"\")까지 거부, @NotBlank는 null + 빈 문자열 + 공백만 있는 문자열(\"   \")까지 거부합니다."
  },
  {
    topic: "Web Form",
    q: "BindingResult 파라미터 위치에 대한 규칙은?",
    options: [
      "메서드의 첫 번째 파라미터여야 한다",
      "반드시 @Valid가 붙은 @ModelAttribute 파라미터 바로 다음에 위치해야 한다",
      "메서드 마지막 파라미터여야 한다",
      "위치와 무관하게 아무 곳에 둘 수 있다"
    ],
    answer: 1,
    explain: "BindingResult는 반드시 @Valid가 붙은 @ModelAttribute 파라미터 바로 뒤에 와야 합니다. 그렇지 않으면 검증 실패 시 MethodArgumentNotValidException이 발생합니다."
  },
  {
    topic: "Web Form",
    q: "Entity가 아닌 DTO(ProductForm)에 Bean Validation 어노테이션을 붙이는 이유로 가장 적절한 것은?",
    options: [
      "Entity는 Validation을 지원하지 않기 때문",
      "웹 계층의 검증 규칙과 DB 제약은 다를 수 있고, Entity의 내부 구조를 웹에 노출하지 않기 위함",
      "Entity에 Validation을 붙이면 성능이 나빠지기 때문",
      "Spring 7부터 Entity에 Validation 사용이 금지되었기 때문"
    ],
    answer: 1,
    explain: "DTO에 검증을 두는 이유: ① 웹 검증 규칙과 DB 제약이 다를 수 있음, ② Entity의 id 같은 내부 필드를 웹에 노출하지 않음, ③ 계층 간 책임 분리."
  },
  {
    topic: "Web Form",
    q: "Thymeleaf에서 th:field=\"*{name}\"이 자동으로 생성하는 HTML 속성은?",
    options: [
      "id, name, value 세 가지 속성을 모두 자동 생성",
      "class 속성만 생성",
      "disabled 속성만 생성",
      "아무 속성도 생성하지 않음"
    ],
    answer: 0,
    explain: "th:field=\"*{name}\"은 현재 폼의 해당 필드에 id, name, value 세 속성을 한 번에 자동 설정합니다. 덕분에 검증 실패 시 입력값도 복원됩니다."
  },
  {
    topic: "Web Form",
    q: "PRG(Post-Redirect-Get) 패턴의 목적은?",
    options: [
      "요청 속도를 높이기 위함",
      "POST 제출 후 사용자가 새로고침해도 중복 저장되지 않도록 리다이렉트로 전환하기 위함",
      "세션을 자동 갱신하기 위함",
      "JavaScript 실행을 피하기 위함"
    ],
    answer: 1,
    explain: "PRG 패턴은 POST 처리 후 redirect로 GET으로 전환하여, 사용자가 브라우저 새로고침을 해도 POST가 다시 보내지지 않게 막는 기법입니다."
  },
  {
    topic: "Web Form",
    q: "@ControllerAdvice의 역할은?",
    options: [
      "특정 Controller만 내부에서 사용",
      "전역적으로 모든 Controller의 예외를 한 곳에서 처리(Global Exception Handler)",
      "Controller 메서드 실행 전에 로깅 수행",
      "Controller 생성을 막음"
    ],
    answer: 1,
    explain: "@ControllerAdvice는 전역 예외 처리기로, 여러 Controller에서 발생하는 예외를 @ExceptionHandler 메서드에서 한 곳에 모아 처리할 수 있게 해줍니다."
  },
  {
    topic: "Web Form",
    q: "검증 실패 시 사용자가 입력한 값을 폼에 그대로 유지하는 기능(Data Buffering)을 가능하게 하는 것은?",
    options: [
      "th:field가 ProductForm 객체의 현재 값을 읽어 value 속성으로 렌더링하기 때문",
      "브라우저가 자동으로 캐싱하기 때문",
      "JavaScript로 값을 저장하기 때문",
      "Spring이 세션에 저장하기 때문"
    ],
    answer: 0,
    explain: "검증 실패 시 Controller가 폼 뷰로 돌아가면서 ProductForm 객체가 Model에 여전히 남아있고, th:field가 그 값을 읽어 input의 value로 렌더링합니다."
  },

  // ─────────────── [5] JPA Core (5-1, 5-2) (10문항) ───────────────
  {
    topic: "JPA Core",
    q: "JPA와 Hibernate의 관계로 옳은 것은?",
    options: [
      "JPA는 표준 명세(인터페이스), Hibernate는 JPA를 구현한 가장 대표적인 구현체",
      "JPA는 Hibernate보다 상위 라이브러리이며 Hibernate를 내부적으로 호출",
      "JPA와 Hibernate는 같은 것의 다른 이름",
      "Hibernate는 JPA와 무관한 독립 ORM 프레임워크"
    ],
    answer: 0,
    explain: "JPA는 jakarta.persistence.* 패키지의 표준 명세(인터페이스)이며, Hibernate는 이를 구현한 대표적인 ORM 구현체입니다."
  },
  {
    topic: "JPA Core",
    q: "@Entity 클래스의 최소 요구사항으로 옳은 것은?",
    options: [
      "반드시 public 기본 생성자를 가져야 한다",
      "반드시 public 또는 protected 기본(no-arg) 생성자를 가져야 한다",
      "반드시 Serializable을 구현해야 한다",
      "반드시 @Table을 붙여야 한다"
    ],
    answer: 1,
    explain: "@Entity는 public 또는 protected 기본 생성자를 반드시 가져야 하며, @Table은 선택이고(생략 시 클래스 이름이 테이블 이름), Serializable 구현도 필수는 아닙니다."
  },
  {
    topic: "JPA Core",
    q: "@GeneratedValue(strategy = GenerationType.IDENTITY) 전략의 특징은?",
    options: [
      "JPA가 자체적으로 ID를 계산해서 부여한다",
      "DB의 AUTO_INCREMENT 기능을 사용하여 INSERT 후 DB가 생성한 ID를 가져온다",
      "Oracle의 시퀀스 객체를 사용한다",
      "MongoDB의 ObjectID를 생성한다"
    ],
    answer: 1,
    explain: "IDENTITY는 MySQL의 AUTO_INCREMENT 같은 DB 자체 기능을 사용합니다. INSERT 시점에 DB가 ID를 생성하므로 persist() 즉시 INSERT SQL이 실행됩니다."
  },
  {
    topic: "JPA Core",
    q: "Entity의 Lifecycle 상태 4가지가 아닌 것은?",
    options: ["New(Transient)", "Managed(Persistent)", "Detached", "Frozen"],
    answer: 3,
    explain: "JPA Entity Lifecycle 상태는 New(Transient), Managed(Persistent), Detached, Removed 네 가지입니다. Frozen은 존재하지 않습니다."
  },
  {
    topic: "JPA Core",
    q: "Dirty Checking(변경 감지)의 동작 조건은?",
    options: [
      "Entity가 New 상태일 때 동작",
      "Entity가 Managed(Persistent) 상태일 때만 동작 — setter만 호출해도 트랜잭션 커밋 시 UPDATE 자동 실행",
      "Detached 상태에서 setter를 호출하면 자동 UPDATE",
      "em.update()를 명시적으로 호출해야 동작"
    ],
    answer: 1,
    explain: "Dirty Checking은 Managed 상태의 Entity에서만 동작합니다. find()나 persist()로 얻은 엔티티의 필드를 setter로 변경하면 트랜잭션 커밋 시 JPA가 자동으로 UPDATE SQL을 실행합니다."
  },
  {
    topic: "JPA Core",
    q: "EntityManager.persist()와 merge()의 차이점으로 옳은 것은?",
    options: [
      "persist()는 Transient 엔티티를 Managed로, merge()는 Detached 엔티티의 변경을 DB에 반영",
      "persist()와 merge()는 완전히 동일한 기능",
      "persist()는 조회용, merge()는 저장용",
      "merge()는 @Transactional 없이도 항상 동작"
    ],
    answer: 0,
    explain: "persist()는 New(Transient) 상태의 엔티티를 Managed 상태로 만들어 INSERT를 준비합니다. merge()는 Detached 엔티티의 변경사항을 DB에 반영하며, 관리 상태의 새 엔티티를 반환합니다."
  },
  {
    topic: "JPA Core",
    q: "영속성 컨텍스트(Persistence Context)의 1차 캐시에 대해 옳은 것은?",
    options: [
      "트랜잭션 밖에서도 유지되는 전역 캐시",
      "같은 트랜잭션 내에서 동일한 엔티티를 두 번 조회하면 DB 대신 캐시에서 반환",
      "Redis 같은 외부 캐시 시스템",
      "메서드 단위로 자동 초기화되는 캐시"
    ],
    answer: 1,
    explain: "1차 캐시는 트랜잭션(영속성 컨텍스트) 범위의 캐시로, 같은 ID로 조회 시 SELECT를 재실행하지 않고 캐시된 객체를 반환합니다."
  },
  {
    topic: "JPA Core",
    q: "JPQL과 SQL의 가장 큰 차이는?",
    options: [
      "JPQL은 테이블과 컬럼을, SQL은 엔티티와 필드를 대상으로 한다",
      "JPQL은 엔티티 클래스와 필드를, SQL은 테이블과 컬럼을 대상으로 한다",
      "JPQL은 SQL보다 느리게 동작한다",
      "JPQL은 INSERT를 지원하지 않는다"
    ],
    answer: 1,
    explain: "JPQL은 객체 지향 쿼리로 엔티티 클래스 이름과 필드명을 대상으로 합니다. Hibernate가 이를 실제 SQL로 변환해 실행하므로 DB 독립적입니다."
  },
  {
    topic: "JPA Core",
    q: "@Transactional(readOnly = true)의 효과는?",
    options: [
      "쿼리 실행 자체를 막는다",
      "Dirty Checking을 비활성화하여 읽기 전용 최적화를 적용",
      "DB를 읽기 전용 모드로 잠근다",
      "모든 예외를 무시한다"
    ],
    answer: 1,
    explain: "readOnly=true는 Hibernate의 Dirty Checking(변경 감지)을 비활성화하여 불필요한 스냅샷 저장 비용을 줄이고 성능을 향상시킵니다. DB 드라이버 레벨에서 읽기 전용 커넥션으로 설정될 수도 있습니다."
  },
  {
    topic: "JPA Core",
    q: "@Repository 어노테이션의 역할로 옳은 것은?",
    options: [
      "Spring Bean 등록 + JDBC/JPA 예외를 Spring의 DataAccessException 계층으로 변환",
      "DB 연결 풀을 직접 관리",
      "트랜잭션 경계를 설정",
      "JSP 뷰를 컴파일"
    ],
    answer: 0,
    explain: "@Repository는 @Component의 특수화로 Bean 등록 기능과 함께, DB 기술별 예외를 Spring의 통일된 DataAccessException 계층으로 변환해주는 기능을 활성화합니다."
  },

  // ─────────────── [6] Entity Relationships (8문항) ───────────────
  {
    topic: "Entity Relationships",
    q: "@ManyToOne 관계에서 Owning Side는 누구인가?",
    options: [
      "@JoinColumn이 있는 Many 쪽 (FK를 직접 관리)",
      "@OneToMany(mappedBy=...)가 있는 One 쪽",
      "PK가 있는 쪽이 항상 Owning Side",
      "Entity 이름이 알파벳 순으로 먼저인 쪽"
    ],
    answer: 0,
    explain: "Owning Side는 @JoinColumn 또는 @JoinTable을 가진 쪽으로 FK를 직접 관리합니다. @ManyToOne 관계에서는 Many 쪽(예: Product)이 Owning Side가 됩니다."
  },
  {
    topic: "Entity Relationships",
    q: "@OneToMany(mappedBy = \"category\")에서 mappedBy의 의미는?",
    options: [
      "새로운 FK 컬럼을 생성",
      "상대편(Product) 엔티티의 category 필드가 FK를 관리하는 Owning Side임을 선언 (이 쪽은 Inverse, 읽기 전용)",
      "매핑을 비활성화",
      "Cascade 모드를 설정"
    ],
    answer: 1,
    explain: "mappedBy는 \"나는 Inverse Side이고, 상대편의 해당 필드가 Owning Side다\"라는 선언입니다. 이 쪽에는 새 FK 컬럼이 생기지 않고 읽기 전용으로 동작합니다."
  },
  {
    topic: "Entity Relationships",
    q: "FetchType의 기본값이 LAZY가 아닌 어노테이션은?",
    options: ["@OneToMany", "@ManyToMany", "@ManyToOne", "셋 다 LAZY"],
    answer: 2,
    explain: "@ManyToOne과 @OneToOne은 기본값이 EAGER이고, @OneToMany와 @ManyToMany는 LAZY입니다. 실무에선 성능을 위해 @ManyToOne에도 명시적으로 fetch=LAZY를 선언하는 것이 권장됩니다."
  },
  {
    topic: "Entity Relationships",
    q: "CascadeType.REMOVE를 @ManyToOne에 사용하면 안 되는 이유는?",
    options: [
      "성능이 느려지기 때문",
      "Product를 삭제할 때 공유되는 Category까지 삭제되어 다른 Product들이 모두 고아가 되기 때문",
      "컴파일 에러가 발생하기 때문",
      "DB가 REMOVE를 지원하지 않기 때문"
    ],
    answer: 1,
    explain: "@ManyToOne에 CascadeType.REMOVE를 쓰면 Many 쪽 하나를 삭제할 때 공유되는 One 쪽 엔티티까지 삭제되어, 같은 One 쪽을 참조하는 다른 Many 엔티티들이 모두 고아가 됩니다."
  },
  {
    topic: "Entity Relationships",
    q: "LazyInitializationException이 발생하는 전형적인 상황은?",
    options: [
      "트랜잭션 안에서 LAZY 필드에 접근",
      "트랜잭션이 끝난 후(EntityManager 닫힌 후) LAZY 프록시에 접근",
      "EAGER 필드에 접근",
      "@Transactional 없이 @Repository를 사용"
    ],
    answer: 1,
    explain: "LAZY 로딩은 접근 시점에 DB를 조회하는데, 트랜잭션 종료 후에는 EntityManager가 닫혀 있어 더 이상 프록시가 DB에 접근할 수 없어 예외가 발생합니다."
  },
  {
    topic: "Entity Relationships",
    q: "JOIN FETCH를 사용하는 주된 이유는?",
    options: [
      "LAZY 로딩을 유지하면서도 한 번의 SQL로 연관 엔티티를 즉시 함께 로드하여 N+1 문제 해결",
      "트랜잭션을 강제로 롤백",
      "모든 관계를 EAGER로 전환",
      "DB 인덱스를 자동 생성"
    ],
    answer: 0,
    explain: "JOIN FETCH는 JPQL에서 LAZY 관계를 한 번의 JOIN SQL로 함께 조회해오는 기법으로, N+1 문제와 LazyInitializationException을 모두 해결할 수 있습니다."
  },
  {
    topic: "Entity Relationships",
    q: "N+1 문제란?",
    options: [
      "1번의 쿼리로 N개의 결과를 가져온 뒤, 연관 엔티티를 로드하기 위해 추가로 N번의 쿼리가 발생하는 성능 문제",
      "JPA가 +1 연산을 할 때 오류가 나는 것",
      "트랜잭션이 N+1번 열리는 것",
      "INSERT가 N+1번 실행되는 것"
    ],
    answer: 0,
    explain: "부모 엔티티 N개를 조회한 뒤, 각 엔티티의 연관 관계를 접근할 때마다 SELECT가 1번씩 추가로 발생해 총 N+1번의 쿼리가 생기는 성능 문제입니다. JOIN FETCH로 해결 가능합니다."
  },
  {
    topic: "Entity Relationships",
    q: "@ManyToMany 관계를 @Entity 두 개로 설계할 때 CascadeType.REMOVE를 쓰면 안 되는 이유는?",
    options: [
      "JPA 규격이 금지하기 때문",
      "Tag 같은 공유 리소스를 Product 삭제 시 같이 삭제하면 다른 Product에서도 그 Tag가 사라지기 때문",
      "성능이 느려지기 때문",
      "컴파일 에러가 발생하기 때문"
    ],
    answer: 1,
    explain: "@ManyToMany는 공유 리소스 관계가 많아(예: 여러 Product가 같은 Tag 공유), REMOVE를 쓰면 공유되는 엔티티가 삭제되어 다른 쪽도 영향을 받습니다. {PERSIST, MERGE}만 사용합니다."
  }
];

// ─────────────── 예비 30문항 (PRACTICE BANK) ───────────────
const EXTRA_QUESTIONS = [
  {
    topic: "Spring Overview",
    q: "Spring의 정의로 가장 적절한 것은?",
    options: [
      "자바 애플리케이션 개발에 필요한 하부구조(인프라)를 포괄적으로 제공하는 경량 오픈소스 프레임워크",
      "자바 가상 머신 구현체",
      "관계형 데이터베이스",
      "HTML 템플릿 엔진"
    ],
    answer: 0,
    explain: "Spring은 POJO 기반으로 엔터프라이즈 자바 개발에 필요한 인프라를 포괄적으로 제공하는 경량 오픈소스 애플리케이션 프레임워크입니다."
  },
  {
    topic: "Spring Overview",
    q: "SW 품질의 \"구조 품질\"을 보장하는 것은?",
    options: ["테스트 코드", "프레임워크", "주석", "GitHub Actions"],
    answer: 1,
    explain: "프레임워크는 SW 구조와 기반 클래스를 제공해 구조 품질을 보장해주는 역할을 합니다."
  },
  {
    topic: "Spring Overview",
    q: "Spring AI의 핵심 역할로 옳은 것은?",
    options: [
      "LLM과의 통합을 위한 Spring의 새 핵심 모듈로, PSA 기반 서비스 추상화로 다양한 AI 모델을 표준화",
      "AI를 Spring에 내장시켜 개발자 없이 코딩",
      "Spring Security의 후속 버전",
      "JPA의 AI 버전"
    ],
    answer: 0,
    explain: "Spring AI는 OpenAI, Anthropic, Google Gemini 같은 LLM을 PSA 방식으로 추상화하여 통합하는 Spring의 새 모듈입니다."
  },
  {
    topic: "Dependency Injection",
    q: "아래 설정의 의미로 옳은 것은?\n\n@Bean\npublic PetOwner petOwner() {\n    return new PetOwner(cat());\n}",
    options: [
      "XML 기반 설정으로 빈을 등록",
      "@Configuration 기반의 Java Config로 PetOwner 빈을 생성하면서 Cat 빈을 생성자로 주입",
      "@Component 스캔으로 자동 등록되는 빈",
      "Prototype 스코프 빈으로 자동 설정"
    ],
    answer: 1,
    explain: "@Configuration 클래스 내부에서 @Bean 메서드로 빈을 명시적으로 정의하는 Java Config 방식입니다. PetOwner 생성자에 cat() 빈을 주입합니다."
  },
  {
    topic: "Dependency Injection",
    q: "IoC(제어의 역전)는 구체적으로 어떤 전환을 의미하는가?",
    options: [
      "객체 생성과 의존성 관리의 주도권이 개발자에서 Spring Container로 넘어감",
      "동기 처리에서 비동기 처리로 전환",
      "객체지향에서 함수형 프로그래밍으로 전환",
      "서버 사이드에서 클라이언트 사이드로 전환"
    ],
    answer: 0,
    explain: "IoC는 객체의 생성, 생명주기, 의존성 주입 책임이 개발자에서 Spring Container로 넘어가는 것을 의미합니다."
  },
  {
    topic: "Dependency Injection",
    q: "아래 어노테이션이 하는 일은?\n\n@Component\npublic class Dog implements AnimalType { ... }",
    options: [
      "Dog를 추상 클래스로 만든다",
      "Dog 인스턴스를 Spring이 컴포넌트 스캔을 통해 빈으로 등록하도록 표시",
      "Dog에 대한 메모리를 미리 할당",
      "Dog의 상속을 금지"
    ],
    answer: 1,
    explain: "@Component는 Spring이 컴포넌트 스캔 시 해당 클래스를 빈으로 자동 등록하도록 표시하는 어노테이션입니다."
  },
  {
    topic: "Spring MVC",
    q: "Spring 4.3부터 추가된 단축(Composed) 어노테이션이 아닌 것은?",
    options: ["@GetMapping", "@PostMapping", "@PutMapping", "@SelectMapping"],
    answer: 3,
    explain: "@SelectMapping은 존재하지 않습니다. 단축 어노테이션은 @GetMapping, @PostMapping, @PutMapping, @DeleteMapping, @PatchMapping입니다."
  },
  {
    topic: "Spring MVC",
    q: "Model의 역할로 가장 정확한 것은?",
    options: [
      "Controller에서 View로 데이터(Model Attribute)를 전달하는 컨테이너",
      "HTTP 요청 자체",
      "DB 트랜잭션 경계",
      "Thymeleaf 파서"
    ],
    answer: 0,
    explain: "Model은 Controller가 View에 데이터를 전달하기 위한 이름-값(Key-Value) 쌍의 컨테이너입니다. model.addAttribute(\"name\", value) 형태로 사용합니다."
  },
  {
    topic: "Spring MVC",
    q: "WebMvcConfigurer 인터페이스로 커스터마이즈할 수 있는 것이 아닌 것은?",
    options: [
      "정적 리소스 경로 설정(addResourceHandlers)",
      "Interceptor 등록(addInterceptors)",
      "View 컨트롤러 매핑(addViewControllers)",
      "JVM 힙 크기 설정"
    ],
    answer: 3,
    explain: "WebMvcConfigurer는 MVC 관련 커스터마이즈만 담당합니다. JVM 힙 크기는 애플리케이션 시작 옵션(-Xmx)으로 설정합니다."
  },
  {
    topic: "Spring MVC",
    q: "Thymeleaf 표현식 중 URL 표현식은?",
    options: ["${...}", "*{...}", "@{...}", "#{...}"],
    answer: 2,
    explain: "@{...}는 URL 표현식으로 컨텍스트 경로를 자동으로 붙여줍니다. ${...}는 변수, *{...}는 th:object 내부 선택, #{...}는 메시지 표현식입니다."
  },
  {
    topic: "Web Form",
    q: "GET 방식과 POST 방식의 차이로 옳은 것은?",
    options: [
      "GET은 URL 쿼리 스트링, POST는 요청 본문에 데이터를 담으며, 민감 데이터에는 POST가 적절",
      "GET만 Spring에서 지원",
      "POST는 북마크 가능하고 GET은 불가능",
      "GET은 삭제, POST는 조회에 쓴다"
    ],
    answer: 0,
    explain: "GET은 URL 쿼리 스트링에 데이터를 노출하여 검색/필터에 적합하고, POST는 요청 본문에 숨겨서 생성/수정에 적합합니다."
  },
  {
    topic: "Web Form",
    q: "아래 코드에서 BindingResult.hasErrors()가 true일 때 적절한 처리 방식은?\n\nif (bindingResult.hasErrors()) { ??? }",
    options: [
      "return \"redirect:/products\";",
      "return \"products/create\"; (폼 뷰 이름 반환)",
      "throw new RuntimeException();",
      "return null;"
    ],
    answer: 1,
    explain: "검증 실패 시에는 리다이렉트가 아니라 폼 뷰 이름을 반환해야 사용자 입력값(Data Buffering)과 오류 메시지가 함께 표시됩니다."
  },
  {
    topic: "Web Form",
    q: "@Valid가 하는 일은?",
    options: [
      "Bean Validation 어노테이션(@NotBlank 등)의 검증을 트리거",
      "빈을 자동 등록",
      "트랜잭션을 시작",
      "JPA 쿼리를 생성"
    ],
    answer: 0,
    explain: "@Valid는 해당 객체의 Bean Validation 제약(@NotBlank, @Size 등)을 실제로 검증하도록 트리거합니다."
  },
  {
    topic: "Web Form",
    q: "아래 Thymeleaf 구문의 결과는?\n\n<form th:action=\"@{/products/create}\" th:object=\"${productForm}\" method=\"post\">",
    options: [
      "폼이 ProductForm 객체에 바인딩되어 th:field로 내부 필드에 접근 가능",
      "폼이 자동으로 GET 방식으로 변환됨",
      "form 태그가 생성되지 않음",
      "productForm이 세션에 저장됨"
    ],
    answer: 0,
    explain: "th:object는 폼 전체를 지정한 모델 속성 객체에 바인딩합니다. 이후 th:field=\"*{필드명}\"으로 해당 객체의 속성에 직접 접근할 수 있습니다."
  },
  {
    topic: "Web Form",
    q: "@ExceptionHandler의 역할은?",
    options: [
      "특정 예외 타입을 처리하는 메서드임을 표시",
      "모든 예외를 무시하도록 설정",
      "예외가 발생하지 않도록 미리 방지",
      "트랜잭션을 강제로 롤백"
    ],
    answer: 0,
    explain: "@ExceptionHandler는 특정 예외 타입이 발생했을 때 호출될 메서드임을 표시합니다. @ControllerAdvice와 함께 쓰면 전역 예외 처리가 가능합니다."
  },
  {
    topic: "JPA Core",
    q: "JDBC의 단점으로 옳은 것은?",
    options: [
      "SQL을 직접 작성해야 하고, ResultSet을 수동으로 매핑해야 하며, 코드가 장황해진다",
      "객체지향적이라 배우기 어렵다",
      "자동으로 트랜잭션을 관리해준다",
      "DB 독립적이지 않다는 점은 장점이다"
    ],
    answer: 0,
    explain: "JDBC는 SQL 직접 작성, ResultSet 수동 매핑, 반복적인 코드 등이 단점입니다. JPA는 이런 단점을 ORM으로 해결합니다."
  },
  {
    topic: "JPA Core",
    q: "@PersistenceContext 어노테이션의 역할은?",
    options: [
      "Spring이 트랜잭션 범위의 EntityManager 프록시를 주입",
      "트랜잭션을 시작",
      "DB 커넥션 풀 설정",
      "쿼리 결과를 캐싱"
    ],
    answer: 0,
    explain: "@PersistenceContext는 스레드 안전한 EntityManager 프록시를 Repository에 주입합니다. 실제 EntityManager는 현재 트랜잭션에 바인딩된 것을 사용합니다."
  },
  {
    topic: "JPA Core",
    q: "JPQL에서 named parameter 사용 방법은?",
    options: [
      ".setParameter(\"name\", value) 형태로 이름 기반 바인딩",
      ".setParameter(1, value) 형태로만 가능",
      "파라미터 바인딩은 지원하지 않음",
      "어노테이션으로만 설정 가능"
    ],
    answer: 0,
    explain: "JPQL에서는 :name 형태로 이름 있는 파라미터를 선언하고 .setParameter(\"name\", value)로 바인딩합니다. 가독성과 안전성 면에서 권장됩니다."
  },
  {
    topic: "JPA Core",
    q: "JPQL Bulk UPDATE/DELETE(executeUpdate) 사용 시 주의점은?",
    options: [
      "영속성 컨텍스트를 우회하여 DB에 직접 반영되므로, 이후 clear() 또는 refresh()가 필요할 수 있다",
      "항상 단건만 처리 가능",
      "자동으로 트랜잭션이 롤백된다",
      "executeQuery()를 써야 한다"
    ],
    answer: 0,
    explain: "JPQL Bulk 연산은 영속성 컨텍스트를 거치지 않고 DB에 직접 반영됩니다. 이미 로드된 엔티티와 DB 상태가 어긋날 수 있으므로 em.clear() 등이 필요합니다."
  },
  {
    topic: "JPA Core",
    q: "hibernate.hbm2ddl.auto 프로퍼티의 역할은?",
    options: [
      "Hibernate가 DDL(스키마)을 처리하는 방식을 지정 (none/validate/update/create/create-drop)",
      "DB 연결 풀 크기 설정",
      "쿼리 로그 활성화 여부",
      "트랜잭션 타임아웃 설정"
    ],
    answer: 0,
    explain: "hibernate.hbm2ddl.auto는 애플리케이션 시작 시 스키마 처리 방식을 지정합니다. 운영 환경에서는 none 또는 validate가 안전합니다."
  },
  {
    topic: "JPA Core",
    q: "TypedQuery<T>를 사용하는 이유는?",
    options: [
      "타입 안전성을 제공해 ClassCastException을 방지",
      "쿼리 실행 속도를 3배 빠르게",
      "파라미터 바인딩이 필요 없게",
      "자동으로 트랜잭션을 시작"
    ],
    answer: 0,
    explain: "TypedQuery<T>는 제네릭으로 반환 타입을 명시하여 컴파일 시점에 타입 안전성을 확보합니다. raw Query보다 권장됩니다."
  },
  {
    topic: "JPA Core",
    q: "DAO 아키텍처의 일반적인 호출 흐름은?",
    options: [
      "Controller → Service → Repository → EntityManager → DB",
      "DB → Controller → Service → View",
      "View → Controller → Entity → DB",
      "Service → Controller → Repository → DB"
    ],
    answer: 0,
    explain: "표준 계층 구조는 Client → Controller → Service(@Transactional) → Repository(@PersistenceContext EntityManager) → DB 순서입니다."
  },
  {
    topic: "JPA Core",
    q: "Write-Behind(쓰기 지연)에 관한 설명으로 옳은 것은?",
    options: [
      "INSERT/UPDATE/DELETE SQL이 flush/커밋 시점에 한꺼번에 실행되는 JPA의 최적화",
      "모든 SQL이 즉시 실행되는 방식",
      "트랜잭션이 실패하면 자동으로 재시도하는 것",
      "비동기 메시지 큐"
    ],
    answer: 0,
    explain: "Write-Behind는 JPA가 변경 사항을 영속성 컨텍스트에 모아두었다가 flush/커밋 시 한꺼번에 DB에 반영하는 최적화입니다(IDENTITY 전략의 INSERT는 예외)."
  },
  {
    topic: "Entity Relationships",
    q: "@OneToOne의 FetchType 기본값이 EAGER인 이유와 실무에서의 권장은?",
    options: [
      "기본 EAGER이지만 성능을 위해 실무에서는 LAZY를 명시적으로 지정",
      "기본 LAZY이며 그대로 사용",
      "EAGER이 성능상 항상 좋음",
      "FetchType은 존재하지 않음"
    ],
    answer: 0,
    explain: "@OneToOne과 @ManyToOne은 기본값이 EAGER이지만, 실무에서는 성능과 N+1 문제 방지를 위해 fetch=LAZY로 명시적으로 override하는 것이 권장됩니다."
  },
  {
    topic: "Entity Relationships",
    q: "orphanRemoval = true의 효과는?",
    options: [
      "부모에서 자식 참조를 제거(null 설정)하면 자식 엔티티가 DB에서 자동 삭제",
      "모든 자식 엔티티를 한 번에 삭제",
      "부모가 삭제될 때만 자식이 삭제",
      "자식 엔티티의 ID를 null로 바꿈"
    ],
    answer: 0,
    explain: "orphanRemoval=true는 부모 엔티티에서 자식 참조가 제거(null)되면, 고아가 된 자식 엔티티를 JPA가 자동으로 DELETE 합니다. 예: product.setProductDetail(null)."
  },
  {
    topic: "Entity Relationships",
    q: "@ManyToMany의 Join Table(중간 테이블)은 누가 만드는가?",
    options: [
      "JPA가 @JoinTable 설정에 따라 자동 생성/관리",
      "개발자가 @Entity로 직접 정의해야 함",
      "DB가 자동으로 생성",
      "Join Table 없이도 @ManyToMany 동작 가능"
    ],
    answer: 0,
    explain: "@ManyToMany + @JoinTable(name=\"product_tag\", joinColumns=..., inverseJoinColumns=...)로 설정하면 JPA/Hibernate가 중간 테이블을 자동 생성하고 관리해줍니다."
  },
  {
    topic: "Entity Relationships",
    q: "Bidirectional 관계에서 addProduct() 같은 Helper 메서드를 사용하는 이유는?",
    options: [
      "양방향 관계를 메모리에서 동기화하기 위해 (category.products에 add + product.category에 set)",
      "DB 쿼리 속도를 빠르게 하기 위해",
      "컴파일 에러 방지",
      "Hibernate 버전 호환성"
    ],
    answer: 0,
    explain: "Helper 메서드는 양방향 관계의 두 쪽 모두를 메모리 상에서 일관되게 동기화해줍니다. 한쪽만 set하면 메모리와 DB 상태가 어긋날 수 있습니다."
  },
  {
    topic: "Entity Relationships",
    q: "아래 JPQL의 목적은?\n\nSELECT DISTINCT c FROM Category c JOIN FETCH c.products WHERE c.id = :id",
    options: [
      "Category와 그 하위 Products를 한 번의 SQL로 함께 로드하여 N+1 및 LazyInitializationException 해결",
      "Category만 조회하고 Products는 무시",
      "Products를 제외한 Category만 삭제",
      "Category와 Products를 분리하여 별도 트랜잭션으로 조회"
    ],
    answer: 0,
    explain: "JOIN FETCH를 사용하면 LAZY 관계인 products를 한 번의 JOIN 쿼리로 함께 로드할 수 있어, 트랜잭션 밖에서도 안전하게 접근 가능합니다. DISTINCT는 중복 제거용입니다."
  },
  {
    topic: "Entity Relationships",
    q: "@JoinColumn(name = \"category_id\")를 @ManyToOne 필드에 붙였을 때 DB에 생기는 것은?",
    options: [
      "소속 엔티티 테이블에 category_id 외래 키(FK) 컬럼이 생성",
      "category 테이블에 새 컬럼이 생성",
      "중간 테이블이 생성",
      "아무 변화 없음"
    ],
    answer: 0,
    explain: "@JoinColumn(name=\"category_id\")는 Owning Side 테이블(예: product 테이블)에 category_id라는 FK 컬럼을 만들고, 이 필드가 FK를 관리한다는 선언입니다."
  },
  {
    topic: "Entity Relationships",
    q: "Unidirectional과 Bidirectional 관계의 차이는?",
    options: [
      "Unidirectional은 한쪽에서만 상대를 탐색 가능, Bidirectional은 양쪽 모두 상대를 탐색 가능",
      "Unidirectional이 항상 성능이 더 좋다",
      "Bidirectional은 항상 새 DB 컬럼이 추가된다",
      "두 개념은 동일한 의미"
    ],
    answer: 0,
    explain: "Unidirectional은 한쪽에서만 상대를 참조(예: Product → Category). Bidirectional은 양쪽 모두 서로를 참조(Product ↔ Category). DB 스키마는 동일해도, 자바 객체 그래프에서 탐색 방향이 달라집니다."
  }
];

// ─────────────── Velog에서 출제한 문제 (50문항) ───────────────
const VELOG_QUESTIONS = [
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "WAS(Web Application Server)에 대한 설명으로 옳은 것은?", options: ["정적인 페이지만 처리한다","동적인 페이지와 DB 통신을 처리한다","HTML 파일만 반환한다","클라이언트 측에서만 동작한다"], answer: 1, explain: "" },
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "라이브러리와 프레임워크의 가장 큰 차이점은?", options: ["크기의 차이","언어의 차이","IoC(제어의 역전) 유무","유료/무료 여부"], answer: 2, explain: "" },
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "프레임워크에서 제어의 주체는?", options: ["개발자","사용자","프레임워크","운영체제"], answer: 2, explain: "" },
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "소프트웨어 품질 중 '유지보수성, 재사용성, 확장성'에 해당하는 것은?", options: ["기능 품질","구조 품질","성능 품질","보안 품질"], answer: 1, explain: "" },
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "POJO(Plain Old Java Object)의 특징으로 옳은 것은?", options: ["특정 인터페이스를 반드시 구현해야 한다","특정 클래스를 반드시 상속받아야 한다","순수한 자바 객체로 특별한 인터페이스/상속이 필요 없다","반드시 Serializable을 구현해야 한다"], answer: 2, explain: "" },
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "스프링의 주요 특징 3가지에 해당하지 않는 것은?", options: ["DI (의존성 주입)","AOP (관점 중심 프로그래밍)","PSA (이식 가능한 서비스 추상화)","ORM (객체 관계 매핑)"], answer: 3, explain: "" },
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "DI(Dependency Injection)의 주된 목적은?", options: ["강한 결합력 확보","약한 결합력 확보","컴파일 속도 향상","메모리 절약"], answer: 1, explain: "" },
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "AOP에서 핵심 로직과 분리해야 할 횡단 관심사의 예시로 적절한 것은?", options: ["변수 선언","반복문 작성","로깅과 성능측정","클래스 상속"], answer: 2, explain: "" },
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "'@Before' 어노테이션을 사용하는 AOP의 목적은?", options: ["메서드 호출 이후 실행","메서드 호출 이전 실행","예외 발생 시 실행","메서드 반환 시 실행"], answer: 1, explain: "" },
  { topic: "1주차 - 스프링 개요 / 프레임워크 기본", q: "PSA(Portable Service Abstraction)에 대한 설명으로 옳은 것은?", options: ["DB 연결 전용 기술","다양한 서비스를 추상화해 교체 가능하게 함","멀티스레드를 위한 기술","뷰 렌더링 전용 기술"], answer: 1, explain: "" },
  { topic: "2주차 - 현대적 스프링 진화", q: "Java 21의 가상 스레드(Virtual Thread)에 대한 설명 중 옳은 것은?", options: ["CPU 위주 앱에서 가장 유리","I/O 작업이 많은 앱에서 유리","항상 기존 OS 스레드보다 느리다","스레드 풀과 완전히 동일하다"], answer: 1, explain: "" },
  { topic: "2주차 - 현대적 스프링 진화", q: "스레드 생성 시 메모리를 할당받는 영역은?", options: ["힙(Heap)","스택(Stack)","메서드 영역","PC 레지스터"], answer: 1, explain: "" },
  { topic: "2주차 - 현대적 스프링 진화", q: "스레드 풀(Thread Pool) 방식의 단점은?", options: ["스레드가 무한 생성된다","미리 만든 스레드 수만큼만 처리하고 초과분은 대기","메모리 사용량이 없다","동기화가 필요 없다"], answer: 1, explain: "" },
  { topic: "2주차 - 현대적 스프링 진화", q: "톰캣이 멀티스레드 환경에서 반드시 지켜야 하는 것은?", options: ["단일스레드 처리","상호배제(Mutual Exclusion)","순차 실행","동기 블로킹"], answer: 1, explain: "" },
  { topic: "2주차 - 현대적 스프링 진화", q: "GraalVM Native Image의 주요 특징은?", options: ["런타임에 JIT 컴파일","빌드 시점에 기계어로 변환(AOT)","인터프리터 방식","바이트코드만 생성"], answer: 1, explain: "" },
  { topic: "2주차 - 현대적 스프링 진화", q: "Spring AI가 다양한 AI 모델을 표준화하는 방식은?", options: ["AOP 기반","PSA(서비스 추상화) 기반","DI 기반","IoC 기반"], answer: 1, explain: "" },
  { topic: "2주차 - DI / Bean", q: "의존성 주입이 이루어지는 시점은?", options: ["클래스 선언 시","컴파일 시","생성자 호출 시","JVM 종료 시"], answer: 2, explain: "" },
  { topic: "2주차 - DI / Bean", q: "스프링 컨테이너(IoC Container)의 핵심 기능 2가지는?", options: ["객체 생성 및 관리 / 의존성 주입","파일 I/O / 네트워크 통신","스레드 생성 / GC 수행","컴파일 / 디버깅"], answer: 0, explain: "" },
  { topic: "2주차 - DI / Bean", q: "Bean 설정 방법 중 레거시 방식으로 사용되는 것은?", options: ["Annotations","Java Config","XML","YAML"], answer: 2, explain: "" },
  { topic: "2주차 - DI / Bean", q: "Bean의 스코프 중 스프링부트의 기본값은?", options: ["프로토타입","싱글톤","요청(request)","세션"], answer: 1, explain: "" },
  { topic: "2주차 - DI / Bean", q: "싱글톤 Bean을 여러 사용자가 동시에 접근할 때 필요한 것은?", options: ["다중 인스턴스 생성","상호배제","GC 수행","쓰레드 종료"], answer: 1, explain: "" },
  { topic: "2주차 - DI / Bean", q: "컨트롤러만 단위 테스트하고 싶을 때 비즈니스 로직을 대체하는 방법은?", options: ["실제 서비스 직접 사용","Mocked 서비스 주입","DB 직접 호출","뷰 생성"], answer: 1, explain: "" },
  { topic: "3주차 - MVC", q: "MVC에서 '사용자의 요청을 처리하는 기능'을 담당하는 것은?", options: ["Model","View","Controller","Repository"], answer: 2, explain: "" },
  { topic: "3주차 - MVC", q: "MVC에서 요청의 호출 순서로 올바른 것은?", options: ["View → Model → Controller","Controller → Service → Repository → DB","Repository → Controller → Service → DB","DB → View → Controller → Service"], answer: 1, explain: "" },
  { topic: "3주차 - MVC", q: "DispatcherServlet의 역할로 옳은 것은?", options: ["DB와 직접 통신","핸들러 매핑을 통해 적절한 컨트롤러로 요청 전달(Front Controller)","View 렌더링만 수행","Bean 생성 전용"], answer: 1, explain: "" },
  { topic: "3주차 - MVC", q: "Handler Mapping이 사용하는 어노테이션이 아닌 것은?", options: ["@RequestMapping","@GetMapping","@PostMapping","@Entity"], answer: 3, explain: "" },
  { topic: "3주차 - MVC", q: "Spring MVC가 만드는 두 컨테이너의 관계는?", options: ["형제 관계","부모-자식(1:다) 관계","독립 관계","자식-자식 관계"], answer: 1, explain: "" },
  { topic: "3주차 - MVC", q: "자식(Web) 컨테이너에 등록해야 하는 Bean은?", options: ["컨트롤러 관련 Beans","서비스 Beans만","DataSource","엔티티"], answer: 0, explain: "" },
  { topic: "3주차 - MVC", q: "RootConfig에서 등록하는 것이 아닌 것은?", options: ["Service 컴포넌트","Repository 컴포넌트","DataSource","Controller"], answer: 3, explain: "" },
  { topic: "3주차 - MVC", q: "모델에 데이터를 삽입할 때 사용하는 메서드는?", options: ["model.getAttribute","model.addAttribute","model.putValue","model.setView"], answer: 1, explain: "" },
  { topic: "3주차 - MVC", q: "Spring 6 → 7로 오면서 생긴 변화가 아닌 것은?", options: ["javax. → jakarta. 로 패키지 변경","XML → @Configuration classes","Java 17 이상 요구","JSP 기본 템플릿으로 복귀"], answer: 3, explain: "" },
  { topic: "3주차 - MVC", q: "권장되는 View 템플릿 기술은?", options: ["JSP","Velocity","Thymeleaf","Freemarker"], answer: 2, explain: "" },
  { topic: "4주차 - 웹폼 / 검증", q: "HTTP GET 방식의 특징으로 옳은 것은?", options: ["파라미터가 body에 담김","URL에 파라미터가 노출됨","민감한 정보 전달에 적합","암호화가 기본으로 적용됨"], answer: 1, explain: "" },
  { topic: "4주차 - 웹폼 / 검증", q: "POST 방식이 적합한 작업은?", options: ["단순 검색","필터링","Create/Update","북마크"], answer: 2, explain: "" },
  { topic: "4주차 - 웹폼 / 검증", q: "사용자 입력 데이터를 객체에 자동 저장하는 작업을 무엇이라고 하는가?", options: ["Data Validation","Data Binding","Data Buffering","Data Masking"], answer: 1, explain: "" },
  { topic: "4주차 - 웹폼 / 검증", q: "유효성 검증 결과가 담기는 객체는?", options: ["BindingResult","ValidatorResult","ErrorList","ModelResult"], answer: 0, explain: "" },
  { topic: "4주차 - 웹폼 / 검증", q: "자동 데이터 바인딩을 위해 컨트롤러 메서드 인자에 붙이는 어노테이션은?", options: ["@Autowired","@ModelAttribute","@Component","@Repository"], answer: 1, explain: "" },
  { topic: "4주차 - 웹폼 / 검증", q: "다음 중 가장 엄격한 유효성 검증 어노테이션은?", options: ["@NotNull","@NotEmpty","@NotBlank","@Size"], answer: 2, explain: "" },
  { topic: "4주차 - 웹폼 / 검증", q: "DTO와 Entity의 차이점으로 옳은 것은?", options: ["Entity는 ID가 없고 DTO만 있다","DTO는 DB 저장용, Entity는 폼 입력용이다","Entity는 DB 저장용, DTO는 데이터 전달용이다","둘은 완전히 동일하다"], answer: 2, explain: "" },
  { topic: "4주차 - 웹폼 / 검증", q: "Thymeleaf에서 기존 입력값을 보존할 때 사용하는 속성은?", options: ["th:value","th:field","th:input","th:save"], answer: 1, explain: "" },
  { topic: "4주차 - 웹폼 / 검증", q: "글로벌 예외 핸들러를 만들기 위해 사용하는 어노테이션은?", options: ["@ExceptionHandler","@ControllerAdvice","@RestController","@ResponseStatus"], answer: 1, explain: "" },
  { topic: "5주차 - JPA 기본", q: "JPA와 Hibernate의 관계는?", options: ["JPA가 Hibernate의 구현체","Hibernate가 JPA의 구현체","서로 관계없다","동일한 기술"], answer: 1, explain: "" },
  { topic: "5주차 - JPA 기본", q: "JPA의 핵심 역할을 하는 객체는?", options: ["DataSource","EntityManager","Session","Transaction"], answer: 1, explain: "" },
  { topic: "5주차 - JPA 기본", q: "Entity 클래스에서 반드시 필요한 것은?", options: ["Getter만","인자 없는 생성자","Setter만","toString()"], answer: 1, explain: "" },
  { topic: "5주차 - JPA 기본", q: "@Id의 GenerationType 중 DB가 자동 증가시켜 저장 후 ID를 read back 하는 방식은?", options: ["TABLE","SEQUENCE","IDENTITY","UUID"], answer: 2, explain: "" },
  { topic: "5주차 - JPA 기본", q: "Persistence Context의 역할이 아닌 것은?", options: ["1차 캐시","변경 감지(Dirty Checking)","SQL 지연 실행","화면 렌더링"], answer: 3, explain: "" },
  { topic: "6주차 - JPA Lifecycle / JPQL", q: "Entity Lifecycle 상태 중 'JPA가 관리하지 않는 순수 자바 객체' 상태는?", options: ["Managed","Detached","New/Transient","Removed"], answer: 2, explain: "" },
  { topic: "6주차 - JPA Lifecycle / JPQL", q: "EntityManager API의 매핑으로 잘못된 것은?", options: ["persist - Create","find - Read","merge - Update","commit - Delete"], answer: 3, explain: "" },
  { topic: "6주차 - JPA Lifecycle / JPQL", q: "JPQL의 특징으로 옳은 것은?", options: ["테이블 기반 쿼리","엔티티 기반 쿼리","런타임에 JPQL 자체로 실행","SQL과 동일"], answer: 1, explain: "" },
  { topic: "7주차 - 관계 매핑 / 트랜잭션", q: "@OneToMany 관계에서 fetch의 기본값은?", options: ["EAGER","LAZY","NONE","AUTO"], answer: 1, explain: "" }
];

// export
if (typeof window !== 'undefined') {
  window.MAIN_QUESTIONS = MAIN_QUESTIONS;
  window.EXTRA_QUESTIONS = EXTRA_QUESTIONS;
  window.VELOG_QUESTIONS = VELOG_QUESTIONS;
}


export { MAIN_QUESTIONS, EXTRA_QUESTIONS, VELOG_QUESTIONS };
