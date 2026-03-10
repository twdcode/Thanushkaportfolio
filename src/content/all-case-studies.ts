// Centralized case study data source
// This structure mirrors what will come from Sanity.io CMS in the future
// Each case study object contains complete detail data indexed by slug

export const allCaseStudies = [
  {
    "slug": "denial-automation",
    "id": "denial-automation",
    "title": "Denial Automation Suite: Designing Automation to Improve Revenue Recovery",
    "subtitle": "Reducing manual work and improving claim resolution efficiency through intelligent automation",
    "topic": "Denial Automation Suite",
    "client": "HealthRecon Connect",
    "role": "UX Engineer",
    "duration": "Feb 2025 - March",
    "year": "2025",
    "tags": ["RCM", "AI Automation", "Dashboard Design", "Healthcare", "Leadership"],
    "executiveSummary": "Revenue Cycle Management (RCM) teams were spending large amounts of time manually reviewing and categorising denied claims, slowing resolution and increasing the risk of revenue leakage. Working with the Product, Engineering, and Operations teams, we developed a Denial Automation Suite to automate predictable denial scenarios and prioritise claims based on financial impact. My role focused on understanding analyst workflows, visualising operational problems, and translating user needs into product interactions that supported automation without disrupting existing processes.",
    "hero": {
      "image": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/denial-automation/da-01-hero.webp?raw=true",
      "alt": "Denial Automation Suite Dashboard Overview"
    },
    "overview": {
      "challenge": "After the surge in healthcare demand following COVID, RCM teams were required to manage thousands of denied claims using largely manual workflows. Analysts often spent hours organising claims before beginning actual resolution work. This created several operational challenges. High-value claims were frequently buried within routine administrative tasks, work queues were difficult to prioritise, and missed deadlines increased the risk of preventable write-offs.",
      "solution":"The team developed a Denial Automation Suite designed to act as an intelligent operational workspace for analysts. The platform introduces automated denial categorisation, revenue-based claim prioritisation, and automation for predictable denial scenarios. My contribution focused on mapping analyst workflows, identifying points where automation could reduce friction, and designing the interaction model that allowed analysts to trust and adopt the automated system."
    },
    "sections": [
      {
        "type": "outcomes",
        "heading": "Impact Metrics",
        "metrics": [
          {
            "value": "65%",
            "label": "Reduction in Manual Review Time",
            "description": "Automation significantly reduced the time analysts spent categorising and triaging claims"
          },
          {
            "value": "40%",
            "label": "Increase in Claim Recovery Rate",
            "description": "Revenue-based prioritisation helped teams address high-value claims earlier in the workflow"
          },
          {
            "value": "90%",
            "label": "Analyst Satisfaction",
            "description": "RCM analysts reported strong adoption and positive feedback after the workflow redesign"
          },
          {
            "value": "Zero",
            "label": "Preventable Write-offs",
            "description": "Prioritisation logic ensured high-risk claims were resolved before expiration. Metrics derived from internal operational dashboards after approximately one year of product usage"
          }
        ]
      },
      {
        "type": "business-challenge",
        "heading": "The Strategic Foundation",
        "context": "Post-COVID healthcare demand placed considerable pressure on RCM operations. Teams relied on manual workflows to process large volumes of denied claims, which made work queues difficult to prioritise and caused critical claims to be overlooked. Analysts frequently spent more time organising work than resolving issues, reducing productivity and delaying revenue recovery.",
        "businessRisk": "Without automation, the organisation faced two major risks. Claims could expire before analysts reviewed them, resulting in revenue leakage. At the same time, repetitive operational tasks created high cognitive load and increased the risk of analyst burnout.",
        "goalStatement": "The goal of the initiative was to help the organisation move from reacting to denial issues toward resolving them proactively. The system needed to prioritise claims based on revenue impact, reduce manual administrative work, and support analysts in focusing on claim resolution rather than operational triage."
      },
      {
        "type": "team-leadership",
        "heading": "Leadership & Team Orchestration",
        "myRole": "UX Engineer – My role extended beyond interface design. I analysed analyst workflows, identified operational bottlenecks, and translated complex RCM processes into product requirements and interaction models. I also worked closely with product managers and engineers to ensure the automation features aligned with real operational needs while remaining technically feasible.",
        "squad": [
          {
            "role": "Product Manager",
            "description": "Defined revenue and compliance objectives"
          },
          {
            "role": "2 AI Engineers",
            "description": "Developed the automation logic"
          },
          {
            "role": "4 RCM Analysts",
            "description": "Provided domain expertise and validated workflows"
          }
        ],
        "cultureTransformation": "The initiative supported a broader shift toward automation-first operations. By reducing repetitive tasks, analysts were able to focus more on investigation, resolution, and decision-making."
      },
      {
        "type": "research-findings",
        "heading": "Critical Discovery Findings",
        "methodology": "To understand operational bottlenecks in denial management, I conducted more than fifteen stakeholder interviews and observed workflow sessions with billing managers and RCM analysts. These sessions helped reveal where automation could deliver the greatest operational impact.",
        "findings": [
          {
            "title": "Analysis Paralysis",
            "description": "Analysts spent nearly four hours each day categorising claims before beginning resolution work.",
            "strategicShift": "Allow the system to automatically categorise denials so analysts can focus on resolving issues rather than organising tasks."
          },
          {
            "title": "Hidden Trends",
            "description": "Manual tracking systems made it difficult to identify recurring denial patterns across large datasets.",
            "strategicShift": "Introduce visual pattern analysis to reveal recurring denial causes and help teams address them earlier in the revenue cycle."
          }
        ]
      },
      {
        "type": "design-decisions",
        "heading": "The Redesigned Experience",
        "solutionOverview": "The redesigned platform functions as an automation and prioritisation workspace for denial management. It combines AI-assisted categorisation, automated handling of predictable denial types, and work queues prioritised by revenue value and urgency. Rather than replacing analysts, the system acts as a decision-support tool that directs attention toward high-impact work while automation manages routine operational tasks.",
        "decisions": [
          {
            "title": "Key Design Decision 01: Clarity over Complexity",
            "context": "RCM datasets are dense and often overwhelming for analysts. Displaying every available data point created cognitive overload.",
            "decision": "To address this, I applied progressive disclosure so that the interface initially displays only the information required for decision-making, while additional details remain accessible when needed.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/denial-automation/da-02-d1.webp?raw=true",
            "imageAlt": "Dashboard showing progressive disclosure design"
          },
          {
            "title": "Key Design Decision 02: Actionable Intelligence First",
            "context": "Analysts previously struggled to determine which claim should be handled next.",
            "decision": "I introduced a Smart Prioritisation Queue that ranks claims based on revenue value and claim expiry deadlines, ensuring analysts consistently focus on the most financially critical work.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/denial-automation/da-03-d2.webp?raw=true",
            "imageAlt": "Smart prioritization queue interface"
          },
          {
            "title": "Key Design Decision 03: Automated Categorisation",
            "context": "Manual tagging created inconsistent data because different analysts categorised the same denial in different ways.",
            "decision": "To address this, AI-based pattern recognition automatically categorises denials into standardised groups such as Coding Error, Eligibility Issue, and Authorisation Failure, improving reporting accuracy and operational insights.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/denial-automation/da-04-d3.webp?raw=true",
            "imageAlt": "AI-powered automatic categorization system"
          }
        ]
      },
      {
        "type": "reflection",
        "heading": "Leadership Evolution & Retrospective",
        "strategicLearning": "In complex B2B healthcare systems, trust is a critical UX factor. Initially, analysts were hesitant to rely on AI recommendations because they could not see how the system made decisions. Introducing explainable automation helped users understand why claims were prioritised or categorised in certain ways, increasing confidence in the system.",
        "leadershipGrowth": "This project expanded my role from interface design into operational workflow design. It strengthened my ability to translate user insights into product improvements and align UX decisions with measurable business outcomes."
      }
    ],
    "nextProject": {
      "title": "Orchestrating Scale",
      "slug": "design-system-migration"
    }
  },
  {
    "slug": "design-system-migration",
    "id": "design-system-migration",
    "title": "Design System Migration: From Styles to Token Architecture",
    "subtitle": "Leading the transition from static Figma styles to a token-based architecture to enable scalable design systems and AI-assisted development workflows.",
    "topic": "Design Systems & Operations",
    "client": "[Your Company Name]",
    "role": "Lead Product Designer / Design Ops Lead",
    "duration": "Ongoing (Current Initiative)",
    "year": "2026",
    "tags": ["Design Strategy", "Design Tokens", "Team Leadership", "AI Workflows", "Scalability"],
    "executiveSummary": "The existing design system relied on static Figma styles, creating a structural gap between design and engineering. I am leading the migration to a variable and token-based architecture that introduces primitive and semantic token layers. The initiative focuses on building a scalable system foundation that supports automation and AI-assisted design-to-development workflows.",
    "hero": {
      "image": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/design-system-migration/ds-01-hero.webp?raw=true",
      "alt": "Design System Migration and Token Architecture"
    },
    "overview": {
      "challenge": "The existing design system relied on static Figma styles rather than tokens. This created several operational challenges: weak structural alignment between design and engineering, only a portion of the design system existed in production code, no semantic logic behind design decisions, and increasing difficulty scaling the system across products. Without token logic, the design system risked becoming a bottleneck rather than a platform for scaling product development.",
      "solution": "I am leading the transition from style-based design to a tokenized architecture. The migration introduces three foundational layers: primitive tokens, semantic tokens, and system logic that supports automation. This structure enables a scalable, programmable design system capable of supporting AI-assisted design-to-development workflows."
    },
    "sections": [
      {
        "type": "outcomes",
        "heading": "Impact Metrics (Projected/Early Wins)",
        "metrics": [
          {
            "value": "100%",
            "label": "Semantic Alignment",
            "description": "Global color and typography themes converted into semantic variables"
          },
          {
            "value": "50%",
            "label": "Faster Handoff",
            "description": "Projected reduction in development time through AI-assisted component generation"
          },
          {
            "value": "0 → 1",
            "label": "AI Workflow",
            "description": "Introducing the team's first direct-to-code workflow using Cursor and Antigravity"
          },
          {
            "value": "Scale",
            "label": "Source of Truth",
            "description": "Establishing a design system capable of supporting multi-theme product ecosystems"
          }
        ]
      },
      {
        "type": "business-challenge",
        "heading": "The Strategic Foundation",
        "context": "When I joined, the design system already existed but was fragmented. The system prioritized visual consistency through styles rather than structural logic through tokens. Initially, the component library was expanded to support immediate product needs. However, it became clear that the underlying architecture would not support long-term platform growth.",
        "businessRisk": "Technical Debt & Product Velocity: Continuing with static styles creates linear growth problems. Theme updates require manual reconstruction, UI inconsistencies increase across products, and development velocity slows as complexity grows.",
        "goalStatement": "Transform the visual component library into a programmable design system that behaves like an API for design. This enables automated implementation, consistent scaling, and cross-product reliability."
      },
      {
        "type": "team-leadership",
        "heading": "Leadership & Team Orchestration",
        "myRole": "Lead Product Designer / Design Ops Lead – I act as the bridge between design ambition and technical feasibility. Key responsibilities include designing the system architecture, defining the migration strategy, and aligning design and engineering teams. The role focuses on designing the system behind the components, not only the UI itself.",
        "squad": [
          {
            "role": "Engineering Lead",
            "description": "Partnering to align Figma variables with production code implementation"
          },
          {
            "role": "Design Team",
            "description": "Transitioning from visual design workflows to token-based system thinking"
          }
        ],
        "cultureTransformation": "This initiative is shifting the team mindset from designing pages to designing systems. Key focus areas include semantic naming conventions, design abstraction and system logic, and preparing the team for AI-assisted implementation workflows."
      },
      {
        "type": "research-findings",
        "heading": "Critical Discovery Findings",
        "methodology": "A comprehensive design system audit was conducted to evaluate how design assets and components were structured within the system. The new variable architecture is currently being validated by converting the primary theme first.",
        "findings": [
          {
            "title": "Visuals vs. Logic",
            "description": "Developers frequently relied on raw color values because styles lacked semantic meaning. Example: 'Blue' used instead of 'Primary / Action'. This made the system difficult to maintain and scale.",
            "strategicShift": "Move from a library of visual styles to a database of design decisions."
          },
          {
            "title": "The AI Opportunity",
            "description": "Static styles are difficult for AI tools to interpret. Variables provide structured data that AI coding tools can understand. This structure is essential for tools such as Cursor.",
            "strategicShift": "Structure Figma data so it becomes machine-readable."
          }
        ]
      },
      {
        "type": "design-decisions",
        "heading": "The Redesigned System",
        "solutionOverview": "The new architecture uses Figma Variables to manage core design logic. Key foundations include theme logic, spacing systems, border radius scales, and semantic color layers. This structure becomes the blueprint for AI-assisted development.",
        "decisions": [
          {
            "title": "Decision 01: Semantic Variables over Styles",
            "context": "The previous system relied on raw values such as hex codes. This made updates slow and error-prone.",
            "decision": "Introduce a semantic token layer such as Surface / Default, Surface / Elevated, Text / Primary, and Text / Subdued. This separates design intent from raw values, allowing themes to update instantly.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/design-system-migration/ds-02-d1.webp?raw=true",
            "imageAlt": "Diagram showing the shift from styles to semantic variables"
          },
          {
            "title": "Decision 02: AI-Ready Component Architecture",
            "context": "Developers spent significant time manually translating UI components into code.",
            "decision": "Structure Figma components so that AI tools can interpret them directly. Target outcome: Automated Figma → React component generation using Antigravity and Cursor.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/design-system-migration/ds-03-d2.webp?raw=true",
            "imageAlt": "Architecture of AI-ready components"
          },
          {
            "title": "Decision 03: Incremental Migration Strategy",
            "context": "Product development cannot pause while the system is rebuilt.",
            "decision": "Adopt a 'Main Theme First' migration strategy. Steps include: (1) Convert core foundations (color and typography) into variables, (2) Maintain legacy components during the transition, (3) Gradually refactor components to token-based logic. This approach allows the system to modernize while preserving product delivery speed.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/design-system-migration/ds-04-d3.webp?raw=true",
            "imageAlt": "Visual map of the incremental migration strategy"
          }
        ]
      },
      {
        "type": "reflection",
        "heading": "Leadership Evolution & Retrospective",
        "strategicLearning": "A design system behaves like a product rather than a one-time project. It requires a clear roadmap, stakeholder alignment, and continuous iteration. The transition to variables represented more than a tooling update. It fundamentally changed how design and engineering collaborate.",
        "leadershipGrowth": "This initiative expanded my role from an individual contributor to a technical design leader. My focus now includes design system health, design scalability, development efficiency, and long-term platform sustainability."
      }
    ],
    "nextProject": {
      "title": "Automating Client Onboarding",
      "slug": "client-onboarding"
    }
  },
  {
    "slug": "client-onboarding",
    "id": "client-onboarding",
    "title": "Streamlining Client Onboarding and Access Management with ONE HRC 1.1",
    "subtitle": "Transforming Fragmented Operations into a Unified Self-Service Ecosystem",
    "topic": "Enterprise Onboarding Platform",
    "client": "HealthRecon Connect",
    "role": "UX Designer",
    "duration": "July 2024 - Feb 2025",
    "year": "2024-2025",
    "tags": ["Automation", "Enterprise", "Onboarding", "SaaS", "Leadership"],
    "executiveSummary": "After joining the company in June 2024, I began connecting with colleagues and clients to understand how onboarding worked in practice. Early conversations during the company's annual cricket event surfaced recurring frustrations around onboarding delays and complex access management. To investigate further, I conducted cross-department interviews with Sales, Operations, and Technical Transition teams, mapping the end-to-end onboarding workflow and identifying major operational bottlenecks. The research revealed a fragmented process driven by emails, spreadsheets, and disconnected internal tools. As the organisation began scaling toward enterprise clients, these workflows became difficult to sustain.",
    "hero": {
      "image": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/client-onboarding/co-01-hero.webp?raw=true",
      "alt": "Client Onboarding Platform Interface"
    },
    "overview": {
      "challenge": "Post-COVID market acceleration exposed critical limitations in the existing client management infrastructure. Legacy processes that worked for 20-30 clients became unsustainable when scaling toward 100+ enterprise clients. Operational limitations included heavy reliance on email communication, fragmented onboarding steps across teams, lack of centralized access management, and client data scattered across multiple systems. Client information was spread across spreadsheets, email threads, and shared folders. Operational teams manually verified data, requested documents, and coordinated access permissions through several disconnected systems.",
      "solution": "To address these challenges, the UX team designed a digital onboarding ecosystem consisting of three integrated platform components. I conducted the initial research, mapped key workflows, and designed the primary interface experiences that shaped the platform architecture. The system separates responsibilities across three applications: internal client onboarding operations, client self-service onboarding, and centralized role-based access management. This architecture ensures each user group interacts with workflows designed specifically for their responsibilities."
    },
    "sections": [
      {
        "type": "outcomes",
        "heading": "Quantified User Outcomes",
        "metrics": [
          {
            "value": "100%",
            "label": "Operational Efficiency",
            "description": "Elimination of spreadsheet-based onboarding workflows with centralized client data management across departments"
          },
          {
            "value": "Self-Service",
            "label": "Document Management",
            "description": "Clients upload documents directly instead of sending email attachments while organisations manage their own users and access permissions"
          },
          {
            "value": "Real-Time",
            "label": "Workflow Visibility",
            "description": "Onboarding progress visible in real time for both internal teams and clients"
          },
          {
            "value": "RBAC",
            "label": "Access Simplification",
            "description": "Role-based permissions replace manual template management. Performance metrics will be validated after full deployment once the platform is operational across enterprise onboarding workflows"
          }
        ]
      },
      {
        "type": "business-challenge",
        "heading": "The Strategic Foundation",
        "context": "Market demand after COVID significantly accelerated enterprise client growth expectations. However, the organisation's onboarding infrastructure was not designed for this scale. Manual processes that once supported a limited number of clients created major operational barriers as the company attempted to expand to enterprise-level onboarding capacity.",
        "businessRisk": "Two major risks emerged. Scalability Blockers: Manual coordination across teams slowed onboarding and limited the organisation's ability to scale client acquisition. Revenue Threat: Delayed onboarding directly affected client activation timelines and revenue recognition.",
        "goalStatement": "Transform fragmented onboarding operations into a unified self-service platform capable of supporting 10× client capacity growth while maintaining high service quality."
      },
      {
        "type": "team-leadership",
        "heading": "Leadership & Team Orchestration",
        "myRole": "UX Designer – This initiative originated from UX research I conducted across multiple departments to understand onboarding and access-management workflows. My responsibilities included conducting cross-department interviews and workflow analysis, mapping onboarding journeys and operational workflows, developing the initial product proposal, securing business alignment for the new platform direction, and leading solution design with a junior UX designer. I also facilitated weekly stakeholder sessions to ensure alignment between operational requirements, engineering feasibility, and product priorities.",
        "squad": [
          {
            "role": "Product Owner",
            "description": "Defined product priorities and roadmap"
          },
          {
            "role": "Business Analyst",
            "description": "Translated operational workflows into structured product requirements"
          },
          {
            "role": "2 Developers",
            "description": "Implemented the platform architecture"
          },
          {
            "role": "QA Engineer",
            "description": "Ensured system reliability and testing coverage"
          }
        ],
        "cultureTransformation": "This project introduced user-centered design thinking to teams that previously focused primarily on operational processes. The organisational mindset shifted from following requirements to solving user problems. Close collaboration with Sales and Operations teams ensured the platform addressed real workflow challenges rather than theoretical product requirements."
      },
      {
        "type": "research-findings",
        "heading": "Critical Discovery Findings",
        "methodology": "A multi-method research approach was used to identify friction points. Activities included stakeholder interviews across Sales, Operations, and Technical Transition teams, user surveys, heuristic evaluations of internal systems, and onboarding journey mapping workshops. These activities helped visualise operational dependencies and identify where automation would create the most impact.",
        "findings": [
          {
            "title": "Manual Bottlenecks",
            "description": "Administrators spent approximately 30% of their time correcting manual entry errors caused by email-based data collection and spreadsheet workflows.",
            "strategicShift": "Automate data intake workflows and centralize client information within a unified platform."
          },
          {
            "title": "Permission Paralysis",
            "description": "Role-based access configuration was the most confusing step for both internal teams and clients. The lack of centralized access management created operational delays and increased support requests.",
            "strategicShift": "Introduce a centralized role-based access management system to simplify permissions and reduce dependency on Technical Transition teams."
          }
        ]
      },
      {
        "type": "design-decisions",
        "heading": "The Redesigned Experience",
        "solutionOverview": "The redesigned platform functions as an integrated onboarding ecosystem consisting of three applications: Client Onboard App, Client Portal, and Settings Platform (RBAC). Together, these systems allow organisations to onboard their teams digitally, manage documents and agreements, configure roles and permissions, and track onboarding progress. All tasks can now be completed within the platform instead of through manual communication channels.",
        "decisions": [
          {
            "title": "Key Design Decision 01: Workflow Transformation",
            "context": "Onboarding previously depended on manual coordination across email threads, spreadsheets, and Jira tickets. Multiple teams handled sequential tasks, making the process slow and difficult to track.",
            "decision": "Redesign the onboarding journey into a unified platform workflow. Client onboarding, document submission, and access configuration are now managed through integrated applications rather than disconnected tools. This new architecture transforms onboarding from a fragmented manual process into a structured digital workflow with shared visibility across teams.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/client-onboarding/co-04-d4.webp?raw=true",
            "imageAlt": "Unified platform workflow architecture"
          },
          {
            "title": "Key Design Decision 02: Automating Data Intake",
            "context": "Users struggled with long static forms and fragmented data collection across emails and spreadsheets.",
            "decision": "Replace manual onboarding forms with structured digital workflows that guide users step-by-step and validate data in real time.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/client-onboarding/co-03-d2.webp?raw=true",
            "imageAlt": "Structured digital workflow with real-time validation"
          },
          {
            "title": "Key Design Decision 03: Centralized Permissions",
            "context": "Access management was fragmented across multiple tools and templates.",
            "decision": "Design a centralized RBAC system allowing administrators to manage user roles and permissions from a single interface.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/client-onboarding/co-04-d3.webp?raw=true",
            "imageAlt": "Centralized RBAC management interface"
          },
          {
            "title": "Key Design Decision 04: Transparency Through Tracking",
            "context": "Clients had no visibility into onboarding progress, which increased support inquiries.",
            "decision": "Introduce a real-time onboarding progress tracker showing completed steps and upcoming tasks.",
            "imageUrl": "https://github.com/twdcode/Thanushkaportfolio/blob/main/public/assets/images/case-studies/client-onboarding/co-02-d1.webp?raw=true",
            "imageAlt": "Real-time onboarding progress tracking interface"
          }
        ]
      },
      {
        "type": "reflection",
        "heading": "Leadership Evolution & Retrospective",
        "strategicLearning": "Working within legacy infrastructure required balancing modern UX practices with technical constraints. Early collaboration with engineering teams ensured that proposed workflows were technically feasible and scalable.",
        "leadershipGrowth": "This initiative strengthened several leadership capabilities. Strategic Vision Communication: Improved ability to translate operational insights into product strategy. Change Management: Guided teams through the transition from manual onboarding workflows to a digital onboarding ecosystem."
      }
    ],
    "nextProject": {
      "title": "Denial Automation Suite",
      "slug": "denial-automation"
    }
  }
];

// Helper function to get a case study by slug
// This mimics how you would fetch from Sanity: client.fetch(`*[_type == "caseStudy" && slug.current == $slug][0]`, { slug })
export function getCaseStudyBySlug(slug: string) {
  return allCaseStudies.find(study => study.slug === slug) || null;
}

// Helper function to get all case studies
// This mimics: client.fetch(`*[_type == "caseStudy"]`)
export function getAllCaseStudies() {
  return allCaseStudies;
}