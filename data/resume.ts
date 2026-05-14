export const resume = {
  name: "Tushar Panthri",
  role: "Data Engineer",
  tagline: "Building production-grade ETL/ELT pipelines and big data infrastructure at scale.",
  location: "Austin, TX (Open to Relocation)",
  email: "tusharpanthri@gmail.com",
  phone: "+1 (555) 000-0000", 
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  resumeUrl: "resume.pdf",
  profileImage: "https://api.dicebear.com/7.x/avataaars/svg?seed=Tushar", 
  summary: "Data Engineer with 3+ years of experience specializing in AWS (Glue, EMR, S3), Spark, and Snowflake. Proven track record of delivering governed, analysis-ready data products in Agile environments.",
  
  skillGroups: [
    {
      category: "Databases & Cloud",
      skills: [
        { name: "AWS Glue", usedIn: "ETL pipelines at American Express" },
        { name: "S3", usedIn: "Data lake storage for multiple projects" },
        { name: "Snowflake", usedIn: "Data warehousing at Ameriprise Financial" },
        { name: "Lambda", usedIn: "Serverless data processing triggers" }
      ]
    },
    {
      category: "Big Data & ETL",
      skills: [
        { name: "Spark", usedIn: "Distributed data processing at scale" },
        { name: "Airflow", usedIn: "Workflow orchestration and scheduling" },
        { name: "dbt", usedIn: "SQL transformation and modeling" },
        { name: "Kafka", usedIn: "Real-time streaming ingestion" }
      ]
    },
    {
      category: "DevOps & Tools",
      skills: [
        { name: "Docker", usedIn: "Containerization of data services" },
        { name: "Terraform", usedIn: "Infrastructure as Code on AWS" },
        { name: "Python", usedIn: "Primary language for ETL and ML" },
        { name: "SQL", usedIn: "Complex data transformations" }
      ]
    }
  ],

  experience: [
    {
      company: "American Express (via TCS)",
      role: "Data Engineer",
      period: "Oct 2023 — Aug 2024",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=AX",
      bullets: [
        "Engineered production-grade ETL pipelines across 18 U.S. commercial market channels.",
        "Improved data accuracy by 25% and reduced retrieval times using SparkSQL.",
        "Automated quality validation processes to ensure data integrity across environments."
      ]
    },
    {
      company: "Ameriprise Financial (via TCS)",
      role: "Data Engineer",
      period: "May 2022 — Oct 2023",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=AF",
      bullets: [
        "Reduced daily data loading time by 80% via parallel Spark processing.",
        "Automated REST API integrations with Snowflake for the BlackRock Aladdin platform.",
        "Reduced integration errors by 95% through robust error handling and monitoring."
      ]
    },
    {
      company: "Ivavsys Technologies",
      role: "Machine Learning Intern",
      period: "July 2021 — Apr 2022",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=IT",
      bullets: [
        "Built ARIMA-LSTM forecasting models to predict SLA breaches.",
        "Preempted production bottlenecks during high-traffic events through predictive analysis.",
        "Collaborated with dev teams to integrate ML models into existing monitoring dashboards."
      ]
    }
  ],

  projects: [
    {
      title: "AlphaStream",
      description: "Real-time Financial Intelligence Platform ingesting live market data via Kafka and Spark on EMR.",
      tech: ["Kafka", "Spark", "AWS EMR", "dbt", "Grafana"],
      link: "https://github.com",
      liveLink: "https://example.com",
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
      link: "https://github.com",
      liveLink: "https://example.com",
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
      link: "https://github.com",
      liveLink: "https://example.com",
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
      link: "https://github.com",
      liveLink: "https://example.com",
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
      name: "AWS Certified Solutions Architect – Associate (SAA)",
      issuer: "Amazon Web Services",
      date: "2024",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=AWS",
      link: "#"
    },
    {
      name: "Databricks Certified Data Engineer Associate",
      issuer: "Databricks",
      date: "2024",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=DB",
      link: "#"
    }
  ],

  education: [
    {
      school: "Stony Brook University",
      degree: "M.S. in Data Science",
      period: "2024 — 2026",
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=SBU",
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
      logo: "https://api.dicebear.com/7.x/initials/svg?seed=GG",
      courses: [
        { name: "Digital Signal Processing", description: "Study of discrete-time signals and systems analysis." },
        { name: "Communication Systems", description: "Fundamentals of analog and digital communication protocols." }
      ]
    }
  ]
};
