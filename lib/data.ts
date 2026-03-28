// ─────────────────────────────────────────────────────────────────────────────
// lib/data.ts
// Central data file for The Shack website.
// Update placeholder values here without touching any component or page code.
// ─────────────────────────────────────────────────────────────────────────────

// ─── Types ───────────────────────────────────────────────────────────────────

export type Stat = {
  value: string;
  label: string;
};

export type NavLink = {
  label: string;
  href: string;
};

export type HowItWorksStep = {
  step: number;
  title: string;
  description: string;
  icon: string; // emoji or icon name placeholder
};

export type PlatformBadge = "Whatnot" | "eBay Live" | "Manufacturing";

export type BrandAccount = {
  name: string;
  category: "Coins" | "Currency" | "Cards" | "Breaks";
  // TODO: Replace placeholder URLs with real Whatnot/eBay profile URLs
  whatnotUrl: string;
  ebayLiveUrl: string;
  followers: string; // TODO: Replace with real follower count
  streams: string;   // TODO: Replace with real stream count
};

export type BrandEntity = {
  id: string;
  groupName: string;
  tagline: string;
  description: string;
  platforms: PlatformBadge[];
  accounts: BrandAccount[];
  externalUrl?: string;
  badge?: string;
};

export type TeamMember = {
  id: string;
  name: string;    // TODO: Replace with real name
  title: string;   // TODO: Replace with real title
  bio: string;     // TODO: Replace with real bio
  avatarUrl?: string; // TODO: Replace with real avatar
};

export type Milestone = {
  year: string;
  title: string;   // TODO: Replace with real milestone
  description: string;
};

export type MissionValue = {
  icon: string;
  title: string;
  description: string;
};

export type LiveAccount = {
  name: string;
  entity: "coins" | "cards";
  category: string;
  followers: string; // TODO: Replace with real count
  // TODO: Replace with real profile URLs
  whatnotUrl: string;
  ebayLiveUrl: string;
};

// ─── Navigation ──────────────────────────────────────────────────────────────

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Our Brands", href: "/brands" },
  { label: "Live Streams", href: "/live" },
  { label: "Products & Services", href: "/products" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/contact" },
];

// ─── Stats / Social Proof ────────────────────────────────────────────────────
// TODO: Replace all placeholder values with real counts pulled from platforms

export const STATS: Stat[] = [
  {
    value: "[X]K+",
    label: "Followers Across Whatnot Accounts",
  },
  {
    value: "[X]+",
    label: "Streams Completed",
  },
  {
    value: "7",
    label: "Active Live Brands",
  },
  {
    value: "Daily",
    label: "Live on Whatnot & eBay",
  },
];

// ─── How It Works Steps ──────────────────────────────────────────────────────

export const HOW_IT_WORKS_STEPS: HowItWorksStep[] = [
  {
    step: 1,
    title: "Join the Stream",
    description:
      "Follow our accounts on Whatnot or eBay Live and tune in during scheduled broadcasts. No special equipment needed — just your phone or computer.",
    icon: "📡",
  },
  {
    step: 2,
    title: "Pick Your Spot",
    description:
      "Buy into a coin auction, grab a team slot in a card break, or bid on individual items — all in real time with a live host on camera.",
    icon: "🎯",
  },
  {
    step: 3,
    title: "Win & Receive",
    description:
      "Coins and cards are revealed live on camera. Your items are carefully packed and shipped directly to your door, typically within days.",
    icon: "📦",
  },
];

// ─── Brand Entities ──────────────────────────────────────────────────────────

