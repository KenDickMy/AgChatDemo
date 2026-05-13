import { DemoScenario } from '../types';
import { scenario1Artifacts, scenario2Artifacts } from './agData';

export const scenarios: DemoScenario[] = [
  // ───────────────────────────────────────────────────────────────────────────
  // SCENARIO 1: Spring Planting Season Supply Readiness
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'spring-supply-readiness',
    title: 'Spring Planting Season Supply Readiness',
    subtitle: 'Turning supply chain risk into a proactive grower communication plan',
    description:
      'A major fertilizer supplier just notified Harvest Partners Ag that spring UAN-32 ' +
      'and MAP deliveries will be delayed 3–4 weeks. Branch Manager Jim Ramirez has minutes ' +
      'before calls start coming in from growers. Walk through how Copilot Chat helps him ' +
      'rapidly understand the risk, identify affected accounts, and respond with professionalism.',
    audience: 'Branch Managers, Regional Sales Managers, Field Sales Representatives',
    duration: '12–15 minutes',
    businessContext:
      'It is mid-February 2026. Spring planting across central Iowa begins in early April. ' +
      'Harvest Partners Ag\'s Ames branch has record pre-season fertilizer bookings — 22% above ' +
      'last year — but the branch is now facing critical supply deficits on its two most-booked ' +
      'products. Six key accounts are directly affected, including two Platinum growers. ' +
      'A competitor recently opened a nearby branch and is aggressively targeting the same accounts.',
    openingHook:
      '"Most demos show AI answering trivia. What I want to show you is how Copilot Chat ' +
      'helps a branch manager go from a crisis email to a confident action plan — in under ' +
      'ten minutes — while keeping growers informed and relationships intact."',
    artifacts: scenario1Artifacts,
    steps: [
      {
        id: 'step-1-situation-summary',
        stepNumber: 1,
        title: 'Get the Full Picture — Fast',
        description:
          'Jim has just received the supplier delay email and needs to understand the ' +
          'full impact before his first grower call at 9 AM.',
        context:
          'Jim opens Copilot Chat in Microsoft Teams or directly in Outlook and uploads ' +
          'the supplier delay email along with the branch inventory snapshot and open orders list. ' +
          'He asks Copilot Chat to synthesize the situation.',
        suggestedPrompts: [
          'Summarize the business impact of this supplier delay for our branch. Include: total gallons and tons affected, which customer accounts are at greatest risk, the timing pressure relative to spring planting, and the top 3 decisions I need to make today.',
          'Based on the inventory snapshot and open orders, which accounts face the most critical shortage and why? Rank them by business risk.',
          'What is the net shortfall in UAN-32 and MAP after comparing our current inventory to our pre-booked commitments?',
        ],
        talkTrack:
          'Instead of spending 30 minutes reading through three documents and doing math in your head, ' +
          'Jim asks Copilot Chat to synthesize everything at once. He gets a ranked view of the ' +
          'risk in seconds — and he hasn\'t even left his inbox. Notice how Copilot Chat doesn\'t ' +
          'just summarize; it identifies priorities and connects the dots across multiple files.',
        expectedOutcome:
          'A clear summary identifying: critical deficit on UAN-32 (138,000 gal short) and MAP ' +
          '(315 tons short), top at-risk accounts ranked by exposure, timing pressure noting ' +
          'planting starts in ~45 days, and a short list of decisions needed today.',
        businessValue:
          'Reduces situation analysis from 30–45 minutes to under 2 minutes. Ensures nothing ' +
          'is missed before customer calls begin. Allows the branch manager to show up to every ' +
          'conversation already informed.',
        copilotFeatureHighlight:
          'Context-aware synthesis across multiple documents — Copilot Chat reads and connects ' +
          'information from the supplier email, inventory spreadsheet, and order book simultaneously, ' +
          'grounding its response in the actual work content.',
        followUpPrompts: [
          'What is the financial impact if I lose the two Platinum accounts due to this delay?',
          'Create a one-paragraph executive summary I can share with my regional manager.',
        ],
        relatedArtifactIds: [
          'artifact-supplier-delay-email',
          'artifact-branch-inventory',
          'artifact-open-orders',
        ],
      },
      {
        id: 'step-2-risk-stratification',
        stepNumber: 2,
        title: 'Identify and Prioritize At-Risk Accounts',
        description:
          'With the full picture clear, Jim needs to triage which growers need personal ' +
          'outreach versus a general notification — and in what order.',
        context:
          'Jim adds his branch manager planning notes to the conversation for additional ' +
          'context. He asks Copilot Chat to help him build an account prioritization strategy.',
        suggestedPrompts: [
          'Given the supply delays and the grower notes in my planning document, which accounts should I call personally today versus send a written notification? Explain your reasoning for each.',
          'Sunrise Grain is already flagged as a retention risk. How does this supply delay compound that risk, and what should my message to Dave Hendricks be different from my standard delay notice?',
          'Draft a priority outreach list for today showing: account name, contact method recommended, key message point, and time sensitivity.',
        ],
        talkTrack:
          'This is where Copilot Chat moves from information retrieval to business reasoning. ' +
          'Jim isn\'t just asking "what happened" — he\'s asking "what should I do, and in what order?" ' +
          'Copilot Chat reads the relationship context in his planning notes and applies judgment about ' +
          'which accounts have compounding risks. That\'s not a simple search — that\'s the kind of ' +
          'thinking that normally takes a manager years of experience to apply quickly.',
        expectedOutcome:
          'A prioritized outreach plan with account tiers: personal phone calls for Platinum ' +
          'accounts (especially Sunrise Grain as the highest-risk), Gold accounts get a ' +
          'personalized email with alternative options, Silver accounts receive the standard ' +
          'delay notice. Copilot Chat flags that Sunrise Grain requires a different tone given ' +
          'the existing retention risk.',
        businessValue:
          'Prevents the common mistake of treating all customers the same during a supply crisis. ' +
          'Protects high-value relationships by ensuring senior attention goes to highest-risk accounts. ' +
          'Reduces churn risk during a high-stakes supply event.',
        copilotFeatureHighlight:
          'Iterative prompting and context continuity — Copilot Chat builds on the prior conversation ' +
          'context, applying the inventory data and relationship notes together to give account-specific ' +
          'recommendations. Each follow-up prompt gets smarter as the context grows.',
        followUpPrompts: [
          'What are the top 3 objections a grower is likely to raise when I call about this delay, and how should I respond to each?',
          'What alternative product or sourcing options should I have ready before I make these calls?',
        ],
        relatedArtifactIds: [
          'artifact-seasonal-notes',
          'artifact-open-orders',
        ],
      },
      {
        id: 'step-3-grower-communication',
        stepNumber: 3,
        title: 'Draft Grower Communications — Personalized at Scale',
        description:
          'Jim needs to send customized delay notices to six affected accounts. ' +
          'He uses Copilot Chat to draft communications tailored to each account tier.',
        context:
          'Jim asks Copilot Chat to draft a personalized email to Kowalski Farms ' +
          '(12-year Platinum customer) acknowledging the delay, presenting alternative options, ' +
          'and reinforcing the relationship. He then adapts it for a new-customer scenario.',
        suggestedPrompts: [
          'Draft a professional email to Kowalski Farms notifying them of the UAN-32 and MAP delay. Acknowledge the inconvenience, present our alternative sourcing options (Columbus warehouse supply and spot market MAP), reassure them we are prioritizing Platinum accounts, and close with an invitation to discuss. Keep it warm, confident, and under 200 words.',
          'Now adapt that email for Anderson Brothers — they are a new account we won from a competitor last year. The tone should emphasize our commitment to their first full season with us and our proactive communication.',
          'Revise the Kowalski email to be more direct and to-the-point — Jim prefers a no-nonsense communication style with long-term customers.',
        ],
        talkTrack:
          'Watch how quickly Jim goes from a supply crisis to a polished set of customer ' +
          'communications — without copy-pasting a generic template. Copilot Chat adjusts the ' +
          'tone based on the relationship context: warmer for a 12-year customer, more reassuring ' +
          'for the new account where we need to protect first impressions. And with one prompt, ' +
          'Jim can refine the tone with simple natural language — "more direct," "warmer," ' +
          '"shorter" — without starting over.',
        expectedOutcome:
          'Two polished, professionally toned emails — one for a long-term Platinum customer ' +
          'and one for a new gold account — both acknowledging the delay, presenting solutions, ' +
          'and maintaining the relationship. Each is differentiated in tone and emphasis.',
        businessValue:
          'Converts a crisis communication task from 2–3 hours of drafting and editing into ' +
          '15 minutes of guided iteration. Ensures every affected customer hears from the branch ' +
          'proactively — before they hear about the delay from a competitor.',
        copilotFeatureHighlight:
          'In-app workflow value and cross-M365 integration — drafts created in Copilot Chat can ' +
          'be immediately moved into Outlook to send, inserted into a Word document for a communication ' +
          'plan, or shared via Teams — all without leaving the Microsoft 365 environment.',
        followUpPrompts: [
          'Create a subject line A/B test — give me two options: one urgency-focused and one relationship-focused.',
          'Draft a short Teams message I can send to Sarah Kolbe and Mike D. briefing them before they call their accounts.',
        ],
        relatedArtifactIds: [
          'artifact-open-orders',
          'artifact-supplier-delay-email',
        ],
      },
      {
        id: 'step-4-action-plan',
        stepNumber: 4,
        title: 'Build the Branch Action Plan',
        description:
          'Before the end of the morning, Jim needs to document a clear response plan ' +
          'for his team and his regional manager.',
        context:
          'Jim asks Copilot Chat to synthesize all the work done so far into a structured ' +
          'action plan he can share with his regional manager and field team.',
        suggestedPrompts: [
          'Summarize everything we have discussed and create a structured action plan for the next 7 days to address the fertilizer delay. Include: immediate customer outreach priorities, alternative sourcing actions, team communication steps, and follow-up timeline. Format it as a table with owner, action, and due date.',
          'Create a brief update for my regional manager summarizing the supply situation, the accounts at risk, and our response plan. Keep it under 150 words and executive-ready.',
          'What questions should I be able to answer when the regional manager asks me about this situation? List the top 5 and draft a short response to each.',
        ],
        talkTrack:
          'Jim started this morning with a crisis email and no plan. In under 15 minutes ' +
          'with Copilot Chat, he now has: a clear picture of the risk, a prioritized outreach list, ' +
          'personalized customer emails ready to send, and a structured action plan for his team. ' +
          'The regional manager is already calling — and Jim is ready. That is the real value of ' +
          'Copilot Chat: it shortens the distance between a problem arriving and a confident, ' +
          'coordinated response going out.',
        expectedOutcome:
          'A structured 7-day action plan table with clear owners, actions, and due dates. ' +
          'A concise executive summary ready for the regional manager. A list of anticipated ' +
          'questions with prepared responses.',
        businessValue:
          'Ensures nothing falls through the cracks during a high-pressure supply event. ' +
          'Provides a paper trail that protects the branch and demonstrates proactive management. ' +
          'Frees up the manager\'s mental energy to focus on relationships, not documentation.',
        copilotFeatureHighlight:
          'Cross-workflow continuity — Copilot Chat maintains the full context of the session, ' +
          'synthesizing all prior steps (supply analysis, prioritization, drafts) into a coherent ' +
          'output. This mirrors how it works across Microsoft 365: understanding context built up ' +
          'across emails, documents, and meetings to help you work as a connected whole.',
        followUpPrompts: [
          'Turn the action plan into a shareable Word document outline.',
          'Draft a 3-bullet Teams channel message to brief my whole branch team on the situation and the plan.',
        ],
        relatedArtifactIds: [
          'artifact-seasonal-notes',
          'artifact-open-orders',
          'artifact-branch-inventory',
        ],
      },
    ],
    closingMessage:
      'Copilot Chat didn\'t just help Jim move faster — it helped him move smarter. ' +
      'By synthesizing information across multiple business documents, applying relationship ' +
      'context to prioritization, and enabling professional communication at scale, Copilot Chat ' +
      'turned a potential supply chain crisis into a proactive, coordinated response. ' +
      'The growers hear from Jim before they hear from a competitor. That\'s the competitive ' +
      'advantage that Copilot Chat delivers in the flow of real agricultural retail work.',
    keyBusinessOutcomes: [
      'Reduce crisis response time from hours to minutes',
      'Protect Platinum and Gold account relationships during supply disruptions',
      'Enable personalized customer communication at scale without adding staff time',
      'Ensure consistent, professional outreach across all affected accounts',
      'Keep leadership informed with minimal effort',
    ],
    tags: ['supply chain', 'planting season', 'customer communications', 'crisis management'],
  },

  // ───────────────────────────────────────────────────────────────────────────
  // SCENARIO 2: Key Grower At-Risk – Account Recovery
  // ───────────────────────────────────────────────────────────────────────────
  {
    id: 'grower-account-recovery',
    title: 'Key Grower At-Risk: Account Recovery',
    subtitle: 'Turning a churn signal into a retention action plan before the window closes',
    description:
      'Sunrise Grain LLC — a 3,100-acre Platinum account worth nearly $1M annually — is showing ' +
      'all the warning signs of leaving: no spring orders placed, competitor engagement spotted, ' +
      'unanswered emails, and unresolved trust issues from last season. Field Rep Sarah Kolbe ' +
      'and Branch Manager Jim Ramirez have a narrow window to act.',
    audience: 'Field Sales Representatives, Account Managers, Branch Managers',
    duration: '12–15 minutes',
    businessContext:
      'It is February 14, 2026. Spring pre-season booking deadlines are weeks away. ' +
      'Sunrise Grain has placed zero seed or fertilizer orders — a dramatic departure from ' +
      'prior years. A field rep intelligence note confirms the grower was seen at a competitor\'s ' +
      'open house. The branch has a pattern of service issues in 2025 that have eroded trust. ' +
      'Losing this account means losing nearly $1M in annual revenue and a key community referral source.',
    openingHook:
      '"Losing a $1M customer is almost always predictable in hindsight. The warning signs ' +
      'are in the data — in the service notes, the order patterns, the field rep observations. ' +
      'The question is whether you see them and act in time. Let me show you how Copilot Chat ' +
      'helps Sarah and Jim go from scattered signals to a confident recovery plan — before the ' +
      'window closes."',
    artifacts: scenario2Artifacts,
    steps: [
      {
        id: 'step-1-account-briefing',
        stepNumber: 1,
        title: 'Build the Full Account Picture',
        description:
          'Before making any contact, Sarah and Jim need to understand exactly where ' +
          'the relationship stands and what drove the current risk.',
        context:
          'Sarah opens Copilot Chat and uploads the grower account profile, the service ' +
          'interaction log, and the competitive intelligence note. She asks for a comprehensive ' +
          'account briefing.',
        suggestedPrompts: [
          'Summarize the current status of the Sunrise Grain account. Include: purchase trend over the last 3 years, specific service failures that may have eroded trust, the current competitive threat, and what is at stake if we lose this account. Format as an executive briefing in 5 bullet points.',
          'Based on all the account notes and service history, what were the two or three turning points that shifted Dave Hendricks from a loyal customer to someone evaluating competitors?',
          'What do we know about Dave Hendricks as a buyer — what does he value, what frustrates him, and what motivates him?',
        ],
        talkTrack:
          'Before this conversation with Copilot Chat, getting this level of account insight ' +
          'would take Sarah 30–45 minutes of reading through CRM notes, pulling purchase history, ' +
          'and connecting the dots manually. In about 60 seconds, she has the full account story — ' +
          'and she can see the turning points clearly: the late delivery in April 2025, the billing ' +
          'dispute in November, the missed follow-up commitment in December. Copilot Chat doesn\'t ' +
          'just retrieve — it connects and interprets.',
        expectedOutcome:
          'A clear, structured account briefing showing the purchase decline, the root cause ' +
          'service failures (late delivery, billing friction, missed commitment), the competitive ' +
          'threat, and the financial risk. Dave Hendricks profiled as a relationship-driven buyer ' +
          'who values reliability above price.',
        businessValue:
          'Ensures every customer-facing conversation is grounded in complete account context — ' +
          'not just the most recent interaction. Prevents the common mistake of treating a ' +
          'retention issue as a simple follow-up call.',
        copilotFeatureHighlight:
          'Context-aware analysis from unstructured notes — Copilot Chat reads service logs, ' +
          'field rep notes, and account data simultaneously, synthesizing qualitative and ' +
          'quantitative signals into a coherent picture. This mirrors its ability within M365 ' +
          'to reason across emails, meeting notes, and documents in your real work environment.',
        followUpPrompts: [
          'What is the lifetime value at risk if Sunrise Grain switches to a competitor this year and does not return?',
          'How long has Sunrise Grain been a customer, and what is the referral value of their network?',
        ],
        relatedArtifactIds: [
          'artifact-grower-profile',
          'artifact-service-notes',
          'artifact-competitive-intel',
        ],
      },
      {
        id: 'step-2-retention-strategy',
        stepNumber: 2,
        title: 'Develop the Retention Strategy',
        description:
          'With the full picture clear, Jim and Sarah need to align on what to say, ' +
          'what to offer, and how to approach Dave before someone else does.',
        context:
          'Jim and Sarah review the competitive intelligence note and ask Copilot Chat ' +
          'to help them build a differentiated retention approach.',
        suggestedPrompts: [
          'Given what we know about Nutrien\'s supply guarantee program and Dave\'s concerns, what is our strongest counter-offer or retention pitch? Be specific about what we can credibly offer and what we should acknowledge honestly.',
          'What are the top 3 objections Dave is likely to raise on the call, and what is the best response to each — honest, not just defensive?',
          'Draft a brief call outline for Jim\'s personal outreach call to Dave Hendricks. Include: opening acknowledgment, what to address proactively, what to offer, and how to close the call.',
        ],
        talkTrack:
          'This is where Copilot Chat earns its keep in a sales situation. Jim isn\'t asking ' +
          'it to write a script — he\'s asking it to help him think through the conversation ' +
          'strategically. Notice how it acknowledges the legitimate concerns honestly rather than ' +
          'just crafting spin. That\'s important: a veteran grower like Dave Hendricks will see ' +
          'through an overly polished pitch. Copilot Chat helps you show up authentic and prepared.',
        expectedOutcome:
          'A specific retention strategy that includes: acknowledging the 2025 late delivery, ' +
          'presenting a concrete supply plan for 2026, exploring a supply assurance option, ' +
          'and emphasizing the local relationship advantage over a large national competitor. ' +
          'Objection responses that are honest and grounded in the account history.',
        businessValue:
          'Reduces call preparation time from 1–2 hours to 15 minutes. Ensures the manager ' +
          'goes into the most important call of the week fully prepared with the right message — ' +
          'not a generic sales pitch. Increases retention call success rates.',
        copilotFeatureHighlight:
          'Iterative, conversational refinement — Jim can say "make the supply guarantee offer ' +
          'more specific" or "adjust the tone to be less apologetic, more solutions-focused" ' +
          'and Copilot Chat iterates naturally. This conversational loop is how it works in ' +
          'real M365 workflows — you refine until it\'s right.',
        followUpPrompts: [
          'What questions should Jim ask Dave on the call to understand his priorities and uncover any remaining concerns?',
          'If Dave brings up the 2025 late delivery, what is the honest acknowledgment Jim should make — without over-apologizing?',
        ],
        relatedArtifactIds: [
          'artifact-competitive-intel',
          'artifact-service-notes',
          'artifact-grower-profile',
        ],
      },
      {
        id: 'step-3-outreach-email',
        stepNumber: 3,
        title: 'Draft the Re-Engagement Communication',
        description:
          'Before calling, Jim wants to send a personal note that sets the right tone ' +
          'and positions the call as a priority relationship conversation — not a sales pitch.',
        context:
          'Jim asks Copilot Chat to draft a personal email from him to Dave Hendricks ' +
          'that acknowledges the past issues, signals accountability, and requests a call.',
        suggestedPrompts: [
          'Draft a personal email from Branch Manager Jim Ramirez to Dave Hendricks at Sunrise Grain. The goal is to: acknowledge that we fell short on our supply reliability in 2025, take accountability for missing the December follow-up commitment, let Dave know we have a specific plan to discuss for 2026, and request a 15-minute call this week. Tone should be direct, honest, and personal — not corporate or salesy. Jim is a straight-talker.',
          'Revise this email — Jim wants to be even more direct about the 2025 late delivery issue. He believes acknowledging it clearly will build more trust than dancing around it.',
          'Create a subject line that will make Dave actually open this email.',
        ],
        talkTrack:
          'The best emails in a recovery situation are rarely the most polished ones — they\'re ' +
          'the most honest ones. Watch how Copilot Chat can capture a tone based on simple ' +
          'direction: "Jim is a straight-talker." It didn\'t need a style guide — it picked up ' +
          'the persona from context. And Jim can iterate in natural language: "more direct about ' +
          'the delivery issue," "shorter," "less corporate." That kind of tone control is what ' +
          'makes AI-assisted drafting practical, not just fast.',
        expectedOutcome:
          'A short, direct, personal email from Jim acknowledging the 2025 service failures, ' +
          'taking ownership, signaling a specific solution, and requesting a brief call. ' +
          'The tone is warm but professional — the kind of message a 9-year relationship deserves.',
        businessValue:
          'Increases the likelihood of Dave responding and taking the call — which is the ' +
          'critical first step in any retention conversation. A well-crafted re-engagement ' +
          'email can be the difference between winning back an account and losing it silently.',
        copilotFeatureHighlight:
          'In-app workflow integration — once Jim approves the draft in Copilot Chat, he can ' +
          'move directly into Outlook to send it, continuing in the same Microsoft 365 flow ' +
          'without any copy-paste or context switching.',
        followUpPrompts: [
          'Draft a shorter follow-up version I can send if Dave doesn\'t respond in 48 hours.',
          'Create a brief Teams message to Sarah Kolbe summarizing the outreach plan and asking her to be available for a joint call if needed.',
        ],
        relatedArtifactIds: [
          'artifact-grower-profile',
          'artifact-service-notes',
        ],
      },
      {
        id: 'step-4-recovery-plan',
        stepNumber: 4,
        title: 'Build the Account Recovery Plan',
        description:
          'Whether or not Dave responds, Jim needs a documented account recovery plan ' +
          'for the regional manager and his own team to track.',
        context:
          'Jim asks Copilot Chat to synthesize everything into a structured account recovery ' +
          'plan that he can share with the regional manager and use to track follow-through.',
        suggestedPrompts: [
          'Create a structured account recovery plan for Sunrise Grain LLC. Include: current situation summary, root cause of the risk, retention strategy, specific actions with owners and due dates, success metrics, and escalation criteria. Format as a business document suitable for sharing with a regional manager.',
          'Summarize the Sunrise Grain situation in 3 bullet points I can use in my weekly report to the regional manager — risk level, our plan, and expected outcome.',
          'What are the early indicators that will tell us whether the recovery plan is working or whether we need to escalate to a different approach?',
        ],
        talkTrack:
          'At the end of this session, Jim has something most branch managers don\'t have ' +
          'during an account recovery situation: a documented plan with clear ownership, ' +
          'timelines, and success criteria. That matters for two reasons: it keeps the team ' +
          'accountable, and it shows the regional manager that the situation is being handled ' +
          'with rigor — not just reactive calls. Copilot Chat helps Jim move from instinct ' +
          'to process.',
        expectedOutcome:
          'A structured account recovery plan with situation summary, root cause, prioritized ' +
          'actions (personal call this week, supply assurance meeting, dedicated rep coverage), ' +
          'success metrics (order placed before March 15, relationship score improvement), ' +
          'and escalation triggers (no response by Feb 21).',
        businessValue:
          'Creates accountability and follow-through structure for the highest-priority ' +
          'retention risk in the branch. Gives regional leadership visibility and confidence ' +
          'without requiring a long call to explain the situation. Reduces the chance that ' +
          'account recovery stalls due to lack of coordination.',
        copilotFeatureHighlight:
          'Cross-Microsoft-365 workflow positioning — the account recovery plan created here ' +
          'can be exported to Word, assigned action items can be tracked in Planner or To Do, ' +
          'the briefing summary can feed into a Teams meeting, and follow-up emails flow from ' +
          'Outlook — all connected through the same Copilot Chat context.',
        followUpPrompts: [
          'Draft a PowerPoint slide outline for a 5-minute briefing on this situation for the regional operations review.',
          'If we do retain Sunrise Grain, what should our follow-up touchpoint cadence look like for the rest of 2026?',
        ],
        relatedArtifactIds: [
          'artifact-grower-profile',
          'artifact-service-notes',
          'artifact-competitive-intel',
          'artifact-regional-ops',
        ],
      },
    ],
    closingMessage:
      'What started as a quietly failing account became a visible, actionable recovery plan ' +
      'in under 15 minutes. Copilot Chat helped Sarah and Jim see the full picture, prepare ' +
      'for the most important call of the week, draft the right message, and build a plan ' +
      'that creates accountability across the team. The relationship with Dave Hendricks is ' +
      'not guaranteed — but the next conversation will be the best-prepared one Harvest ' +
      'Partners has ever had with him. That is what Copilot Chat delivers in agriculture ' +
      'retail: not just faster work, but smarter decisions at the moments that matter most.',
    keyBusinessOutcomes: [
      'Reduce time-to-action on at-risk account signals from days to hours',
      'Improve retention conversation effectiveness with complete account context',
      'Create structured, documented recovery plans that ensure follow-through',
      'Enable personalized, accountable outreach that reflects the real relationship history',
      'Protect Platinum account revenue and community referral relationships',
    ],
    tags: ['account retention', 'grower relations', 'competitive response', 'sales strategy'],
  },
];

export function getScenarioById(id: string): DemoScenario | undefined {
  return scenarios.find((s) => s.id === id);
}

export function listScenarios(): Pick<DemoScenario, 'id' | 'title' | 'subtitle' | 'description' | 'audience' | 'duration' | 'tags'>[] {
  return scenarios.map(({ id, title, subtitle, description, audience, duration, tags }) => ({
    id,
    title,
    subtitle,
    description,
    audience,
    duration,
    tags,
  }));
}
