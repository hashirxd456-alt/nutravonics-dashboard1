import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  LayoutDashboard,
  Upload,
  Bot,
  Search,
  Plus,
  Save,
  Trash2,
  TrendingUp,
  TrendingDown,
  Target,
  Package,
  Brain,
  FileSpreadsheet,
  Swords,
  Edit3,
  RefreshCw,
  Database,
  BarChart3,
  Settings,
  ChevronRight,
  Bell,
  Users,
  Shield,
  Palette,
  Link2,
  ShoppingCart,
  Boxes,
  DollarSign,
  Truck,
  History,
  LineChart as LineChartIcon,
  Briefcase,
  AlertTriangle,
  Zap,
  Globe,
  ArrowUpRight,
  ArrowDownRight,
  Store,
  ClipboardList,
  Workflow,
  Layers3,
  UserCircle2,
} from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { Switch } from "@/components/ui/switch";
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, BarChart, Bar, AreaChart, Area, PieChart, Pie, Cell } from "recharts";

const seedProducts = [
  {
    id: "1",
    team: "Nutravonics",
    product: "Fat Burner",
    parentAsin: "B0NUTRA004P",
    childAsin: "B0D1ZMZ52W",
    price: 29.99,
    cvr: null,
    ctr: null,
    sessions: null,
    revenue: null,
    organicRank: null,
    notes: "Awaiting connected Amazon or imported source data.",
    trackedKeywords: [],
    competitors: [],
    tests: [],
    audit: ["Connect data source before showing live business metrics."],
    trend: [],
  },
  {
    id: "2",
    team: "Nutravonics",
    product: "Lion's Mane",
    parentAsin: "B0NUTRA005P",
    childAsin: "B0CNTFSZQQ",
    price: 24.99,
    cvr: null,
    ctr: null,
    sessions: null,
    revenue: null,
    organicRank: null,
    notes: "Awaiting connected Amazon or imported source data.",
    trackedKeywords: [],
    competitors: [],
    tests: [],
    audit: ["Connect data source before showing live business metrics."],
    trend: [],
  },
  {
    id: "3",
    team: "Nutravonics",
    product: "Magnesium",
    parentAsin: "B0NUTRA006P",
    childAsin: "B0CLN7SR8F",
    price: 21.99,
    cvr: null,
    ctr: null,
    sessions: null,
    revenue: null,
    organicRank: null,
    notes: "Awaiting connected Amazon or imported source data.",
    trackedKeywords: [],
    competitors: [],
    tests: [],
    audit: ["Connect data source before showing live business metrics."],
    trend: [],
  },
  {
    id: "4",
    team: "Nutravonics",
    product: "NMNs 600mg 60c",
    parentAsin: "B0NUTRA007P",
    childAsin: "B0FZLK4NHW",
    price: 34.99,
    cvr: null,
    ctr: null,
    sessions: null,
    revenue: null,
    organicRank: null,
    notes: "Awaiting connected Amazon or imported source data.",
    trackedKeywords: [],
    competitors: [],
    tests: [],
    audit: ["Connect data source before showing live business metrics."],
    trend: [],
  },
  {
    id: "5",
    team: "Nutravonics",
    product: "NMNs 600mg 120c",
    parentAsin: "B0NUTRA008P",
    childAsin: "B0GF8Q31QY",
    price: 49.99,
    cvr: null,
    ctr: null,
    sessions: null,
    revenue: null,
    organicRank: null,
    notes: "Awaiting connected Amazon or imported source data.",
    trackedKeywords: [],
    competitors: [],
    tests: [],
    audit: ["Connect data source before showing live business metrics."],
    trend: [],
  },
  {
    id: "6",
    team: "Nutravonics",
    product: "L-Theanine",
    parentAsin: "B0NUTRA001P",
    childAsin: "B0CLN2NCYV",
    price: 24.99,
    cvr: 8.2,
    ctr: 1.94,
    sessions: 4250,
    revenue: 12850,
    organicRank: 18,
    notes: "Demo values shown. Replace with live imported or synced data.",
    trackedKeywords: [
      { keyword: "l theanine supplement", rank: 18, prevRank: 23, indexed: true, volume: 8900, test: "Image Test", competitorRank: 9 },
      { keyword: "stress support supplement", rank: 33, prevRank: 31, indexed: true, volume: 4300, test: "Image Test", competitorRank: 14 },
      { keyword: "theanine 200mg", rank: 12, prevRank: 17, indexed: true, volume: 6100, test: "Copy Test", competitorRank: 7 },
    ],
    competitors: [
      { asin: "B0CJL3Z2FK", title: "Calm + Focus", strength: "Clear hook + stronger image stack", weakness: "Weaker purity proof", overlap: 67 },
      { asin: "B0GC8M5GT3", title: "Stress Relief", strength: "Aggressive pricing", weakness: "Weak premium positioning", overlap: 54 },
    ],
    tests: [
      { name: "Main Image Refresh", variable: "Images", preCVR: 7.8, postCVR: 8.9, goalCVR: 8.6, preCTR: 1.72, postCTR: 2.01, risk: "Medium", status: "Winning" },
      { name: "Bullet Rewrite", variable: "Copy", preCVR: 8.2, postCVR: 7.6, goalCVR: 8.9, preCTR: 1.94, postCTR: 1.88, risk: "Low", status: "At Risk" },
    ],
    audit: [
      "Main image needs stronger first-frame differentiation.",
      "Copy is still too feature-heavy.",
      "Spanish keyword coverage is incomplete.",
    ],
    trend: [
      { day: "Mon", sales: 12, revenue: 1840, cvr: 7.8, ctr: 1.72 },
      { day: "Tue", sales: 13, revenue: 1930, cvr: 7.9, ctr: 1.8 },
      { day: "Wed", sales: 11, revenue: 1670, cvr: 8.1, ctr: 1.83 },
      { day: "Thu", sales: 16, revenue: 2310, cvr: 8.4, ctr: 1.9 },
      { day: "Fri", sales: 19, revenue: 2860, cvr: 8.7, ctr: 1.98 },
      { day: "Sat", sales: 18, revenue: 2670, cvr: 8.9, ctr: 2.01 },
    ],
  },
  {
    id: "7",
    team: "Nutravonics",
    product: "Moringa",
    parentAsin: "B0NUTRA002P",
    childAsin: "B0FN2YGSDF",
    price: 21.49,
    cvr: 6.4,
    ctr: 1.48,
    sessions: 3180,
    revenue: 9670,
    organicRank: 26,
    notes: "Demo values shown. Replace with live imported or synced data.",
    trackedKeywords: [
      { keyword: "moringa capsules", rank: 26, prevRank: 25, indexed: true, volume: 10100, test: "Title Test", competitorRank: 8 },
      { keyword: "organic moringa", rank: 41, prevRank: 49, indexed: true, volume: 5900, test: "Title Test", competitorRank: 11 },
      { keyword: "capsulas de moringa", rank: 11, prevRank: 19, indexed: true, volume: 1500, test: "Backend Terms", competitorRank: 5 },
    ],
    competitors: [
      { asin: "B08J59RL6R", title: "Organic Energy Support", strength: "Large review moat", weakness: "Weaker premium look", overlap: 71 },
      { asin: "B09RG3RZJS", title: "Pure Moringa Leaf", strength: "Clean title targeting", weakness: "Less emotional hook", overlap: 64 },
    ],
    tests: [
      { name: "Title Rebuild", variable: "Title", preCVR: 6.1, postCVR: 6.8, goalCVR: 6.9, preCTR: 1.38, postCTR: 1.55, risk: "Medium", status: "Monitoring" },
    ],
    audit: [
      "Potency communication is not strong enough.",
      "Image sequence lacks trust proof.",
      "Broad PPC terms are soaking budget.",
    ],
    trend: [
      { day: "Mon", sales: 8, revenue: 1160, cvr: 6.1, ctr: 1.38 },
      { day: "Tue", sales: 9, revenue: 1280, cvr: 6.2, ctr: 1.41 },
      { day: "Wed", sales: 9, revenue: 1290, cvr: 6.3, ctr: 1.44 },
      { day: "Thu", sales: 10, revenue: 1440, cvr: 6.5, ctr: 1.47 },
      { day: "Fri", sales: 11, revenue: 1630, cvr: 6.7, ctr: 1.53 },
      { day: "Sat", sales: 12, revenue: 1720, cvr: 6.8, ctr: 1.55 },
    ],
  },
  {
    id: "8",
    team: "Nutravonics",
    product: "D-Mannose",
    parentAsin: "B0NUTRA003P",
    childAsin: "B0GK8SSS22",
    price: 23.99,
    cvr: 7.3,
    ctr: 1.67,
    sessions: 2890,
    revenue: 8860,
    organicRank: 21,
    notes: "Demo values shown. Replace with live imported or synced data.",
    trackedKeywords: [
      { keyword: "d mannose supplement", rank: 21, prevRank: 24, indexed: true, volume: 7800, test: "Hero Image", competitorRank: 10 },
      { keyword: "urinary tract support", rank: 39, prevRank: 37, indexed: true, volume: 6400, test: "Copy Test", competitorRank: 18 },
      { keyword: "d manosa", rank: 14, prevRank: 20, indexed: true, volume: 1100, test: "Backend Terms", competitorRank: 6 },
    ],
    competitors: [
      { asin: "B07R8WKXDD", title: "UT Support", strength: "Better review volume", weakness: "Weak premium branding", overlap: 62 },
      { asin: "B0FFRMSPKJ", title: "Fast Dissolve", strength: "Faster benefit explanation", weakness: "Less complete trust stack", overlap: 57 },
    ],
    tests: [
      { name: "Hero Image Claim", variable: "Images", preCVR: 7.1, postCVR: 7.6, goalCVR: 7.5, preCTR: 1.59, postCTR: 1.72, risk: "Medium", status: "Winning" },
    ],
    audit: [
      "The listing needs better urgency and differentiation.",
      "Keyword visibility is okay but copy does not close well.",
    ],
    trend: [
      { day: "Mon", sales: 9, revenue: 1330, cvr: 7.1, ctr: 1.59 },
      { day: "Tue", sales: 10, revenue: 1490, cvr: 7.2, ctr: 1.61 },
      { day: "Wed", sales: 10, revenue: 1510, cvr: 7.3, ctr: 1.64 },
      { day: "Thu", sales: 11, revenue: 1620, cvr: 7.4, ctr: 1.68 },
      { day: "Fri", sales: 12, revenue: 1770, cvr: 7.5, ctr: 1.7 },
      { day: "Sat", sales: 12, revenue: 1790, cvr: 7.6, ctr: 1.72 },
    ],
  },
];

