import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Summit Equipment — Canada's trusted source for bulk transportation equipment. Based in Strathroy, Ontario, we buy, sell, and lease tanker trailers, dry bulk trailers, and more.",
};

const values = [
  {
    title: "Integrity First",
    description:
      "We tell it like it is. If a unit isn't right for your operation, we'll say so. Our reputation is built on honest deals and straight talk.",
  },
  {
    title: "Equipment Knowledge",
    description:
      "We know these trailers inside and out — specs, certifications, applications, maintenance histories. We do the homework so you don't have to.",
  },
  {
    title: "Operator-Focused",
    description:
      "Every decision we make is with the operator in mind. Fast turnarounds, flexible terms, and equipment that's ready to work from day one.",
  },
  {
    title: "Long-Term Relationships",
    description:
      "We don't chase one-time deals. Our goal is to be your go-to source for equipment — this year, next year, and beyond.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="relative bg-charcoal border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            About Summit Equipment
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            We&apos;re a specialized equipment dealer focused on one thing:
            getting the right bulk transport equipment into the right hands.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Built on Industry Knowledge
              </h2>
              <div className="space-y-5 text-gray-300 leading-relaxed">
                <p>
                  Summit Equipment was founded with a simple premise: the bulk
                  transportation industry deserves a better equipment partner.
                  Too many dealers treat trailers like commodities — we treat
                  them like the critical operational assets they are.
                </p>
                <p>
                  Based in Strathroy, Ontario, we specialize in the buying,
                  selling, and leasing of liquid and dry bulk pneumatic tanks,
                  tanker trailers, tank containers, chassis, and tractors. Our
                  team brings decades of combined experience in chemical
                  transport, food-grade hauling, petroleum logistics, and dry
                  bulk commodities.
                </p>
                <p>
                  We work with fleet managers, owner-operators, logistics
                  companies, and anyone who needs reliable bulk transport
                  equipment. Whether you&apos;re adding a single unit or
                  outfitting an entire fleet, we bring the same level of
                  attention and expertise to every transaction.
                </p>
              </div>
            </div>
            <div className="relative h-96 lg:h-[500px] rounded-lg overflow-hidden">
              <Image
                src="/images/Tandem 407 (1).jpg"
                alt="Summit Equipment tanker trailer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              What We Do
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              We connect buyers and sellers of bulk transportation equipment
              across North America.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-8 rounded-lg bg-charcoal-light border border-white/5">
              <div className="w-14 h-14 rounded-lg bg-green-500/10 text-green-400 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                Buy Equipment
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Browse our inventory of inspected, certified equipment. Every
                unit comes with full documentation, service history, and our
                quality guarantee.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-charcoal-light border border-white/5">
              <div className="w-14 h-14 rounded-lg bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                Sell Equipment
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Looking to sell? We buy equipment directly and can list your
                units to our network of qualified buyers across North America.
              </p>
            </div>

            <div className="p-8 rounded-lg bg-charcoal-light border border-white/5">
              <div className="w-14 h-14 rounded-lg bg-accent/10 text-accent flex items-center justify-center mb-6">
                <svg className="w-7 h-7" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3" />
                </svg>
              </div>
              <h3 className="text-white font-bold text-xl mb-3">
                Lease Equipment
              </h3>
              <p className="text-gray-400 leading-relaxed">
                Flexible lease terms designed for operators. Short-term,
                long-term, and lease-to-own options available on most equipment
                in our inventory.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              How We Operate
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Simple principles that guide everything we do.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div
                key={value.title}
                className="flex gap-5 p-6 rounded-lg bg-charcoal-light border border-white/5"
              >
                <div className="shrink-0 w-12 h-12 rounded-lg bg-accent/10 text-accent flex items-center justify-center font-bold text-lg">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-white font-semibold text-lg mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed">
                    {value.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Location */}
      <section className="py-24 bg-charcoal">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
                Strategically Located
              </h2>
              <p className="text-gray-300 leading-relaxed mb-6">
                Our facility in Strathroy, Ontario puts us at the crossroads of
                major transportation corridors. We&apos;re within easy reach of
                the 401 corridor, the US border at Sarnia/Port Huron, and major
                chemical and manufacturing hubs across Southwestern Ontario.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium">Address</p>
                    <p className="text-gray-400">
                      6 Firestone Road, Strathroy, ON N7G 4L9, Canada
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-accent mt-0.5 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <div>
                    <p className="text-white font-medium">Hours</p>
                    <p className="text-gray-400">
                      Monday – Friday: 8:00 AM – 5:00 PM
                      <br />
                      Saturday: By Appointment
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative h-80 lg:h-96 rounded-lg overflow-hidden bg-steel">
              <Image
                src="/images/Multi Axle Pneumatic.jpg"
                alt="Summit Equipment dry bulk trailer"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Let&apos;s Talk Equipment
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-8">
            Whether you&apos;re buying, selling, or leasing — we&apos;re ready
            to help. Reach out and let&apos;s get to work.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="px-8 py-4 bg-accent hover:bg-accent-dark text-white font-bold rounded-md transition-colors"
            >
              Contact Us
            </Link>
            <Link
              href="/inventory"
              className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-semibold rounded-md border border-white/20 transition-colors"
            >
              Browse Inventory
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
