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
  profileImage: "profile.jpg",
  summary: "Software Engineer with 3+ years building backend services, REST APIs, and distributed systems on AWS for financial clients. Hands-on with Python, Java, JavaScript, SQL, and full SDLC ownership including unit testing, CI/CD, code review, and on-call rotations.",
  proof: [
    { value: "−40%", label: "p95 latency on REST services serving 18 U.S. commercial channels at Amex" },
    { value: "−80%", label: "daily load time on AWS pipelines built with Python, Spark and Lambda" },
    { value: "−95%", label: "production errors after rebuilding Aladdin ↔ Snowflake integrations with retries" }
  ],
  githubUsername: "tusharpanthri",
  stack: [
    "Python", "Java", "TypeScript", "SQL", "FastAPI", "Node.js / Express",
    "REST & GraphQL", "Kafka", "Spark", "AWS (Lambda, S3, ECS, Glue)",
    "Docker / Kubernetes", "Terraform", "PostgreSQL", "DynamoDB",
    "Redis / Celery", "React / Next.js"
  ],
  tickerItems: [
    "PYTHON",
    "AWS",
    "REST APIS",
    "FASTAPI",
    "REACT.JS",
    "DISTRIBUTED SYSTEMS",
    "DOCKER",
    "POSTGRESQL",
    "KAFKA",
    "TERRAFORM"
  ],

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
      impact: "Python backend services and REST endpoints for 18 U.S. commercial channels; owned SDLC for ETL microservices on AWS end to end, from design docs to on-call.",
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
      impact: "Distributed data pipelines on AWS with Python, Spark and Lambda, plus BlackRock Aladdin ↔ Snowflake API integrations and a CloudWatch observability stack.",
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
      impact: "ARIMA-LSTM forecasting services behind REST endpoints to predict SLA breaches, with operational dashboards for high-traffic events.",
      bullets: [
        "Developed Python forecasting services using ARIMA-LSTM models exposed via REST endpoints to predict SLA breaches.",
        "Built operational dashboards integrated with backend APIs to preempt production bottlenecks during high-traffic events."
      ]
    }
  ],

  projects: [
    {
      slug: "portfolio-lens",
      title: "PortfolioLens",
      headline: "Private-capital analytics platform — normalized Postgres schema holding sub-100ms responses, JWT auth with role-based access.",
      techLine: "React · Node.js · FastAPI · PostgreSQL · Docker",
      status: "live" as const,
      featured: true,
      description: "Private Capital Analytics Platform for tracking portfolio metrics and IRR calculations.",
      tech: ["React.js", "Node.js", "FastAPI", "PostgreSQL", "Docker"],
      repoUrl: null,
      liveUrl: null,
      details: [
        "Full-stack analytics platform with React frontend and Node.js/FastAPI backend.",
        "Designed normalized PostgreSQL schema for sub-100ms response times.",
        "Implemented JWT auth with role-based access control."
      ]
    },
    {
      slug: "lecture-scribe",
      title: "LectureScribe",
      headline: "Whisper transcription service: one hour of audio in under five minutes, async Celery/Redis queue for jobs up to two hours.",
      techLine: "Python · FastAPI · Celery · Redis · Whisper",
      status: "live" as const,
      featured: true,
      description: "AI-Powered Transcription Service serving Whisper ML inference for multi-language audio.",
      tech: ["Python", "FastAPI", "Celery", "Redis", "Whisper", "Docker"],
      repoUrl: null,
      liveUrl: null,
      details: [
        "Backend service transcribing 1-hour audio in under 5 minutes using Whisper.",
        "Async job queue with Celery/Redis for tasks up to 2 hours.",
        "Structured retry logic and webhook notifications for fault-tolerance."
      ]
    },
    {
      slug: "nexus-ai",
      title: "Nexus AI",
      headline: "Real-time market intelligence — 1M+ Kafka messages a day, windowed Spark Streaming transforms, Grafana dashboards.",
      techLine: "Kafka · Spark · AWS EMR · dbt · Grafana",
      status: "live" as const,
      featured: true,
      description: "Real-time Financial Intelligence Platform ingesting live market data via Kafka and Spark on EMR.",
      tech: ["Kafka", "Spark", "AWS EMR", "dbt", "Grafana"],
      repoUrl: null,
      liveUrl: null,
      details: [
        "Ingested 1M+ messages per day using Kafka producers.",
        "Implemented windowed transformations in Spark Streaming.",
        "Visualized market trends with real-time Grafana dashboards."
      ]
    },
    {
      slug: "distributed-mind",
      title: "DistributedMind",
      status: "live" as const,
      featured: false,
      description: "Large-scale data processing framework built to benchmark transformations and query optimization.",
      tech: ["Spark", "Dask", "Ray", "Docker", "S3"],
      repoUrl: null,
      liveUrl: null,
      details: [
        "Optimized Parquet partitioning for faster query performance.",
        "Benchmarked Dask vs Spark for specific compute workloads.",
        "Automated deployment using Docker and Kubernetes."
      ]
    },
    {
      slug: "datavault-explorer",
      title: "DataVault Explorer",
      status: "live" as const,
      featured: false,
      description: "Interactive visualizer for Snowflake Data Vault 2.0 architectures with automated schema generation.",
      tech: ["React", "D3.js", "Snowflake", "Python"],
      repoUrl: null,
      liveUrl: null,
      details: [
        "Generated DDL statements automatically from JSON schemas.",
        "Visualized Hub, Sat, and Link relationships using D3 force graphs.",
        "Integrated Snowflake SQL API for real-time metadata extraction."
      ]
    },
    {
      slug: "sentinel-etl",
      title: "Sentinel ETL",
      status: "live" as const,
      featured: false,
      description: "Lightweight, self-healing ETL framework for Python with built-in Slack alerting and Prometheus metrics.",
      tech: ["Python", "Prometheus", "Slack API", "PostgreSQL"],
      repoUrl: null,
      liveUrl: null,
      details: [
        "Built custom decorators for automated retry and error logging.",
        "Exposed job health metrics via Prometheus scraping endpoints.",
        "Automated Slack notifications for pipeline failures."
      ]
    }
  ],

  // TODO(tushar): titles and excerpts below are drafts from the design review —
  // replace each `url` with the real Medium post link before sharing the site.
  posts: [
    {
      title: "Cutting p95 latency by 40% without touching the database",
      date: "Aug 2026",
      read: "7 min read",
      tag: "Backend",
      excerpt: "What actually moved the needle on a Python REST service fanning out to 18 downstream channels — and the three things that did nothing.",
      url: "https://medium.com/@tusharpanthri"
    },
    {
      title: "Aladdin to Snowflake: designing retries you can trust",
      date: "Jun 2026",
      read: "9 min read",
      tag: "Data pipelines",
      excerpt: "Idempotency keys, backoff windows and dead-letter handling for a financial integration where a duplicate write is worse than a failed one.",
      url: "https://medium.com/@tusharpanthri"
    },
    {
      title: "Spark vs Dask vs Ray, benchmarked on the same workload",
      date: "Apr 2026",
      read: "11 min read",
      tag: "Distributed systems",
      excerpt: "One Parquet dataset, three engines, identical transforms. Where each one wins, and why partitioning mattered more than the engine.",
      url: "https://medium.com/@tusharpanthri"
    }
  ] as Array<{
    title: string;
    date: string;
    read: string;
    excerpt: string;
    tag: string;
    url: string;
  }>,

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
