// All static site data — decoupled from components for easy editing
export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "Testimonials", href: "#testimonial" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
] as const;

export const HERO_COPY = {
  eyebrow: "FOR SAAS FOUNDERS & STARTUPS",
  headline: ["Everything Your Brand Needs", "to Grow Online."],
  subheadline:
    "AI-accelerated development, done right. We build, test, and maintain websites that keep your brand at the premium end of the market.",
  primaryCta: { label: "Schedule a 1:1 Meeting", href: "#contact" },
  secondaryCta: { label: "View Services", href: "#services" },
  trustSignal: {
    rating: "4.9",
    count: "300+",
    label: "Scaled Brands",
    avatars: [
      "https://i.pravatar.cc/150?img=1",
      "https://i.pravatar.cc/150?img=2",
      "https://i.pravatar.cc/150?img=3",
      "https://i.pravatar.cc/150?img=4",
    ],
  },
} as const;

export const PORTFOLIO_ITEMS = [
  {
    id: "p1",
    label: "SaaS Platform",
    image: "https://picsum.photos/seed/saas1/600/400",
    tag: "Web Design",
  },
  {
    id: "p2",
    label: "E-Commerce Brand",
    image: "https://picsum.photos/seed/ecom1/600/400",
    tag: "Development",
  },
  {
    id: "p3",
    label: "Startup Launch",
    image: "https://picsum.photos/seed/startup1/600/400",
    tag: "UI/UX",
  },
  {
    id: "p4",
    label: "Enterprise Portal",
    image: "https://picsum.photos/seed/enterprise1/600/400",
    tag: "Maintenance",
  },
  {
    id: "p5",
    label: "Mobile App Site",
    image: "https://picsum.photos/seed/mobile1/600/400",
    tag: "Testing",
  },
  {
    id: "p6",
    label: "Agency Website",
    image: "https://picsum.photos/seed/agency1/600/400",
    tag: "Web Design",
  },
] as const;

export const SERVICES = [
  {
    id: "s1",
    image: "/webdev.JPG",
    number: "01",
    title: "Web Design & Development",
    description:
      "From pixel-perfect landing pages to full product sites. We use the latest frameworks and AI-assisted tooling to ship fast without cutting corners.",
    features: ["Custom Figma-to-Code", "Next.js / React", "Performance-first", "Mobile responsive"],
    // color: "from-orange-50 to-amber-50",
    accent: "#145C52",
  },
  {
    id: "s2",
    image: "https://images.unsplash.com/photo-1648260296289-ab882814a005?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    number: "02",
    title: "UI/UX Design",
    description:
      "Your product's interface is its first impression. We craft clean, conversion-optimized designs informed by real user behaviour and industry-leading visual standards.",
    features: ["User research", "High-fidelity Figma", "Design systems", "Accessibility"],
    // color: "from-stone-50 to-orange-50",
    accent: "#145C52",
  },
  {
    id: "s3",
    image: "https://images.unsplash.com/photo-1688733720228-4f7a18681c4f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8cmVzcG9uc2l2ZSUyMHdlYiUyMGRlc2lnbnxlbnwwfDF8MHx8fDA%3D",
    number: "03",
    title: "Website Testing & QA",
    description:
      "No more \"it works on my machine\" moments. We run systematic cross-browser, cross-device, and performance tests so you can ship with confidence.",
    features: ["Cross-browser QA", "Lighthouse audits", "Load testing", "Regression testing"],
    // color: "from-amber-50 to-yellow-50",
    accent: "#145C52",
  },
  {
    id: "s4",
    image: "/website-maintenance-support.jpeg",
    number: "04",
    title: "Website Maintenance",
    description:
      "Your site needs ongoing care — security patches, dependency updates, content changes, and performance monitoring. We handle it all, quietly and reliably.",
    features: ["Monthly updates", "Security monitoring", "Content changes", "Uptime tracking"],
    // color: "from-orange-50 to-red-50",
    accent: "#145C52",
  },
] as const;

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "We Listen First",
    description: "Before anything gets built, we sit down to understand your business — what you do, who your customers are, and your goals. No templates, no guesswork.",
  },
  {
    step: "02",
    title: "You See It Before We Build It",
    description: "We show you the complete look and feel before writing a single line of code. If something's off, we adjust it on paper first.",
  },
  {
    step: "03",
    title: "We Build, You Stay in the Loop",
    description: "We work in stages and check in constantly. You're never left wondering what's happening for weeks, and your feedback shapes the final build.",
  },
  {
    step: "04",
    title: "We Launch — And We Don't Disappear",
    description: "Once live, we test everything, set up full backups, and hand it over clean. Afterwards, we're always directly reachable whenever you need us.",
  },
];

