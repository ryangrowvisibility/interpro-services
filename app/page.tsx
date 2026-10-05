const PHONE_DISPLAY = "(647) 561-9743";
const PHONE_TEL = "tel:+16475619743";
const SMS = "sms:+16475619743";
const MAPS_URL =
  "https://www.google.com/maps/search/?api=1&query=Interpro%20Services&query_place_id=ChIJj7gvs9Df6gwRkXu_rfH9UBw";
const INSTAGRAM = "https://www.instagram.com/interproservices";

type IconName =
  | "phone"
  | "star"
  | "shield"
  | "clock"
  | "pin"
  | "pavers"
  | "road"
  | "wall"
  | "stone"
  | "steps"
  | "turf"
  | "pergola"
  | "deck"
  | "fence"
  | "flower"
  | "broom"
  | "home"
  | "check"
  | "chat"
  | "calendar"
  | "users"
  | "chevron"
  | "instagram"
  | "sms";

function Icon({ name, className = "h-6 w-6" }: { name: IconName; className?: string }) {
  const p = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };
  switch (name) {
    case "phone":
      return (
        <svg {...p}>
          <path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3.1 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.1 4.2 2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .4 1.9.7 2.8a2 2 0 0 1-.5 2.1L8 9.9a16 16 0 0 0 6 6l1.3-1.3a2 2 0 0 1 2.1-.4c.9.3 1.8.6 2.8.7a2 2 0 0 1 1.7 2z" />
        </svg>
      );
    case "sms":
      return (
        <svg {...p}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
        </svg>
      );
    case "star":
      return (
        <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
          <path
            fill="currentColor"
            d="M12 2.5l2.9 6 6.6.9-4.8 4.6 1.2 6.5L12 17.4l-5.9 3.1 1.2-6.5L2.5 9.4l6.6-.9z"
          />
        </svg>
      );
    case "shield":
      return (
        <svg {...p}>
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          <path d="m9 12 2 2 4-4" />
        </svg>
      );
    case "clock":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="10" />
          <path d="M12 6v6l4 2" />
        </svg>
      );
    case "pin":
      return (
        <svg {...p}>
          <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      );
    case "pavers":
      return (
        <svg {...p}>
          <rect x="3" y="3" width="8" height="5" rx="1" />
          <rect x="13" y="3" width="8" height="5" rx="1" />
          <rect x="3" y="10" width="5" height="5" rx="1" />
          <rect x="10" y="10" width="11" height="5" rx="1" />
          <rect x="3" y="17" width="11" height="4" rx="1" />
          <rect x="16" y="17" width="5" height="4" rx="1" />
        </svg>
      );
    case "road":
      return (
        <svg {...p}>
          <path d="M4 21 8 3M20 21 16 3M12 4v3M12 11v3M12 18v3" />
        </svg>
      );
    case "wall":
      return (
        <svg {...p}>
          <path d="M3 21h18M4 21V9h16v12M4 13h16M4 17h16M9 9v4M15 9v4M12 13v4M7 17v4M17 17v4" />
        </svg>
      );
    case "stone":
      return (
        <svg {...p}>
          <path d="M4 14 7 7l6-3 6 4 1 7-5 5H8z" />
          <path d="m7 7 4 5 8-4M11 12l-3 8" />
        </svg>
      );
    case "steps":
      return (
        <svg {...p}>
          <path d="M3 21h18V5h-5v5h-5v5H6v6" />
        </svg>
      );
    case "turf":
      return (
        <svg {...p}>
          <path d="M2 21h20M5 21c0-4-1-7-2-9M8 21c0-5 1-9 3-12M12 21c0-4 0-8-1-11M15 21c0-5 2-9 4-11M19 21c0-3 1-5 2-7" />
        </svg>
      );
    case "pergola":
      return (
        <svg {...p}>
          <path d="M2 6h20M2 9h20M5 6v15M19 6v15M9 3v6M15 3v6" />
        </svg>
      );
    case "deck":
      return (
        <svg {...p}>
          <path d="M2 10h20M2 14h20M2 18h20M5 18v3M19 18v3M12 10V3" />
        </svg>
      );
    case "fence":
      return (
        <svg {...p}>
          <path d="M5 21V6l2-3 2 3v15M15 21V6l2-3 2 3v15M3 10h18M3 16h18M10 21V6M14 21V6" />
        </svg>
      );
    case "flower":
      return (
        <svg {...p}>
          <circle cx="12" cy="8" r="3" />
          <path d="M12 5V3M15 8h2M12 11v2M9 8H7M12 13v8M12 17c-2-2-5-2-6 0M12 19c2-2 5-2 6 0" />
        </svg>
      );
    case "broom":
      return (
        <svg {...p}>
          <path d="M19 3 9.5 12.5M7 11l6 6M4 21c3 0 5-1 7-3l-6-6c-2 2-3 4-3 7z" />
        </svg>
      );
    case "home":
      return (
        <svg {...p}>
          <path d="m3 10 9-7 9 7v10a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z" />
        </svg>
      );
    case "check":
      return (
        <svg {...p}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      );
    case "chat":
      return (
        <svg {...p}>
          <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22z" />
        </svg>
      );
    case "calendar":
      return (
        <svg {...p}>
          <rect x="3" y="4" width="18" height="18" rx="2" />
          <path d="M16 2v4M8 2v4M3 10h18M9 16l2 2 4-4" />
        </svg>
      );
    case "users":
      return (
        <svg {...p}>
          <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8" />
        </svg>
      );
    case "chevron":
      return (
        <svg {...p}>
          <path d="m6 9 6 6 6-6" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...p}>
          <rect x="2" y="2" width="20" height="20" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <path d="M17.5 6.5h.01" />
        </svg>
      );
  }
}

