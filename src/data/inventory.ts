export type EquipmentCategory =
  | "Tanker Trailers"
  | "Dry Bulk Trailers"
  | "Tank Containers"
  | "Chassis"
  | "Tractors";

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
];

export const inventory: EquipmentItem[] = [
  {
    id: "tt-001",
    title: "2023 Tremcar DOT-407 SS Tanker",
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
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "tt-002",
    title: "2022 Westank MC-307 Chemical Tanker",
    category: "Tanker Trailers",
    status: "For Lease",
    year: 2022,
    manufacturer: "Westank",
    model: "MC-307",
    capacity: "6,300 USG",
    leaseRate: 2800,
    description:
      "Well-maintained Westank MC-307 chemical tanker. Suitable for corrosive liquid transport. Recently recertified.",
    specs: [
      "316L Stainless Steel",
      "Dual Compartment",
      "6,300 USG Capacity",
      "Insulated & Heated",
      "Top & Bottom Loading",
      "Full Walkway",
    ],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "db-001",
    title: "2024 Heil 1,620 Cu Ft Dry Bulk Pneumatic",
    category: "Dry Bulk Trailers",
    status: "For Sale",
    year: 2024,
    manufacturer: "Heil",
    model: "1620 Pneumatic",
    capacity: "1,620 Cu Ft",
    price: 118000,
    description:
      "Brand new Heil dry bulk pneumatic trailer. Perfect for cement, fly ash, flour, and other dry bulk commodities.",
    specs: [
      "Aluminum Construction",
      "1,620 Cu Ft Capacity",
      "Tri-Axle Configuration",
      "4\" Discharge Lines",
      "Top Fill Hatches",
      "Air Ride Suspension",
    ],
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "db-002",
    title: "2021 Polar 1,040 Cu Ft Dry Bulk",
    category: "Dry Bulk Trailers",
    status: "For Sale",
    year: 2021,
    manufacturer: "Polar",
    model: "1040 Dry Bulk",
    capacity: "1,040 Cu Ft",
    price: 78000,
    description:
      "Reliable Polar dry bulk trailer with excellent service history. Suitable for sand, cement, and plastic pellet hauling.",
    specs: [
      "Aluminum Body",
      "1,040 Cu Ft Capacity",
      "Tandem Axle",
      "3\" & 4\" Discharge",
      "Aeration System",
      "Lightweight Design",
    ],
    image:
      "https://images.unsplash.com/photo-1616432043562-3671ea2e5242?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "tc-001",
    title: "2023 CIMC T75 ISO Tank Container",
    category: "Tank Containers",
    status: "For Sale",
    year: 2023,
    manufacturer: "CIMC",
    model: "T75 ISO",
    capacity: "24,000L",
    price: 62000,
    description:
      "CIMC T75 ISO tank container for cryogenic and chemical transport. UN-rated, IMO Type 5 certified.",
    specs: [
      "316L Stainless Steel",
      "24,000L Capacity",
      "ISO Standard Frame",
      "UN Portable Tank",
      "Top & Bottom Discharge",
      "Stackable Design",
    ],
    image:
      "https://images.unsplash.com/photo-1494412574643-ff11b0a5eb19?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "tc-002",
    title: "2020 Welfit Oddy 26K ISO Container",
    category: "Tank Containers",
    status: "For Lease",
    year: 2020,
    manufacturer: "Welfit Oddy",
    model: "26K Standard",
    capacity: "26,000L",
    leaseRate: 1200,
    description:
      "Versatile Welfit Oddy ISO tank container. Ideal for intermodal chemical transport. Recently inspected and certified.",
    specs: [
      "Stainless Steel Tank",
      "26,000L Capacity",
      "20ft ISO Frame",
      "Multiple Valve Options",
      "Steam Heating Coils",
      "CSC Certified",
    ],
    image:
      "https://images.unsplash.com/photo-1578575437130-527eed3abbec?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "ch-001",
    title: "2022 Cheetah 20ft ISO Chassis",
    category: "Chassis",
    status: "For Sale",
    year: 2022,
    manufacturer: "Cheetah",
    model: "20ft ISO Chassis",
    capacity: "67,200 lbs GVWR",
    price: 18500,
    description:
      "Heavy-duty Cheetah 20ft ISO chassis. Built for intermodal container transport. Low deck height for easy loading.",
    specs: [
      "Steel Construction",
      "67,200 lbs GVWR",
      "20ft Container Lock",
      "Fixed Tandem Axle",
      "Air Ride Suspension",
      "LED Lighting Package",
    ],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "ch-002",
    title: "2023 Max Atlas 40ft Tri-Axle Chassis",
    category: "Chassis",
    status: "For Lease",
    year: 2023,
    manufacturer: "Max Atlas",
    model: "40ft Tri-Axle",
    capacity: "72,000 lbs GVWR",
    leaseRate: 450,
    description:
      "Premium Max Atlas 40ft tri-axle chassis. Excellent condition, ideal for container drayage operations.",
    specs: [
      "High-Tensile Steel",
      "72,000 lbs GVWR",
      "40ft Container Lock",
      "Tri-Axle Sliding",
      "Air Ride Suspension",
      "Radial Tires Included",
    ],
    image:
      "https://images.unsplash.com/photo-1519003722824-194d4455a60c?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "tr-001",
    title: "2022 Freightliner Cascadia Day Cab",
    category: "Tractors",
    status: "For Sale",
    year: 2022,
    manufacturer: "Freightliner",
    model: "Cascadia 126 Day Cab",
    capacity: "450 HP / Detroit DD13",
    price: 95000,
    description:
      "Well-maintained Freightliner Cascadia day cab. Low mileage, ideal for regional tanker hauling. Full service records available.",
    specs: [
      "Detroit DD13 Engine",
      "450 HP",
      "Detroit DT12 Automated",
      "Tandem Drive Axles",
      "Air Ride Cab",
      "Wet Line Kit Installed",
    ],
    image:
      "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=800&h=600&fit=crop",
    featured: true,
  },
  {
    id: "tr-002",
    title: "2021 Kenworth T680 Day Cab",
    category: "Tractors",
    status: "For Lease",
    year: 2021,
    manufacturer: "Kenworth",
    model: "T680 Day Cab",
    capacity: "500 HP / PACCAR MX-13",
    leaseRate: 3200,
    description:
      "Premium Kenworth T680 day cab with PACCAR MX-13 engine. Perfect for bulk transport operations.",
    specs: [
      "PACCAR MX-13 Engine",
      "500 HP",
      "Eaton Fuller 18-Speed",
      "Tandem Drive Axles",
      "Full Gauge Package",
      "PTO Equipped",
    ],
    image:
      "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "tt-003",
    title: "2020 Tremcar DOT-412 Acid Tanker",
    category: "Tanker Trailers",
    status: "For Sale",
    year: 2020,
    manufacturer: "Tremcar",
    model: "DOT-412 Lined",
    capacity: "5,500 USG",
    price: 89000,
    description:
      "Tremcar DOT-412 acid tanker with rubber lining. Purpose-built for corrosive chemical transport. Recently re-lined and tested.",
    specs: [
      "Carbon Steel w/ Rubber Lining",
      "Single Compartment",
      "5,500 USG Capacity",
      "Emergency Vent System",
      "Bottom Outlet with Guard",
      "Full Walkway & Railings",
    ],
    image:
      "https://images.unsplash.com/photo-1586864387967-d02ef85d93e8?w=800&h=600&fit=crop",
    featured: false,
  },
  {
    id: "db-003",
    title: "2023 MAC 1,800 Cu Ft Pneumatic",
    category: "Dry Bulk Trailers",
    status: "For Lease",
    year: 2023,
    manufacturer: "MAC Trailer",
    model: "1800 Pneumatic",
    capacity: "1,800 Cu Ft",
    leaseRate: 2400,
    description:
      "Large capacity MAC pneumatic dry bulk trailer. Excellent for high-volume dry bulk operations.",
    specs: [
      "Aluminum Construction",
      "1,800 Cu Ft Capacity",
      "Tri-Axle",
      "4\" Discharge System",
      "Aeration Pads",
      "Top Fill w/ Screens",
    ],
    image:
      "https://images.unsplash.com/photo-1590496793929-36417d3117de?w=800&h=600&fit=crop",
    featured: false,
  },
];
