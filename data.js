// =========================================================
// ALPHA BEATS - Product Data Configuration
// Easy to edit: Just change image names and product details
// =========================================================

// Site Configuration
const SITE_CONFIG = {
  email: "mail.yogeshv@gmail.com",
  phone: "+91 9008587582",
  phone2: "+91 8867136365",
  whatsapp: "https://wa.me/919008587582",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
  address: "42&43 S G kaval near P&T layout ganesha temple 13 main 2 nd cross, Pipeline Rd, Srinivasa Nagar, Sunkadakatte, Bengaluru-560091, Karnataka, India"
};

// Categories Configuration
const CATEGORIES_DATA = [
  {
    id: 1,
    name: "Steam Boilers",
    slug: "steam-boilers",
    description: "Reliable electric, diesel and gas-fired boilers for garment and industrial applications.",
    image: "assets/boiler.webp"  // Main category image
  },
  {
    id: 2,
    name: "Garment Finishing Systems", 
    slug: "garment-finishing",
    description: "Steam irons, vacuum iron tables, spotting and complete finishing stations.",
    image: "assets/table.jpeg"  // Main category image
  },
  {
    id: 3,
    name: "Steam Bath & Sauna",
    slug: "steam-bath-sauna", 
    description: "Steam bath generators, sauna heaters and wellness accessories for gyms and spas.",
    image: "assets/bath.jpg"  // Main category image
  },
  {
    id: 4,
    name: "Spare Parts",
    slug: "spare-parts",
    description: "High-quality spare parts and components for all steam equipment.", 
    image: "assets/parts.webp"  // Main category image
  }
];

