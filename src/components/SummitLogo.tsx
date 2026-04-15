import Image from "next/image";
import Link from "next/link";

export default function SummitLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <div className="bg-white rounded-lg px-4 py-2.5">
        <Image
          src="/images/Summit Equipment Logo.jpg"
          alt="Summit Equipment"
          width={240}
          height={80}
          className="h-12 w-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}
