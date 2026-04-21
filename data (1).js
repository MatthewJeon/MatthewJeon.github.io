// Shared data + i18n for all portfolio variations

window.PORTFOLIO_DATA = {
  name: { en: "Matthew Hwyjoon Jeon", ko: "전휘준" },
  nameAlt: { en: "전휘준", ko: "Matthew Hwyjoon Jeon" },
  role: {
    en: "AI Researcher & Engineer",
    ko: "AI 연구자 & 엔지니어",
  },
  tagline: {
    en: "Generative Models · Diffusion · LLMs · Multimodal AI",
    ko: "생성 모델 · 디퓨전 · LLM · 멀티모달 AI",
  },
  bio: {
    en: "I work on generative vision and language models — how they perceive, synthesize, and reason. Currently focused on diffusion architectures and multimodal alignment.",
    ko: "생성형 비전·언어 모델이 세상을 어떻게 지각하고, 합성하고, 추론하는지 연구합니다. 현재는 디퓨전 구조와 멀티모달 정렬에 집중하고 있습니다.",
  },
  education: [
    {
      degree: { en: "M.S. Electrical & Computer Engineering", ko: "전기전자공학 석사" },
      school: { en: "Korea University", ko: "고려대학교" },
      year: "2025",
    },
    {
      degree: { en: "B.S. Computer Science", ko: "컴퓨터공학 학사" },
      school: { en: "Dongguk University", ko: "동국대학교" },
      year: "2023",
    },
  ],
  citizenship: { en: "United States · Republic of Korea", ko: "대한민국 · 미국" },
  contact: {
    email: "hwyjeon@korea.ac.kr",
    scholar: "https://scholar.google.com/citations?hl=ko&authuser=2&user=uyJogsQAAAAJ",
    github: "https://github.com/MatthewJeon",
  },
  interests: [
    { id: "cv", en: "Computer Vision", ko: "컴퓨터 비전" },
    { id: "imgen", en: "Image / Video Generation", ko: "이미지·비디오 생성" },
    { id: "llm", en: "LLM / VLM", ko: "LLM / VLM" },
    { id: "opt", en: "Optimization", ko: "최적화" },
  ],
  publications: [
    {
      id: "cartoonize-journal",
      type: "journal",
      venueClass: { en: "International Journal", ko: "국제 저널" },
      title: {
        en: "A photo cartoonization method based on text-to-image diffusion model",
        ko: "텍스트-이미지 디퓨전 모델 기반 사진 카툰화 기법",
      },
      authors: { en: "H. Jeon, et al.", ko: "전휘준 외" },
      venue: "Neurocomputing (Q1 SCI)",
      year: "2025",
      note: {
        en: "Designed a multi-adapter architecture (color-structure, semantic, style).",
        ko: "색상-구조, 의미, 스타일을 분리한 멀티 어댑터 구조 설계.",
      },
      tags: ["cv", "imgen"],
      link: "https://www.sciencedirect.com/science/article/abs/pii/S0925231224019921",
      linkLabel: "ScienceDirect",
    },
    {
      id: "cartoonize-bigcomp",
      type: "conf",
      venueClass: { en: "International Conference", ko: "국제 학회" },
      title: {
        en: "CartoonizeDiff: Diffusion-Based Photo Cartoonization Scheme",
        ko: "CartoonizeDiff: 디퓨전 기반 사진 카툰화 기법",
      },
      authors: { en: "H. Jeon, et al.", ko: "전휘준 외" },
      venue: "IEEE BigComp",
      year: "2024",
      note: {
        en: "Improved reflectivity & color fidelity via Color Canny + Reflect ControlNet.",
        ko: "Color Canny + Reflect ControlNet으로 반사광·색 충실도 개선.",
      },
      tags: ["cv", "imgen"],
      link: "https://ieeexplore.ieee.org/abstract/document/10488185",
      linkLabel: "IEEE Xplore",
    },
    {
      id: "synonym-kdbc",
      type: "domestic",
      venueClass: { en: "Domestic Conference", ko: "국내 학회" },
      title: {
        en: "LLM-based Synonym Dictionary Construction and Evaluation Method",
        ko: "LLM 기반 유의어 사전 구축 및 평가 기법",
      },
      authors: { en: "H. Jeon, et al.", ko: "전휘준 외" },
      venue: "Korean Database Conference (KDBC)",
      year: "2023",
      note: {
        en: "Prompt engineering for Korean synonym dictionary generation. Patent filed.",
        ko: "한국어 유의어 사전 생성을 위한 프롬프트 엔지니어링. 특허 출원.",
      },
      tags: ["llm"],
      link: "#",
      linkLabel: "PDF",
    },
  ],
  projects: [
    {
      period: "2023.06 – 2025.02",
      sponsor: {
        en: "National Research Foundation of Korea",
        ko: "한국연구재단",
      },
      title: {
        en: "Description Text Refinement & T2I Generation Preserving Object Identity",
        ko: "객체 정체성을 유지하는 이미지 생성을 위한 묘사 텍스트 세분화 및 텍스트-이미지 생성 모델 연구",
      },
      tags: ["cv", "imgen"],
    },
    {
      period: "2023.03 – 2023.08",
      sponsor: { en: "Lloyd.K Inc.", ko: "(주)로이드케이" },
      title: {
        en: "Enhancement of Natural-Language-Based Search Experience",
        ko: "자연어 기반 검색 경험 향상",
      },
      tags: ["llm"],
    },
    {
      period: "2024.02 – 2024.08",
      sponsor: { en: "Industry", ko: "산학협력" },
      title: {
        en: "LLM Solution Deployment & Hallucination Prevention R&D",
        ko: "LLM 솔루션 활용 및 환각현상 방지 연구개발",
      },
      tags: ["llm"],
    },
    {
      period: "2023.03 – 2025.02",
      sponsor: {
        en: "National Research Foundation of Korea",
        ko: "한국연구재단",
      },
      title: {
        en: "Order Learning Lab — AI for Comparative Data Analysis & Evaluation",
        ko: "순서학습연구실: 비교적 데이터 분석 및 평가를 위한 인공지능 연구",
      },
      tags: ["opt"],
    },
  ],
};

window.T = {
  nav: {
    about: { en: "about", ko: "소개" },
    research: { en: "research", ko: "연구 관심" },
    publications: { en: "publications", ko: "논문" },
    projects: { en: "projects", ko: "프로젝트" },
    contact: { en: "contact", ko: "연락" },
  },
  labels: {
    education: { en: "Education", ko: "학력" },
    citizenship: { en: "Citizenship", ko: "국적" },
    email: { en: "Email", ko: "이메일" },
    scholar: { en: "Scholar", ko: "Scholar" },
    github: { en: "GitHub", ko: "GitHub" },
    interests: { en: "Research Interests", ko: "연구 관심" },
    publications: { en: "Publications", ko: "논문" },
    projects: { en: "Research Projects", ko: "연구 프로젝트" },
    filterAll: { en: "all", ko: "전체" },
    filterBy: { en: "filter by", ko: "필터" },
    clearFilter: { en: "clear", ko: "초기화" },
    noResults: { en: "no publications match this filter.", ko: "해당 필터에 맞는 논문이 없습니다." },
    noProjectResults: { en: "no projects match this filter.", ko: "해당 필터에 맞는 프로젝트가 없습니다." },
    now: { en: "now", ko: "지금" },
    lang: { en: "EN / 한", ko: "EN / 한" },
    theme: { en: "theme", ko: "테마" },
    open: { en: "open →", ko: "열기 →" },
  },
};