export const BRAND_ENTITIES: BrandEntity[] = [
  {
    id: "coins-currency",
    groupName: "Live Commerce: Coins & Currency",
    tagline: "Rare coins and currency, auctioned live daily.",
    description:
      "Four dedicated live commerce accounts covering coin auctions, numismatic lots, currency collecting, and live break club events — all streamed on Whatnot and eBay Live.",
    platforms: ["Whatnot", "eBay Live"],
    accounts: [
      {
        name: "The Coin Shack",
        category: "Coins",
        whatnotUrl: "https://www.whatnot.com/user/thecoinshack",
        ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
        followers: "[X]K+", // TODO: Replace with real follower count
        streams: "[X]+",    // TODO: Replace with real stream count
      },
      {
        name: "The Currency Club",
        category: "Currency",
        whatnotUrl: "https://www.whatnot.com/user/thecurrencyclub",
        ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
        followers: "[X]K+", // TODO: Replace
        streams: "[X]+",    // TODO: Replace
      },
      {
        name: "TCS Live",
        category: "Coins",
        whatnotUrl: "https://www.whatnot.com", // TODO: Replace with real Whatnot profile URL if available
        ebayLiveUrl: "https://www.ebay.com/str/tcslive",
        followers: "[X]K+", // TODO: Replace
        streams: "[X]+",    // TODO: Replace
      },
      {
        name: "Break Club",
        category: "Coins",
        whatnotUrl: "https://www.whatnot.com/user/breakclub",
        ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
        followers: "[X]K+", // TODO: Replace
        streams: "[X]+",    // TODO: Replace
      },
    ],
  },
  {
    id: "cards-breaks",
    groupName: "Live Commerce: Cards & Breaks",
    tagline: "Sports cards and pack breaks, live every day.",
    description:
      "Three high-energy live streaming accounts focused on trading card breaks, pack rips, sports card auctions, and collector community events.",
    platforms: ["Whatnot", "eBay Live"],
    accounts: [
      {
        name: "The Card Shack",
        category: "Cards",
        whatnotUrl: "https://www.whatnot.com/user/thecardshack",
        ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
        followers: "[X]K+", // TODO: Replace
        streams: "[X]+",    // TODO: Replace
      },
      {
        name: "Break Jam",
        category: "Breaks",
        whatnotUrl: "https://www.whatnot.com/user/breakjam",
        ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
        followers: "[X]K+", // TODO: Replace
        streams: "[X]+",    // TODO: Replace
      },
      {
        name: "Animated Rips",
        category: "Breaks",
        whatnotUrl: "https://www.whatnot.com/user/animatedrips",
        ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
        followers: "[X]K+", // TODO: Replace
        streams: "[X]+",    // TODO: Replace
      },
    ],
  },
  {
    id: "gj-packaging",
    groupName: "G&J Packaging",
    tagline: "Manufacturing the products collectors trust.",
    description:
      "G&J Packaging is the manufacturing and product arm of The Shack portfolio. Specializing in coin procurement and the production of the \"Shack Pack\" — a proprietary packaged coin product available at shackpck.com.",
    platforms: ["Manufacturing"],
    accounts: [],
    externalUrl: "https://www.shackpck.com",
    badge: "Manufacturing & Products",
  },
];

// ─── Live Accounts (for /live page) ─────────────────────────────────────────

export const LIVE_ACCOUNTS: LiveAccount[] = [
  {
    name: "The Coin Shack",
    entity: "coins",
    category: "Coins",
    followers: "[X]K+", // TODO: Replace
    whatnotUrl: "https://www.whatnot.com/user/thecoinshack",
    ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
  },
  {
    name: "The Currency Club",
    entity: "coins",
    category: "Currency",
    followers: "[X]K+", // TODO: Replace
    whatnotUrl: "https://www.whatnot.com/user/thecurrencyclub",
    ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
  },
  {
    name: "TCS Live",
    entity: "coins",
    category: "Coins",
    followers: "[X]K+", // TODO: Replace
    whatnotUrl: "https://www.whatnot.com", // TODO: Replace with real Whatnot profile URL if available
    ebayLiveUrl: "https://www.ebay.com/str/tcslive",
  },
  {
    name: "Break Club",
    entity: "coins",
    category: "Coins",
    followers: "[X]K+", // TODO: Replace
    whatnotUrl: "https://www.whatnot.com/user/breakclub",
    ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
  },
  {
    name: "The Card Shack",
    entity: "cards",
    category: "Cards",
    followers: "[X]K+", // TODO: Replace
    whatnotUrl: "https://www.whatnot.com/user/thecardshack",
    ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
  },
  {
    name: "Break Jam",
    entity: "cards",
    category: "Cards",
    followers: "[X]K+", // TODO: Replace
    whatnotUrl: "https://www.whatnot.com/user/breakjam",
    ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
  },
  {
    name: "Animated Rips",
    entity: "cards",
    category: "Breaks",
    followers: "[X]K+", // TODO: Replace
    whatnotUrl: "https://www.whatnot.com/user/animatedrips",
    ebayLiveUrl: "https://www.ebay.com/live", // TODO: Replace with real eBay Live profile URL
  },
];