// Products Data - Easy to Edit!
// Just change the image names (image1.jpg, image2.jpg, image3.jpg) to your actual filenames
const PRODUCTS_DATA = [
  
  // ===== STEAM BOILERS CATEGORY =====
  {
    id: "p1",
    name: "Portable Steam Boiler", 
    categorySlug: "steam-boilers",
    images: [
      "assets/cat-1 boilers/port-main.png",  // Main image (shown in grid)
      "assets/cat-1 boilers/port-main.png",  // Detail image 1
      "assets/cat-1 boilers/port-main.png"   // Detail image 2
    ],
    short: "Compact portable steam boiler perfect for small garment units and sampling work.",
    specs: {
      "Power": "12 kW",
      "Capacity": "15 kg/hr",
      "Voltage": "230V/415V", 
      "Phase": "1 Ph / 3 Ph",
      "Body": "SS 304",
      "Safety": "Pressure relief valve"
    },
    priceRange: "₹25,000 - ₹45,000"
  },
  {
    id: "p2",
    name: "Industrial Steam Boiler 1+2=Automatic",
    categorySlug: "steam-boilers", 
    images: [
      "assets/cat-1 boilers/1+2=auto-main.png",
      "assets/cat-1 boilers/1+2=auto-main-1.png", 
      "assets/cat-1 boilers/product-2-image3.jpg"
    ],
    short: "Heavy-duty industrial steam boiler for continuous operation in garment factories.",
    specs: {
      "Power": "24 kW",
      "Capacity": "30 kg/hr",
      "Voltage": "415V",
      "Phase": "3 Ph", 
      "Body": "MS with SS internals",
      "Safety": "Dual safety systems"
    },
    priceRange: "₹65,000 - ₹85,000"
  },
  {
    id: "p3", 
    name: "Electric Steam Generator 1+3=Automatic",
    categorySlug: "steam-boilers",
    images: [
      "assets/cat-1 boilers/1+3=auto-main-1.png",
      "assets/cat-1 boilers/1+3=auto-main.png",
      "assets/cat-1 boilers/1+3=auto-main -2.png"
    ],
    short: "High-efficiency electric steam generator with digital controls.",
    specs: {
      "Power": "36 kW", 
      "Capacity": "50 kg/hr",
      "Voltage": "415V",
      "Phase": "3 Ph",
      "Control": "Digital PID",
      "Safety": "Auto shut-off"
    },
    priceRange: "₹95,000 - ₹1,20,000"
  },
  {
    id: "p4",
    name: "Electric Steam Generator 1+4=Automatic ", 
    categorySlug: "steam-boilers",
    images: [
      "assets/cat-1 boilers/1+4=auto-main.png",
      "assets/cat-1 boilers/1+3=auto-main-1.png",
      "assets/cat-1 boilers/1+4=auto-main.png"
    ],
    short: "Efficient gas-fired steam boiler with automatic ignition system.",
    specs: {
      "Fuel": "LPG/Natural Gas",
      "Capacity": "40 kg/hr", 
      "Pressure": "7-10 bar",
      "Efficiency": "85%+",
      "Ignition": "Automatic",
      "Safety": "Flame failure device"
    },
    priceRange: "₹1,10,000 - ₹1,45,000"
  },
  {
    id: "p5",
    name: "Electric Steam Generator 1+6=Automatic",
    categorySlug: "steam-boilers",
    images: [
      "assets/cat-1 boilers/1+6=auto-main.png", 
      "assets/cat-1 boilers/1+6=auto-main -1.png",
      "assets/cat-1 boilers/1+6=auto-main-2.png"
    ],
    short: "Robust diesel-fired steam boiler for areas with unreliable power supply.",
    specs: {
      "Fuel": "Diesel",
      "Capacity": "60 kg/hr",
      "Pressure": "10-12 bar",
      "Efficiency": "80%+", 
      "Fuel Tank": "200L capacity",
      "Control": "Automatic"
    },
    priceRange: "₹1,35,000 - ₹1,75,000"
  },
  {
    id: "p6",
    name: "Electric Steam Generator 1+10=Automatic",
    categorySlug: "steam-boilers", 
    images: [
      "assets/cat-1 boilers/1+10=auto-main.png",
      "assets/cat-1 boilers/1+10=auto-main-1.png",
      "assets/cat-1 boilers/1+10=auto-main-3.png"
    ],
    short: "Space-saving compact steam boiler ideal for boutique garment shops.",
    specs: {
      "Power": "9 kW",
      "Capacity": "12 kg/hr",
      "Voltage": "230V",
      "Phase": "1 Ph",
      "Dimensions": "600x400x800 mm", 
      "Weight": "45 kg"
    },
    priceRange: "₹20,000 - ₹35,000"
  },
  {
    id: "p6",
    name: "Electric Steam Generator 1+20=Automatic",
    categorySlug: "steam-boilers", 
    images: [
      "assets/cat-1 boilers/1+20=auto stell-main.png",
      "assets/cat-1 boilers/1+20=auto stell-main-1.png",
      "assets/cat-1 boilers/1+20=auto-main-3.png"
    ],
    short: "Space-saving compact steam boiler ideal for boutique garment shops.",
    specs: {
      "Power": "9 kW",
      "Capacity": "12 kg/hr",
      "Voltage": "230V",
      "Phase": "1 Ph",
      "Dimensions": "600x400x800 mm", 
      "Weight": "45 kg"
    },
    priceRange: "₹20,000 - ₹35,000"
  },
  
  // ===== GARMENT FINISHING SYSTEMS CATEGORY =====
  {
    id: "p7",
    name: "Vacuum Iron Table Model VT100",
    categorySlug: "garment-finishing",
    images: [
      "assets/cat-2 table/table-main.png",
      "assets/cat-2 table/table-main.png", 
      "assets/cat-2 table/table-main.png"
    ],
    short: "Professional vacuum iron table with heating and suction for perfect pressing.",
    specs: {
      "Table Size": "120x40 cm",
      "Power": "2.2 kW",
      "Vacuum Motor": "0.75 HP", 
      "Heating": "1.5 kW",
      "Material": "Perforated steel top",
      "Features": "Vacuum + Blow + Heat"
    },
    priceRange: "₹45,000 - ₹65,000"
  },
  {
    id: "p8",
    name: "Steam Iron with Boiler Vacuum Iron Table",
    categorySlug: "garment-finishing",
    images: [
      "assets/cat-2 table/table-2-main.png",
      "assets/cat-2 table/table-2-main.png",
      "assets/cat-2 table/table-2-main.png" 
    ],
    short: "Professional steam iron with 5L boiler for continuous steam supply.",
    specs: {
      "Boiler Capacity": "5 Liters",
      "Power": "3 kW",
      "Voltage": "230V",
      "Steam Pressure": "4-6 bar",
      "Hose Length": "3 meters",
      "Iron Weight": "1.2 kg"
    },
    priceRange: "₹25,000 - ₹40,000"
  },
  {
    id: "p9", 
    name: "Spotting Vacuum Iron Table",
    categorySlug: "garment-finishing",
    images: [
      "assets/cat-2 table/table-len-main.png",
      "assets/cat-2 table/table-len-main.png",
      "assets/cat-2 table/table-len-main.png"
    ],
    short: "Precision spotting gun for stain removal with adjustable steam and air.",
    specs: {
      "Steam Pressure": "4-8 bar",
      "Air Pressure": "2-4 bar", 
      "Nozzle": "Adjustable stainless steel",
      "Trigger": "Ergonomic design",
      "Hose": "Steam + Air combined",
      "Weight": "0.8 kg"
    },
    priceRange: "₹15,000 - ₹25,000"
  },
  {
    id: "p10",
    name: "Form Finisher Vacuum Iron Table",
    categorySlug: "garment-finishing",
    images: [
      "assets/cat-2 table/table-len1-main-1.png",
      "assets/cat-2 table/table-len1-main.png",
      "assets/cat-2 table/table-len1-main-1.png"
    ],
    short: "Automated form finisher for shirts and garments with steam and air drying.",
    specs: {
      "Form Type": "Adjustable shirt form",
      "Steam Power": "4 kW",
      "Air Power": "1 HP blower", 
      "Cycle Time": "30-45 seconds",
      "Size Range": "S to XXL",
      "Control": "Touch panel"
    },
    priceRange: "₹85,000 - ₹1,20,000"
  },
  {
    id: "p11",
    name: " Buc Vacuum Iron Table",
    categorySlug: "garment-finishing", 
    images: [
      "assets/cat-2 table/table-buc-main.png",
      "assets/cat-2 table/table-buc-main-1.png",
      "assets/cat-2 table/table-buc-main-2.png"
    ],
    short: "Heavy-duty pressing machine for bulk garment finishing operations.",
    specs: {
      "Pressing Area": "80x120 cm",
      "Pressure": "Pneumatic 4-6 bar",
      "Heating": "Electric 4 kW",
      "Steam": "Integrated system", 
      "Opening": "80 cm height",
      "Control": "Foot pedal + manual"
    },
    priceRange: "₹75,000 - ₹1,05,000"
  },

  // ===== STEAM BATH & SAUNA CATEGORY =====
  {
    id: "p13",
    name: "Steam Bath Generator Model SB60", 
    categorySlug: "steam-bath-sauna",
    images: [
      "assets/cat-3 steam bath/bath-main-1.png",
      "assets/cat-3 steam bath/bath-main-2.png",
      "assets/cat-3 steam bath/bath-main.png"
    ],
    short: "Commercial steam bath generator for spas and fitness centers.",
    specs: {
      "Power": "6 kW",
      "Voltage": "415V", 
      "Steam Output": "8 kg/hr",
      "Room Size": "Up to 15 m³",
      "Control": "Digital panel",
      "Safety": "Auto drain, overheat protection"
    },
    priceRange: "₹45,000 - ₹65,000"
  },
  {
    id: "p14",
    name: "Sauna Heater Model SH90",
    categorySlug: "steam-bath-sauna",
    images: [
      "assets/cat-3 steam bath/product-2-image1.jpg",
      "assets/cat-3 steam bath/product-2-image2.jpg", 
      "assets/cat-3 steam bath/product-2-image3.jpg"
    ],
    short: "Electric sauna heater with premium stones for authentic Finnish experience.",
    specs: {
      "Power": "9 kW",
      "Voltage": "415V",
      "Room Size": "10-15 m³",
      "Stones": "Premium Finnish stones included", 
      "Control": "External digital controller",
      "Installation": "Wall or floor mounted"
    },
    priceRange: "₹55,000 - ₹75,000"
  },
  {
    id: "p15",
    name: "Steam bath with stainless steel",
    categorySlug: "steam-bath-sauna",
    images: [
      "assets/cat-3 steam bath/bath-stell-main.png",
      "assets/cat-3 steam bath/bath-stell-main.png",
      "assets/cat-3 steam bath/bath-stell-main.png" 
    ],
    short: "Complete steam room package with generator, controls, and accessories.",
    specs: {
      "Generator": "12 kW capacity",
      "Room Size": "Up to 20 m³",
      "Package": "Generator + Control + Steam head",
      "Features": "Aromatherapy, lighting control", 
      "Installation": "Complete setup included",
      "Warranty": "2 years comprehensive"
    },
    priceRange: "₹85,000 - ₹1,25,000"
  },
  {
    id: "p16",
    name: "Portable Steam Bath Model PSB40",
    categorySlug: "steam-bath-sauna",
    images: [
      "assets/cat-3 steam bath/product-4-image1.jpg",
      "assets/cat-3 steam bath/product-4-image2.jpg",
      "assets/cat-3 steam bath/product-4-image3.jpg"
    ],
    short: "Portable steam bath unit perfect for home use and therapy centers.",
    specs: {
      "Power": "4 kW", 
      "Voltage": "230V",
      "Steam Output": "5 kg/hr",
      "Portability": "Wheeled design",
      "Setup": "Ready to use",
      "Space": "Compact footprint"
    },
    priceRange: "₹30,000 - ₹45,000"
  },
  {
    id: "p17",
    name: "Commercial Sauna System Model CSS150",
    categorySlug: "steam-bath-sauna", 
    images: [
      "assets/cat-3 steam bath/product-5-image1.jpg",
      "assets/cat-3 steam bath/product-5-image2.jpg",
      "assets/cat-3 steam bath/product-5-image3.jpg"
    ],
    short: "Heavy-duty commercial sauna system for hotels and large spas.",
    specs: {
      "Power": "15 kW",
      "Voltage": "415V",
      "Room Size": "Up to 30 m³", 
      "Capacity": "8-12 persons",
      "Control": "Professional grade",
      "Construction": "Stainless steel"
    },
    priceRange: "₹1,20,000 - ₹1,65,000"
  },
  {
    id: "p18",
    name: "Steam Accessories Kit Model SAK01",
    categorySlug: "steam-bath-sauna",
    images: [
      "assets/cat-3 steam bath/product-6-image1.jpg",
      "assets/cat-3 steam bath/product-6-image2.jpg", 
      "assets/cat-3 steam bath/product-6-image3.jpg"
    ],
    short: "Complete accessories kit for steam rooms and saunas.",
    specs: {
      "Contents": "Steam heads, sensors, lights",
      "Material": "Stainless steel fittings",
      "Aromatherapy": "Essential oil dispenser",
      "Lighting": "LED steam room lights", 
      "Sensors": "Temperature and humidity",
      "Installation": "DIY friendly"
    },
    priceRange: "₹15,000 - ₹25,000"
  },
  {
    id: "p100",
    name: "Pressure Relief Valve PRV-100",
    categorySlug: "spare-parts",
    images: [
      "assets/spare-parts/product-1-image1.jpg",
      "assets/spare-parts/product-1-image2.jpg", 
      "assets/spare-parts/product-1-image3.jpg"
    ],
    short: "High-quality pressure relief valve for steam boilers with adjustable settings.",
    specs: {
      "Model": "PRV-100",
      "Pressure Range": "7-12 bar",
      "Material": "SS 316",
      "Size": "1/2 inch BSP",
      "Type": "Spring loaded",
      "Certification": "CE marked"
    }
  },
  {
    id: "p101",
    name: "Heating Element HE-3000W",
    categorySlug: "spare-parts",
    images: [
      "assets/spare-parts/product-2-image1.jpg",
      "assets/spare-parts/product-2-image2.jpg",
      "assets/spare-parts/product-2-image3.jpg"
    ],
    short: "Replacement heating element for electric steam generators.",
    specs: {
      "Power": "3 kW",
      "Voltage": "230V",
      "Material": "Stainless steel",
      "Length": "300 mm",
      "Thread": "1.5 inch BSP",
      "Warranty": "1 year"
    }
  },
  {
    id: "p102",
    name: "Water Level Gauge WLG-300",
    categorySlug: "spare-parts",
    images: [
      "assets/spare-parts/product-3-image1.jpg",
      "assets/spare-parts/product-3-image2.jpg",
      "assets/spare-parts/product-3-image3.jpg"
    ],
    short: "Glass water level indicator for accurate boiler monitoring.",
    specs: {
      "Length": "300 mm",
      "Material": "Borosilicate glass",
      "Pressure": "Up to 12 bar",
      "Temperature": "Up to 180°C",
      "Fittings": "BSP threaded"
    }
  },
  {
    id: "p103",
    name: "Steam Trap ST-150",
    categorySlug: "spare-parts",
    images: [
      "assets/spare-parts/product-4-image1.jpg",
      "assets/spare-parts/product-4-image2.jpg",
      "assets/spare-parts/product-4-image3.jpg"
    ],
    short: "Thermostatic steam trap for efficient condensate removal.",
    specs: {
      "Type": "Thermostatic",
      "Capacity": "150 kg/hr",
      "Pressure": "Up to 16 bar",
      "Material": "Cast iron body",
      "Connections": "Screwed BSP"
    }
  },
  {
    id: "p104",
    name: "Solenoid Valve SV-230",
    categorySlug: "spare-parts",
    images: [
      "assets/spare-parts/product-5-image1.jpg",
      "assets/spare-parts/product-5-image2.jpg",
      "assets/spare-parts/product-5-image3.jpg"
    ],
    short: "Electric solenoid valve for automated water feed control.",
    specs: {
      "Voltage": "230V AC",
      "Pressure": "10 bar max",
      "Size": "3/4 inch",
      "Material": "Brass body",
      "Response": "Fast acting"
    }
  },
  {
    id: "p105",
    name: "Digital Thermostat TD-200",
    categorySlug: "spare-parts",
    images: [
      "assets/spare-parts/product-6-image1.jpg",
      "assets/spare-parts/product-6-image2.jpg",
      "assets/spare-parts/product-6-image3.jpg"
    ],
    short: "Digital temperature controller with LED display and PID control.",
    specs: {
      "Range": "0-200°C",
      "Display": "LED digital",
      "Control": "PID",
      "Accuracy": "±1°C",
      "Output": "Relay 10A"
    }
  },
  {
    id: "p106",
    name: "Pressure Gauge PG-100",
    categorySlug: "spare-parts",
    images: [
      "assets/spare-parts/product-7-image1.jpg",
      "assets/spare-parts/product-7-image2.jpg",
      "assets/spare-parts/product-7-image3.jpg"
    ],
    short: "Industrial pressure gauge for steam system monitoring.",
    specs: {
      "Dial Size": "100 mm",
      "Range": "0-16 bar",
      "Accuracy": "Class 2.5",
      "Connection": "1/4 BSP bottom",
      "Case": "Steel black"
    }
  },
  {
    id: "p107",
    name: "Gasket Seal Kit GSK-01",
    categorySlug: "spare-parts",
    images: [
      "assets/spare-parts/product-8-image1.jpg",
      "assets/spare-parts/product-8-image2.jpg",
      "assets/spare-parts/product-8-image3.jpg"
    ],
    short: "Complete gasket and seal set for boiler maintenance.",
    specs: {
      "Material": "Heat resistant rubber",
      "Temperature": "Up to 200°C",
      "Contents": "12 pieces",
      "Compatibility": "PAB boilers",
      "Storage": "Cool dry place"
    }
  }
];

