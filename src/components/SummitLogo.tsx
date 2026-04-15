import Image from "next/image";
import Link from "next/link";

export default function SummitLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <Image
        src="/images/Summit Equipment Logo.jpg"
        alt="Summit Equipment"
        width={180}
        height={60}
        className="h-12 w-auto object-contain"
        priority
      />
    </Link>
  );
}