export const MEMBERSHIP_BENEFITS = [
  { title: "Pause anytime", description: "No long-term contracts. Pause or cancel whenever you need." },
  { title: "Fixed monthly rate", description: "Predictable billing with no surprise invoices." },
  { title: "Async workflow", description: "Communicate on your schedule — no mandatory calls." },
  { title: "AI-assisted speed", description: "AI tools accelerate development without sacrificing quality." },
  { title: "Real engineers", description: "Human-reviewed code and design at every stage." },
  { title: "Transparent process", description: "Always know what's being worked on and what's next." },
] as const;

export const PRICING_PLANS = [
  {
    id: "starter",
    name: "Starter",
    price: "[Price]",
    period: "/month",
    description: "For businesses needing a polished presence and ongoing care.",
    features: [
      "1 active request at a time",
      "Web design & development",
      "Website maintenance",
      "Monthly QA audit",
      "Async support",
      "Pause or cancel anytime",
    ],
    cta: "Get Started",
    highlight: false,
  },
  {
    id: "growth",
    name: "Growth",
    price: "[Price]",
    period: "/month",
    description: "For scaling brands that need faster turnaround and more scope.",
    features: [
      "2 active requests at a time",
      "Web design & development",
      "UI/UX design included",
      "Full QA & testing",
      "Priority delivery",
      "Monthly strategy call",
      "Pause or cancel anytime",
    ],
    cta: "Get Started",
    highlight: true,
    badge: "Most Popular",
  },
  {
    id: "custom",
    name: "Custom",
    price: "Let's talk",
    period: "",
    description: "For teams needing dedicated capacity and enterprise-grade delivery.",
    features: [
      "Unlimited active requests",
      "Dedicated team",
      "Custom SLA",
      "White-label option",
      "Priority Slack access",
      "Weekly syncs",
    ],
    cta: "Book a Call",
    highlight: false,
  },
] as const;

export const TESTIMONIALS = [
  {
    id: "t1",
    name: "Rahul Dey",
    title: "Founder, Metanoia",
    avatar: "/rahul-dey.jpeg",
    quote:
      "Webnoia redesigned our entire SaaS site in 3 weeks and it converted noticeably better on day one. The attention to detail was unlike anything I'd seen from a typical agency.",
  },
  {
    id: "t2",
    name: "Divyang Bhanushali",
    title: "Co-Founder, Metanoia",
    avatar: "/divyang-Bhanushali.jpeg",
    quote:
      "We needed a reliable maintenance partner, not another vendor to manage. Webnoia just handles it. Updates, fixes, performance monitoring — all done without us having to chase anyone.",
  },
  {
    id: "t3",
    name: "Aiko Tanaka",
    title: "Founder, Solvar Studio",
    avatar: "https://i.pravatar.cc/150?img=45",
    quote:
      "The QA process alone was worth it. We discovered six critical cross-browser issues before launch that would have been embarrassing. They caught everything.",
  },
] as const;

export const FAQ_ITEMS = [
  {
    id: "faq1",
    question: "What kind of businesses do you work with?",
    answer:
      "We primarily work with SaaS founders, startups, and small-to-medium businesses that need a reliable web team without the overhead of hiring in-house. If you have a website and want it to be better — we're a fit.",
  },
  {
    id: "faq2",
    question: "How fast can you turnaround a request?",
    answer:
      "Most design and development tasks are delivered within 2–5 business days. Complex projects are scoped and scheduled transparently upfront so there are no surprises.",
  },
  {
    id: "faq3",
    question: "Do I need to sign a long-term contract?",
    answer:
      "No. Our subscriptions are monthly and can be paused or cancelled at any time. We earn your trust every month.",
  },
  {
    id: "faq4",
    question: "How do AI tools fit into your process?",
    answer:
      "AI accelerates our development and design work — things like code generation, visual QA, and content structuring. But every deliverable is reviewed and refined by our human team. The speed of AI with the quality bar of an expert.",
  },
  {
    id: "faq5",
    question: "What's the difference between a design subscription and a project?",
    answer:
      "A subscription is an ongoing monthly relationship — great for businesses with continuous needs. Project-based work is a fixed-scope engagement with a defined start and end. We offer both.",
  },
] as const;