function Stars({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <span className="inline-flex text-star" aria-label="5 out of 5 stars">
      {[0, 1, 2, 3, 4].map((i) => (
        <Icon key={i} name="star" className={className} />
      ))}
    </span>
  );
}

const services: { icon: IconName; name: string; text: string; featured?: boolean }[] = [
  {
    icon: "pavers",
    name: "Interlocking Patios & Walkways",
    text: "Our core trade. Front-yard and backyard interlock laid on a properly compacted base, with clean lines and tight, even joints that stay put through Ontario winters.",
    featured: true,
  },
  {
    icon: "home",
    name: "Full Backyard Transformations",
    text: "One crew, one plan, one finish date. We combine turf, interlock, a pergola and planting into a yard you actually use, like our recent full backyard build in Pickering.",
    featured: true,
  },
  {
    icon: "road",
    name: "Driveway Re-levelling & Sealing",
    text: "Sunken or uneven interlock driveways lifted, re-levelled and sealed. Often done alongside a front-yard refresh so the whole property looks finished.",
  },
  {
    icon: "wall",
    name: "Retaining Walls",
    text: "Stone retaining walls that hold back grade, create raised beds and frame your patio, built as part of a complete hardscape project.",
  },
  {
    icon: "stone",
    name: "Flagstone",
    text: "Natural flagstone for walkways, patios and garden features, cut and fitted for a look that suits older and newer homes alike.",
  },
  {
    icon: "steps",
    name: "Stone Steps",
    text: "Front and backyard steps finished to match your patio and walkway, with solid footing and safe, even risers.",
  },
  {
    icon: "turf",
    name: "Artificial Turf",
    text: "Low-maintenance synthetic grass installed over a graded, compacted base so it drains well and stays flat. No mowing, no bare patches.",
  },
  {
    icon: "pergola",
    name: "Pergolas",
    text: "Custom pergolas built alongside a new patio to give you shade and a defined outdoor room.",
  },
  {
    icon: "deck",
    name: "Decks",
    text: "Deck builds for family homes across the GTA, including a recent deck in Ajax that the homeowner rated 10 out of 10.",
  },
  {
    icon: "fence",
    name: "Wood Fences & Railings",
    text: "Wood fencing and railings to give the yard privacy and finish the edges of your new space.",
  },
  {
    icon: "flower",
    name: "Garden Boxes & Flower Beds",
    text: "Built garden boxes and planted flower beds that soften the hardscape and give you somewhere to grow.",
  },
  {
    icon: "broom",
    name: "Yard Clean-Up",
    text: "Yard clean-ups on their own, and a spotless site at the end of every project we take on.",
  },
];

