import Image from "next/image";
import Link from "next/link";
import type { EquipmentItem } from "@/data/inventory";

interface EquipmentCardProps {
  item: EquipmentItem;
}

export default function EquipmentCard({ item }: EquipmentCardProps) {
  const statusColor =
    item.status === "For Sale"
      ? "bg-green-500/20 text-green-400 border-green-500/30"
      : item.status === "For Lease"
        ? "bg-blue-500/20 text-blue-400 border-blue-500/30"
        : "bg-red-500/20 text-red-400 border-red-500/30";

  return (
    <div className="group bg-charcoal-light border border-white/10 rounded-lg overflow-hidden hover:border-accent/30 transition-all duration-300 hover:shadow-lg hover:shadow-accent/5">
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        <div className="absolute top-3 left-3 flex gap-2">
          <span
            className={`px-2.5 py-1 text-xs font-semibold rounded border ${statusColor}`}
          >
            {item.status}
          </span>
        </div>
        <div className="absolute top-3 right-3">
          <span className="px-2.5 py-1 text-xs font-medium rounded bg-black/60 text-gray-300 border border-white/10">
            {item.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-white font-semibold text-lg mb-2 group-hover:text-accent transition-colors">
          {item.title}
        </h3>
        <p className="text-gray-400 text-sm mb-4 line-clamp-2">
          {item.description}
        </p>

        {/* Key Specs */}
        <div className="grid grid-cols-2 gap-2 mb-4">
          <div className="text-xs">
            <span className="text-gray-500">Year</span>
            <p className="text-gray-300 font-medium">{item.year}</p>
          </div>
          <div className="text-xs">
            <span className="text-gray-500">Capacity</span>
            <p className="text-gray-300 font-medium">{item.capacity}</p>
          </div>
          <div className="text-xs">
            <span className="text-gray-500">Make</span>
            <p className="text-gray-300 font-medium">{item.manufacturer}</p>
          </div>
          <div className="text-xs">
            <span className="text-gray-500">Model</span>
            <p className="text-gray-300 font-medium truncate">{item.model}</p>
          </div>
        </div>

        {/* Price & CTA */}
        <div className="flex items-center justify-between pt-4 border-t border-white/10">
          <div>
            {item.price && (
              <p className="text-accent font-bold text-lg">
                ${item.price.toLocaleString()}
              </p>
            )}
            {item.leaseRate && (
              <p className="text-accent font-bold text-lg">
                ${item.leaseRate.toLocaleString()}
                <span className="text-sm font-normal text-gray-400">/mo</span>
              </p>
            )}
          </div>
          <Link
            href="/contact"
            className="px-4 py-2 bg-accent/10 text-accent hover:bg-accent hover:text-white font-medium text-sm rounded transition-colors"
          >
            Inquire
          </Link>
        </div>
      </div>
    </div>
  );
}