const caseStudyData = [
  {
    id: "cs-1",
    date: "2026-01-12",
    month: "Jan",
    product: "L-Theanine",
    testType: "Images",
    preCVR: 7.8,
    postCVR: 8.9,
    preCTR: 1.72,
    postCTR: 2.01,
    rankBefore: 23,
    rankAfter: 18,
    status: "Winning",
    nextAction: "Scale image angle to remaining top keywords",
  },
  {
    id: "cs-2",
    date: "2026-02-05",
    month: "Feb",
    product: "Moringa",
    testType: "Title",
    preCVR: 6.1,
    postCVR: 6.8,
    preCTR: 1.38,
    postCTR: 1.55,
    rankBefore: 49,
    rankAfter: 41,
    status: "Winning",
    nextAction: "Expand title logic into bullets and backend terms",
  },
  {
    id: "cs-3",
    date: "2026-03-09",
    month: "Mar",
    product: "D-Mannose",
    testType: "Bullets",
    preCVR: 7.4,
    postCVR: 7.0,
    preCTR: 1.68,
    postCTR: 1.59,
    rankBefore: 20,
    rankAfter: 24,
    status: "Failed",
    nextAction: "Revert copy and isolate benefit hierarchy issue",
  },
  {
    id: "cs-4",
    date: "2026-04-02",
    month: "Apr",
    product: "L-Theanine",
    testType: "A+",
    preCVR: 8.0,
    postCVR: 7.8,
    preCTR: 1.89,
    postCTR: 1.86,
    rankBefore: 17,
    rankAfter: 19,
    status: "Paused",
    nextAction: "Hold rollout until image test completes",
  },
  {
    id: "cs-5",
    date: "2026-05-14",
    month: "May",
    product: "Moringa",
    testType: "Pricing",
    preCVR: 6.4,
    postCVR: 6.0,
    preCTR: 1.47,
    postCTR: 1.39,
    rankBefore: 41,
    rankAfter: 45,
    status: "Reverted",
    nextAction: "Return to previous price and re-evaluate coupon strategy",
  },
  {
    id: "cs-6",
    date: "2026-06-01",
    month: "Jun",
    product: "D-Mannose",
    testType: "Images",
    preCVR: 7.1,
    postCVR: 7.6,
    preCTR: 1.59,
    postCTR: 1.72,
    rankBefore: 24,
    rankAfter: 21,
    status: "Winning",
    nextAction: "Document as case study and apply to remaining urinary-support products",
  },
];

const channelData = [
  { name: "Amazon", value: 78 },
  { name: "Website", value: 14 },
  { name: "Other", value: 8 },
];

const inventoryData = [
  { product: "L-Theanine", status: "Healthy", units: 420 },
  { product: "Moringa", status: "Low stock", units: 74 },
  { product: "D-Mannose", status: "Healthy", units: 260 },
];

const settingsSections = [
  { key: "general", label: "General Settings", icon: Briefcase },
  { key: "users", label: "User & Access", icon: Users },
  { key: "notifications", label: "Notifications", icon: Bell },
  { key: "sales", label: "Sales Preferences", icon: DollarSign },
  { key: "integrations", label: "Integrations", icon: Link2 },
  { key: "reports", label: "Data & Reports", icon: Database },
  { key: "appearance", label: "Appearance", icon: Palette },
  { key: "amazon", label: "Amazon Integration", icon: Store },
];

const defaultSettings = {
  businessName: "Nutravonics",
  logoUrl: "",
  timeZone: "America/Toronto",
  currency: "CAD",
  language: "English",
  lowInventoryAlerts: true,
  dailyReports: true,
  weeklyReports: false,
  darkMode: false,
  dragWidgets: true,
  taxRate: 13,
  taxIncluded: true,
  defaultDiscount: 0,
  couponActive: false,
  shippingMode: "FBA",
  shippingCost: 3.5,
};

const keywordSubTabs = [
  { key: "tracked", label: "Tracked Keywords" },
  { key: "irrelevant", label: "Irrelevant Keywords" },
  { key: "misspellings", label: "Misspelling Keywords" },
];

const irrelevantKeywordSeed = [
  { keyword: "free fat burner", reason: "Low buyer intent and poor relevance for conversion-focused targeting" },
  { keyword: "cheap weight loss hacks", reason: "Weak purchase intent and not aligned with product positioning" },
  { keyword: "moringa tree seeds", reason: "Not relevant to capsule supplement listing intent" },
];

const misspellingKeywordSeed = [
  { keyword: "l teanine", mappedTo: "l theanine" },
  { keyword: "d manose", mappedTo: "d mannose" },
  { keyword: "lions mane supplment", mappedTo: "lion's mane supplement" },
];

function csvToRows(text) {
  const lines = text.trim().split(/\r?\n/).filter(Boolean);
  if (!lines.length) return [];
  const headers = lines[0].split(",").map((h) => h.trim());
  return lines.slice(1).map((line) => {
    const values = line.split(",");
    const row = {};
    headers.forEach((header, index) => {
      row[header] = (values[index] || "").trim();
    });
    return row;
  });
}

function delta(rank, prevRank) {
  return prevRank - rank;
}

function statusBadge(status) {
  if (status === "Winning") return "default";
  if (status === "At Risk") return "destructive";
  return "secondary";
}

function metricDisplay(value, suffix = "") {
  if (value === null || value === undefined || value === "") return "—";
  return `${value}${suffix}`;
}

function calculateNetSales(revenue, settings) {
  if (revenue == null) return null;
  const discountMultiplier = 1 - (Number(settings.defaultDiscount || 0) / 100);
  const discountedRevenue = revenue * discountMultiplier;
  if (settings.taxIncluded) {
    return discountedRevenue / (1 + Number(settings.taxRate || 0) / 100);
  }
  return discountedRevenue;
}

