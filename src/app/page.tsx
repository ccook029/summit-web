import Image from "next/image";
import Link from "next/link";
import EquipmentCard from "@/components/EquipmentCard";
import { inventory } from "@/data/inventory";

const stats = [
  { value: "500+", label: "Units Sold & Leased" },
  { value: "25+", label: "Years in the Industry" },
  { value: "100%", label: "Customer Satisfaction" },
  { value: "24/7", label: "Support Available" },
];

const valueProps = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
    title: "Inspected & Certified",
    description:
      "Every unit undergoes thorough inspection. DOT compliance, pressure testing, and full certification on every piece of equipment we move.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Competitive Pricing",
    description:
      "Fair, transparent pricing on every unit. No games, no hidden fees. We know the market and we price accordingly.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
      </svg>
    ),
    title: "Flexible Leasing",
    description:
      "Short-term, long-term, and lease-to-own options. We structure deals that work for your operation, not the other way around.",
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: "Industry Expertise",
    description:
      "Our team knows bulk transport inside and out. Chemical, food-grade, petroleum, dry bulk — we speak your language.",
  },
];

const equipmentTypes = [
  {
    name: "Tanker Trailers",
    description: "DOT-407, LPG, crude, and more",
    image: "/images/Tandem 407 (1).jpg",
    href: "/inventory?category=Tanker+Trailers",
    position: "object-[center_60%]",
  },
  {
    name: "Dry Bulk Trailers",
    description: "Pneumatic trailers and end dumps",
    image: "/images/Multi Axle Pneumatic.jpg",
    href: "/inventory?category=Dry+Bulk+Trailers",
    position: "object-[center_70%]",
  },
  {
    name: "LPG & B-Trains",
    description: "Propane, butane, and B-Train configurations",
    image: "/images/B Trains LPG (1).jpg",
    href: "/inventory?category=Tanker+Trailers",
    position: "object-[center_65%]",
  },
  {
    name: "Flatbeds & Dry Vans",
    description: "Step decks, flatbeds, and dry vans",
    image: "/images/Step Deck.jpg",
    href: "/inventory?category=Flatbeds+%26+Step+Decks",
    position: "object-[center_70%]",
  },
];

const featuredItems = inventory.filter((item) => item.featured).slice(0, 3);

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=1920&h=1080&fit=crop&q=80"
            alt="Industrial transportation fleet"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 mb-8">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
              <span className="text-accent text-sm font-medium">
                Strathroy, Ontario &middot; Serving All of North America
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
              Bulk Transport
              <br />
              Equipment You
              <br />
              Can{" "}
              <span className="text-accent">Count On</span>
            </h1>

            <p className="text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
              Buy, sell, or lease premium tanker trailers, dry bulk trailers,
              tank containers, chassis, and tractors. Serious equipment for
              serious operators.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/inventory"
                className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-md transition-colors text-center"
              >
                Browse Inventory
              </Link>
              <Link
                href="/contact"
                className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold text-lg rounded-md border border-white/20 transition-colors text-center"
              >
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-charcoal border-y border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="text-3xl sm:text-4xl font-bold text-accent mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Equipment Categories */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Deal In
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              From liquid tankers to dry bulk pneumatics, we cover the full
              spectrum of bulk transportation equipment.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {equipmentTypes.map((type) => (
              <Link
                key={type.name}
                href={type.href}
                className="group rounded-lg overflow-hidden bg-charcoal-light border border-white/10 hover:border-accent/30 transition-all duration-300"
              >
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={type.image}
                    alt={type.name}
                    fill
                    className={`object-cover ${type.position} group-hover:scale-105 transition-transform duration-700`}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-light via-transparent to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="text-white font-bold text-lg mb-1">
                    {type.name}
                  </h3>
                  <p className="text-gray-400 text-sm mb-3">{type.description}</p>
                  <div className="flex items-center gap-1 text-accent text-sm font-medium group-hover:gap-2 transition-all duration-300">
                    View Inventory
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Inventory */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-12">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                Featured Equipment
              </h2>
              <p className="text-gray-400">
                Hand-picked units ready to move. Updated regularly.
              </p>
            </div>
            <Link
              href="/inventory"
              className="px-6 py-3 border border-accent text-accent hover:bg-accent hover:text-white font-semibold rounded-md transition-colors"
            >
              View All Inventory
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredItems.map((item) => (
              <EquipmentCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Why Summit Equipment
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We&apos;ve built our reputation on doing things right. No
              shortcuts, no surprises — just good equipment and straight talk.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueProps.map((prop) => (
              <div
                key={prop.title}
                className="flex gap-5 p-6 rounded-lg bg-charcoal-light border border-white/5 hover:border-accent/20 transition-colors"
              >
                <div className="shrink-0 w-14 h-14 rounded-lg bg-accent/10 text-accent flex items-center justify-center">
                  {prop.icon}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {prop.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {prop.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="relative rounded-2xl overflow-hidden">
            <div className="absolute inset-0">
              <Image
                src="https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=1400&h=500&fit=crop&q=80"
                alt="Industrial highway transport"
                fill
                className="object-cover"
                sizes="100vw"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-charcoal/95 via-charcoal/80 to-charcoal/60" />
            </div>

            <div className="relative z-10 px-8 sm:px-16 py-16 sm:py-20">
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4 max-w-lg">
                Ready to Find Your Next Unit?
              </h2>
              <p className="text-gray-300 text-lg mb-8 max-w-md">
                Tell us what you need. Whether you&apos;re buying, selling, or
                leasing — we&apos;ll get it done.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors text-center"
                >
                  Contact Us Today
                </Link>
                <a
                  href="tel:+15195551234"
                  className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-md border border-white/20 transition-colors text-center"
                >
                  Call (519) 555-1234
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
