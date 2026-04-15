import Link from "next/link";

export default function SummitLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`flex items-center gap-3 group ${className}`}>
      {/* Mountain Icon */}
      <svg
        viewBox="0 0 48 40"
        className="w-10 h-8 shrink-0"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Light blue peak (left/back) */}
        <polygon
          points="14,4 26,28 2,28"
          fill="#7CB9E8"
        />
        {/* Medium blue peak (center) */}
        <polygon
          points="22,2 36,28 8,28"
          fill="#4A90D9"
        />
        {/* Dark navy peak (right/front) */}
        <polygon
          points="32,8 44,28 20,28"
          fill="#1B3A5C"
        />
        {/* Swoosh arc */}
        <path
          d="M0,32 Q24,24 48,32"
          stroke="#7CB9E8"
          strokeWidth="2"
          fill="none"
        />
      </svg>

      {/* Text */}
      <div className="flex flex-col leading-none">
        <span className="text-xl font-bold text-white tracking-wide">
          SUMMIT
        </span>
        <span className="text-[0.65rem] font-medium text-gray-400 tracking-[0.25em] mt-0.5">
          EQUIPMENT
        </span>
      </div>
    </Link>
  );
}
