import { SampleArtifact } from '../types';

// ─────────────────────────────────────────────────────────────────────────────
// SCENARIO 1 ARTIFACTS – Spring Planting Season Supply Readiness
// ─────────────────────────────────────────────────────────────────────────────

export const supplierDelayEmail: SampleArtifact = {
  id: 'artifact-supplier-delay-email',
  type: 'email',
  title: 'Supplier Delay Notice – UAN-32 & MAP Fertilizer',
  content: `From: logistics@agrisupply-central.com
To: orders@harvestpartners-ames.com
CC: regional.ops@harvestpartners.com
Subject: IMPORTANT: Delayed Shipment Notification – UAN-32 and MAP Fertilizer
Date: February 14, 2026

Dear Harvest Partners Ag – Ames Branch Team,

We regret to inform you that due to production disruptions at our Gulf Coast
manufacturing facility and ongoing transportation bottlenecks affecting rail
service into the Midwest, we are experiencing significant delays in fulfilling
your spring fertilizer orders.

Affected orders and estimated delays:

  Order #FP-2026-0114 | UAN-32 (Urea Ammonium Nitrate 32%)
  Quantity: 180,000 gallons
  Contracted delivery: March 1, 2026
  Revised estimated delivery: March 22–28, 2026 (3–4 week delay)

  Order #FP-2026-0118 | MAP (Monoammonium Phosphate) 11-52-0
  Quantity: 400 tons
  Contracted delivery: March 8, 2026
  Revised estimated delivery: March 22–28, 2026 (2–3 week delay)

Root causes:
- Unplanned maintenance shutdown at Donaldsonville, LA plant (Feb 8–17)
- CSX rail service disruption affecting Midwest distribution
- Port congestion affecting imported phosphate inputs

We are actively working to source partial alternative supply from our distribution
center in Columbus, OH and are engaging spot-market sources. We will provide weekly
status updates every Monday.

We understand this creates significant challenges for your pre-season commitments
and sincerely apologize for the disruption. Your account manager, Travis Mead,
is available to discuss priority allocation and alternative product options.

Sincerely,
AgrISupply Central – Logistics & Supply Chain Team
logistics@agrisupply-central.com | 1-800-555-0192`,
};

export const branchInventoryReport: SampleArtifact = {
  id: 'artifact-branch-inventory',
  type: 'spreadsheet',
  title: 'Branch Inventory Snapshot – Ames, IA (as of Feb 12, 2026)',
  content: `HARVEST PARTNERS AG – AMES BRANCH
Inventory Status Report | February 12, 2026
Prepared by: Branch Operations

FERTILIZERS
──────────────────────────────────────────────────────────────────────────────
Product                  | On Hand      | Pre-Booked   | Available  | Status
──────────────────────────────────────────────────────────────────────────────
UAN-32 (32% Nitrogen)    | 42,000 gal   | 180,000 gal  | -138,000   | CRITICAL
MAP 11-52-0              | 85 tons      | 400 tons     | -315 tons  | CRITICAL
Anhydrous Ammonia 82%    | 310,000 gal  | 290,000 gal  | 20,000 gal | LOW
DAP 18-46-0              | 120 tons     | 95 tons      | 25 tons    | OK
Potash 0-0-60            | 200 tons     | 180 tons     | 20 tons    | LOW

SEED (Corn)
──────────────────────────────────────────────────────────────────────────────
Pioneer P1197AM          | 1,250 bags   | 1,100 bags   | 150 bags   | LOW
Pioneer P2089YHR         | 890 bags     | 750 bags     | 140 bags   | LOW
Syngenta NK0760X         | 980 bags     | 780 bags     | 200 bags   | OK
DeKalb DKC65-95RIB       | 650 bags     | 580 bags     | 70 bags    | LOW

SEED (Soybean)
──────────────────────────────────────────────────────────────────────────────
Asgrow AG38X8            | 2,100 bags   | 1,900 bags   | 200 bags   | LOW
Channel 2919R2X          | 1,400 bags   | 1,050 bags   | 350 bags   | OK
Pioneer P22A42X          | 760 bags     | 740 bags     | 20 bags    | CRITICAL

CROP PROTECTION
──────────────────────────────────────────────────────────────────────────────
Roundup PowerMax 3       | 1,800 gal    | 1,200 gal    | 600 gal    | OK
Liberty 280 SL           | 950 gal      | 800 gal      | 150 gal    | LOW
Prefix SC (herbicide)    | 420 gal      | 300 gal      | 120 gal    | OK
Warrant Ultra            | 380 gal      | 250 gal      | 130 gal    | OK
Delaro Complete (fungicide)| 520 gal    | 480 gal      | 40 gal     | CRITICAL

NOTES:
- CRITICAL items require immediate sourcing action or customer communication
- LOW items should be monitored; consider partial alternative sourcing
- Pre-booked figures include all confirmed spring pre-season orders`,
};

