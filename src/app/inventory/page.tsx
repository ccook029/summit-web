"use client";

import { useState, useMemo } from "react";
import EquipmentCard from "@/components/EquipmentCard";
import {
  inventory,
  equipmentCategories,
  type EquipmentCategory,
  type EquipmentStatus,
} from "@/data/inventory";

const statuses: EquipmentStatus[] = ["For Sale", "For Lease"];

export default function InventoryPage() {
  const [selectedCategory, setSelectedCategory] = useState<
    EquipmentCategory | "All"
  >("All");
  const [selectedStatus, setSelectedStatus] = useState<
    EquipmentStatus | "All"
  >("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredItems = useMemo(() => {
    return inventory.filter((item) => {
      if (item.status === "Sold") return false;
      if (
        selectedCategory !== "All" &&
        item.category !== selectedCategory
      )
        return false;
      if (selectedStatus !== "All" && item.status !== selectedStatus)
        return false;
      if (searchQuery) {
        const query = searchQuery.toLowerCase();
        return (
          item.title.toLowerCase().includes(query) ||
          item.manufacturer.toLowerCase().includes(query) ||
          item.model.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [selectedCategory, selectedStatus, searchQuery]);

  return (
    <>
      {/* Page Header */}
      <section className="bg-charcoal border-b border-white/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Equipment Inventory
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl">
            Browse our current selection of bulk transportation equipment.
            Everything listed is available and ready to move.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="bg-charcoal-light border-b border-white/10 sticky top-20 z-30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search equipment..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-steel/50 border border-white/10 rounded-md text-white placeholder-gray-500 focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 text-sm"
              />
            </div>

            {/* Category Filter */}
            <select
              value={selectedCategory}
              onChange={(e) =>
                setSelectedCategory(
                  e.target.value as EquipmentCategory | "All"
                )
              }
              className="px-4 py-2.5 bg-steel/50 border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-accent/50 appearance-none cursor-pointer"
            >
              <option value="All">All Categories</option>
              {equipmentCategories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            {/* Status Filter */}
            <select
              value={selectedStatus}
              onChange={(e) =>
                setSelectedStatus(e.target.value as EquipmentStatus | "All")
              }
              className="px-4 py-2.5 bg-steel/50 border border-white/10 rounded-md text-white text-sm focus:outline-none focus:border-accent/50 appearance-none cursor-pointer"
            >
              <option value="All">All Availability</option>
              {statuses.map((status) => (
                <option key={status} value={status}>
                  {status}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Results */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Results Count */}
          <p className="text-gray-400 text-sm mb-8">
            Showing{" "}
            <span className="text-white font-medium">
              {filteredItems.length}
            </span>{" "}
            {filteredItems.length === 1 ? "unit" : "units"}
            {selectedCategory !== "All" && (
              <span>
                {" "}
                in{" "}
                <span className="text-accent">{selectedCategory}</span>
              </span>
            )}
            {selectedStatus !== "All" && (
              <span>
                {" "}
                &middot;{" "}
                <span className="text-accent">{selectedStatus}</span>
              </span>
            )}
          </p>

          {filteredItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredItems.map((item) => (
                <EquipmentCard key={item.id} item={item} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <svg
                className="w-16 h-16 text-gray-600 mx-auto mb-4"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
              <h3 className="text-white text-xl font-semibold mb-2">
                No equipment found
              </h3>
              <p className="text-gray-400 mb-6">
                Try adjusting your filters or search terms.
              </p>
              <button
                onClick={() => {
                  setSelectedCategory("All");
                  setSelectedStatus("All");
                  setSearchQuery("");
                }}
                className="px-6 py-2.5 bg-accent/10 text-accent hover:bg-accent hover:text-white font-medium rounded-md transition-colors"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
