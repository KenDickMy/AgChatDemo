# 🌾 AgChatDemo

**A structured, high-impact Microsoft Copilot Chat demo guide for agriculture retail customers.**

This Node.js + TypeScript web app helps sellers and demo presenters run a compelling, 12–15 minute Copilot Chat demo tailored to ag-retail branch managers, field sales reps, and account managers — complete with realistic sample data, step-by-step demo flows, reusable prompts, seller talk tracks, and a Markdown export capability.

---

## ✨ Features

- **Two full ag-retail demo scenarios** with realistic fictional data:
  - 🌱 **Spring Planting Season Supply Readiness** — a supplier delay hits 45 days before planting; help the branch manager respond fast and protect customer relationships
  - 🌾 **Key Grower At-Risk: Account Recovery** — a Platinum account is evaluating competitors; turn scattered warning signals into a confident retention plan
- **Step-by-step guided demo flow** — each step includes context, suggested Copilot Chat prompts, a seller talk track, expected outcomes, and business value
- **One-click copy** for all suggested prompts — paste directly into Copilot Chat
- **Sample ag-retail artifacts** — realistic supplier emails, branch inventory snapshots, open order books, grower CRM profiles, service logs, and field rep intelligence notes
- **Export to Markdown** — download a fully formatted demo guide for sharing or offline use
- **Clean, polished UI** with an agriculture-themed design — suitable for customer-facing use

---

## 🚀 Quick Start

### Prerequisites

- [Node.js](https://nodejs.org/) 18 or later
- npm (bundled with Node.js)

### Install and Run

```bash
# Clone the repository
git clone https://github.com/KenDickMy/AgChatDemo.git
cd AgChatDemo

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open your browser at **[http://localhost:3000](http://localhost:3000)**.

No environment variables or database setup required — the app uses built-in sample data.

### Production Build

```bash
npm run build   # Compile TypeScript to dist/
npm start       # Run the compiled server
```

---

## 📁 Project Structure

```
AgChatDemo/
├── src/
│   ├── server.ts           # Express server
│   ├── types/
│   │   └── index.ts        # TypeScript types and interfaces
│   ├── data/
│   │   ├── agData.ts       # Sample ag-retail artifacts (emails, reports, notes)
│   │   └── scenarios.ts    # Demo scenario definitions with steps
│   └── routes/
│       └── api.ts          # REST API routes + Markdown export generator
├── public/
│   ├── index.html          # Landing page (scenario selection)
│   ├── demo.html           # Demo runner
│   ├── css/styles.css      # Stylesheet
│   └── js/
│       ├── app.js          # Landing page logic
│       └── demo.js         # Demo runner logic
├── tests/
│   └── api.test.ts         # API integration tests
├── package.json
├── tsconfig.json
└── README.md
```

---

## 🌐 API Reference

| Endpoint | Description |
|----------|-------------|
| `GET /api/scenarios` | List all available demo scenarios |
| `GET /api/scenarios/:id` | Get a full scenario with steps and artifacts |
| `GET /api/export/:id` | Download a Markdown demo guide for a scenario |

### Export Options

The export endpoint accepts optional query parameters:

| Parameter | Default | Description |
|-----------|---------|-------------|
| `includeArtifacts` | `true` | Include sample data artifacts |
| `includePrompts` | `true` | Include suggested Copilot Chat prompts |
| `includeTalkTracks` | `true` | Include seller talk tracks |

**Example:**
```
GET /api/export/spring-supply-readiness?includeTalkTracks=false
```

---

## 🧪 Running Tests

```bash
npm test
```

Tests use [Jest](https://jestjs.io/) and [Supertest](https://github.com/ladjs/supertest) to validate all API endpoints, data integrity, and export behavior.

---

## 🎯 Demo Tips

1. **Pick a scenario** that matches your customer's current priorities
2. **Open the Opening Hook** (🎯 button) and say it before touching the keyboard — set the business stakes first
3. **Move through steps quickly** — target 2–3 minutes per step
4. **Use the copy buttons** to paste prompts directly into Copilot Chat
5. **Show live iteration** — after getting a response, use a follow-up prompt ("make it shorter," "more direct") to demonstrate conversational refinement
6. **Name the business value** after every step — don't let the outcome speak for itself
7. **Export the guide** at the end as a leave-behind or for team sharing

---

## 📋 Demo Scenarios

### 🌱 Spring Planting Season Supply Readiness

**Audience:** Branch Managers, Regional Sales Managers, Field Sales Representatives  
**Duration:** 12–15 minutes

A fertilizer supplier notifies the branch of a 3–4 week delay on critical spring products. With planting 45 days out and six major accounts pre-booked, the branch manager needs to rapidly understand the impact, prioritize outreach, draft personalized communications, and build an action plan — all before the first grower calls come in.

**Demo Steps:**
1. Get the Full Picture — Fast (supply situation synthesis)
2. Identify and Prioritize At-Risk Accounts (risk-based prioritization)
3. Draft Grower Communications — Personalized at Scale (tailored email drafting)
4. Build the Branch Action Plan (structured team and leadership update)

---

### 🌾 Key Grower At-Risk: Account Recovery

**Audience:** Field Sales Representatives, Account Managers, Branch Managers  
**Duration:** 12–15 minutes

A 3,100-acre Platinum grower account with nearly $1M in annual purchases has placed zero spring orders, gone silent on emails, and was spotted at a competitor's open house. A pattern of service failures in the prior year has eroded trust. The field rep and branch manager have a narrow window to act before the booking season closes.

**Demo Steps:**
1. Build the Full Account Picture (account briefing from scattered signals)
2. Develop the Retention Strategy (differentiated competitive response)
3. Draft the Re-Engagement Communication (personal, honest outreach)
4. Build the Account Recovery Plan (documented plan with owners and timelines)

---

## 🔑 Key Copilot Chat Capabilities Demonstrated

- **In-app workflow value** — working inside the M365 tools where ag-retail work already happens
- **Context-aware assistance** — reasoning across emails, spreadsheets, notes, and reports simultaneously
- **Iterative prompting** — natural language refinement ("shorter," "warmer tone," "more direct")
- **Cross-Microsoft-365 workflow positioning** — connecting insights from emails, meetings, documents, and data
- **From information to action** — not just summarizing, but reasoning, prioritizing, drafting, and planning

---

## ⚠️ Disclaimer

All company names, grower names, account data, and scenarios in this application are entirely fictional and created for demonstration purposes only. Any resemblance to real companies or individuals is coincidental.

Content in this app reflects general Copilot Chat guidance and is intended to illustrate how the technology can be applied in an agriculture retail context. Actual Copilot Chat capabilities and availability may vary based on license tier, tenant configuration, and product version. This is not an official Microsoft product or guide.

---

## 📄 License

MIT License — see [LICENSE](LICENSE) for details.