export const openOrdersList: SampleArtifact = {
  id: 'artifact-open-orders',
  type: 'report',
  title: 'Pre-Season Order Book – Top Accounts Affected by Supply Delays',
  content: `HARVEST PARTNERS AG – AMES BRANCH
Pre-Season Order Book | Fertilizer Orders at Risk
Prepared by: Sales Operations | February 14, 2026

ACCOUNTS WITH UAN-32 AND/OR MAP EXPOSURE
──────────────────────────────────────────────────────────────────────────────
Account            | Tier     | Acres | UAN-32 Ordered | MAP Ordered | Rep
──────────────────────────────────────────────────────────────────────────────
Kowalski Farms     | Platinum | 2,400 | 48,000 gal     | 85 tons     | Sarah K.
Sunrise Grain LLC  | Platinum | 3,100 | 62,000 gal     | 110 tons    | Sarah K.
Anderson Brothers  | Gold     | 1,800 | 36,000 gal     | 65 tons     | Mike D.
Heritage Acres     | Silver   | 900   | 18,000 gal     | 32 tons     | Mike D.
Olson Family Farm  | Silver   | 700   | 16,000 gal     | 28 tons     | Sarah K.
Riverview Grain    | Gold     | 1,200 | 24,000 gal     | 42 tons     | Chris R.
──────────────────────────────────────────────────────────────────────────────
TOTALS                               | 204,000 gal    | 362 tons

NOTES ON ACCOUNT SENSITIVITY:
- Kowalski Farms: 12-year customer, Platinum. Very price-sensitive in renewal years.
  Planted April 5–15 historically. Delay could push into tight window.
- Sunrise Grain LLC: CEO Dave Hendricks. Has been evaluating competitor options.
  Already a retention risk — supply delay is high-stakes.
- Anderson Brothers: New account won from Nutrien last year. Delay could cause
  buyer's remorse and defection back to competitor.
- Olson Family Farm: First full season with Harvest Partners. First impression matters.

ALTERNATIVE SOURCING OPTIONS (Preliminary):
- Columbus OH distribution center: Up to 50,000 gal UAN-32 available at +$0.04/gal premium
- Spot market (broker): MAP available at +$18/ton premium; limited quantities
- Sister branch (Cedar Rapids): 15,000 gal UAN-32 possible internal transfer`,
};

export const seasonalPlanningNotes: SampleArtifact = {
  id: 'artifact-seasonal-notes',
  type: 'note',
  title: 'Branch Manager Planning Notes – Spring 2026',
  content: `HARVEST PARTNERS AG – AMES BRANCH
Branch Manager Planning Notes | Spring 2026
Author: Jim Ramirez, Branch Manager | Last Updated: January 28, 2026

SEASON OVERVIEW
Corn acres up ~8% from 2025 based on grower survey (62 respondents, Feb survey).
Soybean acres flat to -3%. Wheat minimal. Expect strong spring demand peak.
Fertilizer pre-bookings 22% above last year — best pre-season ever, but margin
pressure from competitive pricing by Nutrien and Helena.

KEY PRIORITIES FOR SPRING 2026
1. Ensure on-time fertilizer delivery for Platinum/Gold accounts — this is #1
2. Equipment rental capacity — already at 95% for April–May; no new rentals
3. Staff coverage: two experienced field reps retiring in Q1 (Dale Webb, March 1;
   Tom Ferris, April 1). Replacement hires started but not fully ramped.
4. Digital portal adoption: completed training Feb 3. Push for 40% online orders.
5. New account success: three large new accounts must have positive first season.

RISK FLAGS
- UAN and MAP supply already flagged as tight regionally (Regional Mgr note, Jan 20)
- Competitor pressure: Nutrien opened new branch 18 miles east (Hwy 30 and I-35)
  — actively targeting our mid-size accounts with incentive pricing
- Two key rep departures create relationship gap at critical time
- Weather: early frost risk per climate outlook; tight planting window possible

OPPORTUNITIES
- Precision ag upsell: 8 growers have expressed interest in variable rate fert plans
- Crop insurance partnership: 3 large accounts open to discussing HR insurance bundle
- Equipment loyalty program: Regional VP approved new loyalty tier for rental customers

PERSONAL NOTES
Remember: Dave Hendricks (Sunrise Grain) flagged supply concerns in December review.
Follow up personally before March 1. He's a relationship buyer — call, don't email.`,
};