function calculateEstimatedProfit(revenue, settings, units = 0) {
  if (revenue == null) return null;
  const netSales = calculateNetSales(revenue, settings) || 0;
  const shippingTotal = Number(settings.shippingCost || 0) * Number(units || 0);
  return Number((netSales - shippingTotal).toFixed(2));
}

function generateCopilotReply(message, product) {
  const input = message.trim().toLowerCase();
  const keywords = product.trackedKeywords || [];
  const competitors = product.competitors || [];
  const tests = product.tests || [];
  const topKeyword = keywords.length ? [...keywords].sort((a, b) => delta(b.rank, b.prevRank) - delta(a.rank, a.prevRank))[0] : null;
  const weakestKeyword = keywords.length ? [...keywords].sort((a, b) => (a.rank || 999) - (b.rank || 999)).slice(-1)[0] : null;
  const strongestCompetitor = competitors[0] || null;
  const riskyTest = tests.find((t) => t.status === "At Risk");
  const winningTest = tests.find((t) => t.status === "Winning");

  if (!input) {
    return "Ask me about rankings, CVR, CTR, competitors, next actions, tests, or push-plan strategy for the selected product.";
  }

  if (["hi", "hello", "hey", "salam", "assalamualaikum"].includes(input)) {
    return `Hi — I’m ready to help with ${product.product}. Ask me about keyword rankings, competitors, CVR, CTR, tests, or the next action plan.`;
  }

  if (input.includes("help") || input.includes("what can you do")) {
    return "I can summarize product performance, explain ranking movement, highlight competitor strengths and weaknesses, show test risks, and recommend the next push-plan actions using the selected product’s dashboard context.";
  }

  if (input.includes("cvr") || input.includes("ctr") || input.includes("conversion")) {
    if (product.cvr == null || product.ctr == null) {
      return `Live CVR and CTR are not loaded yet for ${product.product}. To make this accurate, connect Amazon data or import your business-performance source. Once that data is connected, I can explain why conversion is weak and what to fix next.`;
    }
    let reply = `${product.product} currently shows CVR ${product.cvr}% and CTR ${product.ctr}%. `;
    if (winningTest) reply += `The strongest positive signal is from ${winningTest.name}, which suggests the winning change should be scaled carefully. `;
    if (riskyTest) reply += `The main risk is ${riskyTest.name}, which should be isolated or paused if the decline continues.`;
    return reply;
  }

  if (input.includes("rank") || input.includes("keyword")) {
    if (!keywords.length) {
      return `No keyword dataset is loaded yet for ${product.product}. Import a keyword CSV or connect a ranking source and I’ll analyze gains, losses, indexing, and push opportunities.`;
    }
    return `Top keyword opportunity for ${product.product} is ${topKeyword?.keyword || "the strongest tracked keyword"}. Current best momentum is ${topKeyword ? `rank #${topKeyword.rank} from #${topKeyword.prevRank}` : "not available"}. Weakest pressure point is ${weakestKeyword?.keyword || "not available"}, so that keyword should either be supported with content alignment or deprioritized.`;
  }

  if (input.includes("competitor") || input.includes("weakness") || input.includes("strength")) {
    if (!competitors.length) {
      return `Competitor intelligence has not been loaded yet for ${product.product}. Once competitor data is connected, I can compare strengths, weaknesses, and keyword gaps.`;
    }
    return `Main competitor pressure for ${product.product} comes from ${strongestCompetitor?.asin}. They are currently winning on ${strongestCompetitor?.strength?.toLowerCase()}. The clearest opening for us is ${strongestCompetitor?.weakness?.toLowerCase()}, so that should be reflected in image messaging, trust proof, and bullet positioning.`;
  }

  if (input.includes("test") || input.includes("experiment") || input.includes("case study")) {
    if (!tests.length) {
      return `There are no tests loaded yet for ${product.product}. Add or sync test history and I can tell you which experiments are winning, risky, or ready to scale.`;
    }
    if (riskyTest && winningTest) {
      return `For ${product.product}, the winning test is ${winningTest.name} and the risk test is ${riskyTest.name}. Recommendation: scale the winning change in a controlled way and isolate or revert the risky one if performance stays below baseline.`;
    }
    if (winningTest) return `The strongest test for ${product.product} is ${winningTest.name}. Recommendation: document it as a case study and expand the same logic to the next product or variation.`;
    if (riskyTest) return `The main concern for ${product.product} is ${riskyTest.name}. Recommendation: pause broad rollout and isolate the exact variable causing the drop.`;
    return `Tests are loaded for ${product.product}, but none are currently marked as winning or at risk.`;
  }

  if (input.includes("next") || input.includes("action") || input.includes("plan") || input.includes("push")) {
    let pieces = [];
    if (topKeyword) pieces.push(`push ${topKeyword.keyword} because it has the strongest momentum`);
    if (strongestCompetitor) pieces.push(`counter ${strongestCompetitor.asin} on ${strongestCompetitor.weakness?.toLowerCase()}`);
    if (riskyTest) pieces.push(`review ${riskyTest.name} before scaling anything else`);
    if (!pieces.length) return `Next step for ${product.product}: connect live Amazon and ranking data first, then I can generate a precise push plan.`;
    return `Next action plan for ${product.product}: ${pieces.join("; ")}.`;
  }

  if (input.includes("sales") || input.includes("revenue") || input.includes("orders") || input.includes("profit")) {
    const sales = product.trend?.reduce((sum, row) => sum + (row.sales || 0), 0) || 0;
    return `${product.product} currently shows ${sales} tracked sales units in the loaded trend view and ${product.revenue != null ? `$${product.revenue} revenue` : "no live revenue yet"}. For production use, these should come from Amazon sync rather than demo or imported-only values.`;
  }

  return `For ${product.product}, my current best suggestion is to review keyword movement, competitor gaps, and active tests together before making the next listing change. Ask me something specific like “show keyword opportunities”, “why is CVR low”, or “what should I test next?”.`;
}

