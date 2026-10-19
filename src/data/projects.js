export const featuredProjects = [
  {
    id: "hrms",
    tag: "Enterprise Full-Stack Web App",
    title: "Enterprise HRMS & Workforce Portal",
    summary:
      "End-to-end Human Resource Management System engineered to streamline employee onboarding, attendance tracking, leave workflows, and automated payroll generation.",
    highlights: [
      "Role-based access control (RBAC) for Admin, HR, and Employee portals",
      "Automated attendance logs, leave approval pipelines & payroll slips",
      "Real-time workforce analytics & department distribution metrics",
    ],
    stack: ["React.js", "Tailwind CSS", "Spring Boot", "REST API", "MySQL"],
    flow: ["React UI", "RBAC Auth", "REST API", "Database"],
    accent: "from-slate-500/10 via-indigo-500/5 to-transparent",
    badgeColor: "text-slate-300 border-slate-500/30 bg-slate-500/10",
    github: "https://github.com/Crizax/hrms-app",
    live: "https://your-hrms-live-link.vercel.app", // <-- PASTE YOUR HRMS LIVE LINK HERE
  },
  {
    id: "finance-tracker",
    tag: "Full-Stack + AI Microservice",
    title: "Monetiq — AI Finance Tracking Platform",
    summary:
      "Automated personal finance platform where a Spring Boot core manages transactions and a FastAPI NLP microservice classifies raw bank-statement lines.",
    highlights: [
      "Spring Boot REST API with JPA & MySQL for secure transaction storage",
      "FastAPI + NLP classification microservice for instant spend categorization",
      "Multi-container orchestration deployed via Docker Compose",
    ],
    stack: ["React.js", "Spring Boot", "FastAPI", "NLP", "MySQL", "Docker"],
    flow: ["React", "Spring Boot", "FastAPI + NLP", "MySQL"],
    accent: "from-indigo-500/10 via-slate-500/5 to-transparent",
    badgeColor: "text-indigo-300 border-indigo-500/25 bg-indigo-500/10",
    github: "https://github.com/Crizax/monetiq.git",
    live: null,
  },
];

export const otherProjects = [
  {
    id: "campus-dashboard",
    tag: "Data Analytics",
    title: "Campus Operations & Analytics Dashboard",
    summary:
      "Interactive reporting suite visualizing university operational and complaint trends using heatmaps and time-series filtering.",
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    github: "https://github.com/Crizax/Campus-Complaint-Dashboard",
    live: "https://campus-complaint-dashboard-cyhsupwekzwsruc52wyxz7.streamlit.app/#university-complaints-and-reports-analysis-dashboard",
  },
  {
    id: "coreference",
    tag: "Natural Language Processing",
    title: "Qalb Urdu Coreference Resolution",
    summary:
      "Fine-tuned Hugging Face transformer checkpoints to resolve ambiguous pronoun chains in Urdu text, evaluated via Precision, Recall & F1.",
    stack: ["Python", "PyTorch", "Hugging Face", "Scikit-learn"],
    github: null,
    live: null,
  },
  {
    id: "classroom-detection",
    tag: "Computer Vision",
    title: "Real-Time Classroom Object Detection",
    summary:
      "Custom-augmented YOLO & OpenCV vision pipeline detecting classroom assets in real time across varying lighting conditions.",
    stack: ["Python", "OpenCV", "YOLO", "PyTorch"],
    github: null,
    live: null,
  },
];