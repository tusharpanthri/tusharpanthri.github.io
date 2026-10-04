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
  summary: "Software Engineer with 2+ years building Python, Spark, and AWS data services for American Express and Ameriprise Financial as a Tata Consultancy Services consultant. Started in API performance testing at Cognizant and now builds payment-domain and distributed systems projects. M.S. in Computer Science and Applied Mathematics & Statistics, Stony Brook University.",
  proof: [
    { value: "18", label: "U.S. marketing channels supported by impression pipelines at American Express" },
    { value: "−30%", label: "pipeline latency versus on-premises processing at Ameriprise" },
    { value: "20+", label: "REST APIs load-tested during an on-premises to AWS migration at Cognizant" }
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
      role: "Software Engineer · TCS consultant, EDDS Team",
      period: "Oct 2023 to Aug 2024",
      logo: "amex-logo.png",
      impact: "Built Python and SparkSQL impression pipelines across 18 U.S. marketing channels, reconciled counts across two landing sources, and supported the data feeding downstream marketing mix models.",
      bullets: [
        "Built Python and SparkSQL pipelines as a Tata Consultancy Services consultant to process impression data across 18 U.S. marketing channels, supporting tracking from ad impressions to card applications.",
        "Wrote reconciliation scripts comparing impression counts across two landing sources, flagging discrepancies before downstream reporting.",
        "Supported the impression data feeding the team's marketing mix modeling workflow and staged query results in temporary tables for validation before production writes."
      ]
    },
    {
      company: "Ameriprise Financial",
      role: "Software Engineer · TCS consultant, Global Asset Management",
      period: "May 2022 to Oct 2023",
      logo: "ameriprise-logo.png",
      impact: "Built AWS Glue ELT pipelines for holdings and ESG/MSCI data through landing, Parquet, and curated S3 zones, cutting latency by 30% versus on-premises processing. Supported event-driven ingestion and production feeds.",
      bullets: [
        "Engineered AWS Glue ELT jobs as a Tata Consultancy Services consultant for holdings and ESG/MSCI data, cutting pipeline latency by 30% versus prior on-premises pipelines.",
        "Built ingestion through S3, DynamoDB Streams, and Lambda to launch Glue jobs alongside TIDAL schedules, processing 100–200 MB daily MFT drops and 8 GB monthly backfills.",
        "Added data quality checks before Glue processing to flag invalid input with P3 alerts and avoid unnecessary compute.",
        "Supported Athena-queryable production feeds, resolved P2 and P3 ServiceNow incidents with CloudWatch monitoring, and shipped changes through Jenkins CI in bi-weekly Agile sprints."
      ]
    },
    {
      company: "Cognizant Technology Solutions",
      role: "Programmer Analyst · Hyderabad",
      period: "Jul 2021 to Sep 2021",
      impact: "Performance-tested Ameriprise money-movement APIs during an on-premises to AWS migration. Load-tested 20+ REST APIs with JMeter and caught a JWT signature bypass during smoke testing before launch.",
      bullets: [
        "Load-tested 20+ REST APIs with JMeter during Ameriprise's on-premises to AWS migration, validating SLA compliance for money-movement services.",
        "Mocked third-party dependencies with WireMock and monitored performance with Grafana and Kibana while observing Kubernetes autoscaling.",
        "Caught a JWT signature bypass caused by decode() instead of verify() during smoke testing and coordinated the fix before launch."
      ]
    }
  ],

  projects: [
    {
      slug: "transaction-lens",
      title: "Transaction Lens",
      status: "live" as const,
      projectLabel: "ML review workspace",
      featured: true,
      description: "A transaction anomaly review workspace adapted from an existing project, with single-transaction assessment, bounded batch review, and directional feature contributions.",
      headline: "A Streamlit workspace for reviewing transaction anomaly scores, with individual assessments, bounded batch review, directional feature contributions, and methodology notes.",
      techLine: "Python · Streamlit · FastAPI · dbt",
      tech: ["Python", "Streamlit", "FastAPI", "dbt"],
      repoUrl: "https://github.com/tusharpanthri/transaction-lens",
      liveUrl: null,
      diagramImage: "transaction-lens.png",
      diagramAlt: "A magnifying glass inspecting transaction records, highlighting an anomalous payment alongside checked records.",
      details: [
        "Adapted an inherited transaction anomaly detection project into a TransactionLens review workspace, preserving original authorship and dataset attribution.",
        "Added single-transaction assessment, bounded batch review, directional feature contributions, and data/methodology notes using scores from the configured API.",
        "Uses the public ULB / Worldline credit card fraud benchmark. The full dataset is currently missing; fresh training and end-to-end pipeline verification remain pending, with no model performance claims."
      ]
    },
    {
      slug: "ledger-match",
      title: "LedgerMatch",
      status: "live" as const,
      projectLabel: "Live demo",
      featured: true,
      description: "A payment reconciliation demo comparing internal ledger records against simulated Stripe, PayPal, and bank feeds, with confidence scores and discrepancy inspection.",
      headline: "An async FastAPI and PostgreSQL reconciliation engine with a React dashboard. Scores candidate matches across amount, fees, currency, identifiers, and dates, then surfaces mismatches, missing records, and duplicates using simulated provider data.",
      techLine: "FastAPI · PostgreSQL · React · TypeScript · n8n · Docker",
      tech: ["FastAPI", "PostgreSQL", "React", "TypeScript", "n8n", "Docker"],
      repoUrl: "https://github.com/tusharpanthri/ledger-match",
      liveUrl: "https://tusharpanthri.github.io/ledger-match/#/",
      diagramImage: "ledger-match.png",
      diagramAlt: "Internal ledger and provider records meeting at a reconciliation engine, with matched pairs and an unmatched record.",
      details: [
        "Matches internal payments against simulated Stripe, PayPal, and bank records using an async FastAPI API, PostgreSQL, and a React/TypeScript dashboard.",
        "Scores amount, fees, currency, card/IBAN, VAT, and date proximity with a 65% match threshold normalized to available fields; classifies fee and amount differences, missing records, and duplicates.",
        "Stores money as integer minor units and separates provider records into dedicated tables. Includes Docker Compose and seven n8n workflows for seeding, simulation, and reconciliation.",
        "Extends my earlier clear-ledger project with refreshed branding, a responsive and accessible UI, USD sample data, and rewritten documentation. Provider feeds are simulated."
      ]
    },
    {
      slug: "distributed-transaction-processing",
      title: "Scalable Distributed Transaction Processing System",
      status: "live" as const,
      projectLabel: "Systems project",
      featured: true,
      description: "A sharded Go ledger using Multi-Paxos and Two-Phase Commit, with a browser terminal for exploring failures, partitions, and recovery.",
      headline: "A sharded Go ledger with Multi-Paxos replication, Two-Phase Commit, and a browser terminal for exploring leader failure, network partitions, quorum loss, and recovery.",
      techLine: "Go · Multi-Paxos · 2PC · WebSocket",
      tech: ["Go", "Multi-Paxos", "2PC", "WebSocket"],
      repoUrl: "https://github.com/tusharpanthri/paxos-2pc-payments",
      liveUrl: "https://tusharpanthri.github.io/distributed-banking-system/",
      diagramImage: "distributed-transaction-processing.png",
      diagramAlt: "Distributed transaction processing topology with a central transaction engine connected to three server clusters.",
      details: [
        "Multi-Paxos replicates each shard; Two-Phase Commit coordinates transfers between shards. A WebSocket browser terminal exposes elections, votes, and recovery.",
        "Transport-level fault injection supports node failures and partitions. Tests cover reservations, idempotent transfers, replicated commits, and recovery.",
        "The browser control plane supports in-process and gRPC transports; the payment gateway coordinates transfers between replicated banks."
      ]
    },
    {
      slug: "byzantine-fault-tolerant-banking",
      title: "Byzantine Fault-Tolerant Banking System",
      status: "live" as const,
      projectLabel: "Systems project",
      featured: true,
      description: "Byzantine fault-tolerant banking backend in Go using linear-PBFT over gRPC, tolerating f faulty replicas in a 3f+1 cluster.",
      headline: "A Go banking backend using linear-PBFT over gRPC. It provides fault tolerance across a seven-node cluster serving ten concurrent clients while reducing per-request messages toward linear complexity.",
      techLine: "Go · PBFT · gRPC",
      tech: ["Go", "PBFT", "gRPC"],
      repoUrl: "https://github.com/tusharpanthri/distributed-banking-system",
      liveUrl: null,
      diagramImage: "byzantine-fault-tolerance.png",
      diagramAlt: "Byzantine fault-tolerant banking topology showing a protected central vault, healthy replicas, and an isolated faulty replica.",
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