// ─────────────────────────────────────────────────────────────────────────────
// SCENARIO 2 ARTIFACTS – Key Grower At-Risk Account Recovery
// ─────────────────────────────────────────────────────────────────────────────

export const growerAccountProfile: SampleArtifact = {
  id: 'artifact-grower-profile',
  type: 'report',
  title: 'Grower Account Profile – Sunrise Grain LLC',
  content: `HARVEST PARTNERS AG – CRM ACCOUNT SUMMARY
Account: Sunrise Grain LLC
Generated: February 14, 2026

ACCOUNT OVERVIEW
──────────────────────────────────────────────────────────────────────────────
Contact:       Dave Hendricks, Owner/Operator
Co-contact:    Brenda Hendricks, Business Manager
Location:      Nevada, Iowa (Story County)
Operation:     3,100 acres corn/soybean rotation
Account Tier:  Platinum
Field Rep:     Sarah Kolbe
Branch:        Harvest Partners Ag – Ames

PURCHASE HISTORY
──────────────────────────────────────────────────────────────────────────────
Year   | Total Purchases | YoY Change | Notes
──────────────────────────────────────────────────────────────────────────────
2023   | $912,000        | +4%        | Strong year; full product line
2024   | $1,034,000      | +13%       | Added precision ag package, expanded
2025   | $847,000        | -18%       | Late MAP delivery Apr 2025; expressed frustration
2026   | $12,400 (YTD)   | -98% YTD  | Only equipment supplies; zero seed/fert orders

CURRENT STATUS (as of Feb 14, 2026)
──────────────────────────────────────────────────────────────────────────────
Spring 2026 seed orders:       NONE PLACED (vs. $180,000+ at this point in 2025)
Spring 2026 fertilizer orders: NONE PLACED (vs. $205,000+ at this point in 2025)
Last substantive engagement:   December 2025 annual review (flags raised)
Days since last response:      17 days (last email Jan 28, no reply)

ACCOUNT VALUE CALCULATION
──────────────────────────────────────────────────────────────────────────────
3-year average annual revenue:    $931,000
Estimated gross margin (18%):     $167,580/year
If lost to competitor:            Estimated $500K+ lifetime value at risk

RELATIONSHIP NOTES
- 9-year customer, historically loyal and relationship-driven
- Dave is well-connected in Story County farming community; referral source for 3 accounts
- Expressed supply reliability concerns at Dec 2025 review
- Competitor (Nutrien Ag Solutions) reportedly offering supply guarantee program`,
};

