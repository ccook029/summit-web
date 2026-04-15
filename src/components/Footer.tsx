import Link from "next/link";

const footerLinks = {
  equipment: [
    { name: "Tanker Trailers", href: "/inventory?category=Tanker+Trailers" },
    { name: "Dry Bulk Trailers", href: "/inventory?category=Dry+Bulk+Trailers" },
    { name: "Tank Containers", href: "/inventory?category=Tank+Containers" },
    { name: "Chassis", href: "/inventory?category=Chassis" },
    { name: "Tractors", href: "/inventory?category=Tractors" },
  ],
  services: [
    { name: "Buy Equipment", href: "/services#buy" },
    { name: "Sell Equipment", href: "/services#sell" },
    { name: "Lease Equipment", href: "/services#lease" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Inventory", href: "/inventory" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-accent rounded flex items-center justify-center font-bold text-charcoal text-xl">
                S
              </div>
              <div>
                <span className="text-xl font-bold text-white tracking-tight">
                  Summit
                </span>
                <span className="text-xl font-light text-gray-400 tracking-tight ml-1">
                  Equipment
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Canada&apos;s trusted source for bulk transportation equipment.
              Buying, selling, and leasing tanker trailers, dry bulk trailers,
              tank containers, and more.
            </p>
            <div className="space-y-2 text-sm">
              <a
                href="tel:+15195551234"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                (519) 555-1234
              </a>
              <a
                href="mailto:info@summitel.ca"
                className="flex items-center gap-2 text-gray-400 hover:text-accent transition-colors"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                info@summitel.ca
              </a>
            </div>
          </div>

          {/* Equipment */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Equipment
            </h3>
            <ul className="space-y-3">
              {footerLinks.equipment.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Services
            </h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-accent text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="mt-6 pt-6 border-t border-white/10">
              <p className="text-gray-500 text-xs">
                6 Firestone Road
                <br />
                Strathroy, ON N7G 4L9
                <br />
                Canada
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Summit Equipment. All rights
            reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Strathroy, Ontario &middot; Serving all of Canada &amp; North America
          </p>
        </div>
      </div>
    </footer>
  );
}