// Testimonials Data
const TESTIMONIALS_DATA = [
  { 
    name: "Karthik R.", 
    company: "Bengaluru Apparel Pvt Ltd", 
    rating: 5, 
    Quotation: "Excellent build quality. Our pressing line efficiency improved significantly with ALPHA BEATS equipment." 
  },
  { 
    name: "Neha M.", 
    company: "Urban Laundry", 
    rating: 5, 
    Quotation: "Outstanding vacuum tables and prompt technical support. Highly recommended for commercial use." 
  },
  { 
    name: "Javed S.", 
    company: "FitPro Gym", 
    rating: 5, 
    Quotation: "Steam bath generator works perfectly. Members love the consistent steam quality." 
  },
  { 
    name: "Sahana K.", 
    company: "Boutique Studio", 
    rating: 5, 
    Quotation: "Portable steam generator is perfect for our sampling work. Compact yet powerful." 
  },
  { 
    name: "Rajesh P.", 
    company: "Textile Hub", 
    rating: 4, 
    Quotation: "Great products at competitive prices. Installation was smooth and professional." 
  },
  { 
    name: "Priya L.", 
    company: "Wellness Spa", 
    rating: 5, 
    Quotation: "Steam room package exceeded expectations. Clients appreciate the premium experience." 
  }
];

