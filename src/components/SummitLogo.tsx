import Image from "next/image";
import Link from "next/link";

export default function SummitLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center group ${className}`}>
      <div className="bg-white rounded-md px-3 py-2">
        <Image
          src="/images/Summit Equipment Logo.jpg"
          alt="Summit Equipment"
          width={200}
          height={66}
          className="h-11 w-auto object-contain"
          priority
        />
      </div>
    </Link>
  );
}
