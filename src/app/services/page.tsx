import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Summit Equipment offers buying, selling, and leasing of bulk transportation equipment. Tanker trailers, dry bulk trailers, tank containers, chassis, and tractors.",
};

const processSteps = {
  buy: [
    {
      step: "01",
      title: "Tell Us What You Need",
      description:
        "Describe the equipment you're looking for — type, specs, capacity, application. We'll match you with the right units.",
    },
    {
      step: "02",
      title: "Review Your Options",
      description:
        "We'll present available units from our inventory and network. Full specs, photos, inspection reports, and pricing.",
    },
    {
      step: "03",
      title: "Inspect & Verify",
      description:
        "Every unit is thoroughly inspected. We provide complete documentation including certifications, maintenance history, and test results.",
    },
    {
      step: "04",
      title: "Close & Deliver",
      description:
        "Straightforward paperwork, competitive pricing, and we can coordinate delivery anywhere in North America.",
    },
  ],
  sell: [
    {
      step: "01",
      title: "Submit Your Equipment",
      description:
        "Tell us what you have — year, make, model, condition, specs. Photos help but aren't required to start.",
    },
    {
      step: "02",
      title: "Get a Fair Valuation",
      description:
        "We'll assess your equipment based on current market conditions and provide a competitive offer or consignment plan.",
    },
    {
      step: "03",
      title: "Choose Your Path",
      description:
        "Sell directly to us for a fast close, or let us list and market your equipment to our network of qualified buyers.",
    },
    {
      step: "04",
      title: "Get Paid",
      description:
        "Quick, clean transactions. No runaround, no delays. We handle the paperwork and logistics.",
    },
  ],
  lease: [
    {
      step: "01",
      title: "Define Your Requirements",
      description:
        "Tell us what you need and for how long. Seasonal demand, new contract, fleet expansion — we've got options.",
    },
    {
      step: "02",
      title: "Custom Lease Structure",
      description:
        "Short-term, long-term, or lease-to-own. We build terms that fit your operation and cash flow.",
    },
    {
      step: "03",
      title: "Select Your Equipment",
      description:
        "Choose from our available inventory of lease-ready equipment. All units are inspected and certified before delivery.",
    },
    {
      step: "04",
      title: "Hit the Road",
      description:
        "Fast turnaround from signing to delivery. We keep equipment lease-ready so you're not waiting around.",
    },
  ],
};

const equipmentServed = [
  "DOT-407 Stainless Steel Tankers",
  "MC-307 Chemical Tankers",
  "DOT-412 Acid Tankers",
  "Dry Bulk Pneumatic Trailers",
  "ISO Tank Containers",
  "Intermodal Chassis (20ft & 40ft)",
  "Day Cab Tractors",
  "Food-Grade Tankers",
  "Petroleum Tankers",
  "Specialty / Custom Equipment",
];

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-charcoal border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our Services
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Three ways to work with Summit Equipment. Whether you&apos;re
            looking to buy, sell, or lease — we make the process fast,
            transparent, and fair.
          </p>
        </div>
      </section>

      {/* Buy Section */}
      <section id="buy" className="py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 border border-green-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-green-500" />
                <span className="text-green-400 text-sm font-medium">
                  Buy Equipment
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Find the Right Equipment, Fast
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                We maintain a rotating inventory of inspected, certified bulk
                transportation equipment. From tanker trailers to dry bulk
                pneumatics, every unit in our inventory has been evaluated for
                quality and operational readiness. If we don&apos;t have what
                you need in stock, we&apos;ll source it from our extensive
                network across North America.
              </p>

              <div className="space-y-6">
                {processSteps.buy.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-green-500/10 text-green-400 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/inventory"
                className="inline-flex mt-8 px-6 py-3 bg-green-500/10 text-green-400 hover:bg-green-500 hover:text-white font-semibold rounded-md transition-colors"
              >
                Browse Available Equipment
              </Link>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/multi comparment 407 (1).jpg"
                alt="Multi compartment tanker for sale"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Sell Section */}
      <section id="sell" className="py-24 bg-charcoal scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden order-2 lg:order-1">
              <Image
                src="/images/Crude.jpg"
                alt="Crude oil tanker trailer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>

            <div className="order-1 lg:order-2">
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-blue-500" />
                <span className="text-blue-400 text-sm font-medium">
                  Sell Equipment
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Turn Idle Equipment into Cash
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Have equipment sitting in the yard? We buy quality used bulk
                transport equipment directly, or we can market and sell it on
                your behalf through our network. Either way, you get a fair
                price and a fast process. No long listing periods, no tire
                kickers — just qualified buyers and clean deals.
              </p>

              <div className="space-y-6">
                {processSteps.sell.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-blue-500/10 text-blue-400 flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex mt-8 px-6 py-3 bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-white font-semibold rounded-md transition-colors"
              >
                Get a Valuation
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Lease Section */}
      <section id="lease" className="py-24 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent/10 border border-accent/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-accent text-sm font-medium">
                  Lease Equipment
                </span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Flexible Terms, Ready Equipment
              </h2>
              <p className="text-gray-300 leading-relaxed mb-8">
                Not every operation needs to own. Our leasing program gives you
                access to premium bulk transport equipment with terms that match
                your business cycle. Seasonal demand spikes, new contract wins,
                fleet expansion — we structure leases that make financial sense
                for your operation. Lease-to-own options available on qualifying
                equipment.
              </p>

              <div className="space-y-6">
                {processSteps.lease.map((step) => (
                  <div key={step.step} className="flex gap-4">
                    <div className="shrink-0 w-10 h-10 rounded-full bg-accent/10 text-accent flex items-center justify-center font-bold text-sm">
                      {step.step}
                    </div>
                    <div>
                      <h3 className="text-white font-semibold mb-1">
                        {step.title}
                      </h3>
                      <p className="text-gray-400 text-sm leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="inline-flex mt-8 px-6 py-3 bg-accent/10 text-accent hover:bg-accent hover:text-white font-semibold rounded-md transition-colors"
              >
                Discuss Lease Options
              </Link>
            </div>

            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/Tandem LPG (1).jpg"
                alt="LPG tanker trailer for lease"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Types */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Equipment We Handle
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We deal in the full range of bulk transportation equipment. If it
              hauls liquid, dry bulk, or gases — we know it.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {equipmentServed.map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 px-4 py-3 rounded-lg bg-charcoal-light border border-white/5"
              >
                <svg
                  className="w-5 h-5 text-accent shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
                <span className="text-gray-300 text-sm">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Whatever your equipment needs, we&apos;re here to make it happen.
            Get in touch and let&apos;s talk.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold text-lg rounded-md transition-colors"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  );
}
