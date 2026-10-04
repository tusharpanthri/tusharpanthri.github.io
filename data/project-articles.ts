export interface ProjectArticle {
  title: string;
  subtitle: string;
  introduction: string[];
  takeaway: string;
  diagram: { title: string; steps: { label: string; detail: string }[]; caption: string };
  sections: { title: string; paragraphs: string[] }[];
  references: { title: string; url: string; note: string }[];
}

export const projectArticles: Record<string, ProjectArticle> = {
  'transaction-lens': {
    title: 'A suspicious transaction is the beginning of a question',
    subtitle: 'Building Transaction Lens: a review workspace that makes anomaly scores easier to inspect.',
    introduction: [
      'A payment arrives. The API returns a score. Now what? A number can rank a transaction, but it cannot tell a reviewer the whole story. The interesting engineering problem begins at that handoff: presenting enough context to investigate without making the model sound more certain than it is.',
      'Transaction Lens adapts an inherited anomaly detection project into a Streamlit workspace. My contribution centers on single-transaction assessment, bounded batch review, directional feature contributions, and explicit methodology notes. Original authorship and the public dataset attribution remain part of the project.'
    ],
    takeaway: 'An anomaly score is a prompt for investigation, not a verdict about a person.',
    diagram: {
      title: 'From transaction to review',
      steps: [
        { label: 'Transaction input', detail: 'Single record or bounded batch' },
        { label: 'Configured API', detail: 'Request assessment and receive scores' },
        { label: 'Review workspace', detail: 'Inspect scores and directional contributions' },
        { label: 'Human judgment', detail: 'Read context and methodology before deciding' }
      ],
      caption: 'The implemented review path. Dataset ingestion and fresh model training are separate from this flow.'
    },
    sections: [
      { title: 'A Pokédex entry is useful. It is not the whole battle.', paragraphs: [
        'In Pokémon, looking up a creature tells you something about its traits. It does not tell you everything about the encounter in front of you. An anomaly score has a similar limitation: it summarizes a pattern while leaving the surrounding circumstances for the reviewer to examine.',
        'That analogy guided the presentation. A reviewer should see the assessment alongside the inputs and the methodology, rather than treating a large score as an automatic accusation. Directional feature contributions help describe what pushed a score, but they do not establish causation or prove fraud.'
      ] },
      { title: 'Designing the handoff between API and reviewer', paragraphs: [
        'The dashboard gets its scores from the configured API. It does not substitute inherited demo scores when the service is unavailable. That choice keeps the interface tied to the system actually being reviewed: an attractive result is only useful if its provenance is clear.',
        'Single-transaction assessment supports focused inspection. Bounded batch review applies the same workflow to a manageable collection of records. Keeping review bounded also makes the interaction easier to reason about: the user can inspect the submitted set instead of losing individual cases inside a large aggregate.'
      ] },
      { title: 'The data story matters as much as the interface', paragraphs: [
        'The project uses the public ULB / Worldline credit card fraud benchmark, not a dataset I collected. Its transaction values are preserved. The adaptation also retains the inherited repository’s authorship rather than presenting the entire pipeline as original work.',
        'This distinction matters because a portfolio screenshot can hide the hardest questions: where the data came from, whether training leaked information, and whether the displayed results were freshly generated. The repository documents those boundaries rather than turning an inherited result into a new performance claim.'
      ] },
      { title: 'What is built, and what the evidence supports', paragraphs: [
        'The review workspace is developed. Separately, the repository reports that the full creditcard.csv is missing, fresh training and full pipeline verification are pending, and inherited training/evaluation code needs leakage corrections before results can be reported. Those limits concern model validation, not the existence of the review interface.',
        'The useful lesson is about epistemic humility: make the tool clear about what it knows. A score can help prioritize attention. Confidence in the complete system must come from a verified data and evaluation workflow, not from the polish of its dashboard.'
      ] }
    ],
    references: [
      { title: 'Transaction Lens — source and project status', url: 'https://github.com/tusharpanthri/transaction-lens', note: 'Implementation, attribution, setup, and documented validation boundaries.' },
      { title: 'ULB / Worldline credit card fraud benchmark', url: 'https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud', note: 'Public dataset source; consult its terms and attribution.' }
    ]
  },
  'ledger-match': {
    title: 'When two records tell different stories about the same payment',
    subtitle: 'Building LedgerMatch: confidence-based reconciliation, explained one discrepancy at a time.',
    introduction: [
      'Your ledger says $100. The payment provider says $97. Has money disappeared, or did a $3 processing fee explain the difference? Payment reconciliation starts with this deceptively simple question and becomes complicated when identifiers, dates, currencies, and missing records enter the picture.',
      'LedgerMatch is a developed local demo that compares internal payments with simulated Stripe, PayPal, and bank feeds. An async FastAPI service and PostgreSQL store power a React dashboard for inspecting candidate matches, confidence scores, and discrepancies. It builds on my earlier clear-ledger project.'
    ],
    takeaway: 'A useful reconciliation result explains both the match and the reason for disagreement.',
    diagram: {
      title: 'Two sources, one inspectable result',
      steps: [
        { label: 'Payment records', detail: 'Internal ledger + simulated provider tables' },
        { label: 'Matching engine', detail: 'Amount, fees, currency, identifiers, and date' },
        { label: 'Classification', detail: 'Matched, fee difference, missing, duplicate, or mismatch' },
        { label: 'React dashboard', detail: 'Inspect results, scoring, and trends' }
      ],
      caption: 'PostgreSQL preserves the source records; the FastAPI engine computes matches for the dashboard. Provider feeds are simulated.'
    },
    sections: [
      { title: 'Equivalent exchange, with a receipt', paragraphs: [
        'Fullmetal Alchemist makes equivalent exchange a memorable way to think about accounting: something given up should have a corresponding explanation. It is a metaphor here, not a financial rule. Real payments include fees, timing differences, and multiple currencies, so equal-looking numbers are not enough.',
        'The $100-to-$97 example captures the distinction. A naive equality check marks the records as inconsistent. A reconciliation engine can recognize a fee-adjusted match when the identifying fields and currency support it. The goal is to make the difference legible rather than silently forcing the records to agree.'
      ] },
      { title: 'Confidence is assembled from available evidence', paragraphs: [
        'LedgerMatch scores candidate pairs using amount, fees, currency, card or IBAN information, VAT, and date proximity. The match threshold is 65%, and the maximum score is normalized to the fields available for that comparison. Missing information therefore affects how the evidence is interpreted.',
        'The output distinguishes a clean match from a fee difference or amount mismatch. It also identifies internal payments with no external counterpart, provider records with no internal counterpart, and multiple possible matches. A confidence score is a matching heuristic; it is not a calibrated probability that a payment is correct.'
      ] },
      { title: 'Money needs an exact representation', paragraphs: [
        'Amounts are stored as integer minor units. A USD amount of $100.00 is represented as 10,000 cents, keeping ordinary amount comparisons away from floating-point rounding. Currency remains a separate part of the matching decision: equal integers in different currencies do not represent equal value.',
        'Provider records live in dedicated tables so their origins remain visible. The async API exposes reconciliation and summary endpoints, while the React and TypeScript frontend presents the records and their results. Docker Compose packages the local services, and seven n8n workflows support seeding, provider simulation, and reconciliation.'
      ] },
      { title: 'An experiment you can repeat', paragraphs: [
        'Seed the reference data, generate internal payments, simulate provider records, and run reconciliation. To demonstrate a missing external record, generate another internal payment and reconcile before simulating its provider counterpart. To demonstrate a missing internal record, add a simulated provider orphan.',
        'These scenarios are more useful than a dashboard filled only with green checks. Each deliberately creates a disagreement and lets the reader follow it through the matching engine into the result view. API tests use mocked database sessions, so their coverage should not be confused with verification of a live PostgreSQL deployment.'
      ] },
      { title: 'The boundary of the demo', paragraphs: [
        'The provider feeds are simulated. This application does not move money or connect to live payment providers. It also has no manual dispute workflow, CSV import, or schema migration system; startup creates missing tables rather than managing versioned migrations.',
        'Dashboard discrepancy totals combine currencies without exchange-rate conversion, so they cannot be interpreted as a single monetary loss. The engineering lesson is to keep every aggregate connected to its assumptions. Reconciliation becomes trustworthy when the explanation survives inspection, not simply when a match rate looks impressive.'
      ] }
    ],
    references: [
      { title: 'LedgerMatch — source and documentation', url: 'https://github.com/tusharpanthri/ledger-match', note: 'Scoring rules, demo workflow, architecture, tests, and limitations.' },
      { title: 'clear-ledger — earlier project', url: 'https://github.com/tusharpanthri/clear-ledger', note: 'The project LedgerMatch extends.' }
    ]
  },
  'distributed-transaction-processing': {
    title: 'The safest answer a banking system can give is sometimes “wait”',
    subtitle: 'A browser-driven distributed ledger built with Multi-Paxos and Two-Phase Commit.',
    introduction: [
      'A transfer touches two balances. On one machine, that sounds ordinary. Split those balances across replicated shards, kill a leader halfway through, and the problem becomes much more interesting: who can safely say the money moved?',
      'The paxos-2pc-payments repository turns that question into an observable experiment. A Go payment gateway coordinates transfers between replicated banks. A browser control plane runs a sharded ledger using the same Paxos engine, while a WebSocket terminal exposes writes, transfers, elections, partitions, and recovery.'
    ],
    takeaway: 'Replica agreement and cross-shard atomicity solve different problems. A transfer needs both.',
    diagram: {
      title: 'One transfer, two levels of agreement',
      steps: [
        { label: 'Browser terminal', detail: 'Transfer command through WebSocket gateway' },
        { label: '2PC coordinator', detail: 'Prepare both shards and collect their votes' },
        { label: 'Shard quorums', detail: 'Each shard replicates prepared state with Multi-Paxos' },
        { label: 'Decision delivery', detail: 'Commit on unanimous yes; otherwise abort' }
      ],
      caption: 'Cross-shard path. A same-shard transfer uses one replicated log entry and skips Two-Phase Commit.'
    },
    sections: [
      { title: 'Shadow clones do not automatically agree', paragraphs: [
        'Naruto’s shadow clones are a useful image for replication: several copies can do work, but the existence of copies does not specify how they agree on a shared history. A ledger needs an explicit rule for choosing the next entry and preserving it when leadership changes.',
        'Multi-Paxos supplies that rule within each shard. The leader wins a prepare round, then proposes writes at successive log slots. Ballots combine a round number and node identity so competing proposals remain ordered. Replicas apply entries in slot order, and a replacement leader adopts previously accepted work rather than inventing a conflicting history.'
      ] },
      { title: 'A majority is a safety condition', paragraphs: [
        'The quorum is a strict majority: n/2 + 1 using integer division. In a three-replica shard, two replicas can agree while one is unavailable. One survivor cannot confirm a new write alone, even if it still has all the data.',
        'That refusal is visible in the terminal. A network partition can leave every process running while no communicating group has a majority. Fault injection lives in the transport layer, so consensus observes failed calls rather than receiving a convenient announcement that a node has died.'
      ] },
      { title: 'Paxos inside a shard; Two-Phase Commit between them', paragraphs: [
        'Keys are assigned to shards by FNV-1a hash in the control plane. If both accounts share a shard, the transfer is a single replicated command. If they do not, the coordinator asks both shards to prepare; each shard’s prepared state must itself reach its Paxos quorum.',
        'Both yes votes allow a commit decision. Otherwise the coordinator aborts the participants and releases prepared work. The decision is recorded in process memory before delivery and retried when a participant returns. Replication establishes a shard’s history; the coordinator connects the two histories into one transaction outcome.'
      ] },
      { title: 'The bug that a happy-path demo would miss', paragraphs: [
        'The repository documents a convergence bug where a replica could apply a locally accepted value that was never chosen. An old leader stranded in a minority can still hold such an entry. Catch-up must copy the leader’s chosen entries instead of trusting that stale local copy; a partition regression test reproduces this failure mode.',
        'Transaction IDs and duplicate suppression matter because losing a reply does not prove a payment never settled. The payment system issues IDs through a separate service and records settled transfers in the banks’ ledgers. A retry keeps the same identity instead of becoming a second payment.'
      ] },
      { title: 'Testing promises instead of appearances', paragraphs: [
        'The repository’s tests cover reservations preventing overdrafts, replayed transfers applying once, idempotent commits, aborts releasing funds, and ledger recovery. Replication tests exercise a leader crashing after a commit, while Paxos tests cover elections, partitions, and log recovery. These are documented checks, not new benchmarks performed for this article.',
        'The browser control plane supports in-process transport and real gRPC replica processes. Check-quorum makes a minority leader step down, allowing the majority side to elect a replacement. The payment gateway still lacks a coordinator write-ahead log; its CSV storage and float64 monetary representation are further documented limits. The browser ledger uses integer balances.'
      ] },
      { title: 'Knowing when you do not know', paragraphs: [
        'A failed request may still be adopted and committed by a later leader. That is an uncomfortable interface property, but a truthful one: without a quorum, the caller may not know the outcome. An outcome registry would be needed to turn that uncertainty into an explicit queryable contract.',
        'The philosophical thread is restraint under incomplete knowledge. Refusing a write can look like failure on a dashboard while protecting the ledger’s most important property. Availability is valuable, but an available answer that invents certainty about money is a worse result.'
      ] }
    ],
    references: [
      { title: 'Paxos + 2PC Payments — implementation and recorded demos', url: 'https://github.com/tusharpanthri/paxos-2pc-payments', note: 'Replicated banks, payment gateway, browser control plane, tests, and limits.' },
      { title: 'Paxos Made Simple — Leslie Lamport', url: 'https://lamport.azurewebsites.net/pubs/paxos-simple.pdf', note: 'Primary reference for Paxos consensus and its safety argument.' },
      { title: 'Paxos in plain English — MyDistributed.Systems', url: 'https://www.mydistributed.systems/2021/04/paxos.html', note: 'A walkthrough of consensus, Paxos phases, and pseudocode.' }
    ]
  },
  'byzantine-fault-tolerant-banking': {
    title: 'What if the replica answering you is lying?',
    subtitle: 'A banking systems case study in PBFT, quorum evidence, and the limits of trust.',
    introduction: [
      'A crashed server is silent. A Byzantine server can be much harder to handle: it can send conflicting messages, fabricate an answer, or cooperate with one participant while misleading another. Replication alone does not protect a ledger from those behaviors.',
      'This Go banking project explores linear-PBFT over gRPC in a seven-replica cluster serving ten concurrent clients. Its core concern is agreement under faulty replicas, through pre-prepare, prepare, commit, and view-change phases. The project summary is the source for its implementation description; the original PBFT paper grounds the protocol discussion below.'
    ],
    takeaway: 'Trust comes from compatible evidence across replicas, not from the confidence of one reply.',
    diagram: {
      title: 'From proposal to an agreed operation',
      steps: [
        { label: 'Client request', detail: 'Submit a banking operation to the primary' },
        { label: 'Pre-prepare', detail: 'Propose an ordering for the operation' },
        { label: 'Prepare + commit', detail: 'Replicas establish evidence for agreement' },
        { label: 'Execute + reply', detail: 'Apply the agreed operation; client checks replies' }
      ],
      caption: 'Conceptual PBFT flow, not an exact message-routing diagram of this linear variant. View change replaces a faulty primary.'
    },
    sections: [
      { title: 'The unreliable narrator becomes a server', paragraphs: [
        'An unreliable narrator in fiction can offer a coherent story that disagrees with everyone else’s. A Byzantine replica creates a similar problem for a system: a well-formed response need not be honest, and different recipients may receive different stories.',
        'This is a different failure model from the Paxos project. There, the model concerns processes stopping and messages being delayed or lost. Here, the protocol must preserve agreement even when some participants actively misbehave. The analogy explains the threat; quorum rules and protocol evidence provide the actual protection.'
      ] },
      { title: 'Why seven replicas is a meaningful number', paragraphs: [
        'PBFT uses at least 3f + 1 replicas to tolerate f Byzantine faults under its assumptions. A seven-replica configuration therefore corresponds to a fault budget of two. This does not mean the system tolerates arbitrary numbers of dishonest nodes or remains responsive under every network condition.',
        'The project uses pre-prepare, prepare, and commit phases to move from a primary’s proposal toward an agreed operation. View change handles leadership replacement. Safety means correct replicas do not disagree on the ordered result; liveness concerns eventual progress and depends on the protocol’s timing and communication assumptions.'
      ] },
      { title: 'Reducing messages without reducing the evidence', paragraphs: [
        'The project summary describes a linear-PBFT variant intended to move per-request message traffic toward linear complexity. That is the architectural aim, not a benchmark reported here. A complete claim needs the exact message paths, certificate construction, and fault scenarios of the implementation.',
        'The optimization question is subtle: a smaller number of messages is only useful if the remaining messages still establish the evidence needed for agreement and leadership recovery. Reducing normal-case communication does not automatically make every phase, especially view change, linear.'
      ] },
      { title: 'The interesting tests are the dishonest ones', paragraphs: [
        'A useful verification plan would have a primary send conflicting proposals, a replica withhold messages, and clients submit overlapping transfers while leadership changes. Correct replicas should preserve an identical committed order; progress should resume when the protocol assumptions hold again.',
        'Those are the failure scenarios the design should be judged against, not newly claimed test results. The portfolio summary describes the seven-node and ten-client setup. The project’s repository is linked above; a reproducible benchmark report would be needed to substantiate performance claims.'
      ] },
      { title: 'Skepticism, made operational', paragraphs: [
        'Philosophical skepticism asks what justifies a belief. A fault-tolerant ledger asks a narrower and executable version: what evidence justifies applying this operation? One server’s assertion is insufficient when that server may be faulty.',
        'The engineering payoff is a precise boundary around trust. Instead of assuming every replica is honest, the protocol states how many faults it tolerates and what agreement requires. The system becomes easier to reason about when those assumptions remain visible alongside the implementation.'
      ] }
    ],
    references: [
      { title: 'Distributed Banking System — project repository', url: 'https://github.com/tusharpanthri/distributed-banking-system', note: 'Source repository for this banking project.' },
      { title: 'Practical Byzantine Fault Tolerance — Miguel Castro and Barbara Liskov', url: 'https://www.usenix.org/conference/osdi-99/practical-byzantine-fault-tolerance', note: 'Original PBFT paper; protocol phases, fault assumptions, and recovery.' }
    ]
  }
};