export const serviceTicketNotes: SampleArtifact = {
  id: 'artifact-service-notes',
  type: 'note',
  title: 'Service & Interaction Log – Sunrise Grain LLC (Last 6 Months)',
  content: `HARVEST PARTNERS AG – SERVICE & INTERACTION LOG
Account: Sunrise Grain LLC | Account #: AG-10047
Period: August 2025 – February 2026

──────────────────────────────────────────────────────────────────────────────
Feb 10, 2026 | Phone Call | Field Rep: Sarah Kolbe
Dave called in asking about UAN-32 pricing for spring booking. Said he was
"evaluating options this year." Did not place order. Mentioned he had been
talking to "other suppliers" but did not name them specifically. Call was brief
(~8 min). Dave seemed distracted and non-committal. Sarah offered to schedule
a farm visit; Dave said he'd "get back to us."
Action Taken: None — awaiting Dave's response.

──────────────────────────────────────────────────────────────────────────────
Jan 28, 2026 | Email | Field Rep: Sarah Kolbe
Spring pre-season booking deadline reminder sent. Included pricing sheet and
early-pay incentive details. No response received as of Feb 14, 2026.
Action Taken: Follow-up planned but not yet executed.

──────────────────────────────────────────────────────────────────────────────
Jan 15, 2026 | Farm Visit | Field Rep: Sarah Kolbe
Holiday appreciation gift (gift basket) delivered to farm. Dave was present and
was "polite but brief." Did not invite Sarah in for coffee (usual custom). Brenda
mentioned Dave had been "thinking a lot about input costs this year."
Action Taken: None noted.

──────────────────────────────────────────────────────────────────────────────
Dec 12, 2025 | Annual Account Review | Branch Mgr: Jim Ramirez + Sarah Kolbe
Annual review meeting at farm. 45-minute meeting. Key flags raised by Dave:
1. "Last spring we were behind schedule because of the late MAP delivery. That
   cost us real money. I need to know you can guarantee supply this year."
2. Asked about our supply guarantee policy — we don't currently offer one.
3. Mentioned he has "other options" being presented to him.
Jim committed to "looking into supply guarantee options" and following up by Jan 15.
NOTE: Jan 15 follow-up on supply guarantee was NOT completed per CRM.
Action Taken: Partial — gift delivered Jan 15; supply guarantee follow-up missed.

──────────────────────────────────────────────────────────────────────────────
Nov 14, 2025 | Billing Dispute | Customer Service: Pam Torres
Dave called to dispute a $2,340 charge on October crop protection invoice —
claimed two units of Delaro Complete were billed but not delivered (backorder).
Investigation confirmed billing error. Credit issued Nov 18. Dave was "clearly
frustrated" with the process and had to make three calls to resolve it.
Said: "This shouldn't take three phone calls to fix a simple billing error."
Action Taken: Credit issued; process improvement ticket opened (unresolved).

──────────────────────────────────────────────────────────────────────────────
Oct 2025 | Fall Fertilizer Order | Field Rep: Sarah Kolbe
Dave placed fall anhydrous order — $89,000. Normal transaction, no issues noted.

──────────────────────────────────────────────────────────────────────────────
Aug 2025 | Growing Season Check-In | Field Rep: Sarah Kolbe
Mid-season farm visit. Crop looking good. Dave expressed satisfaction with Pioneer
seed performance. Some concern about late-season dry conditions in August.
No service issues noted.`,
};

export const competitiveIntelNote: SampleArtifact = {
  id: 'artifact-competitive-intel',
  type: 'field-note',
  title: 'Field Rep Competitive Activity Note – Sunrise Grain Area',
  content: `HARVEST PARTNERS AG – FIELD INTELLIGENCE NOTE
Submitted by: Sarah Kolbe, Field Sales Representative
Date: February 11, 2026
Re: Competitive Activity – Sunrise Grain LLC / Nutrien Ag Solutions

INTELLIGENCE SUMMARY
I received information from Tom Kowalski (Kowalski Farms, our Platinum account)
that Dave Hendricks of Sunrise Grain was seen at Nutrien Ag Solutions' "2026
Spring Planning Open House" held February 6 at the Nutrien branch in Ames.

Tom said Dave was asking Nutrien reps about their "Harvest Ready Guarantee" program —
apparently Nutrien is offering a supply guarantee to large accounts (1,500+ acres)
with a contractual commitment to on-time delivery or a penalty credit.

COMPETITIVE OFFER ASSESSMENT
Nutrien's reported pitch to large accounts in this area:
- Supply guarantee with penalty credit (estimated 5% credit on delayed product)
- Matched or slightly lower pricing on UAN-32 for multi-year commitments
- New branch proximity (18 miles east of our Ames branch on Hwy 30)
- Dedicated agronomist on staff at the new branch

OUR VULNERABILITY
Dave Hendricks is a relationship buyer, but our service failures in 2025 have
created real trust erosion:
- Late MAP delivery April 2025 cost him roughly $15,000 in replanting delays (his estimate)
- Billing dispute in November frustration
- We missed our Dec 12 commitment to follow up on supply guarantee options
- He has gone 17 days without responding to our outreach

MY RECOMMENDATION
If we can get Dave on a personal call from Branch Manager Jim Ramirez this week
and present a credible supply assurance option, I believe we have a strong chance
to retain the account. Dave is a community guy — he'd prefer to buy local and
maintain the relationship. But we need to show accountability and a solution.

Key message I'd recommend: acknowledge the 2025 issues, take ownership, present
a concrete supply plan for 2026, and make him feel like a priority.

Time sensitivity: HIGH. If he commits to Nutrien before March 1, we likely lose
the 2026 season and possibly the relationship long-term.`,
};