const reviews = [
  {
    name: "Pauline W.",
    job: "Repeat client, project for her daughter",
    text: "Emmanuel had done work for me before, so this summer I had him do a job for my daughter. He said it would take three days and he finished in three days. Punctual, honest, a reasonable price, and everything was cleaned up when he left.",
  },
  {
    name: "Ash M.",
    job: "Front-yard interlocking + driveway",
    text: "Amazing landscaping and interlocking on our front yard, plus they re-levelled and sealed the driveway. Professional, went above and beyond, on time and very reasonably priced.",
  },
  {
    name: "Itzel M.",
    job: "Pavers and steps",
    text: "We're thrilled with the clean lines, the precise paver work and the beautifully finished steps. Done on time, exactly as promised.",
  },
  {
    name: "Mauricio G.",
    job: "Interlocking stone patio",
    text: "A professionally designed interlock patio, finished on time and exactly how we wanted it. Emmanuel was open to our suggestions, so the whole process felt like a collaboration.",
  },
  {
    name: "Seddar B.",
    job: "Pergola and patio",
    text: "Excellent work on our pergola and patio. Professional, detail-oriented, and they delivered exactly what we asked for.",
  },
  {
    name: "Elk M.",
    job: "Artificial turf, Durham area",
    text: "An excellent turf installation with real attention to detail. The space looks clean and the whole process was smooth.",
  },
  {
    name: "Miguel D.",
    job: "Deck, Ajax",
    text: "Very professional and always on time. They did an excellent job on the deck at my family's house. 10 out of 10.",
  },
  {
    name: "Alvaro C.",
    job: "Full property project",
    text: "Professional, organized and clear from the first conversation to the final result. An impeccable finish and a clean, modern design that matched what I had in mind, delivered on time.",
  },
];

const steps = [
  {
    title: "Call or text",
    text: "Tell Emmanuel what you have in mind: a new patio, a sunken driveway, turf for the backyard. Photos by text help.",
  },
  {
    title: "Free on-site estimate",
    text: "We come out, measure, talk through materials and layout with you, and give you a clear price and a realistic timeline.",
  },
  {
    title: "We build it",
    text: "The crew shows up when we said, excavates, builds a proper base and installs. If we say three days, we plan for three days.",
  },
  {
    title: "Clean-up and walk-through",
    text: "We sweep, haul away debris and walk the finished work with you.",
  },
];

const faqs = [
  {
    q: "Do you give free estimates?",
    a: `Yes. Call or text ${PHONE_DISPLAY} and we'll set up a time to see the property, measure, and walk you through options and pricing. There's no charge and no pressure.`,
  },
  {
    q: "What areas do you serve?",
    a: "We work in Toronto and across the GTA, with a lot of our projects in Durham Region, especially Pickering and Ajax. If you're not sure we cover your street, just ask.",
  },
  {
    q: "How long does an interlock patio or walkway take?",
    a: "It depends on size and site access, but many front-yard and patio jobs take a few days. We give you a timeline at the estimate and our customers tell us we stick to it. One repeat client's job was quoted at three days and finished in three.",
  },
  {
    q: "Can you fix a sunken interlock driveway instead of replacing it?",
    a: "Often, yes. We lift the pavers, correct the base, re-level and re-lay, then seal. It costs far less than a full replacement when the stone is still in good shape.",
  },
  {
    q: "Can you design the whole backyard, not just one piece?",
    a: "Yes. Full backyard transformations are a big part of what we do: interlock, turf, pergolas, decks, fences and garden beds planned together so everything fits. We're happy to work from your ideas or suggest a layout.",
  },
  {
    q: "Who will be doing the work?",
    a: "Interpro is a family-owned company led by Emmanuel, who you'll deal with from the first call through to the final walk-through. Nearly every one of our reviews mentions him by name.",
  },
  {
    q: "Do you clean up after the job?",
    a: "Always. Leaving the site spotless is part of the job, and it's one of the things customers mention most in their reviews.",
  },
];

