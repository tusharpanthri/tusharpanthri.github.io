export const resume = {
  name: "Tushar Panthri",
  role: "Software Engineer",
  tagline: "Building backend services, REST APIs, and distributed systems on AWS.",
  location: "New York, NY",
  email: "tusharpanthri@gmail.com",
  phone: "(934) 263-3282", 
  github: "https://github.com/tusharpanthri",
  linkedin: "https://www.linkedin.com/in/tushar-panthri-963ab814a/",
  resumeUrl: "resume.pdf",
  profileImage: "profile.jpg.jpg", 
  summary: "Software Engineer with 3+ years building backend services, REST APIs, and distributed systems on AWS for financial clients. Hands-on with Python, Java, JavaScript, SQL, and full SDLC ownership including unit testing, CI/CD, code review, and on-call rotations.",
  
  skillGroups: [
    {
      category: "Languages & OOP",
      skills: [
        { name: "Python", usedIn: "Backend services at American Express" },
        { name: "Java", usedIn: "Distributed systems and backend logic" },
        { name: "JavaScript/TypeScript", usedIn: "Full-stack development" },
        { name: "SQL", usedIn: "Complex data transformations and querying" },
        { name: "C++", usedIn: "Systems programming and algorithms" },
        { name: "Data Structures", usedIn: "Efficient problem solving" }
      ]
    },
    {
      category: "Backend & APIs",
      skills: [
        { name: "FastAPI", usedIn: "Building high-performance REST endpoints" },
        { name: "Node.js/Express", usedIn: "BFF layers and backend services" },
        { name: "REST/GraphQL", usedIn: "API design and implementation" },
        { name: "Microservices", usedIn: "Distributed architecture design" },
        { name: "Redis/Celery", usedIn: "Async job queues and caching" }
      ]
    },
    {
      category: "Frontend & Cloud",
      skills: [
        { name: "React.js/Next.js", usedIn: "Modern web frontend development" },
        { name: "AWS", usedIn: "Lambda, S3, EC2, CloudWatch, ECS" },
        { name: "Docker/Kubernetes", usedIn: "Containerization and orchestration" },
        { name: "Tailwind CSS", usedIn: "Utility-first responsive styling" }
      ]
    },
    {
      category: "Databases & DevOps",
      skills: [
        { name: "PostgreSQL/MySQL", usedIn: "Relational data modeling" },
        { name: "MongoDB/DynamoDB", usedIn: "NoSQL document storage" },
        { name: "CI/CD", usedIn: "GitHub Actions, Jenkins automation" },
        { name: "Terraform", usedIn: "Infrastructure as Code" }
      ]
    }
  ],

  experience: [
    {
      company: "American Express",
      role: "Software Engineer",
      period: "Oct 2023 — Aug 2024",
      logo: "amex-logo.png",
      bullets: [
        "Built backend services in Python with REST endpoints serving 18 U.S. commercial channels, achieving a 40% reduction in p95 latency.",
        "Owned end-to-end SDLC for ETL microservices on AWS, including design, code review, and deployment with 100% success rate.",
        "Collaborated in Agile sprints to ship BI dashboards backed by AWS Glue, contributing to design docs and on-call rotations."
      ]
    },
    {
      company: "Ameriprise Financial",
      role: "Software Engineer",
      period: "May 2022 — Oct 2023",
      logo: "ameriprise-logo.png",
      bullets: [
        "Designed distributed data pipelines on AWS using Python, Spark, and Lambda, reducing daily load times by 80%.",
        "Engineered REST API integrations between BlackRock Aladdin and Snowflake with retry logic, reducing production errors by 95%.",
        "Deployed observability stack with AWS Lambda and CloudWatch for automated monitoring and 100% pipeline consistency."
      ]
    },
    {
      company: "Ivavsys Technologies",
      role: "Software Engineering Intern",
      period: "July 2021 — Apr 2022",
      logo: "ivavsys-logo.png",
      bullets: [
        "Developed Python forecasting services using ARIMA-LSTM models exposed via REST endpoints to predict SLA breaches.",
        "Built operational dashboards integrated with backend APIs to preempt production bottlenecks during high-traffic events."
      ]
    }
  ],

  projects: [
    {
      title: "PortfolioLens",
      description: "Private Capital Analytics Platform for tracking portfolio metrics and IRR calculations.",
      tech: ["React.js", "Node.js", "FastAPI", "PostgreSQL", "Docker"],
      link: "https://github.com/tusharpanthri",
      liveLink: "https://tusharpanthri.github.io/",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Lens",
      details: [
        "Full-stack analytics platform with React frontend and Node.js/FastAPI backend.",
        "Designed normalized PostgreSQL schema for sub-100ms response times.",
        "Implemented JWT auth with role-based access control."
      ]
    },
    {
      title: "LectureScribe",
      description: "AI-Powered Transcription Service serving Whisper ML inference for multi-language audio.",
      tech: ["Python", "FastAPI", "Celery", "Redis", "Whisper", "Docker"],
      link: "https://github.com/tusharpanthri",
      liveLink: "https://tusharpanthri.github.io/",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Scribe",
      details: [
        "Backend service transcribing 1-hour audio in under 5 minutes using Whisper.",
        "Async job queue with Celery/Redis for tasks up to 2 hours.",
        "Structured retry logic and webhook notifications for fault-tolerance."
      ]
    },
    {
      title: "AlphaStream",
      description: "Real-time Financial Intelligence Platform ingesting live market data via Kafka and Spark on EMR.",
      tech: ["Kafka", "Spark", "AWS EMR", "dbt", "Grafana"],
      link: "https://github.com/tusharpanthri",
      liveLink: "https://tusharpanthri.github.io/",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Alpha",
      details: [
        "Ingested 1M+ messages per day using Kafka producers.",
        "Implemented windowed transformations in Spark Streaming.",
        "Visualized market trends with real-time Grafana dashboards."
      ]
    },
    {
      title: "DistributedMind",
      description: "Large-scale data processing framework built to benchmark transformations and query optimization.",
      tech: ["Spark", "Dask", "Ray", "Docker", "S3"],
      link: "https://github.com/tusharpanthri",
      liveLink: "https://tusharpanthri.github.io/",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Mind",
      details: [
        "Optimized Parquet partitioning for faster query performance.",
        "Benchmarked Dask vs Spark for specific compute workloads.",
        "Automated deployment using Docker and Kubernetes."
      ]
    },
    {
      title: "DataVault Explorer",
      description: "Interactive visualizer for Snowflake Data Vault 2.0 architectures with automated schema generation.",
      tech: ["React", "D3.js", "Snowflake", "Python"],
      link: "https://github.com/tusharpanthri",
      liveLink: "https://tusharpanthri.github.io/",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Vault",
      details: [
        "Generated DDL statements automatically from JSON schemas.",
        "Visualized Hub, Sat, and Link relationships using D3 force graphs.",
        "Integrated Snowflake SQL API for real-time metadata extraction."
      ]
    },
    {
      title: "Sentinel ETL",
      description: "Lightweight, self-healing ETL framework for Python with built-in Slack alerting and Prometheus metrics.",
      tech: ["Python", "Prometheus", "Slack API", "PostgreSQL"],
      link: "https://github.com/tusharpanthri",
      liveLink: "https://tusharpanthri.github.io/",
      image: "https://api.dicebear.com/7.x/shapes/svg?seed=Sentinel",
      details: [
        "Built custom decorators for automated retry and error logging.",
        "Exposed job health metrics via Prometheus scraping endpoints.",
        "Automated Slack notifications for pipeline failures."
      ]
    }
  ],

  certifications: [
    {
      name: "AWS Certified Solutions Architect – Associate (SAA-C03)",
      issuer: "Amazon Web Services",
      logo: "aws-logo.png",
      link: "#"
    },
    {
      name: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services",
      logo: "aws-logo.png",
      link: "#"
    },
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      logo: "databricks-logo.png",
      link: "#"
    }
  ],

  education: [
    {
      school: "Stony Brook University",
      degree: "M.S. in Computer Science and Applied Mathematics & Statistics",
      period: "2024 — 2026",
      logo: "sbu-logo.png",
      courses: [
        { name: "Big Data Systems", description: "Learned distributed computing architectures and MapReduce fundamentals." },
        { name: "Statistical Machine Learning", description: "Explored advanced regression and classification techniques." },
        { name: "Database Systems", description: "Deep dive into RDBMS internals and NoSQL scalability." }
      ]
    },
    {
      school: "GGSIPU Delhi",
      degree: "B.Tech in Electronics & Communication",
      period: "2017 — 2021",
      logo: "ggsipu-logo.png",
      courses: [
        { name: "Digital Signal Processing", description: "Study of discrete-time signals and systems analysis." },
        { name: "Communication Systems", description: "Fundamentals of analog and digital communication protocols." }
      ]
    }
  ]
};