// Portfolio Data for Marquee Sections
const PORTFOLIO_DATA = {
  portfolio1: [
    { image: 'assets/cat-1 boilers/portfolio-1.jpg', caption: 'Industrial steam boiler installation at textile manufacturing unit' },
    { image: 'assets/cat-1 boilers/portfolio-2.jpg', caption: 'High-pressure steam system for large garment factory' },
    { image: 'assets/cat-1 boilers/portfolio-3.jpg', caption: 'Compact electric boiler setup for boutique garment shop' },
    { image: 'assets/cat-1 boilers/portfolio-4.jpg', caption: 'Gas-fired boiler with automatic controls and safety systems' },
    { image: 'assets/cat-1 boilers/portfolio-5.jpg', caption: 'Diesel-powered steam boiler for remote location facility' },
    { image: 'assets/cat-1 boilers/portfolio-6.jpg', caption: 'Custom steam boiler installation for specialty applications' },
    { image: 'assets/cat-1 boilers/portfolio-7.jpg', caption: 'Custom steam boiler installation for specialty applications' },
    { image: 'assets/cat-1 boilers/portfolio-8.jpg', caption: 'Custom steam boiler installation for specialty applications' }
  ],
  portfolio2: [
    { image: 'assets/cat-2 table/portfolio-1.jpg', caption: 'Professional vacuum ironing table setup in garment unit' },
    { image: 'assets/cat-2 table/portfolio-2.jpg', caption: 'Steam iron with boiler system for continuous operation' },
    { image: 'assets/cat-2 table/portfolio-3.jpg', caption: 'Heated vacuum table installation for premium finishing' },
    { image: 'assets/cat-2 table/portfolio-4.jpg', caption: 'Form finisher for automated shirt pressing and finishing' },
    { image: 'assets/cat-2 table/portfolio-5.jpg', caption: 'Heavy-duty pressing machine for bulk garment processing' },
    { image: 'assets/cat-2 table/portfolio-6.jpg', caption: 'Spotting gun setup for precision stain removal work' },
    { image: 'assets/cat-2 table/portfolio-7.jpg', caption: 'Spotting gun setup for precision stain removal work' },
    { image: 'assets/cat-2 table/portfolio-8.jpg', caption: 'Spotting gun setup for precision stain removal work' }
  ],
  portfolio3: [
    { image: 'assets/cat-3 steam bath/portfolio-1.jpg', caption: 'Luxury steam bath installation at premium spa resort' },
    { image: 'assets/cat-3 steam bath/portfolio-2.jpg', caption: 'Commercial steam generator setup for fitness center' },
    { image: 'assets/cat-3 steam bath/portfolio-3.jpg', caption: 'Sauna heater with premium stone arrangement and lighting' },
    { image: 'assets/cat-3 steam bath/portfolio-4.jpg', caption: 'Complete steam room package with control panel and accessories' },
    { image: 'assets/cat-3 steam bath/portfolio-5.jpg', caption: 'Portable steam bath unit for therapy and wellness center' },
    { image: 'assets/cat-3 steam bath/portfolio-6.jpg', caption: 'Commercial sauna system installation for hotel spa facility' },
    { image: 'assets/cat-3 steam bath/portfolio-7.jpg', caption: 'Commercial sauna system installation for hotel spa facility' },
    { image: 'assets/cat-3 steam bath/portfolio-8.jpg', caption: 'Commercial sauna system installation for hotel spa facility' }
  ]
};