// ─── Team Members ─────────────────────────────────────────────────────────────

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "member-1",
    name: "[NAME]",       // TODO: Replace with real name
    title: "[TITLE]",     // TODO: Replace with real title
    bio: "[BIO]",         // TODO: Replace with real bio
    avatarUrl: undefined,
  },
  {
    id: "member-2",
    name: "[NAME]",       // TODO: Replace with real name
    title: "[TITLE]",     // TODO: Replace with real title
    bio: "[BIO]",         // TODO: Replace with real bio
    avatarUrl: undefined,
  },
  {
    id: "member-3",
    name: "[NAME]",       // TODO: Replace with real name
    title: "[TITLE]",     // TODO: Replace with real title
    bio: "[BIO]",         // TODO: Replace with real bio
    avatarUrl: undefined,
  },
  {
    id: "member-4",
    name: "[NAME]",       // TODO: Replace with real name
    title: "[TITLE]",     // TODO: Replace with real title
    bio: "[BIO]",         // TODO: Replace with real bio
    avatarUrl: undefined,
  },
];

// ─── About Page — Mission & Values ───────────────────────────────────────────

export const MISSION_VALUES: MissionValue[] = [
  {
    icon: "🤝",
    title: "Community",
    description:
      "Every stream is a gathering, not just a transaction. We build real relationships with collectors — from first-time buyers to seasoned numismatists.",
  },
  {
    icon: "🔍",
    title: "Transparency",
    description:
      "Everything happens on camera. No surprises, no hidden grades — just honest, live reveals that build lasting trust between sellers and buyers.",
  },
  {
    icon: "🏅",
    title: "Collector-First",
    description:
      "We are collectors ourselves. Every product choice, every format, every stream is designed to deliver genuine value to the people who love this hobby.",
  },
];

// ─── About Page — Timeline Milestones ────────────────────────────────────────

export const MILESTONES: Milestone[] = [
  {
    year: "2023",
    title: "The Coin Shack Launches",
    // TODO: Replace with real milestone description
    description: "[TODO: Add real milestone — e.g. The Coin Shack launches on Whatnot and hosts its first live coin auction.]",
  },
  {
    year: "2024",
    title: "Portfolio Expands",
    // TODO: Replace with real milestone description
    description: "[TODO: Add real milestone — e.g. The Card Shack, Break Jam, and Animated Rips launch, expanding the portfolio into trading cards.]",
  },
  {
    year: "2024",
    title: "G&J Packaging Founded",
    // TODO: Replace with real milestone description
    description: "[TODO: Add real milestone — e.g. G&J Packaging is established to support coin procurement and launch the Shack Pack product line.]",
  },
  {
    year: "2025",
    title: "The Currency Club & eBay Live",
    // TODO: Replace with real milestone description
    description: "[TODO: Add real milestone — e.g. The Currency Club launches and all accounts expand to eBay Live, growing the platform reach.]",
  },
];

// ─── All Brand Names (for hero brand strip) ──────────────────────────────────

export const ALL_BRAND_NAMES: string[] = [
  "The Coin Shack",
  "The Currency Club",
  "TCS Live",
  "Break Club",
  "The Card Shack",
  "Break Jam",
  "Animated Rips",
  "G&J Packaging",
];

// ─── Social / Platform Links ─────────────────────────────────────────────────
// TODO: Replace placeholder URLs with real account links

export const PLATFORM_LINKS = {
  whatnot: "https://www.whatnot.com",       // TODO: Replace with main Whatnot page
  ebayLive: "https://www.ebay.com/live",    // TODO: Replace with main eBay Live page
  shackPack: "https://www.shackpck.com",
  emailCoin: "info@thecoinshack.com",
  emailCard: "info@thecardshack.com",
};