function AssistantPanel({ product }) {
  const [copilotMessage, setCopilotMessage] = useState("");
  const [chatHistory, setChatHistory] = useState([
    {
      role: "assistant",
      text: `Hi — I’m ready to help with ${product.product}. Ask me about rankings, CVR, CTR, competitors, tests, or next actions.`
    }
  ]);

  const usableKeywords = product.trackedKeywords || [];
  const topKeyword = usableKeywords.length ? [...usableKeywords].sort((a, b) => delta(b.rank, b.prevRank) - delta(a.rank, a.prevRank))[0] : null;
  const topCompetitor = product.competitors?.[0];

  const sendMessage = (preset) => {
    const text = (preset ?? copilotMessage).trim();
    if (!text) return;
    const reply = generateCopilotReply(text, product);
    setChatHistory((prev) => [...prev, { role: "user", text }, { role: "assistant", text: reply }]);
    setCopilotMessage("");
  };

  return (
    <Card className="rounded-3xl border-0 shadow-sm">
      <CardHeader>
        <CardTitle className="flex items-center gap-2"><Bot className="h-5 w-5" /> AI Copilot</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 text-sm text-slate-700">
        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">Quick summary</p>
          {product.cvr == null || product.ctr == null ? (
            <p className="mt-2">This product is ready in the dashboard, but live CVR, CTR, sales, and ranking data should come from connected Amazon data or imported files before the AI assistant can provide accurate operational insights.</p>
          ) : (
            <p className="mt-2">{product.product} is showing {product.cvr}% CVR and {product.ctr}% CTR. Strongest momentum is on <span className="font-semibold">{topKeyword?.keyword}</span>. Biggest opportunity is to sharpen positioning against <span className="font-semibold">{topCompetitor?.asin}</span> where their weakness is {topCompetitor?.weakness?.toLowerCase()}.</p>
          )}
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="font-semibold text-slate-900">Useful prompts</p>
          <div className="mt-3 flex flex-wrap gap-2">
            {[
              "Hi",
              "Show keyword opportunities",
              "Why is CVR low?",
              "Show competitor weaknesses",
              "What should I test next?"
            ].map((prompt) => (
              <button
                key={prompt}
                onClick={() => sendMessage(prompt)}
                className="rounded-full bg-white px-3 py-2 text-xs font-medium text-slate-700 shadow-sm ring-1 ring-slate-200 transition hover:bg-slate-100"
              >
                {prompt}
              </button>
            ))}
          </div>
        </div>

        <div className="rounded-2xl bg-slate-50 p-4">
          <p className="mb-3 font-semibold text-slate-900">Chat</p>
          <div className="space-y-3">
            <ScrollArea className="h-[240px] rounded-2xl bg-white p-3 ring-1 ring-slate-200">
              <div className="space-y-3 pr-2">
                {chatHistory.map((message, index) => (
                  <div key={index} className={`rounded-2xl px-3 py-2 text-sm ${message.role === "user" ? "ml-8 bg-slate-900 text-white" : "mr-8 bg-slate-100 text-slate-800"}`}>
                    {message.text}
                  </div>
                ))}
              </div>
            </ScrollArea>
            <Textarea
              value={copilotMessage}
              onChange={(e) => setCopilotMessage(e.target.value)}
              placeholder="Ask about keywords, competitors, tests, sales, CVR, or next actions..."
              className="min-h-[110px] rounded-2xl bg-white"
            />
            <Button className="rounded-2xl" onClick={() => sendMessage()}>
              Send Message
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

function Sidebar({ activeMain, setActiveMain, activeSettings, setActiveSettings, products, selectedId, setSelectedId }) {
  const menu = [
    { key: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { key: "products", label: "Products", icon: Package },
    { key: "push-plan", label: "Push Plan", icon: Workflow },
    { key: "case-studies", label: "Case Studies", icon: History },
    { key: "competitors", label: "Competitor Lab", icon: Swords },
    { key: "settings", label: "Settings", icon: Settings },
  ];

  return (
    <aside className="sticky top-0 h-screen w-[290px] shrink-0 border-r bg-slate-950 text-slate-100">
      <div className="flex h-full flex-col">
        <div className="border-b border-slate-800 p-6">
          <div className="flex items-center gap-3">
            <div className="rounded-2xl bg-slate-800 p-3"><Layers3 className="h-5 w-5" /></div>
            <div>
              <p className="text-lg font-bold">Nutravonics</p>
              <p className="text-sm text-slate-400">Nutritions Dashboard</p>
            </div>
          </div>
        </div>

        <ScrollArea className="flex-1">
          <div className="space-y-7 p-4">
            <div className="space-y-1">
              {menu.map((item) => {
                const Icon = item.icon;
                const active = activeMain === item.key;
                return (
                  <button
                    key={item.key}
                    onClick={() => setActiveMain(item.key)}
                    className={`flex w-full items-center justify-between rounded-2xl px-4 py-3 text-left transition ${active ? "bg-blue-600 text-white" : "text-slate-300 hover:bg-slate-900"}`}
                  >
                    <span className="flex items-center gap-3"><Icon className="h-4 w-4" /> {item.label}</span>
                    <ChevronRight className="h-4 w-4 opacity-70" />
                  </button>
                );
              })}
            </div>

            <div>
              <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Product subtabs</p>
              <div className="space-y-2">
                {products.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => {
                      setActiveMain("products");
                      setSelectedId(product.id);
                    }}
                    className={`w-full rounded-2xl px-4 py-3 text-left text-sm transition ${selectedId === product.id ? "bg-slate-800 text-white" : "bg-slate-900/50 text-slate-300 hover:bg-slate-900"}`}
                  >
                    <div className="flex items-center justify-between gap-3">
                      <span>{product.product}</span>
                      <Badge variant="secondary" className="bg-slate-700 text-slate-100">{product.childAsin}</Badge>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {activeMain === "settings" && (
              <div>
                <p className="mb-3 px-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">Settings sections</p>
                <div className="space-y-2">
                  {settingsSections.map((item) => {
                    const Icon = item.icon;
                    const active = activeSettings === item.key;
                    return (
                      <button
                        key={item.key}
                        onClick={() => setActiveSettings(item.key)}
                        className={`flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left text-sm transition ${active ? "bg-slate-800 text-white" : "bg-slate-900/50 text-slate-300 hover:bg-slate-900"}`}
                      >
                        <Icon className="h-4 w-4" /> {item.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </ScrollArea>

        <div className="border-t border-slate-800 p-4">
          <div className="flex items-center gap-3 rounded-2xl bg-slate-900 p-3">
            <UserCircle2 className="h-9 w-9 text-slate-300" />
            <div>
              <p className="text-sm font-semibold">Admin User</p>
              <p className="text-xs text-slate-400">Manage data, tests, settings</p>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
}

function OverviewPage({ products, selectedProduct, query, setQuery, selectedId, setSelectedId, keywordSubTab, setKeywordSubTab, settingsData }) {
  const totalRevenue = products.reduce((sum, p) => sum + (p.revenue || 0), 0);
  const totalUnits = products.reduce((sum, p) => sum + (p.trend?.reduce((s, r) => s + (r.sales || 0), 0) || 0), 0);
  const productsWithCVR = products.filter((p) => p.cvr != null);
  const avgCVR = productsWithCVR.length ? (productsWithCVR.reduce((sum, p) => sum + p.cvr, 0) / productsWithCVR.length).toFixed(2) : "0.00";
  const filteredProducts = products.filter((p) => !query || [p.product, p.childAsin, p.parentAsin, p.team].join(" ").toLowerCase().includes(query.toLowerCase()));
  const selectedUnits = selectedProduct.trend?.reduce((sum, r) => sum + (r.sales || 0), 0) || 0;

  const selectedMetricCards = [
    ["Price", `$${selectedProduct.price}`],
    ["Sales", metricDisplay(selectedUnits)],
    ["CTR", metricDisplay(selectedProduct.ctr, "%")],
    ["CVR", metricDisplay(selectedProduct.cvr, "%")],
    ["Organic Rank", metricDisplay(selectedProduct.organicRank)],
  ];

  return (
    <div className="space-y-6">
      <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} className="rounded-[30px] bg-white p-8 shadow-sm">
        <div className="flex flex-col gap-6 xl:flex-row xl:items-start xl:justify-between">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-sm font-medium text-slate-700">
              <LayoutDashboard className="h-4 w-4" /> Nutravonic Nutrion Dashboard
            </div>
            <h1 className="mt-4 text-4xl font-bold tracking-tight text-slate-900">Sales Dashboard</h1>
            <p className="mt-3 max-w-3xl text-base text-slate-600">Track products, performance, keywords, competitors, push plans, and Amazon sync settings from one place.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button className="rounded-2xl gap-2"><Upload className="h-4 w-4" /> Import keyword CSV</Button>
            <Button variant="outline" className="rounded-2xl gap-2"><RefreshCw className="h-4 w-4" /> Refresh</Button>
          </div>
        </div>
      </motion.div>

      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
        {[
          { label: "Total Sales", value: totalUnits, note: "Combined units", icon: ShoppingCart },
          { label: "Revenue", value: `$${totalRevenue.toLocaleString()}`, note: "Combined", icon: DollarSign },
          { label: "Orders", value: products.reduce((sum, p) => sum + (p.trend?.length || 0), 0), note: "Tracked periods", icon: ClipboardList },
          { label: "Profit", value: "$12,940", note: "Demo placeholder", icon: BarChart3 },
          { label: "Conversion Rate", value: `${avgCVR}%`, note: "Avg of loaded products", icon: Target },
        ].map((item) => {
          const Icon = item.icon;
          return (
            <Card key={item.label} className="rounded-3xl border-0 shadow-sm">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-slate-500">{item.label}</p>
                    <h3 className="mt-2 text-3xl font-bold text-slate-900">{item.value}</h3>
                    <p className="mt-1 text-sm text-slate-500">{item.note}</p>
                  </div>
                  <div className="rounded-2xl bg-slate-100 p-3"><Icon className="h-5 w-5 text-slate-700" /></div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Tabs defaultValue="overview-inline" className="space-y-6">
        <TabsList className="flex h-auto w-full flex-wrap justify-center gap-3 rounded-2xl bg-white p-3 shadow-sm">
          <TabsTrigger value="overview-inline" className="rounded-xl px-5">Overview</TabsTrigger>
          <TabsTrigger value="products-inline" className="rounded-xl px-5">Products</TabsTrigger>
          <TabsTrigger value="keywords-inline" className="rounded-xl px-5">Keywords</TabsTrigger>
          <TabsTrigger value="competitors-inline" className="rounded-xl px-5">Competitors Analysis</TabsTrigger>
          <TabsTrigger value="push-inline" className="rounded-xl px-5">Push Plan</TabsTrigger>
        </TabsList>

        <TabsContent value="overview-inline" className="space-y-6">
          <div className="grid gap-6 xl:grid-cols-[320px_1fr_360px]">
            <Card className="rounded-3xl border-0 shadow-sm">
              <CardHeader>
                <CardTitle>Products</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-slate-400" />
                  <Input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search product or ASIN" className="rounded-2xl pl-9" />
                </div>
                <ScrollArea className="h-[520px] pr-2">
                  <div className="space-y-3">
                    {filteredProducts.map((product) => (
                      <button key={product.id} onClick={() => setSelectedId(product.id)} className={`w-full rounded-2xl border p-4 text-left transition ${selectedId === product.id ? "border-slate-900 bg-slate-900 text-white" : "bg-slate-50 hover:bg-slate-100"}`}>
                        <p className="font-semibold">{product.product}</p>
                        <p className={`mt-1 text-xs ${selectedId === product.id ? "text-slate-200" : "text-slate-500"}`}>{product.childAsin}</p>
                        <div className="mt-3 flex items-center justify-between text-xs">
                          <span>CVR {metricDisplay(product.cvr, "%")}</span>
                          <span>CTR {metricDisplay(product.ctr, "%")}</span>
                        </div>
                      </button>
                    ))}
                  </div>
                </ScrollArea>
              </CardContent>
            </Card>

            <div className="space-y-6">
              <Card className="rounded-3xl border-0 shadow-sm">
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>{selectedProduct.product}</CardTitle>
                  <Badge variant="secondary">{selectedProduct.childAsin}</Badge>
                </CardHeader>
                <CardContent className="grid gap-4 md:grid-cols-2 xl:grid-cols-5">
                  {selectedMetricCards.map(([label, value]) => (
                    <div key={label} className="min-w-0 rounded-2xl bg-slate-50 p-4">
                      <p className="text-sm text-slate-500">{label}</p>
                      <p className="mt-2 text-[clamp(1.15rem,2vw,2rem)] font-bold leading-tight text-slate-900">{value}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <div className="grid gap-6 lg:grid-cols-2">
                <Card className="rounded-3xl border-0 shadow-sm">
                  <CardHeader><CardTitle>Sales trend</CardTitle></CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={selectedProduct.trend}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Area type="monotone" dataKey="revenue" strokeWidth={2} fillOpacity={0.2} />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl border-0 shadow-sm">
                  <CardHeader><CardTitle>CVR / CTR trend</CardTitle></CardHeader>
                  <CardContent className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={selectedProduct.trend}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="day" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="cvr" strokeWidth={3} dot={false} />
                        <Line type="monotone" dataKey="ctr" strokeWidth={3} dot={false} />
                      </LineChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>

              <div className="grid gap-6 lg:grid-cols-3">
                <Card className="rounded-3xl border-0 shadow-sm lg:col-span-2">
                  <CardHeader><CardTitle>Recent orders / activity</CardTitle></CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Date</TableHead>
                          <TableHead>Product</TableHead>
                          <TableHead>Channel</TableHead>
                          <TableHead>Status</TableHead>
                          <TableHead>Revenue</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {selectedProduct.trend?.slice(-5).map((row, index) => (
                          <TableRow key={`${row.day}-${index}`}>
                            <TableCell>{row.day}</TableCell>
                            <TableCell>{selectedProduct.product}</TableCell>
                            <TableCell>Amazon</TableCell>
                            <TableCell><Badge>Synced</Badge></TableCell>
                            <TableCell>${row.revenue || 0}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
                <Card className="rounded-3xl border-0 shadow-sm">
                  <CardHeader><CardTitle>Channel performance</CardTitle></CardHeader>
                  <CardContent className="h-[230px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <PieChart>
                        <Pie data={channelData} dataKey="value" nameKey="name" innerRadius={50} outerRadius={78} paddingAngle={3}>
                          {channelData.map((entry, idx) => <Cell key={entry.name} fill={["#0f172a", "#3b82f6", "#94a3b8"][idx % 3]} />)}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-6">
              <AssistantPanel product={selectedProduct} />
              <Card className="rounded-3xl border-0 shadow-sm">
                <CardHeader><CardTitle>Inventory alerts</CardTitle></CardHeader>
                <CardContent className="space-y-3 text-sm">
                  {inventoryData.map((item) => (
                    <div key={item.product} className="flex items-center justify-between rounded-2xl bg-slate-50 p-4">
                      <div>
                        <p className="font-semibold text-slate-900">{item.product}</p>
                        <p className="text-slate-500">{item.units} units</p>
                      </div>
                      <Badge variant={item.status === "Low stock" ? "destructive" : "secondary"}>{item.status}</Badge>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="products-inline">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader><CardTitle>Products module</CardTitle></CardHeader>
            <CardContent><p className="text-slate-600">Use the Products main menu on the left for editable product detail management and uploads.</p></CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="keywords-inline">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle>Keywords module</CardTitle>
              <div className="flex gap-2 rounded-2xl bg-slate-100 p-1">
                {keywordSubTabs.map((tab) => (
                  <button key={tab.key} onClick={() => setKeywordSubTab(tab.key)} className={`rounded-xl px-4 py-2 text-sm ${keywordSubTab === tab.key ? "bg-white shadow-sm" : "text-slate-600"}`}>{tab.label}</button>
                ))}
              </div>
            </CardHeader>
            <CardContent>
              {keywordSubTab === "tracked" && (
                <p className="text-slate-600">Use the Products section and CSV import flow to manage tracked keyword performance and ranking movement.</p>
              )}
              {keywordSubTab === "irrelevant" && (
                <div className="space-y-3">
                  {irrelevantKeywordSeed.map((row) => (
                    <div key={row.keyword} className="rounded-2xl border p-4">
                      <p className="font-semibold text-slate-900">{row.keyword}</p>
                      <p className="mt-1 text-sm text-slate-600">{row.reason}</p>
                    </div>
                  ))}
                </div>
              )}
              {keywordSubTab === "misspellings" && (
                <div className="space-y-3">
                  {misspellingKeywordSeed.map((row) => (
                    <div key={row.keyword} className="rounded-2xl border p-4">
                      <p className="font-semibold text-slate-900">{row.keyword}</p>
                      <p className="mt-1 text-sm text-slate-600">Map to: {row.mappedTo}</p>
                    </div>
                  ))}
                </div>
              )}
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="competitors-inline">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader><CardTitle>Competitors Analysis module</CardTitle></CardHeader>
            <CardContent><p className="text-slate-600">Use the Competitor Lab menu for strengths, weaknesses, keyword gaps, and positioning.</p></CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="push-inline">
          <Card className="rounded-3xl border-0 shadow-sm">
            <CardHeader><CardTitle>Push Plan module</CardTitle></CardHeader>
            <CardContent><p className="text-slate-600">Use the Push Plan main tab for tactical daily, weekly, and monthly optimization tasks.</p></CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}

function ProductsPage({ selectedProduct, updateField, deleteProduct, newProduct, setNewProduct, addProduct, handleCsvUpload }) {
  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.25fr_0.75fr]">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="flex items-center gap-2"><Edit3 className="h-5 w-5" /> Editable Product Details</CardTitle>
            <div className="flex gap-3">
              <label className="inline-flex cursor-pointer items-center gap-2 rounded-2xl bg-slate-900 px-4 py-2 text-sm font-medium text-white">
                <Upload className="h-4 w-4" /> Import keyword CSV
                <input type="file" accept=".csv" className="hidden" onChange={handleCsvUpload} />
              </label>
              <Button variant="destructive" className="rounded-2xl gap-2" onClick={deleteProduct}><Trash2 className="h-4 w-4" /> Delete</Button>
            </div>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {[
              ["product", "Product Name"],
              ["team", "Team"],
              ["parentAsin", "Parent ASIN"],
              ["childAsin", "Child ASIN"],
              ["price", "Price"],
              ["cvr", "CVR"],
              ["ctr", "CTR"],
              ["sessions", "Sessions"],
              ["revenue", "Revenue"],
              ["organicRank", "Organic Rank"],
            ].map(([field, label]) => (
              <div key={field} className="space-y-2">
                <Label>{label}</Label>
                <Input value={selectedProduct[field] ?? ""} onChange={(e) => updateField(field, e.target.value)} className="rounded-2xl" />
              </div>
            ))}
            <div className="space-y-2 md:col-span-2">
              <Label>Notes</Label>
              <Textarea value={selectedProduct.notes || ""} onChange={(e) => updateField("notes", e.target.value)} className="min-h-[120px] rounded-2xl" />
            </div>
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader><CardTitle className="flex items-center gap-2"><Plus className="h-5 w-5" /> Add Product</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {[
              ["product", "Product Name"],
              ["team", "Team"],
              ["parentAsin", "Parent ASIN"],
              ["childAsin", "Child ASIN"],
              ["price", "Price"],
              ["cvr", "CVR"],
              ["ctr", "CTR"],
              ["sessions", "Sessions"],
              ["revenue", "Revenue"],
              ["organicRank", "Organic Rank"],
            ].map(([field, label]) => (
              <div key={field} className="space-y-2">
                <Label>{label}</Label>
                <Input value={newProduct[field]} onChange={(e) => setNewProduct((prev) => ({ ...prev, [field]: e.target.value }))} className="rounded-2xl" />
              </div>
            ))}
            <div className="space-y-2">
              <Label>Notes</Label>
              <Textarea value={newProduct.notes} onChange={(e) => setNewProduct((prev) => ({ ...prev, notes: e.target.value }))} className="min-h-[110px] rounded-2xl" />
            </div>
            <Button className="w-full rounded-2xl gap-2" onClick={addProduct}><Save className="h-4 w-4" /> Add Product</Button>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-3xl border-0 shadow-sm">
        <CardHeader><CardTitle>Keyword results</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Keyword</TableHead>
                <TableHead>Rank</TableHead>
                <TableHead>Prev</TableHead>
                <TableHead>Movement</TableHead>
                <TableHead>Indexed</TableHead>
                <TableHead>Volume</TableHead>
                <TableHead>Competitor Rank</TableHead>
                <TableHead>Test</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {selectedProduct.trackedKeywords?.length ? selectedProduct.trackedKeywords.map((row) => {
                const move = delta(row.rank, row.prevRank);
                return (
                  <TableRow key={row.keyword}>
                    <TableCell className="font-medium">{row.keyword}</TableCell>
                    <TableCell>#{row.rank}</TableCell>
                    <TableCell>#{row.prevRank}</TableCell>
                    <TableCell>
                      <span className={`inline-flex items-center gap-1 font-medium ${move > 0 ? "text-emerald-600" : move < 0 ? "text-rose-600" : "text-slate-500"}`}>
                        {move > 0 ? <ArrowUpRight className="h-4 w-4" /> : move < 0 ? <ArrowDownRight className="h-4 w-4" /> : null}
                        {move > 0 ? `+${move}` : move}
                      </span>
                    </TableCell>
                    <TableCell>{row.indexed ? <Badge>Yes</Badge> : <Badge variant="destructive">No</Badge>}</TableCell>
                    <TableCell>{row.volume?.toLocaleString?.() || row.volume}</TableCell>
                    <TableCell>{row.competitorRank ? `#${row.competitorRank}` : "—"}</TableCell>
                    <TableCell>{row.test}</TableCell>
                  </TableRow>
                );
              }) : (
                <TableRow><TableCell colSpan={8} className="text-center text-slate-500">No keyword data yet. Import CSV or connect Amazon data.</TableCell></TableRow>
              )}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function PushPlanPage({ selectedProduct }) {
  const actionRows = [
    { priority: "High", task: "Scale winning creative angles on main image and brand story.", owner: "Creative", timing: "Today" },
    { priority: "High", task: "Push keywords ranking between positions 11–25 with tighter PPC + listing alignment.", owner: "SEO/PPC", timing: "This week" },
    { priority: "Medium", task: "Audit competitors by weakness and create counter-positioning bullets.", owner: "Content", timing: "This week" },
    { priority: "Medium", task: "Review past case studies before launching next test wave.", owner: "Strategy", timing: "Before next test" },
  ];

  const graphRows = caseStudyData.map((row) => ({
    month: row.month,
    cvrLift: Number((row.postCVR - row.preCVR).toFixed(2)),
    ctrLift: Number((row.postCTR - row.preCTR).toFixed(2)),
    rankGain: row.rankBefore - row.rankAfter,
  }));

  return (
    <div className="space-y-6">
      <div className="grid gap-6 xl:grid-cols-[1.4fr_1fr]">
        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader><CardTitle className="flex items-center gap-2"><Workflow className="h-5 w-5" /> Push plan for {selectedProduct.product}</CardTitle></CardHeader>
          <CardContent className="space-y-4">
            {actionRows.map((row, index) => (
              <div key={index} className="flex items-start justify-between gap-4 rounded-2xl border p-4">
                <div>
                  <div className="mb-2 flex items-center gap-2">
                    <Badge variant={row.priority === "High" ? "destructive" : "secondary"}>{row.priority}</Badge>
                    <span className="text-xs text-slate-500">{row.timing}</span>
                  </div>
                  <p className="font-medium text-slate-900">{row.task}</p>
                  <p className="mt-1 text-sm text-slate-500">Owner: {row.owner}</p>
                </div>
                <Button variant="outline" className="rounded-2xl">Mark done</Button>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="rounded-3xl border-0 shadow-sm">
          <CardHeader><CardTitle className="flex items-center gap-2"><LineChartIcon className="h-5 w-5" /> Case study impact</CardTitle></CardHeader>
          <CardContent className="h-[340px]">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={graphRows}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="month" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cvrLift" strokeWidth={3} />
                <Line type="monotone" dataKey="ctrLift" strokeWidth={3} />
                <Line type="monotone" dataKey="rankGain" strokeWidth={3} />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>

      <Card className="rounded-3xl border-0 shadow-sm">
        <CardHeader><CardTitle>Past test / case study tracker</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Test Type</TableHead>
                <TableHead>Pre-CVR</TableHead>
                <TableHead>Post-CVR</TableHead>
                <TableHead>Pre-CTR</TableHead>
                <TableHead>Post-CTR</TableHead>
                <TableHead>Rank Change</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Next Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {caseStudyData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell className="font-medium">{row.product}</TableCell>
                  <TableCell>{row.testType}</TableCell>
                  <TableCell>{row.preCVR}%</TableCell>
                  <TableCell>{row.postCVR}%</TableCell>
                  <TableCell>{row.preCTR}%</TableCell>
                  <TableCell>{row.postCTR}%</TableCell>
                  <TableCell>{row.rankBefore - row.rankAfter > 0 ? `+${row.rankBefore - row.rankAfter}` : row.rankBefore - row.rankAfter}</TableCell>
                  <TableCell><Badge variant={statusBadge(row.status === "Failed" ? "At Risk" : row.status)}>{row.status}</Badge></TableCell>
                  <TableCell>{row.nextAction}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function CompetitorsPage({ selectedProduct }) {
  const [subTab, setSubTab] = useState("strengths");

  const blocks = {
    strengths: selectedProduct.competitors?.map((c) => ({ title: c.asin, body: c.strength })) || [],
    weaknesses: selectedProduct.competitors?.map((c) => ({ title: c.asin, body: c.weakness })) || [],
    gaps: selectedProduct.trackedKeywords?.map((k) => ({ title: k.keyword, body: k.competitorRank ? `We rank #${k.rank}; competitor around #${k.competitorRank}. Opportunity to close gap through listing + ads alignment.` : "Need competitor keyword data source." })) || [],
  };

  return (
    <div className="space-y-6">
      <Card className="rounded-3xl border-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>Competitor analysis</CardTitle>
          <div className="flex gap-2 rounded-2xl bg-slate-100 p-1">
            {[
              ["strengths", "Strengths"],
              ["weaknesses", "Weaknesses"],
              ["gaps", "Keyword Gaps"],
            ].map(([key, label]) => (
              <button key={key} onClick={() => setSubTab(key)} className={`rounded-xl px-4 py-2 text-sm ${subTab === key ? "bg-white shadow-sm" : "text-slate-600"}`}>{label}</button>
            ))}
          </div>
        </CardHeader>
        <CardContent className="grid gap-4 lg:grid-cols-2">
          {blocks[subTab]?.length ? blocks[subTab].map((item) => (
            <div key={`${subTab}-${item.title}`} className="rounded-2xl border p-4">
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="mt-2 text-sm text-slate-600">{item.body}</p>
            </div>
          )) : <p className="text-slate-500">No competitor data loaded yet.</p>}
        </CardContent>
      </Card>
    </div>
  );
}

function CaseStudiesPage() {
  const graphRows = caseStudyData.map((row) => ({
    month: row.month,
    cvrLift: Number((row.postCVR - row.preCVR).toFixed(2)),
    ctrLift: Number((row.postCTR - row.preCTR).toFixed(2)),
    rankGain: row.rankBefore - row.rankAfter,
  }));

  return (
    <div className="space-y-6">
      <Card className="rounded-3xl border-0 shadow-sm">
        <CardHeader><CardTitle>Past case studies performance graph</CardTitle></CardHeader>
        <CardContent className="h-[380px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={graphRows}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Line type="monotone" dataKey="cvrLift" strokeWidth={3} />
              <Line type="monotone" dataKey="ctrLift" strokeWidth={3} />
              <Line type="monotone" dataKey="rankGain" strokeWidth={3} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card className="rounded-3xl border-0 shadow-sm">
        <CardHeader><CardTitle>Case study history log</CardTitle></CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date of Implementation</TableHead>
                <TableHead>Product</TableHead>
                <TableHead>Test Type</TableHead>
                <TableHead>Pre-CVR</TableHead>
                <TableHead>Post-CVR</TableHead>
                <TableHead>Pre-CTR</TableHead>
                <TableHead>Post-CTR</TableHead>
                <TableHead>Ranking Gain/Loss</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Next Action Taken</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {caseStudyData.map((row) => (
                <TableRow key={row.id}>
                  <TableCell>{row.date}</TableCell>
                  <TableCell className="font-medium">{row.product}</TableCell>
                  <TableCell>{row.testType}</TableCell>
                  <TableCell>{row.preCVR}%</TableCell>
                  <TableCell>{row.postCVR}%</TableCell>
                  <TableCell>{row.preCTR}%</TableCell>
                  <TableCell>{row.postCTR}%</TableCell>
                  <TableCell>{row.rankBefore - row.rankAfter > 0 ? `+${row.rankBefore - row.rankAfter}` : row.rankBefore - row.rankAfter}</TableCell>
                  <TableCell><Badge variant={statusBadge(row.status === "Failed" ? "At Risk" : row.status)}>{row.status}</Badge></TableCell>
                  <TableCell>{row.nextAction}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

function SettingsPage({ activeSettings, amazonConnected, setAmazonConnected, settingsData, setSettingsData, settingsSavedMessage, saveSettings }) {
  const sectionTitle = settingsSections.find((s) => s.key === activeSettings)?.label || "Settings";

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-2xl font-bold text-slate-900">{sectionTitle}</h2>
          <p className="text-sm text-slate-500">Edit settings below and save them to keep preferences persistent on this browser.</p>
        </div>
        <div className="flex items-center gap-3">
          {settingsSavedMessage ? <span className="text-sm font-medium text-emerald-600">{settingsSavedMessage}</span> : null}
          <Button className="rounded-2xl" onClick={saveSettings}>Save Settings</Button>
        </div>
      </div>

      <Card className="rounded-3xl border-0 shadow-sm">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle>{sectionTitle}</CardTitle>
          {activeSettings === "amazon" && (
            <Button className="rounded-2xl gap-2" onClick={() => setAmazonConnected((v) => !v)}>
              <Store className="h-4 w-4" /> {amazonConnected ? "Disconnect Amazon" : "Connect Amazon Account"}
            </Button>
          )}
        </CardHeader>
        <CardContent className="space-y-6">
          {activeSettings === "general" && (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="space-y-2"><Label>Business name</Label><Input value={settingsData.businessName} onChange={(e) => setSettingsData((prev) => ({ ...prev, businessName: e.target.value }))} className="rounded-2xl" /></div>
              <div className="space-y-2"><Label>Logo URL</Label><Input value={settingsData.logoUrl} onChange={(e) => setSettingsData((prev) => ({ ...prev, logoUrl: e.target.value }))} placeholder="Upload or paste logo link" className="rounded-2xl" /></div>
              <div className="space-y-2"><Label>Time zone</Label><Input value={settingsData.timeZone} onChange={(e) => setSettingsData((prev) => ({ ...prev, timeZone: e.target.value }))} className="rounded-2xl" /></div>
              <div className="space-y-2"><Label>Currency</Label><Input value={settingsData.currency} onChange={(e) => setSettingsData((prev) => ({ ...prev, currency: e.target.value }))} className="rounded-2xl" /></div>
              <div className="space-y-2"><Label>Language</Label><Input value={settingsData.language} onChange={(e) => setSettingsData((prev) => ({ ...prev, language: e.target.value }))} className="rounded-2xl" /></div>
            </div>
          )}

          {activeSettings === "users" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Add/remove team members</span><Button variant="outline" className="rounded-2xl">Manage users</Button></div>
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Role-based permissions</span><Badge>Admin / Manager / Viewer</Badge></div>
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Login security</span><Switch defaultChecked /></div>
            </div>
          )}

          {activeSettings === "notifications" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Email alerts for new orders</span><Switch defaultChecked /></div>
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Low inventory alerts</span><Switch checked={settingsData.lowInventoryAlerts} onCheckedChange={(v) => setSettingsData((prev) => ({ ...prev, lowInventoryAlerts: v }))} /></div>
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Daily performance reports</span><Switch checked={settingsData.dailyReports} onCheckedChange={(v) => setSettingsData((prev) => ({ ...prev, dailyReports: v }))} /></div>
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Weekly summary reports</span><Switch checked={settingsData.weeklyReports} onCheckedChange={(v) => setSettingsData((prev) => ({ ...prev, weeklyReports: v }))} /></div>
            </div>
          )}

          {activeSettings === "sales" && (
            <div className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                <div className="space-y-2"><Label>Tax rate %</Label><Input value={settingsData.taxRate} onChange={(e) => setSettingsData((prev) => ({ ...prev, taxRate: Number(e.target.value || 0) }))} className="rounded-2xl" /></div>
                <div className="space-y-2"><Label>Default discount %</Label><Input value={settingsData.defaultDiscount} onChange={(e) => setSettingsData((prev) => ({ ...prev, defaultDiscount: Number(e.target.value || 0) }))} className="rounded-2xl" /></div>
                <div className="space-y-2"><Label>Shipping cost per unit</Label><Input value={settingsData.shippingCost} onChange={(e) => setSettingsData((prev) => ({ ...prev, shippingCost: Number(e.target.value || 0) }))} className="rounded-2xl" /></div>
                <div className="space-y-2"><Label>Shipping mode</Label><Input value={settingsData.shippingMode} onChange={(e) => setSettingsData((prev) => ({ ...prev, shippingMode: e.target.value }))} className="rounded-2xl" /></div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center justify-between rounded-2xl border p-4"><span>Tax included in selling price</span><Switch checked={settingsData.taxIncluded} onCheckedChange={(v) => setSettingsData((prev) => ({ ...prev, taxIncluded: v }))} /></div>
                <div className="flex items-center justify-between rounded-2xl border p-4"><span>Coupon active</span><Switch checked={settingsData.couponActive} onCheckedChange={(v) => setSettingsData((prev) => ({ ...prev, couponActive: v }))} /></div>
              </div>
              <div className="rounded-2xl bg-slate-50 p-4 text-sm text-slate-700">
                <p className="font-semibold text-slate-900">How these settings affect reporting</p>
                <p className="mt-2">Net Sales = Revenue adjusted by your tax and discount rules. Estimated Profit = Net Sales minus shipping cost based on tracked units. These values now flow into the overview cards and product-level summary.</p>
              </div>
            </div>
          )}

          {activeSettings === "integrations" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Third-party platforms</span><Button variant="outline" className="rounded-2xl">Connect</Button></div>
              <div className="space-y-2"><Label>API key management</Label><Input placeholder="Store API keys securely in backend" className="rounded-2xl" /></div>
              <div className="space-y-2"><Label>Webhook settings</Label><Input placeholder="Configure event hooks" className="rounded-2xl" /></div>
            </div>
          )}

          {activeSettings === "reports" && (
            <div className="space-y-4">
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Export data</span><Button variant="outline" className="rounded-2xl">CSV / Excel</Button></div>
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Automated reports scheduling</span><Switch /></div>
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Backup & restore</span><Button variant="outline" className="rounded-2xl">Open</Button></div>
            </div>
          )}

          {activeSettings === "appearance" && (
            <div className="grid gap-4 md:grid-cols-2">
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Dark / light mode</span><Switch checked={settingsData.darkMode} onCheckedChange={(v) => setSettingsData((prev) => ({ ...prev, darkMode: v }))} /></div>
              <div className="flex items-center justify-between rounded-2xl border p-4"><span>Drag-and-drop widgets</span><Switch checked={settingsData.dragWidgets} onCheckedChange={(v) => setSettingsData((prev) => ({ ...prev, dragWidgets: v }))} /></div>
            </div>
          )}

          {activeSettings === "amazon" && (
            <div className="space-y-5">
              <div className={`rounded-2xl border p-5 ${amazonConnected ? "border-emerald-200 bg-emerald-50" : "border-slate-200 bg-slate-50"}`}>
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="font-semibold text-slate-900">Amazon account connection</p>
                    <p className="mt-1 text-sm text-slate-600">Prepare for secure OAuth with Seller Central. This UI is ready for real integration.</p>
                  </div>
                  <Badge variant={amazonConnected ? "default" : "secondary"}>{amazonConnected ? "Connected (demo state)" : "Not connected"}</Badge>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label>Select marketplace</Label><Input defaultValue="Amazon.ca" className="rounded-2xl" /></div>
                <div className="space-y-2"><Label>Auto-sync schedule</Label><Input defaultValue="Daily" className="rounded-2xl" /></div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="flex items-center justify-between rounded-2xl border p-4"><span>Sync orders</span><Switch defaultChecked /></div>
                <div className="flex items-center justify-between rounded-2xl border p-4"><span>Sync products</span><Switch defaultChecked /></div>
                <div className="flex items-center justify-between rounded-2xl border p-4"><span>Sync inventory</span><Switch defaultChecked /></div>
                <div className="flex items-center justify-between rounded-2xl border p-4"><span>Sync pricing</span><Switch defaultChecked /></div>
              </div>
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2"><Label>Order import settings</Label><Input defaultValue="Fulfilled + Unfulfilled" className="rounded-2xl" /></div>
                <div className="space-y-2"><Label>Inventory sync rules</Label><Input defaultValue="Merge" className="rounded-2xl" /></div>
              </div>
              <div className="rounded-2xl border border-dashed p-4 text-sm text-slate-600">
                Real sales, CTR, CVR, and daily ranking updates require backend integration with Amazon SP-API, Amazon Ads API, and a keyword/rank tracking source.
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function NutravonicsDashboardPro() {
  const [products, setProducts] = useState(seedProducts);
  const [selectedId, setSelectedId] = useState(seedProducts[0].id);
  const [query, setQuery] = useState("");
  const [activeMain, setActiveMain] = useState("dashboard");
  const [keywordSubTab, setKeywordSubTab] = useState("tracked");
  const [activeSettings, setActiveSettings] = useState("general");
  const [amazonConnected, setAmazonConnected] = useState(false);
  const [settingsData, setSettingsData] = useState(() => {
    try {
      const saved = localStorage.getItem("nutravonics-settings");
      return saved ? JSON.parse(saved) : defaultSettings;
    } catch {
      return defaultSettings;
    }
  });
  const [settingsSavedMessage, setSettingsSavedMessage] = useState("");
  const [newProduct, setNewProduct] = useState({
    product: "",
    team: "Nutravonics",
    parentAsin: "",
    childAsin: "",
    price: "",
    cvr: "",
    ctr: "",
    sessions: "",
    revenue: "",
    organicRank: "",
    notes: "",
  });

  const selectedProduct = useMemo(() => products.find((p) => p.id === selectedId) || products[0], [products, selectedId]);

  const addProduct = () => {
    if (!newProduct.product || !newProduct.childAsin) return;
    const created = {
      id: `${Date.now()}`,
      product: newProduct.product,
      team: newProduct.team,
      parentAsin: newProduct.parentAsin,
      childAsin: newProduct.childAsin,
      price: Number(newProduct.price || 0),
      cvr: newProduct.cvr === "" ? null : Number(newProduct.cvr || 0),
      ctr: newProduct.ctr === "" ? null : Number(newProduct.ctr || 0),
      sessions: newProduct.sessions === "" ? null : Number(newProduct.sessions || 0),
      revenue: newProduct.revenue === "" ? null : Number(newProduct.revenue || 0),
      organicRank: newProduct.organicRank === "" ? null : Number(newProduct.organicRank || 0),
      trackedKeywords: [],
      competitors: [],
      tests: [],
      audit: ["New product added. Connect data source or import CSV to populate insights."],
      trend: [],
      notes: newProduct.notes,
    };
    setProducts((prev) => [...prev, created]);
    setSelectedId(created.id);
    setNewProduct({ product: "", team: "Nutravonics", parentAsin: "", childAsin: "", price: "", cvr: "", ctr: "", sessions: "", revenue: "", organicRank: "", notes: "" });
  };

  const updateField = (field, value) => {
    setProducts((prev) => prev.map((p) => p.id === selectedId ? {
      ...p,
      [field]: ["price", "cvr", "ctr", "sessions", "revenue", "organicRank"].includes(field)
        ? (value === "" ? null : Number(value))
        : value,
    } : p));
  };

  const deleteProduct = () => {
    if (products.length === 1) return;
    const next = products.filter((p) => p.id !== selectedId);
    setProducts(next);
    setSelectedId(next[0].id);
  };

  const handleCsvUpload = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const text = await file.text();
    const rows = csvToRows(text);
    const keywordRows = rows.filter((r) => r.keyword || r.Keyword);
    if (!keywordRows.length) return;
    setProducts((prev) => prev.map((p) => p.id === selectedId ? {
      ...p,
      trackedKeywords: keywordRows.map((r, i) => ({
        keyword: r.keyword || r.Keyword || `Keyword ${i + 1}`,
        rank: Number(r.rank || r.Rank || 0),
        prevRank: Number(r.prevRank || r["Previous Rank"] || r.Previous || r.rank || 0),
        indexed: String(r.indexed || r.Indexed || "true").toLowerCase() !== "false",
        volume: Number(r.volume || r.Volume || 0),
        competitorRank: Number(r.competitorRank || r["Competitor Rank"] || 0) || null,
        test: r.test || r.Test || "Imported",
      })),
    } : p));
  };

  return (
    <div className="min-h-screen bg-slate-100 text-slate-900">
      <div className="flex min-h-screen">
        <Sidebar
          activeMain={activeMain}
          setActiveMain={setActiveMain}
          activeSettings={activeSettings}
          setActiveSettings={setActiveSettings}
          products={products}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />

        <main className="flex-1 p-6 md:p-8">
          {activeMain === "dashboard" && (
            <OverviewPage
              products={products}
              selectedProduct={selectedProduct}
              query={query}
              setQuery={setQuery}
              selectedId={selectedId}
              setSelectedId={setSelectedId}
              keywordSubTab={keywordSubTab}
              setKeywordSubTab={setKeywordSubTab}
              settingsData={settingsData}
            />
          )}

          {activeMain === "products" && (
            <ProductsPage
              selectedProduct={selectedProduct}
              updateField={updateField}
              deleteProduct={deleteProduct}
              newProduct={newProduct}
              setNewProduct={setNewProduct}
              addProduct={addProduct}
              handleCsvUpload={handleCsvUpload}
            />
          )}

          {activeMain === "push-plan" && <PushPlanPage selectedProduct={selectedProduct} />}
          {activeMain === "case-studies" && <CaseStudiesPage />}
          {activeMain === "competitors" && <CompetitorsPage selectedProduct={selectedProduct} />}
          {activeMain === "settings" && <SettingsPage activeSettings={activeSettings} amazonConnected={amazonConnected} setAmazonConnected={setAmazonConnected} settingsData={settingsData} setSettingsData={setSettingsData} settingsSavedMessage={settingsSavedMessage} saveSettings={() => {
            localStorage.setItem("nutravonics-settings", JSON.stringify(settingsData));
            setSettingsSavedMessage("Settings saved");
            setTimeout(() => setSettingsSavedMessage(""), 2000);
          }} />}
        </main>
      </div>
    </div>
  );
}