export const regionalOpsReview: SampleArtifact = {
  id: 'artifact-regional-ops',
  type: 'report',
  title: 'Regional Operations Review – Q4 2025 / Q1 2026 Outlook',
  content: `HARVEST PARTNERS AG – CENTRAL IOWA REGION
Quarterly Operations Review | Q4 2025 Performance & Q1 2026 Outlook
Prepared by: Regional Manager, Lisa Tran | February 1, 2026

REGIONAL PERFORMANCE SUMMARY (4 Branches: Ames, Boone, Marshalltown, Nevada)
──────────────────────────────────────────────────────────────────────────────
Metric                     | Q4 2025 Actual | Q4 2024 Actual | YoY Change
──────────────────────────────────────────────────────────────────────────────
Total Revenue              | $4.2M          | $3.9M          | +7.7%
Gross Margin               | $756K (18%)    | $741K (19%)    | +2.0% rev / -1pt margin
New Accounts               | 11             | 7              | +57%
Account Retention Rate     | 91%            | 94%            | -3pts
Pre-Season Bookings (fert) | $8.1M          | $6.6M          | +22.7%
Net Promoter Score         | 58             | 67             | -9pts

KEY ACHIEVEMENTS Q4 2025
+ New accounts from Nutrien/Helena competitive wins (11 new Platinum/Gold)
+ Digital portal adoption reached 31% of orders (target was 25%)
+ Precision ag upsell program generated $340K additional revenue

KEY CONCERNS
- Retention rate declined from 94% to 91% — driven by delivery issues Q3–Q4 2025
- Margin compression from competitive pricing pressure (Nutrien new branch)
- Two rep retirements in Q1 will strain coverage during peak season
- Supply constraint alerts for UAN and MAP flagged by regional procurement team

Q1 2026 OUTLOOK & PRIORITIES
1. Spring supply readiness — CRITICAL given fertilizer pre-bookings at record high
2. At-risk account recovery — 4 Platinum/Gold accounts flagged for retention risk
   (Sunrise Grain LLC being highest priority at branch level)
3. Competitive response to Nutrien's supply guarantee — evaluate counter-offer
4. New rep onboarding — Dale Webb successor starts Feb 24; Tom Ferris role open

BRANCH RANKINGS BY RETENTION RISK
Priority 1: Ames — highest exposure due to fertilizer delay and Sunrise Grain
Priority 2: Nevada — two accounts considering competitor switch
Priority 3: Boone — stable
Priority 4: Marshalltown — stable, strong rep coverage

RECOMMENDED ACTIONS FROM REGIONAL MANAGER
- Ames Branch to communicate supply delay plan to all affected accounts by Feb 20
- Authorize supply guarantee pilot program for top 10 regional accounts
- Schedule joint calls with Branch Manager + Field Rep for at-risk Platinum accounts`,
};

// ─────────────────────────────────────────────────────────────────────────────
// All artifacts exported by scenario for convenience
// ─────────────────────────────────────────────────────────────────────────────

export const scenario1Artifacts: SampleArtifact[] = [
  supplierDelayEmail,
  branchInventoryReport,
  openOrdersList,
  seasonalPlanningNotes,
];

export const scenario2Artifacts: SampleArtifact[] = [
  growerAccountProfile,
  serviceTicketNotes,
  competitiveIntelNote,
  regionalOpsReview,
];
