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
  profileImage: "profile.png",
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
      period: "Oct 2023 to Aug 2024",
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
      period: "May 2022 to Oct 2023",
      logo: "ameriprise-logo.png",
      impact: "Distributed data pipelines on AWS with Python, Spark and Lambda, plus BlackRock Aladdin ↔ Snowflake API integrations and a CloudWatch observability stack.",
      bullets: [
        "Designed distributed data pipelines on AWS using Python, Spark, and Lambda, reducing daily load times by 80%.",
        "Engineered REST API integrations between BlackRock Aladdin and Snowflake with retry logic, reducing production errors by 95%.",
        "Deployed observability stack with AWS Lambda and CloudWatch for automated monitoring and 100% pipeline consistency."
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Software Developer",
      period: "June 2020 to May 2022",
      impact: "Built Python and Java backend modules for enterprise insurance and financial applications in Agile/Scrum teams; wrote unit and integration tests and resolved production defects with QA and business analysts.",
      bullets: [
        "Built Python and Java backend modules for enterprise insurance and financial domain client applications following Agile/Scrum delivery cycles.",
        "Wrote unit and integration tests to validate features and catch regressions; resolved production defects via log-based root-cause analysis in collaboration with QA and business analysts."
      ]
    }
  ],

  projects: [
    {
      slug: "distributed-transaction-processing",
      title: "Scalable Distributed Transaction Processing System",
      status: "live" as const,
      featured: true,
      description: "Sharded, fault-tolerant transaction engine in Go using Multi-Paxos leader election and Two-Phase Commit over gRPC.",
      headline: "A sharded Go transaction engine using Multi-Paxos and Two-Phase Commit over gRPC. It includes crash recovery and handles 1,000+ transactions per second across three clusters.",
      techLine: "Go · Multi-Paxos · 2PC · gRPC",
      tech: ["Go", "Multi-Paxos", "2PC", "gRPC"],
      repoUrl: null,
      liveUrl: null,
      details: [
        "Sharded, fault-tolerant transaction engine in Go using Multi-Paxos leader election and Two-Phase Commit over gRPC.",
        "Implemented configurable sharding and tunable consistency with crash recovery on node failure, verifying linearizable state-machine replication while sustaining 1,000+ transactions/sec across three clusters."
      ]
    },
    {
      slug: "byzantine-fault-tolerant-banking",
      title: "Byzantine Fault-Tolerant Banking System",
      status: "live" as const,
      featured: true,
      description: "Byzantine fault-tolerant banking backend in Go using linear-PBFT over gRPC, tolerating f faulty replicas in a 3f+1 cluster.",
      headline: "A Go banking backend using linear-PBFT over gRPC. It provides fault tolerance across a seven-node cluster serving ten concurrent clients while reducing per-request messages toward linear complexity.",
      techLine: "Go · PBFT · gRPC",
      tech: ["Go", "PBFT", "gRPC"],
      repoUrl: null,
      liveUrl: null,
      details: [
        "Byzantine fault-tolerant banking backend in Go using linear-PBFT over gRPC, tolerating f faulty replicas in a 3f+1 cluster.",
        "Ran pre-prepare, prepare, commit, and view-change phases while cutting per-request message complexity from quadratic toward linear, preserving safety and liveness on a seven-node cluster serving ten concurrent clients."
      ]
    }
  ],

  posts: [
    {
      title: "The Hidden Brain of Claude Code: What Actually Lives in Your .claude Directory",
      date: "Medium",
      read: "Read article",
      tag: "Claude Code",
      excerpt: "A guided look inside Claude Code’s local workspace: the files, configuration, and project context that shape how it works.",
      url: "https://medium.com/@tusharpanthri/the-hidden-brain-of-claude-code-what-actually-lives-in-your-claude-directory-ce0ce27ef858"
    },
    {
      title: "Claude’s Memory Is a Filesystem Now",
      date: "Medium",
      read: "Read article",
      tag: "AI tooling",
      excerpt: "How Claude Code turns a filesystem into durable context, and what that means for memory, continuity, and software work.",
      url: "https://medium.com/@tusharpanthri/claudes-memory-is-a-filesystem-now-bbf7511229a9"
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
      name: "AWS Certified Solutions Architect Associate (SAA-C03)",
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
      period: "2024 to 2026",
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
      period: "2017 to 2021",
      logo: "ggsipu-logo.png",
      courses: [
        { name: "Digital Signal Processing", description: "Study of discrete-time signals and systems analysis." },
        { name: "Communication Systems", description: "Fundamentals of analog and digital communication protocols." }
      ]
    }
  ]
};
