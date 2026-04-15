export type EquipmentCategory =
  | "Tanker Trailers"
  | "Dry Bulk Trailers"
  | "Tank Containers"
  | "Chassis"
  | "Tractors"
  | "Flatbeds & Step Decks"
  | "Dry Vans";

export type EquipmentStatus = "For Sale" | "For Lease" | "Sold";

export interface EquipmentItem {
  id: string;
  title: string;
  category: EquipmentCategory;
  status: EquipmentStatus;
  year: number;
  manufacturer: string;
  model: string;
  capacity: string;
  price?: number;
  leaseRate?: number;
  description: string;
  specs: string[];
  image: string;
  featured: boolean;
}

export const equipmentCategories: EquipmentCategory[] = [
  "Tanker Trailers",
  "Dry Bulk Trailers",
  "Tank Containers",
  "Chassis",
  "Tractors",
  "Flatbeds & Step Decks",
  "Dry Vans",
];

export const inventory: EquipmentItem[] = [
  {
    id: "tt-001",
    title: "2023 Tremcar DOT-407 Tandem Tanker",
    category: "Tanker Trailers",
    status: "For Sale",
    year: 2023,
    manufacturer: "Tremcar",
    model: "DOT-407 Stainless Steel",
    capacity: "6,800 USG",
    price: 145000,
    description:
      "Low-mileage Tremcar DOT-407 stainless steel tanker trailer. Ideal for food-grade and chemical transport. Full inspection completed.",
    specs: [
      "Stainless Steel Construction",
      "Single Compartment",
      "6,800 USG Capacity",
      "Air Ride Suspension",
      "Spring Loaded Internals",
      "Rear Discharge",
    ],
    image: "/images/Tandem 407 (1).jpg",
    featured: true,
  },
  {
    id: "tt-002",
    title: "2022 Multi Compartment MC-407 Chemical Tanker",
    category: "Tanker Trailers",
    status: "For Lease",
    year: 2022,
    manufacturer: "Tremcar",
    model: "MC-407 Multi Compartment",
    capacity: "6,300 USG",
    leaseRate: 2800,
    description:
      "Multi-compartment 407 tanker for chemical and food-grade transport. Multiple product delivery in a single load.",
    specs: [
      "316L Stainless Steel",
      "Multi Compartment",
      "6,300 USG Total Capacity",
      "Insulated & Heated",
      "Top & Bottom Loading",
      "Full Walkway",
    ],
    image: "/images/multi comparment 407 (1).jpg",
    featured: true,
  },
  {
    id: "tt-003",
    title: "2024 Quad Axle DOT-407 Tanker",
    category: "Tanker Trailers",
    status: "For Sale",
    year: 2024,
    manufacturer: "Tremcar",
    model: "DOT-407 Quad Axle",
    capacity: "7,200 USG",
    price: 168000,
    description:
      "High-capacity quad axle 407 tanker. Maximum payload for long-haul chemical and food-grade transport.",
    specs: [
      "Stainless Steel Construction",
      "Quad Axle Configuration",
      "7,200 USG Capacity",
      "Air Ride Suspension",
      "Full Walkway & Railings",
      "Rear & Side Discharge",
    ],
    image: "/images/Quad 407.jpg",
    featured: true,
  },
  {
    id: "tt-004",
    title: "2021 Tandem LPG Transport Trailer",
    category: "Tanker Trailers",
    status: "For Sale",
    year: 2021,
    manufacturer: "Trinity",
    model: "LPG Tandem",
    capacity: "11,500 USG",
    price: 125000,
    description:
      "Tandem axle LPG transport trailer. Purpose-built for propane and butane hauling. Recently recertified.",
    specs: [
      "Carbon Steel Pressure Vessel",
      "Tandem Axle",
      "11,500 USG Capacity",
      "MC-331 Certified",
      "Emergency Shutoff Valves",
      "Vapor Recovery System",
    ],
    image: "/images/Tandem LPG (1).jpg",
    featured: false,
  },
  {
    id: "tt-005",
    title: "2023 B-Train LPG Transport",
    category: "Tanker Trailers",
    status: "For Lease",
    year: 2023,
    manufacturer: "Westank",
    model: "B-Train LPG",
    capacity: "18,000 USG",
    leaseRate: 4200,
    description:
      "B-Train LPG configuration for maximum payload. Lead and pup trailers for high-volume propane distribution.",
    specs: [
      "B-Train Configuration",
      "Lead & Pup Trailers",
      "18,000 USG Combined",
      "MC-331 Certified",
      "Full Safety Package",
      "Air Ride Suspension",
    ],
    image: "/images/B Trains LPG (1).jpg",
    featured: true,
  },
  {
    id: "tt-006",
    title: "2020 Crude Oil Transport Tanker",
    category: "Tanker Trailers",
    status: "For Sale",
    year: 2020,
    manufacturer: "Advance",
    model: "DOT-407 Crude",
    capacity: "8,400 USG",
    price: 89000,
    description:
      "Purpose-built crude oil transport tanker. Heavy-duty construction for oilfield operations.",
    specs: [
      "Carbon Steel Construction",
      "Single Compartment",
      "8,400 USG Capacity",
      "Bottom Loading",
      "Vapor Recovery",
      "Full Walkway & Railings",
    ],
    image: "/images/Crude.jpg",
    featured: false,
  },
  {
    id: "db-001",
    title: "2024 Multi Axle Dry Bulk Pneumatic",
    category: "Dry Bulk Trailers",
    status: "For Sale",
    year: 2024,
    manufacturer: "Heil",
    model: "Multi Axle Pneumatic",
    capacity: "1,620 Cu Ft",
    price: 118000,
    description:
      "Multi-axle dry bulk pneumatic trailer. Perfect for cement, fly ash, flour, and other dry bulk commodities.",
    specs: [
      "Aluminum Construction",
      "1,620 Cu Ft Capacity",
      "Multi-Axle Configuration",
      "4\" Discharge Lines",
      "Top Fill Hatches",
      "Air Ride Suspension",
    ],
    image: "/images/Multi Axle Pneumatic.jpg",
    featured: true,
  },
  {
    id: "db-002",
    title: "2021 Tandem Pneumatic Dry Bulk",
    category: "Dry Bulk Trailers",
    status: "For Sale",
    year: 2021,
    manufacturer: "Polar",
    model: "Tandem Pneumatic",
    capacity: "1,040 Cu Ft",
    price: 78000,
    description:
      "Reliable tandem axle pneumatic trailer with excellent service history. Suitable for sand, cement, and plastic pellet hauling.",
    specs: [
      "Aluminum Body",
      "1,040 Cu Ft Capacity",
      "Tandem Axle",
      "3\" & 4\" Discharge",
      "Aeration System",
      "Lightweight Design",
    ],
    image: "/images/tandem pneumatic.jpg",
    featured: false,
  },
  {
    id: "db-003",
    title: "2022 End Dump Trailer",
    category: "Dry Bulk Trailers",
    status: "For Lease",
    year: 2022,
    manufacturer: "MAC Trailer",
    model: "End Dump",
    capacity: "40 Cu Yd",
    leaseRate: 1800,
    description:
      "Heavy-duty end dump trailer for aggregate, sand, gravel, and construction material hauling.",
    specs: [
      "Hardox Steel Body",
      "40 Cu Yd Capacity",
      "Tri-Axle",
      "Hydraulic Lift",
      "Half Round Design",
      "Air Ride Suspension",
    ],
    image: "/images/Dump 1.jpg",
    featured: false,
  },
  {
    id: "sd-001",
    title: "2023 Step Deck Trailer",
    category: "Flatbeds & Step Decks",
    status: "For Sale",
    year: 2023,
    manufacturer: "Fontaine",
    model: "Step Deck",
    capacity: "48,000 lbs",
    price: 42000,
    description:
      "Versatile step deck trailer for oversized and heavy equipment transport. Ideal for hauling machinery and large cargo.",
    specs: [
      "Aluminum & Steel Construction",
      "48,000 lbs Capacity",
      "53ft Overall Length",
      "Tandem Axle",
      "Air Ride Suspension",
      "Ramps Available",
    ],
    image: "/images/Step Deck.jpg",
    featured: false,
  },
  {
    id: "dv-001",
    title: "2022 Dry Van Trailer",
    category: "Dry Vans",
    status: "For Sale",
    year: 2022,
    manufacturer: "Stoughton",
    model: "53ft Dry Van",
    capacity: "53ft / 3,800 Cu Ft",
    price: 32000,
    description:
      "Standard 53ft dry van trailer. Clean interior, swing doors, ready for freight operations.",
    specs: [
      "53ft Length",
      "3,800 Cu Ft Capacity",
      "Swing Doors",
      "Wood Floor",
      "Tandem Axle",
      "Air Ride Suspension",
    ],
    image: "/images/Van-blank.jpg",
    featured: false,
  },
  {
    id: "tt-007",
    title: "2022 Tandem Hareback Tanker",
    category: "Tanker Trailers",
    status: "For Lease",
    year: 2022,
    manufacturer: "Tremcar",
    model: "Tandem Hareback",
    capacity: "5,800 USG",
    leaseRate: 2400,
    description:
      "Tandem hareback configuration tanker for efficient single-axle tractor pairing. Versatile chemical transport solution.",
    specs: [
      "Stainless Steel Construction",
      "Tandem Hareback Config",
      "5,800 USG Capacity",
      "Air Ride Suspension",
      "Top & Bottom Loading",
      "Full Walkway",
    ],
    image: "/images/tandem hareback.jpg",
    featured: false,
  },
];
