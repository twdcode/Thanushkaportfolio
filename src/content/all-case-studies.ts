
// Centralized case study data source
// This structure mirrors what will come from Sanity.io CMS in the future
// Each case study object contains complete detail data indexed by slug

export const allCaseStudies = [
  {
    "slug": "denial-automation",
    "id": "denial-automation",
    "title": "Recovering Lost Revenue through Intelligent Automation",
    "subtitle": "Transforming Revenue Cycle Management from Data Entry to Revenue Strategy",
    "topic": "Denial Automation Suite",
    "client": "Healthcare RCM Provider",
    "role": "Lead UX Engineer",
    "duration": "June 2024 - Present",
    "year": "2024",
    "tags": ["RCM", "AI Automation", "Dashboard Design", "Healthcare", "Leadership"],
    "executiveSummary": "Following my joining in June 2024, I identified that manual denial resolution was costing the client millions in unrecovered revenue. Analysts were overwhelmed by high-volume claims, leading to preventable write-offs. I architected an AI-driven automation suite that transformed the team from \"data entry\" to \"revenue strategy.\"",
    "hero": {
      "image": "/assets/images/case-studies/denial-automation/da-01-cover.webp",
      "alt": "Denial Automation Suite Dashboard Overview"
    },
    "overview": {
      "challenge": "Post-COVID healthcare demands surged, but Revenue Cycle Management (RCM) teams were drowning in legacy manual workflows handling thousands of denied claims. High-value claims were often lost in the noise, leading to revenue leakage and analyst burnout.",
      "solution":"I architected an AI-powered automation suite that acts as an intelligent co-pilot, prioritizing work based on revenue impact rather than date received, with automated categorization and predictive denial prevention.",
      "impact": [
        "65% – Reduction in manual claim review time",
        "40% – Increase in successful claim recoveries",
        "90% – User adoption & satisfaction rate",
        "Zero – Preventable write-offs due to missed deadlines"
      ]
    },
    "sections": [
      {
        "type": "outcomes",
        "heading": "Impact Metrics",
        "metrics": [
          {
            "value": "65%",
            "label": "Time Reduction",
            "description": "Reduction in manual claim review time"
          },
          {
            "value": "40%",
            "label": "Recovery Increase",
            "description": "Increase in successful claim recoveries"
          },
          {
            "value": "90%",
            "label": "User Satisfaction",
            "description": "User adoption & satisfaction rate"
          },
          {
            "value": "Zero",
            "label": "Missed Deadlines",
            "description": "Preventable write-offs due to missed deadlines"
          }
        ]
      },
      {
        "type": "business-challenge",
        "heading": "The Strategic Foundation",
        "context": "Post-COVID healthcare demands surged, but our Revenue Cycle Management (RCM) teams were drowning. They used legacy manual workflows to handle thousands of denied claims, leading to a chaotic process where high-value claims were often lost in the noise.",
        "businessRisk": "Without automation, the business faced a dual threat: Revenue Leakage (claims were expiring before analysts could touch them) and Analyst Burnout (high turnover due to repetitive, low-value manual tasks).",
        "goalStatement": "To pivot the organization from \"managing denials\" to \"preventing them\" by building a predictive, intelligent workspace."
      },
      {
        "type": "team-leadership",
        "heading": "Leadership & Team Orchestration",
        "myRole": "Lead UX Engineer – I didn't just design screens; I led the end-to-end product strategy. I facilitated workshops to secure business buy-in for AI automation and bridged the gap between complex RCM rules and engineering constraints.",
        "squad": [
          {
            "role": "Product Manager",
            "description": "Defined revenue targets and compliance needs"
          },
          {
            "role": "2 AI Engineers",
            "description": "Implemented the predictive denial logic and backend"
          },
          {
            "role": "4 RCM Analysts",
            "description": "Subject Matter Experts (SMEs) used for validation"
          }
        ],
        "cultureTransformation": "I shifted the engineering mindset from \"building features\" to \"solving revenue problems.\" We moved from waterfall requirements to iterative, user-validated releases."
      },
      {
        "type": "research-findings",
        "heading": "Critical Discovery Findings",
        "methodology": "Conducted 15+ stakeholder interviews and workflow observation sessions with billing managers to understand the root cause of delays.",
        "findings": [
          {
            "title": "Analysis Paralysis",
            "description": "Analysts spent 4 hours a day just categorizing claims before they even started fixing them.",
            "strategicShift": "We need AI to handle the categorization so humans can focus on resolution."
          },
          {
            "title": "Hidden Trends",
            "description": "Systemic payer issues (e.g., \"BlueCross keeps rejecting Code X\") were invisible in manual logs.",
            "strategicShift": "We must visualize patterns to stop future denials at the source."
          }
        ]
      },
      {
        "type": "design-decisions",
        "heading": "The Redesigned Experience",
        "solutionOverview": "An AI-Powered Denial Automation Suite that acts as an intelligent co-pilot, prioritizing work based on revenue impact rather than date received.",
        "decisions": [
          {
            "title": "Key Design Decision 01: Clarity over Complexity",
            "context": "RCM data is dense and overwhelming.",
            "decision": "I utilized Progressive Disclosure to hide 80% of the data initially, showing only the actionable fields required to make a decision.",
            "imageUrl": "/assets/images/case-studies/denial-automation/da-02-d1.webp",
            "imageAlt": "Dashboard showing progressive disclosure design"
          },
          {
            "title": "Key Design Decision 02: Actionable Intelligence First",
            "context": "Analysts didn't know which claim to pick next.",
            "decision": "Created a \"Smart Prioritization\" queue that ranks claims by Revenue Value and Expiry Date, removing the cognitive load of choice.",
            "imageUrl": "/assets/images/case-studies/denial-automation/da-03-d2.webp",
            "imageAlt": "Smart prioritization queue interface"
          },
          {
            "title": "Key Design Decision 03: Automated Categorization",
            "context": "Manual tagging was error-prone and inconsistent.",
            "decision": "Implemented AI pattern recognition to auto-tag denials (e.g., \"Coding Error,\" \"Eligibility\"), standardizing data for future reporting.",
            "imageUrl": "/assets/images/case-studies/denial-automation/da-04-d3.webp",
            "imageAlt": "AI-powered automatic categorization system"
          }
        ]
      },
      {
        "type": "reflection",
        "heading": "Leadership Evolution & Retrospective",
        "strategicLearning": "I learned that in B2B Fintech/Healthcare, Trust is the most important UX metric. Users initially rejected the AI's suggestions because they couldn't see the logic. I had to pivot the design to prioritize 'Explainability'—exposing the why behind the AI's ranking.",
        "leadershipGrowth": "This project marked my transition from designing screens to designing systems that influence business strategy. It taught me how to negotiate scope with C-level stakeholders by translating design decisions into financial risk."
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
    "title": "Orchestrating Scale: Migrating a Legacy System to Tokenized Architecture",
    "subtitle": "Leading the strategic transition from static Figma styles to semantic variables to enable AI-driven development.",
    "topic": "Design Systems & Operations",
    "client": "[Your Company Name]",
    "role": "Lead Product Designer / Design Ops Lead",
    "duration": "Ongoing (Current Initiative)",
    "year": "2026",
    "tags": ["Design Strategy", "Design Tokens", "Team Leadership", "AI Workflows", "Scalability"],
    "executiveSummary": "Our existing design system relied on static Figma styles, creating a disconnect between design and development. I am leading the initiative to migrate to a 'Variable/Token-based' architecture, redefining our primitive and semantic layers to prepare for an automated, AI-assisted handoff workflow using tools like Antigravity and Cursor.",
    "hero": {
      "image": "https://placehold.co/1200x600/0a0a0a/00F0FF?text=Design+System+Migration",
      "alt": "Design System Migration and Token Architecture"
    },
    "overview": {
      "challenge": "Our existing design system relied on static Figma styles rather than tokens, leading to a disconnect between design and development. With only a fraction of components built in code and no semantic logic, the system was becoming a bottleneck for our rapid scaling requirements.",
      "solution": "I am leading the initiative to migrate our 'Style-based' system to a 'Variable/Token-based' architecture. This involves redefining our primitive and semantic layers to prepare for an automated, AI-assisted handoff workflow.",
      "impact": [
        "100% – Semantic alignment (In Progress)",
        "50% – Projected reduction in handoff time",
        "0 to 1 – First AI direct-to-code workflow",
        "Scalable – Single source of truth established"
      ]
    },
    "sections": [
      {
        "type": "outcomes",
        "heading": "Impact Metrics (Projected/Early Wins)",
        "metrics": [
          {
            "value": "100%",
            "label": "Semantic Alignment",
            "description": "Converting all global color and typography themes to semantic variables"
          },
          {
            "value": "50%",
            "label": "Faster Handoff",
            "description": "Projected reduction in dev time by utilizing AI to auto-generate component code"
          },
          {
            "value": "0 to 1",
            "label": "AI Workflow",
            "description": "Pioneering the team’s first direct-to-code workflow using Cursor/Antigravity"
          },
          {
            "value": "Scale",
            "label": "Source of Truth",
            "description": "Establishing a system that supports multi-theme scaling"
          }
        ]
      },
      {
        "type": "business-challenge",
        "heading": "The Strategic Foundation",
        "context": "When I joined, the design system existed but was fragmented. It relied on visual consistency (Styles) rather than logic (Tokens). While I initially scaled existing components to meet immediate needs, it became clear that the current foundation could not support our future growth.",
        "businessRisk": "Technical Debt & Velocity: Continuing with static styles meant linear growth—every new theme or product update required manual reconstruction. This threatened to slow down feature releases and increase UI inconsistency across the platform.",
        "goalStatement": "To transform our visual library into a programmable system that acts as an API for design, enabling automated implementation and consistent scaling across products."
      },
      {
        "type": "team-leadership",
        "heading": "Leadership & Team Orchestration",
        "myRole": "Lead Product Designer / Design Ops Lead – I act as the bridge between design ambition and technical feasibility. My focus is not just on 'drawing' components, but on architecting the logic behind them and defining the roadmap for migration.",
        "squad": [
          {
            "role": "Engineering Lead",
            "description": "Collaborating to map variables to code"
          },
          {
            "role": "Design Team",
            "description": "Adopting token-based thinking over purely visual design"
          }
        ],
        "cultureTransformation": "I am shifting the team's mindset from 'Designing Pages' to 'Designing Systems.' This involves mentoring the team on the importance of semantic naming conventions and preparing them for a future where AI handles the execution details."
      },
      {
        "type": "research-findings",
        "heading": "Critical Discovery Findings",
        "methodology": "We conducted an audit of the current component library against developer codebases to identify gaps. We are currently testing the new variable structure by converting the 'Main Theme' first.",
        "findings": [
          {
            "title": "Visuals vs. Logic",
            "description": "Developers were guessing hex codes because our styles lacked semantic names (e.g., using 'Blue' instead of 'Primary-Action').",
            "strategicShift": "We must move from a Library of Pictures to a Database of Decisions."
          },
          {
            "title": "The AI Opportunity",
            "description": "Static styles cannot be easily read by AI coding tools; Variables are essential for leveraging tools like Cursor effectively.",
            "strategicShift": "Structure Figma data specifically to be machine-readable."
          }
        ]
      },
      {
        "type": "design-decisions",
        "heading": "The Redesigned Experience",
        "solutionOverview": "The new system utilizes Figma Variables to handle theming, spacing, and radius logic, serving as the blueprint for our AI-assisted development pipeline.",
        "decisions": [
          {
            "title": "Key Decision 01: Semantic Variables over Styles",
            "context": "The old system used raw values (e.g., Hex Codes), making updates painful.",
            "decision": "We introduced a semantic layer (e.g., Surface/Default, Text/Subdued) to decouple the design intent from the raw value, allowing for instant theming updates.",
            "imageUrl": "https://placehold.co/1000x600/0a0a0a/00F0FF?text=Semantic+Variables+Structure",
            "imageAlt": "Diagram showing the shift from styles to semantic variables"
          },
          {
            "title": "Key Decision 02: AI-Ready Component Architecture",
            "context": "Developers spent hours manually coding UI components.",
            "decision": "We are structuring Figma components specifically to be readable by AI tools (Antigravity/Cursor), aiming to automate the 'Figma to React' build process.",
            "imageUrl": "https://placehold.co/1000x600/0a0a0a/00F0FF?text=AI+Component+Architecture",
            "imageAlt": "Architecture of AI-ready components"
          },
          {
            "title": "Key Decision 03: Incremental Migration Strategy",
            "context": "We cannot stop product work to rebuild the system entirely.",
            "decision": "We adopted a 'Main Theme First' approach, converting core foundations (Colors/Type) to variables while maintaining legacy components, ensuring product velocity isn't hampered.",
            "imageUrl": "https://placehold.co/1000x600/0a0a0a/00F0FF?text=Migration+Strategy+Map",
            "imageAlt": "Visual map of the incremental migration strategy"
          }
        ]
      },
      {
        "type": "reflection",
        "heading": "Leadership Evolution & Retrospective",
        "strategicLearning": "I learned that a Design System is a product, not a project. It requires a roadmap, stakeholders, and constant iteration. The move to variables wasn't just a Figma update; it was a workflow overhaul.",
        "leadershipGrowth": "This initiative has transitioned my role from an Individual Contributor executing designs to a Technical Leader defining how our digital products are built and delivered. I am now advocating for System Health alongside Feature Velocity."
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
    "client": "Healthcare SaaS Provider",
    "role": "Lead UX Designer",
    "duration": "July 2024 - Feb 2025",
    "year": "2025",
    "tags": ["Automation", "Enterprise", "Onboarding", "SaaS", "Leadership"],
    "executiveSummary": "Rapid assessment of operational inefficiencies revealed critical bottlenecks in client onboarding across four cross-functional teams. These bottlenecks created scalability barriers and customer satisfaction risks. I led the design of a unified, self-service ecosystem to replace fragmented manual workflows.",
    "hero": {
      "image": "https://placehold.co/1200x600/0a0a0a/00F0FF?text=Client+Onboarding+Platform",
      "alt": "Client Onboarding Platform Interface"
    },
    "overview": {
      "challenge": "Post-COVID market acceleration exposed critical operational vulnerabilities in our client management infrastructure. The legacy manual processes that served 20-30 clients became unmanageable barriers preventing scale to 100+ enterprise clients.",
      "solution": "A centralized Self-Service Onboarding Wizard and Unified Access Management Dashboard that empowers clients to manage their own teams without support intervention.",
      "impact": [
        "40% – Reduction in onboarding time",
        "25% – Increase in user activation rate",
        "60% – Decrease in support tickets related to access",
        "15% – Improvement in platform task completion"
      ]
    },
    "sections": [
      {
        "type": "outcomes",
        "heading": "Quantified User Outcomes",
        "metrics": [
          {
            "value": "40%",
            "label": "Faster Onboarding",
            "description": "Reduction in onboarding time due to self-service workflows"
          },
          {
            "value": "25%",
            "label": "Activation Rate",
            "description": "Increase in user activation rate"
          },
          {
            "value": "60%",
            "label": "Support Reduction",
            "description": "Decrease in support tickets related to access and permissions"
          },
          {
            "value": "15%",
            "label": "Efficiency",
            "description": "Improvement in platform task completion"
          }
        ]
      },
      {
        "type": "business-challenge",
        "heading": "The Strategic Foundation",
        "context": "Post-COVID market acceleration exposed critical operational vulnerabilities in our client management infrastructure. The legacy manual processes that served 20-30 clients became unmanageable barriers preventing scale to 100+ enterprise clients.",
        "businessRisk": "Scalability Blockers: Manual reliance on back-and-forth emails prevented the business from growing. Revenue Threat: Delays in onboarding directly threatened revenue growth targets and customer satisfaction benchmarks.",
        "goalStatement": "To transform fragmented client operations into a unified, self-service ecosystem enabling 10x client capacity growth while maintaining premium service quality."
      },
      {
        "type": "team-leadership",
        "heading": "Leadership & Team Orchestration",
        "myRole": "Lead UX Designer – I established design-led prioritization using an impact/effort matrix, conducting weekly stakeholder validation sessions to ensure alignment between user needs and business objectives.",
        "squad": [
          {
            "role": "Product Owner",
            "description": "Strategic priority setting"
          },
          {
            "role": "Business Analyst",
            "description": "Requirements translation"
          },
          {
            "role": "2 Developers",
            "description": "Technical implementation"
          },
          {
            "role": "QA Engineer",
            "description": "Quality assurance"
          }
        ],
        "cultureTransformation": "I successfully introduced user-centered design thinking to teams that were traditionally process-driven, shifting the culture from 'following requirements' to 'solving user problems.'"
      },
      {
        "type": "research-findings",
        "heading": "Critical Discovery Findings",
        "methodology": "Adopted a Multi-Method Research Approach including stakeholder interviews, user surveys, and heuristic evaluations to understand the friction points.",
        "findings": [
          {
            "title": "Manual Bottlenecks",
            "description": "Admins spent 30% of their time correcting manual entry errors due to excessive reliance on email-based data collection.",
            "strategicShift": "We must automate data intake to reduce human error."
          },
          {
            "title": "Permission Paralysis",
            "description": "Role-based access was the most confusing part of the setup; clients had no centralized way to manage granular permissions, leading to a 60% spike in support tickets.",
            "strategicShift": "We need a centralized dashboard for granular permission management."
          }
        ]
      },
      {
        "type": "design-decisions",
        "heading": "The Redesigned Experience",
        "solutionOverview": "A centralized Self-Service Onboarding Wizard and Unified Access Management Dashboard that empowers clients to manage their own teams without support intervention.",
        "decisions": [
          {
            "title": "Key Design Decision 01: Automating Data Intake",
            "context": "Users felt overwhelmed by long, single-page forms.",
            "decision": "Replaced static forms with a Smart Wizard that breaks data entry into digestible steps with real-time validation.",
            "imageUrl": "https://placehold.co/1000x600/0a0a0a/00F0FF?text=Smart+Wizard+UI",
            "imageAlt": "Smart Wizard interface breaking down data entry"
          },
          {
            "title": "Key Design Decision 02: Centralized Permissions",
            "context": "Fragmented access management caused security risks and confusion.",
            "decision": "Built a Global Search & Permission Matrix that allows admins to toggle access rights instantly across different healthcare roles.",
            "imageUrl": "https://placehold.co/1000x600/0a0a0a/00F0FF?text=Permission+Matrix",
            "imageAlt": "Global Search and Permission Matrix UI"
          },
          {
            "title": "Key Design Decision 03: Transparency via Tracking",
            "context": "Clients had no visibility into their onboarding status.",
            "decision": "Implemented a Real-time Progress Tracker so clients always know their status, reducing anxiety and support calls.",
            "imageUrl": "https://placehold.co/1000x600/0a0a0a/00F0FF?text=Progress+Tracker",
            "imageAlt": "Real-time onboarding progress tracker"
          }
        ]
      },
      {
        "type": "reflection",
        "heading": "Leadership Evolution & Retrospective",
        "strategicLearning": "I learned to balance Technical Product Leadership with user advocacy. The biggest challenge was managing legacy system constraints while trying to implement a modern workflow. I learned that transparency with engineering early in the process is key to success.",
        "leadershipGrowth": "Strategic Vision Communication: Developed the ability to translate user insights into business strategy. Change Management: Successfully navigated the friction of changing long-standing manual processes into automated digital ones."
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
