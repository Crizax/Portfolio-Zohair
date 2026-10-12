// Add real links when you have them: set github / live to a URL string.
export const projects = [
  {
    id: "finance-tracker",
    title: "AI-Assisted Finance Tracking Platform",
    summary:
      "A finance tracker where a Spring Boot backend handles transactions, authentication and storage, and a FastAPI service reads bank-statement text and labels each transaction with an NLP classification model.",
    points: [
      "React frontend with a Spring Boot REST API, Spring Data JPA and MySQL for persistence.",
      "Python and FastAPI microservice that auto-categorizes transactions and feeds the spending-insight dashboards.",
      "Frontend, backend and database run together with Docker Compose.",
    ],
    stack: ["React.js", "Spring Boot", "FastAPI", "MySQL", "Docker", "REST APIs"],
    flow: ["React", "Spring Boot", "FastAPI + NLP model", "MySQL"],
    github: "https://github.com/Crizax/monetiq.git",
    live: null,
  },
  {
    id: "coreference",
    title: "NLP Coreference Resolution on the Qalb Dataset",
    summary:
      "Fine-tuned a transformer language model to find and resolve ambiguous pronoun references in text, starting from Hugging Face base checkpoints.",
    points: [
      "Built tokenization and preprocessing pipelines that turn raw text into sequence-labeling tensors with attention masks.",
      "Compared baseline and fine-tuned checkpoints using precision, recall and F1, then reviewed misclassified cases to find weak spots in long-distance references.",
    ],
    stack: ["Python", "PyTorch", "Hugging Face", "Scikit-learn"],
    github: null,
    live: null,
  },
  {
    id: "classroom-detection",
    title: "Real-Time Classroom Object Detection",
    summary:
      "A computer-vision pipeline that detects desks, chairs, whiteboards and devices in video and still images.",
    points: [
      "Labeled a custom training set and augmented it with rotation, brightness and noise to handle different lighting.",
      "Ran a pre-trained YOLO backbone through OpenCV and measured results with mean Average Precision and frame rate.",
    ],
    stack: ["Python", "OpenCV", "YOLO", "PyTorch"],
    github: null,
    live: null,
  },
  {
    id: "campus-dashboard",
    title: "Campus Analytics and Operations Dashboard",
    summary:
      "An interactive dashboard that cleans and visualizes university operational and demographic data for reporting.",
    points: [
      "Time filtering, category grouping, heatmaps and time-series charts that surface trends.",
    ],
    stack: ["Python", "Streamlit", "Pandas", "Plotly"],
    github: "https://github.com/Crizax/Campus-Complaint-Dashboard",
    live: "https://campus-complaint-dashboard-cyhsupwekzwsruc52wyxz7.streamlit.app/#university-complaints-and-reports-analysis-dashboard",
  },
];

export const additional = [
  {
    title: "XenonCreatives and VR startup websites",
    text: "Marketing sites built and deployed with React.js, Tailwind CSS and Firebase.",
  },
  {
    title: "Android apps",
    text: "A pet-supplies store, a shoe store and a to-do list, built in Kotlin and Java with Firebase, SQLite and Room.",
  },
];
