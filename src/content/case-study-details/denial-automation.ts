export const denialAutomationDetail = {
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
    "solution": "The team developed a Denial Automation Suite designed to act as an intelligent operational workspace for analysts. The platform introduces automated denial categorisation, revenue-based claim prioritisation, and automation for predictable denial scenarios. My contribution focused on mapping analyst workflows, identifying points where automation could reduce friction, and designing the interaction model that allowed analysts to trust and adopt the automated system.",
    "impact": [
      "65% – Reduction in manual claim review time",
      "40% – Increase in successful claim recoveries",
      "90% – User adoption & satisfaction rate",
      "Zero – Preventable write-offs due to missed deadlines. Metrics derived from internal operational dashboards after approximately one year of product usage"
    ]
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
};