const areas = ["Pickering", "Ajax", "Durham Region", "Toronto", "The Greater Toronto Area"];

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "LandscapingBusiness",
  name: "Interpro Services",
  description:
    "Family-owned interlocking and landscaping company serving Toronto and the GTA, especially Pickering, Ajax and Durham Region.",
  telephone: "+1-647-561-9743",
  areaServed: ["Pickering", "Ajax", "Durham Region", "Toronto", "Greater Toronto Area"],
  sameAs: [INSTAGRAM],
  hasMap: MAPS_URL,
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: "18" },
  slogan: "Dream Hardscape, Reality Guaranteed.",
};

function CallButton({ big = false }: { big?: boolean }) {
  return (
    <a
      href={PHONE_TEL}
      className={`btn inline-flex items-center justify-center gap-2 rounded-xl bg-cta font-bold text-ink hover:bg-cta-hover focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-brand ${
        big ? "min-h-14 px-7 text-lg" : "min-h-12 px-5"
      }`}
    >
      <Icon name="phone" className="h-5 w-5" />
      Call {PHONE_DISPLAY}
    </a>
  );
}

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <a href="#main" className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded focus:bg-white focus:p-3">
        Skip to content
      </a>

      {/* Utility strip */}
      <div className="hidden bg-brand-deep text-sm text-white/90 md:block">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between px-6 py-2">
          <span className="flex items-center gap-2">
            <Icon name="pin" className="h-4 w-4" /> Serving Pickering, Ajax, Durham Region, Toronto and the GTA
          </span>
          <span className="flex items-center gap-5">
            <span className="flex items-center gap-2">
              <Icon name="users" className="h-4 w-4" /> Family owned
            </span>
            <span className="flex items-center gap-2">
              <Icon name="calendar" className="h-4 w-4" /> Free estimates
            </span>
          </span>
        </div>
      </div>

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-line bg-bg/95 backdrop-blur">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-4 px-5 py-3 md:px-6">
          <a href="#top" className="flex items-center gap-2.5" aria-label="Interpro Services home">
            <span className="grid h-10 w-10 place-items-center rounded-lg bg-brand text-white">
              <Icon name="pavers" className="h-6 w-6" />
            </span>
            <span className="leading-tight">
              <span className="block font-heading text-xl font-extrabold text-brand-deep">Interpro Services</span>
              <span className="block text-xs font-semibold text-muted">Interlocking &amp; Landscaping</span>
            </span>
          </a>
          <nav aria-label="Main" className="hidden items-center gap-7 text-[15px] font-semibold lg:flex">
            <a href="#services" className="hover:text-brand">Services</a>
            <a href="#reviews" className="hover:text-brand">Reviews</a>
            <a href="#about" className="hover:text-brand">About</a>
            <a href="#area" className="hover:text-brand">Service Area</a>
            <a href="#faq" className="hover:text-brand">FAQ</a>
          </nav>
          <div className="hidden items-center gap-4 md:flex">
            <a href={PHONE_TEL} className="font-bold text-brand-deep hover:text-brand">{PHONE_DISPLAY}</a>
            <a
              href={PHONE_TEL}
              className="btn inline-flex min-h-12 items-center rounded-xl bg-cta px-5 font-bold text-ink hover:bg-cta-hover"
            >
              Free Estimate
            </a>
          </div>
          <a
            href={PHONE_TEL}
            className="btn grid h-12 w-12 place-items-center rounded-xl bg-cta text-ink md:hidden"
            aria-label={`Call Interpro Services at ${PHONE_DISPLAY}`}
          >
            <Icon name="phone" className="h-5 w-5" />
          </a>
        </div>
      </header>

      <main id="main" className="pb-20 md:pb-0">
        {/* Hero */}
        <section id="top" className="bg-bg">
          <div className="mx-auto grid max-w-[1200px] items-center gap-12 px-5 py-14 md:px-6 md:py-20 lg:grid-cols-[1.25fr_1fr]">
            <div className="rise">
              <p className="mb-4 inline-flex items-center gap-2 rounded-full bg-tint px-3 py-1 text-sm font-semibold text-brand-deep">
                <Icon name="users" className="h-4 w-4" /> Family owned · 10+ years
              </p>
              <h1 className="text-[clamp(2.25rem,5vw,3.6rem)] font-extrabold leading-[1.08] text-brand-deep">
                Interlocking, Patios &amp; Backyard Landscaping in Pickering, Ajax and the GTA
              </h1>
              <p className="mt-5 max-w-[60ch] text-lg text-muted">
                Interlock patios, walkways, driveways, turf, pergolas and decks, built by Emmanuel and his family crew.
                When we tell you how long it will take, that&apos;s how long it takes.
              </p>
              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <CallButton big />
                <a
                  href={SMS}
                  className="btn inline-flex min-h-14 items-center justify-center gap-2 rounded-xl border-2 border-brand px-7 text-lg font-bold text-brand-deep hover:bg-tint"
                >
                  <Icon name="sms" className="h-5 w-5" /> Text Us Photos
                </a>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] font-semibold text-ink hover:text-brand"
              >
                <Stars />
                <span>5.0 · 18 Google reviews</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>10+ years</span>
                <span className="text-line" aria-hidden="true">|</span>
                <span>Free estimates</span>
              </a>
            </div>

            <figure className="rise rise-2 rounded-2xl border border-line bg-white p-7 shadow-[0_20px_40px_-28px_oklch(0.29_0.06_155/0.45)] md:p-8">
              <Stars className="h-6 w-6" />
              <blockquote className="mt-4 font-heading text-xl font-semibold leading-snug text-ink md:text-2xl">
                &ldquo;He said it would take three days and he finished in three days. Punctual, honest, a reasonable
                price, and everything was cleaned up.&rdquo;
              </blockquote>
              <figcaption className="mt-5 border-t border-line pt-4 text-[15px]">
                <span className="font-bold">Pauline W.</span>
                <span className="text-muted"> · Repeat customer · Google review</span>
              </figcaption>
              <ul className="mt-6 space-y-2.5 text-[15px]">
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="h-5 w-5 text-brand" /> Finished on the date we give you
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="h-5 w-5 text-brand" /> Honest, upfront pricing
                </li>
                <li className="flex items-center gap-2.5">
                  <Icon name="check" className="h-5 w-5 text-brand" /> Spotless site when we leave
                </li>
              </ul>
            </figure>
          </div>
        </section>

        {/* Trust bar */}
        <section aria-label="Why homeowners trust us" className="bg-brand text-white">
          <div className="mx-auto grid max-w-[1200px] grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:px-6">
            {[
              { icon: "star" as IconName, big: "5.0 stars", small: "18 Google reviews" },
              { icon: "calendar" as IconName, big: "10+ years", small: "Interlock & landscaping" },
              { icon: "users" as IconName, big: "Family owned", small: "Led by Emmanuel" },
              { icon: "clock" as IconName, big: "On time", small: "Done when we say" },
            ].map((t) => (
              <div key={t.big} className="flex items-center gap-3">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-white/12 text-cta">
                  <Icon name={t.icon} className="h-6 w-6" />
                </span>
                <span className="leading-tight">
                  <span className="block font-heading text-lg font-bold">{t.big}</span>
                  <span className="block text-sm text-white/80">{t.small}</span>
                </span>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section id="services" className="bg-bg py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Interlocking and landscaping services</h2>
              <p className="mt-4 text-lg text-muted">
                From one set of front steps to a complete backyard, we handle the hardscape and the finishing touches
                with the same crew.
              </p>
            </div>
            <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {services.map((s) => (
                <article
                  key={s.name}
                  className={`lift flex flex-col rounded-2xl border bg-white p-6 ${
                    s.featured ? "border-brand ring-1 ring-brand" : "border-line"
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl bg-tint text-brand">
                      <Icon name={s.icon} className="h-6 w-6" />
                    </span>
                    {s.featured && (
                      <span className="rounded-full bg-cta px-3 py-1 text-xs font-bold text-ink">Most requested</span>
                    )}
                  </div>
                  <h3 className="mt-5 text-xl font-bold text-ink">{s.name}</h3>
                  <p className="mt-2 flex-1 text-[16px] text-muted">{s.text}</p>
                  <a href={PHONE_TEL} className="mt-4 inline-flex items-center gap-1 font-semibold text-brand hover:text-brand-deep">
                    Call about this <span aria-hidden="true">&rarr;</span>
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews */}
        <section id="reviews" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
              <div>
                <Stars className="h-6 w-6" />
                <h2 className="mt-3 text-3xl font-extrabold text-brand-deep md:text-4xl">
                  Rated 5.0 from 18 Google reviews
                </h2>
                <p className="mt-3 max-w-2xl text-lg text-muted">
                  The same things come up again and again: finished on time, honest prices, clean lines, and a clean
                  site at the end.
                </p>
              </div>
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn inline-flex min-h-12 shrink-0 items-center justify-center rounded-xl border-2 border-brand bg-white px-5 font-bold text-brand-deep hover:bg-bg"
              >
                Read all reviews on Google
              </a>
            </div>
            <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {reviews.map((r) => (
                <figure key={r.name} className="flex flex-col rounded-2xl border border-line bg-white p-6">
                  <Stars className="h-4 w-4" />
                  <blockquote className="mt-3 flex-1 text-[16px] leading-relaxed text-ink">&ldquo;{r.text}&rdquo;</blockquote>
                  <figcaption className="mt-5 border-t border-line pt-3 text-sm">
                    <span className="block font-bold text-ink">{r.name}</span>
                    <span className="block text-muted">{r.job}</span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* About */}
        <section id="about" className="bg-bg py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] gap-12 px-5 md:px-6 lg:grid-cols-2">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">A family business that finishes when it says it will</h2>
              <div className="mt-6 space-y-4 text-[17px] text-ink">
                <p>
                  Interpro Services is a family-owned interlocking and landscaping company with more than ten years of
                  experience building patios, walkways, driveways and full backyards across Toronto and the GTA. Most of
                  our work is in Durham Region, in Pickering and Ajax, and a lot of it comes from neighbours and
                  repeat customers.
                </p>
                <p>
                  Emmanuel leads every job. He&apos;s the person who answers the phone, measures your yard, and is on
                  site while the work gets done. He listens to what you want, offers suggestions when they&apos;ll help,
                  and builds it the way you agreed.
                </p>
                <p>
                  Our promise is simple: <strong>Dream hardscape, reality guaranteed.</strong> You get a clear price,
                  a realistic timeline that we keep, careful work, and a yard that&apos;s cleaner when we leave than
                  when we arrived.
                </p>
              </div>
            </div>
            <div className="grid content-start gap-4 sm:grid-cols-2">
              {[
                { icon: "clock" as IconName, t: "On time, every time", d: "Customers say it over and over: the job is done on the day we promised." },
                { icon: "shield" as IconName, t: "Honest, fair pricing", d: "A clear quote up front and a final bill that matches it." },
                { icon: "pavers" as IconName, t: "Clean lines, precise pavers", d: "A solid base and careful cutting so the finished work looks sharp and stays level." },
                { icon: "broom" as IconName, t: "Spotless when we leave", d: "We sweep, haul away debris and leave your property tidy." },
              ].map((d) => (
                <div key={d.t} className="rounded-2xl border border-line bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-tint text-brand">
                    <Icon name={d.icon} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 text-lg font-bold">{d.t}</h3>
                  <p className="mt-1.5 text-[16px] text-muted">{d.d}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How it works */}
        <section className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[1200px] px-5 md:px-6">
            <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">How it works</h2>
            <p className="mt-3 max-w-2xl text-lg text-muted">Four simple steps from first call to finished yard.</p>
            <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
              {steps.map((s, i) => (
                <li key={s.title} className="rounded-2xl bg-white p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-full bg-brand font-heading text-lg font-bold text-white">
                    {i + 1}
                  </span>
                  <h3 className="mt-4 text-xl font-bold">{s.title}</h3>
                  <p className="mt-2 text-[16px] text-muted">{s.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Service area */}
        <section id="area" className="bg-bg py-16 md:py-24">
          <div className="mx-auto grid max-w-[1200px] items-start gap-10 px-5 md:px-6 lg:grid-cols-[1fr_1.2fr]">
            <div>
              <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Serving Durham Region, Toronto and the GTA</h2>
              <p className="mt-4 text-lg text-muted">
                Most of our projects are in Durham Region, especially Pickering and Ajax, and we take on work in
                Toronto and all across the Greater Toronto Area.
              </p>
              <ul className="mt-6 flex flex-wrap gap-2.5">
                {areas.map((a) => (
                  <li key={a} className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white px-4 py-2 text-[15px] font-semibold">
                    <Icon name="pin" className="h-4 w-4 text-brand" /> {a}
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-[16px] text-muted">Not sure if you&apos;re in our area? Call or text and ask.</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line">
              <iframe
                title="Map of the Interpro Services service area around Pickering and Ajax, Ontario"
                src="https://maps.google.com/maps?q=Pickering%2C%20Ontario&z=10&output=embed"
                className="h-[360px] w-full md:h-[420px]"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-tint py-16 md:py-24">
          <div className="mx-auto max-w-[860px] px-5 md:px-6">
            <h2 className="text-3xl font-extrabold text-brand-deep md:text-4xl">Common questions</h2>
            <div className="mt-10 space-y-3">
              {faqs.map((f) => (
                <details key={f.q} className="group rounded-2xl border border-line bg-white">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 p-5 text-lg font-bold focus-visible:outline-2 focus-visible:outline-brand">
                    {f.q}
                    <Icon name="chevron" className="chev h-5 w-5 shrink-0 text-brand" />
                  </summary>
                  <p className="px-5 pb-5 text-[16px] text-muted">{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Final CTA */}
        <section className="bg-brand-deep text-white">
          <div className="mx-auto flex max-w-[1200px] flex-col items-start justify-between gap-8 px-5 py-16 md:flex-row md:items-center md:px-6 md:py-20">
            <div>
              <h2 className="text-3xl font-extrabold md:text-4xl">Ready for a new patio, driveway or backyard?</h2>
              <p className="mt-3 max-w-xl text-lg text-white/85">
                Call Emmanuel at {PHONE_DISPLAY} for a free estimate. Closes at 9 p.m.
              </p>
            </div>
            <CallButton big />
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-bg">
        <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-14 pb-28 md:grid-cols-4 md:px-6 md:pb-14">
          <div>
            <p className="font-heading text-xl font-extrabold text-brand-deep">Interpro Services</p>
            <p className="mt-2 text-[15px] text-muted">Family-owned interlocking and landscaping company serving the GTA for 10+ years.</p>
            <a
              href={INSTAGRAM}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Interpro Services on Instagram"
              className="mt-4 inline-grid h-11 w-11 place-items-center rounded-xl border border-line text-brand hover:bg-tint"
            >
              <Icon name="instagram" className="h-5 w-5" />
            </a>
          </div>
          <div>
            <p className="font-bold">Contact</p>
            <ul className="mt-3 space-y-2 text-[15px] text-muted">
              <li><a href={PHONE_TEL} className="font-semibold text-ink hover:text-brand">{PHONE_DISPLAY}</a></li>
              <li>Service-area business, we come to you</li>
              <li>Closes at 9 p.m.</li>
              <li><a href={MAPS_URL} target="_blank" rel="noopener noreferrer" className="hover:text-brand">Google Business Profile</a></li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Services</p>
            <ul className="mt-3 space-y-1.5 text-[15px] text-muted">
              <li>Interlocking patios &amp; walkways</li>
              <li>Driveway re-levelling &amp; sealing</li>
              <li>Retaining walls &amp; steps</li>
              <li>Artificial turf</li>
              <li>Pergolas, decks &amp; fences</li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Service area</p>
            <p className="mt-3 text-[15px] text-muted">Pickering, Ajax, Durham Region, Toronto and the Greater Toronto Area.</p>
          </div>
        </div>
        <div className="border-t border-line">
          <p className="mx-auto max-w-[1200px] px-5 py-5 pb-24 text-sm text-muted md:px-6 md:pb-5">
            &copy; {new Date().getFullYear()} Interpro Services. All rights reserved.
          </p>
        </div>
      </footer>

      {/* Mobile call bar */}
      <div className="fixed inset-x-0 bottom-0 z-50 grid grid-cols-2 gap-2 border-t border-line bg-bg/95 p-2.5 backdrop-blur md:hidden">
        <a href={PHONE_TEL} className="btn flex min-h-12 items-center justify-center gap-2 rounded-xl bg-cta font-bold text-ink">
          <Icon name="phone" className="h-5 w-5" /> Call
        </a>
        <a href={SMS} className="btn flex min-h-12 items-center justify-center gap-2 rounded-xl bg-brand font-bold text-white">
          <Icon name="sms" className="h-5 w-5" /> Text
        </a>
      </div>
    </>
  );
}
