/* =========================================================
   ALPHA BEATS — Single-page catalog with product details
   Uses hash routing: #home | #category/<slug> | #product/<id>
   Author: You + Assistant
========================================================= */

// ---------- Site config (edit these) ----------
const SITE = {
  email: "mail.yogeshv@gmail.com", // change to real email
  phone: "+91 9008587582",
  phone2: "+91 8867136365",          // change to real number
  whatsapp: "https://wa.me/919008587582",
  socials: {
    instagram: "#",
    facebook: "#",
    linkedin: "#",
  },
  address: "42&43 S G kaval near P&T layout ganesha temple 13 main 2 nd cross, Pipeline Rd, Srinivasa Nagar, Sunkadakatte, Bengaluru-560091, Karnataka, India"
};

// ---------- Helpers ----------
const $ = sel => document.querySelector(sel);
const $$ = sel => document.querySelectorAll(sel);
const byId = id => document.getElementById(id);
const el = (tag, cls) => {
  const n = document.createElement(tag);
  if (cls) n.className = cls;
  return n;
};

// Put your images in an 'images' folder next to your HTML file
// Example: images/boiler1.jpg, images/boiler1-detail.jpg, etc.
 
// ---------- Data ----------
const categories = [
  {
    id: 1,
    name: "Steam Boilers",
    slug: "steam-boilers",
    description: "Reliable electric, diesel and gas-fired boilers for garment and industrial applications.",
    image: "assets/boiler.webp"  // Add your category image here
  },
  {
    id: 2,
    name: "Garment Finishing Systems",
    slug: "garment-finishing",
    description: "Steam irons, vacuum iron tables, spotting and complete finishing stations.",
    image: "assets/table.jpeg"  // Add your category image here
  },
  {
    id: 3,
    name: "Steam Bath & Sauna",
    slug: "steam-bath-sauna",
    description: "Steam bath generators, sauna heaters and wellness accessories for gyms and spas.",
    image: "assets/bath.jpg"  // Add your category image here
  },
  {
    id: 4,
    name: "Spare Parts",
    slug: "spare-parts",
    description: "High-quality spare parts and components for all steam equipment.",
    image: "assets/parts.webp"  // Add your spare parts category image
  }
];


// Product generator helpers
let pid = 1;
const P = (name, categorySlug, q, short, specs) => ({
  id: `p${pid++}`,
  name,
  categorySlug,
  images: [
    img(q, 1400),
    img(q + " detail", 1200),
    img(q + " closeup", 1200)
  ],
  short,
  specs,
  related: [] // filled later
});

// 8 products per category
// ---------- Products Data ----------
const products = [
  // === STEAM BOILERS CATEGORY ===
  {
    id: "p1",
    name: "Your Product Name Here",
    categorySlug: "steam-boilers",
    images: [
      "images/your-product-1.jpg",      // Main product image
      "images/your-product-1-detail.jpg", // Detail view image  
      "images/your-product-1-close.jpg"   // Close-up image
    ],
    short: "Your product short description here.",
    specs: {
      "Power": "Your power spec",
      "Capacity": "Your capacity spec", 
      "Voltage": "Your voltage spec",
      "Phase": "Your phase spec",
      "Body": "Your body material",
      "Safety": "Your safety features"
    },
    related: [] // Will be filled automatically
  },
  {
    id: "p2", 
    name: "Your Second Product Name",
    categorySlug: "steam-boilers",
    images: [
      "images/your-product-2.jpg",
      "images/your-product-2-detail.jpg", 
      "images/your-product-2-close.jpg"
    ],
    short: "Your second product description.",
    specs: {
      "Power": "18 kW",
      "Capacity": "24 kg/hr", 
      "Voltage": "415V",
      "Phase": "3 Ph",
      "Control": "Digital",
      "Safety": "Dual thermostat"
    },
    related: []
  },
  {
    id: "p1",
    name: "Your Product Name Here",
    categorySlug: "steam-boilers",
    images: [
      "images/your-product-1.jpg",      // Main product image
      "images/your-product-1-detail.jpg", // Detail view image  
      "images/your-product-1-close.jpg"   // Close-up image
    ],
    short: "Your product short description here.",
    specs: {
      "Power": "Your power spec",
      "Capacity": "Your capacity spec", 
      "Voltage": "Your voltage spec",
      "Phase": "Your phase spec",
      "Body": "Your body material",
      "Safety": "Your safety features"
    },
    related: [] // Will be filled automatically
  },
  {
    id: "p2", 
    name: "Your Second Product Name",
    categorySlug: "steam-boilers",
    images: [
      "images/your-product-2.jpg",
      "images/your-product-2-detail.jpg", 
      "images/your-product-2-close.jpg"
    ],
    short: "Your second product description.",
    specs: {
      "Power": "18 kW",
      "Capacity": "24 kg/hr", 
      "Voltage": "415V",
      "Phase": "3 Ph",
      "Control": "Digital",
      "Safety": "Dual thermostat"
    },
    related: []
  },
  {
    id: "p1",
    name: "Your Product Name Here",
    categorySlug: "steam-boilers",
    images: [
      "images/your-product-1.jpg",      // Main product image
      "images/your-product-1-detail.jpg", // Detail view image  
      "images/your-product-1-close.jpg"   // Close-up image
    ],
    short: "Your product short description here.",
    specs: {
      "Power": "Your power spec",
      "Capacity": "Your capacity spec", 
      "Voltage": "Your voltage spec",
      "Phase": "Your phase spec",
      "Body": "Your body material",
      "Safety": "Your safety features"
    },
    related: [] // Will be filled automatically
  },
  {
    id: "p2", 
    name: "Your Second Product Name",
    categorySlug: "steam-boilers",
    images: [
      "images/your-product-2.jpg",
      "images/your-product-2-detail.jpg", 
      "images/your-product-2-close.jpg"
    ],
    short: "Your second product description.",
    specs: {
      "Power": "18 kW",
      "Capacity": "24 kg/hr", 
      "Voltage": "415V",
      "Phase": "3 Ph",
      "Control": "Digital",
      "Safety": "Dual thermostat"
    },
    related: []
  },
  // Add more steam boiler products here...

  // === GARMENT FINISHING CATEGORY ===
  {
    id: "p9", // Continue numbering from where steam boilers end
    name: "Your Garment Product Name",
    categorySlug: "garment-finishing", 
    images: [
      "images/garment-product-1.jpg",
      "images/garment-product-1-detail.jpg",
      "images/garment-product-1-close.jpg"
    ],
    short: "Your garment finishing product description.",
    specs: {
      "Boiler": "3 L",
      "Power": "2.2 kW", 
      "Voltage": "230V",
      "Hose": "Silicone",
      "Safety": "Low-water alarm"
    },
    related: []
  },
  {
    id: "p9", // Continue numbering from where steam boilers end
    name: "Your Garment Product Name",
    categorySlug: "garment-finishing", 
    images: [
      "images/garment-product-1.jpg",
      "images/garment-product-1-detail.jpg",
      "images/garment-product-1-close.jpg"
    ],
    short: "Your garment finishing product description.",
    specs: {
      "Boiler": "3 L",
      "Power": "2.2 kW", 
      "Voltage": "230V",
      "Hose": "Silicone",
      "Safety": "Low-water alarm"
    },
    related: []
  },
  {
    id: "p9", // Continue numbering from where steam boilers end
    name: "Your Garment Product Name",
    categorySlug: "garment-finishing", 
    images: [
      "images/garment-product-1.jpg",
      "images/garment-product-1-detail.jpg",
      "images/garment-product-1-close.jpg"
    ],
    short: "Your garment finishing product description.",
    specs: {
      "Boiler": "3 L",
      "Power": "2.2 kW", 
      "Voltage": "230V",
      "Hose": "Silicone",
      "Safety": "Low-water alarm"
    },
    related: []
  },
  
  // Add more garment finishing products...

  // === STEAM BATH & SAUNA CATEGORY ===
  {
    id: "p17", // Continue numbering
    name: "Your Steam Bath Product", 
    categorySlug: "steam-bath-sauna",
    images: [
      "images/steam-bath-1.jpg",
      "images/steam-bath-1-detail.jpg", 
      "images/steam-bath-1-close.jpg"
    ],
    short: "Your steam bath product description.",
    specs: {
      "Power": "6 kW",
      "Voltage": "230/415V",
      "Tank": "SS 304", 
      "Control": "Digital panel",
      "Protection": "Overheat, dry"
    },
    related: []
  },
  {
    id: "p17", // Continue numbering
    name: "Your Steam Bath Product", 
    categorySlug: "steam-bath-sauna",
    images: [
      "images/steam-bath-1.jpg",
      "images/steam-bath-1-detail.jpg", 
      "images/steam-bath-1-close.jpg"
    ],
    short: "Your steam bath product description.",
    specs: {
      "Power": "6 kW",
      "Voltage": "230/415V",
      "Tank": "SS 304", 
      "Control": "Digital panel",
      "Protection": "Overheat, dry"
    },
    related: []
  },
  {
    id: "p17", // Continue numbering
    name: "Your Steam Bath Product", 
    categorySlug: "steam-bath-sauna",
    images: [
      "images/steam-bath-1.jpg",
      "images/steam-bath-1-detail.jpg", 
      "images/steam-bath-1-close.jpg"
    ],
    short: "Your steam bath product description.",
    specs: {
      "Power": "6 kW",
      "Voltage": "230/415V",
      "Tank": "SS 304", 
      "Control": "Digital panel",
      "Protection": "Overheat, dry"
    },
    related: []
  },
  {
    id: "p17", // Continue numbering
    name: "Your Steam Bath Product", 
    categorySlug: "steam-bath-sauna",
    images: [
      "images/steam-bath-1.jpg",
      "images/steam-bath-1-detail.jpg", 
      "images/steam-bath-1-close.jpg"
    ],
    short: "Your steam bath product description.",
    specs: {
      "Power": "6 kW",
      "Voltage": "230/415V",
      "Tank": "SS 304", 
      "Control": "Digital panel",
      "Protection": "Overheat, dry"
    },
    related: []
  },
  // Add more steam bath products...

    // === SPARE PARTS CATEGORY ===
  {
    id: "p100",
    name: "Pressure Relief Valve PRV-100",
    categorySlug: "spare-parts",
    images: [
      "images/prv-100-main.jpg",
      "images/prv-100-detail.jpg", 
      "images/prv-100-close.jpg"
    ],
    short: "High-quality pressure relief valve for steam boilers with adjustable settings.",
    specs: {
      "Model": "PRV-100",
      "Pressure Range": "7-12 bar",
      "Material": "SS 316",
      "Size": "1/2 inch BSP",
      "Type": "Spring loaded",
      "Certification": "CE marked"
    },
    related: []
  },
  {
    id: "p101",
    name: "Heating Element HE-3000W",
    categorySlug: "spare-parts",
    images: [
      "images/heating-element-main.jpg",
      "images/heating-element-detail.jpg",
      "images/heating-element-close.jpg"
    ],
    short: "Replacement heating element for electric steam generators.",
    specs: {
      "Power": "3 kW",
      "Voltage": "230V",
      "Material": "Stainless steel",
      "Length": "300 mm",
      "Thread": "1.5 inch BSP",
      "Warranty": "1 year"
    },
    related: []
  },
  {
    id: "p102",
    name: "Water Level Gauge WLG-300",
    categorySlug: "spare-parts",
    images: [
      "images/water-gauge-main.jpg",
      "images/water-gauge-detail.jpg",
      "images/water-gauge-close.jpg"
    ],
    short: "Glass water level indicator for accurate boiler monitoring.",
    specs: {
      "Length": "300 mm",
      "Material": "Borosilicate glass",
      "Pressure": "Up to 12 bar",
      "Temperature": "Up to 180°C",
      "Fittings": "BSP threaded"
    },
    related: []
  },
  {
    id: "p103",
    name: "Steam Trap ST-150",
    categorySlug: "spare-parts",
    images: [
      "images/steam-trap-main.jpg",
      "images/steam-trap-detail.jpg",
      "images/steam-trap-close.jpg"
    ],
    short: "Thermostatic steam trap for efficient condensate removal.",
    specs: {
      "Type": "Thermostatic",
      "Capacity": "150 kg/hr",
      "Pressure": "Up to 16 bar",
      "Material": "Cast iron body",
      "Connections": "Screwed BSP"
    },
    related: []
  },
  {
    id: "p104",
    name: "Solenoid Valve SV-230",
    categorySlug: "spare-parts",
    images: [
      "images/solenoid-valve-main.jpg",
      "images/solenoid-valve-detail.jpg",
      "images/solenoid-valve-close.jpg"
    ],
    short: "Electric solenoid valve for automated water feed control.",
    specs: {
      "Voltage": "230V AC",
      "Pressure": "10 bar max",
      "Size": "3/4 inch",
      "Material": "Brass body",
      "Response": "Fast acting"
    },
    related: []
  },
  {
    id: "p105",
    name: "Digital Thermostat TD-200",
    categorySlug: "spare-parts",
    images: [
      "images/thermostat-main.jpg",
      "images/thermostat-detail.jpg",
      "images/thermostat-close.jpg"
    ],
    short: "Digital temperature controller with LED display and PID control.",
    specs: {
      "Range": "0-200°C",
      "Display": "LED digital",
      "Control": "PID",
      "Accuracy": "±1°C",
      "Output": "Relay 10A"
    },
    related: []
  },
  {
    id: "p106",
    name: "Pressure Gauge PG-100",
    categorySlug: "spare-parts",
    images: [
      "images/pressure-gauge-main.jpg",
      "images/pressure-gauge-detail.jpg",
      "images/pressure-gauge-close.jpg"
    ],
    short: "Industrial pressure gauge for steam system monitoring.",
    specs: {
      "Dial Size": "100 mm",
      "Range": "0-16 bar",
      "Accuracy": "Class 2.5",
      "Connection": "1/4 BSP bottom",
      "Case": "Steel black"
    },
    related: []
  },
  {
    id: "p107",
    name: "Gasket Seal Kit GSK-01",
    categorySlug: "spare-parts",
    images: [
      "images/gasket-kit-main.jpg",
      "images/gasket-kit-detail.jpg",
      "images/gasket-kit-close.jpg"
    ],
    short: "Complete gasket and seal set for boiler maintenance.",
    specs: {
      "Material": "Heat resistant rubber",
      "Temperature": "Up to 200°C",
      "Contents": "12 pieces",
      "Compatibility": "PAB boilers",
      "Storage": "Cool dry place"
    },
    related: []
  }
  // Don't forget to add a comma after your last existing product before adding these
];


// Link related products (4 from same category for each)
const mapByCat = {};
for (const c of categories) mapByCat[c.slug] = [];
for (const p of products) mapByCat[p.categorySlug].push(p);
for (const p of products) {
  const pool = mapByCat[p.categorySlug].filter(x => x.id !== p.id);
  p.related = pool.slice(0, 4).map(x => x.id);
}

// Testimonials (placeholder data — edit freely)
const testimonials = [
  { name: "Karthik R.", company: "Bengaluru Apparel Pvt Ltd", rating: 5, Quotation: "Solid build quality. Our pressing line uptime improved a lot." },
  { name: "Neha M.", company: "Urban Laundry", rating: 5, Quotation: "Great vacuum tables and quick support from the team." },
  { name: "Javed S.", company: "FitPro Gym", rating: 4, Quotation: "Steam bath generator is reliable and easy to maintain." },
  { name: "Sahana K.", company: "Boutique Studio", rating: 5, Quotation: "Portable steam generator is perfect for sampling." }
];

// Build indices
const productById = {};
for (const p of products) productById[p.id] = p;

// ---------- DOM population ----------
function initContacts() {
  const e = SITE.email, ph = SITE.phone, ph2 = SITE.phone2;
  
  // Email links
  const emailLinks = [byId("contactEmail"), byId("footerEmail")].filter(Boolean);
  emailLinks.forEach(a => { a.textContent = e; a.href = `mailto:${e}`; });
  
  // First phone number - only footerPhone
  const phoneLinks = [byId("footerPhone")].filter(Boolean);
  phoneLinks.forEach(a => { a.textContent = ph; a.href = `tel:${ph.replace(/\s/g, "")}`; });
  
  // Second phone number - footerPhone2
  const phone2Links = [byId("footerPhone2")].filter(Boolean);
  phone2Links.forEach(a => { a.textContent = ph2; a.href = `tel:${ph2.replace(/\s/g, "")}`; });

  // Social links
  const ws = SITE.whatsapp;
  const soc = {
    socWhatsApp: ws,
    socInstagram: SITE.socials.instagram,
    socFacebook: SITE.socials.facebook,
    socLinkedIn: SITE.socials.linkedin,
    socYouTube: SITE.socials.youtube
  };
  Object.entries(soc).forEach(([id, href]) => {
    const a = byId(id); if (a && href) a.href = href;
  });

  // Year
  const year = new Date().getFullYear();
  const y = byId("year"); if (y) y.textContent = year;
}


function renderTeasers() {
  const row = byId("teaserRow");
  row.innerHTML = "";
  categories.forEach(c => {
    const card = el("button", "teaser-card");
    card.innerHTML = `
      <img src="${c.image}" alt="${c.name}" loading="lazy">
      <div>
        <h3>${c.name}</h3>
        <p>${c.description}</p>
      </div>`;
    card.addEventListener("click", () => {
      location.hash = `#category/${c.slug}`;
      scrollToCategory(c.slug);
    });
    row.appendChild(card);
  });
}

function productCard(p) {
  const card = el("div", "product-card reveal");
  card.innerHTML = `
    <div class="cover"><img loading="lazy" src="${p.images[0]}" alt="${p.name}"></div>
    <div class="pad">
      <h4>${p.name}</h4>
      <p>${p.short}</p>
      <div class="actions">
        <a class="btn primary sm" href="#product/${p.id}">View Details</a>
        <button class="btn ghost sm" data-Quotation="${p.name}">Get Quotation</button>
      </div>
    </div>`;
  // Quotation button
  card.querySelector('[data-Quotation]').addEventListener('click', (e) => {
  e.preventDefault();
  openQuotation(p.name, p.short);
  });
  return card;
}

function renderCategories() {
  const wrap = byId("categoryBlocks");
  wrap.innerHTML = "";
  
  categories.forEach((c, index) => {
    // Create category section
    const section = el("section", "category-block container");
    section.id = `cat-${c.slug}`;
    section.innerHTML = `
      <div class="category-header">
        <h2>${c.name}</h2>
      </div>
      <div class="product-grid" id="grid-${c.slug}"></div>
    `;
    wrap.appendChild(section);
    
    // Add products to category
    const list = products.filter(p => p.categorySlug === c.slug).slice(0, 8);
    const grid = byId(`grid-${c.slug}`);
    list.forEach(p => grid.appendChild(productCard(p)));
    
    // Create and insert portfolio section after each category (except spare parts)
    if (index < 3) { // Only for first 3 categories
      const portfolioSection = el("section", "section light portfolio-section");
      portfolioSection.id = `portfolio${index + 1}`;
      
      const portfolioTitles = [
        "Steam Boilers Portfolio", 
        "Garment Finishing Portfolio", 
        "Steam Bath & Sauna Portfolio"
      ];
      
      portfolioSection.innerHTML = `
        <div class="container">
          <h2 class="section-title reveal">${portfolioTitles[index]}</h2>
          <div class="portfolio-marquee" data-direction="left">
            <div class="portfolio-track" id="portfolioTrack${index + 1}">
              <!-- Portfolio items will be injected here -->
            </div>
          </div>
        </div>
      `;
      
      wrap.appendChild(portfolioSection);
      
      // Initialize the portfolio
      renderPortfolio(`portfolio${index + 1}`, `portfolioTrack${index + 1}`);
    }
  });

  // Footer quick links (categories)
  const f = byId("footerProductLinks");
  if (f) {
    f.innerHTML = "";
    categories.forEach(c => {
      const li = el("li");
      const a = el("a");
      a.href = `#category/${c.slug}`;
      a.textContent = c.name;
      a.addEventListener("click", () => scrollToCategory(c.slug));
      li.appendChild(a);
      f.appendChild(li);
    });
  }

  // Observe reveals
  observeReveals();
}


function renderTestimonials() {
  const grid = byId("testimonialsGrid");
  grid.innerHTML = "";
  
  // Create the track container
  const track = el("div", "testimonials-track");
  
  // Create enough copies for seamless infinite loop
  const extendedTestimonials = [];
  for (let i = 0; i < 6; i++) {
    extendedTestimonials.push(...testimonials);
  }
  
  extendedTestimonials.forEach(t => {
    const card = el("div", "testi");
    const stars = "★".repeat(t.rating) + "☆".repeat(5 - t.rating);
    card.innerHTML = `
      <div class="stars" aria-label="${t.rating} stars">${stars}</div>
      <p>${t.Quotation}</p>
      <div class="meta">
        <div>${t.name}</div>
        <div class="muted">${t.company}</div>
      </div>
    `;
    
    // Add individual hover pause functionality
    card.addEventListener('mouseenter', () => {
      track.style.animationPlayState = 'paused';
    });
    
    card.addEventListener('mouseleave', () => {
      track.style.animationPlayState = 'running';
    });
    
    track.appendChild(card);
  });
  
  grid.appendChild(track);
  
  // Force immediate animation start
  setTimeout(() => {
    const trackElement = grid.querySelector('.testimonials-track');
    if (trackElement) {
      trackElement.style.animationPlayState = 'running';
    }
  }, 0);
}


// ---------- Product detail ---------- 
function renderProductView(id) {
  const p = productById[id];
  if (!p) return;

  const modal = byId("productModal");
  const cat = categories.find(c => c.slug === p.categorySlug);
  
  // Get first 4 specs for preview
  const specsPreview = Object.entries(p.specs).slice(0, 4)
    .map(([k,v]) => `
      <div class="spec-item">
        <strong>${k}</strong>
        ${v}
      </div>
    `).join("");

  // Full specifications table
  const specsRows = Object.entries(p.specs)
    .map(([k,v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("");

  // Related products
  const related = p.related.map(id => productById[id]).filter(Boolean);
  const recHTML = related.map(r => `
    <div class="related-product-card" onclick="renderProductView('${r.id}')">
      <div class="related-product-image">
        <img loading="lazy" src="${r.images[0]}" alt="${r.name}">
      </div>
      <div class="related-product-info">
        <h4>${r.name}</h4>
        <p>${r.short}</p>
        <div class="related-product-actions">
          <span class="btn primary sm">View Details</span>
        </div>
      </div>
    </div>
  `).join("");

  // Action buttons component (will be used twice)
  const actionButtonsHTML = `
    <div class="product-actions-section">
      <div class="price-range-display">
        <div class="price-label">Price Range</div>
        <div class="price-amount">₹20,000 - ₹1,80,000</div>
        <div class="price-note">*Prices may vary based on specifications</div>
      </div>
      <div class="action-buttons-row">
        <button class="action-btn btn-primary-action" data-product-quotation="${p.name}">
          <span>💬</span>
          Request Quotation
        </button>
        <button class="action-btn btn-outline-action" onclick="closeProductModal()">
          <span>←</span>
          Back to ${cat?.name || 'Products'}
        </button>
      </div>
    </div>
  `;

  modal.innerHTML = `
    <div class="product-modal-content">
      <div class="product-modal-header">
        <div class="product-modal-title">${p.name}</div>
        <div class="product-modal-subtitle">${cat?.name || 'Industrial Steam Solutions'}</div>
        <button class="product-modal-close" id="closeProductModal">&times;</button>
      </div>
      <div class="product-modal-body">
        <div class="product-content-grid">
          <div class="product-image-section">
            <img class="main-product-image" id="mainProductImage" src="${p.images[0]}" alt="${p.name}">
            <div class="product-thumbnails" id="productThumbnails">
              ${p.images.map((img, i) => `
                <img src="${img}" alt="${p.name} ${i+1}" class="product-thumbnail ${i===0?'active':''}" data-index="${i}">
              `).join('')}
            </div>
          </div>
          
          <div class="product-details-section">
            <div class="product-badge">⚡ Industrial Grade</div>
            <h1 class="product-title">${p.name}</h1>
            <p class="product-description">${p.short}</p>
            
            <div class="product-specs-preview">
              <h4>🔧 Key Specifications</h4>
              <div class="specs-list">
                ${specsPreview}
              </div>
            </div>
            
            ${actionButtonsHTML}
          </div>
        </div>
        
        <!-- All Content Displayed Sequentially -->
        <div class="sequential-content">
          
          <!-- Overview Section -->
          <div class="content-section">
            <div class="content-card">
              <h3>🏭 Product Overview</h3>
              <div class="overview-content">
                <p><strong>Product Description:</strong> ${p.short} This industrial-grade solution is designed for continuous operation with premium materials and safety features.</p>
                
                <div class="overview-highlights">
                  <div class="highlight-item">
                    <h4>🎯 Applications</h4>
                    <p>Suitable for industrial laundries, garment manufacturing, hotels, and commercial applications requiring reliable steam generation.</p>
                  </div>
                  
                  <div class="highlight-item">
                    <h4>🛡️ Safety Features</h4>
                    <p>Equipped with multiple safety systems including pressure relief valves, temperature controls, and automatic shut-off mechanisms.</p>
                  </div>
                  
                  <div class="highlight-item">
                    <h4>⚡ Performance</h4>
                    <p>Engineered for maximum efficiency and reliability in demanding industrial environments with minimal maintenance requirements.</p>
                  </div>
                  
                  <div class="highlight-item">
                    <h4>🔧 Installation & Support</h4>
                    <p>Professional installation service available with comprehensive technical support and warranty coverage across India.</p>
                  </div>
                </div>
                
                <div class="features-grid">
                  <div class="feature-box">
                    <span class="feature-icon">🏭</span>
                    <h4>Industrial Grade</h4>
                    <p>Built to withstand continuous operation in demanding environments</p>
                  </div>
                  <div class="feature-box">
                    <span class="feature-icon">🛠️</span>
                    <h4>Easy Maintenance</h4>
                    <p>Designed for minimal maintenance with accessible components</p>
                  </div>
                  <div class="feature-box">
                    <span class="feature-icon">⚡</span>
                    <h4>Energy Efficient</h4>
                    <p>Optimized for maximum efficiency and reduced operating costs</p>
                  </div>
                  <div class="feature-box">
                    <span class="feature-icon">🔒</span>
                    <h4>Safety First</h4>
                    <p>Multiple safety features ensure secure operation</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Full Specifications Section -->
          <div class="content-section">
            <div class="content-card">
              <h3>⚙️ Complete Technical Specifications</h3>
              <div class="specs-table-container">
                <table class="detailed-specs-table">
                  <thead>
                    <tr>
                      <th>Specification</th>
                      <th>Details</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${specsRows}
                  </tbody>
                </table>
              </div>
              
              <div class="additional-info">
                <div class="info-section">
                  <h4>📦 Package Includes</h4>
                  <ul>
                    <li>Main unit with all standard components</li>
                    <li>Installation manual and technical documentation</li>
                    <li>Standard warranty certificate</li>
                    <li>Basic maintenance kit</li>
                  </ul>
                </div>
                
                <div class="info-section">
                  <h4>🚚 Shipping & Delivery</h4>
                  <ul>
                    <li>Free shipping across major cities in India</li>
                    <li>Professional installation service available</li>
                    <li>Delivery within 7-15 working days</li>
                    <li>Insurance coverage included</li>
                  </ul>
                </div>
                
                <div class="info-section">
                  <h4>🔧 Service & Support</h4>
                  <ul>
                    <li>24/7 technical support helpline</li>
                    <li>Regular maintenance service available</li>
                    <li>Genuine spare parts guarantee</li>
                    <li>Extended warranty options</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <!-- Second Action Buttons Section -->
          <div class="content-section">
            ${actionButtonsHTML}
          </div>
          
          <!-- Related Products Section -->
          <div class="content-section">
            <div class="content-card">
              <h3>🔗 Related Products</h3>
              <p>Customers who viewed this product also considered these similar items:</p>
              <div class="related-products-grid">
                ${recHTML}
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  `;

  // Show modal
  modal.classList.add("show");
  document.body.style.overflow = "hidden";

  // Image gallery functionality
  const mainImage = byId("mainProductImage");
  const thumbnails = $$(".product-thumbnail");
  
  thumbnails.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const idx = parseInt(thumb.dataset.index);
      mainImage.src = p.images[idx];
      thumbnails.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  // Close modal functionality
  const closeBtn = byId("closeProductModal");
  closeBtn.addEventListener("click", closeProductModal);
  
  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeProductModal();
    }
  });

  // Quotation buttons with product details (both instances)
  const quotationBtns = modal.querySelectorAll('[data-product-quotation]');
  quotationBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      // Close product modal first
      closeProductModal();
      // Open quotation with product details
      setTimeout(() => {
        openQuotation(p.name, p.short);
      }, 300);
    });
  });
}


function closeProductModal() {
  const modal = byId("productModal");
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
  
  // Update URL to remove product hash
  const currentHash = location.hash;
  if (currentHash.includes('#product/')) {
    history.pushState(null, null, '#products');
  }
}


function hideProductView() {
  // This is now handled by the modal system
  closeProductModal();
}


// ---------- Routing ----------
function scrollToCategory(slug) {
  const el = byId(`cat-${slug}`);
  if (el) {
    setTimeout(() => {
      el.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  }
}

function handleRoute() {
  const hash = location.hash || "#home";
  const [, route, param] = hash.match(/#(\w+)(?:\/(.+))?/) || [];

  if (route === "product" && param) {
    renderProductView(param);
  } else if (route === "category" && param) {
    scrollToCategory(param);
  } else {
    // Close any open modals when navigating away
    closeProductModal();
    // Default home or other sections - smooth scroll
    const target = $(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}


// ---------- Quotation modal ----------
function openQuotation(productName = "", productDescription = "") {
  const modal = byId("quotationModal");
  const productInfo = byId("productInfo");
  const productNameEl = byId("productName");
  const productDescEl = byId("productDescription");
  const messageField = byId("customerMessage");
  
  // Show modal
  modal.classList.add("show");
  document.body.style.overflow = "hidden";
  
  // If product specified, show product info and pre-fill message
  if (productName) {
    productInfo.style.display = "block";
    productNameEl.textContent = productName;
    productDescEl.textContent = productDescription || "Premium quality industrial steam solution";
    
    // Pre-fill the message with product details
    messageField.value = `I'm interested in: ${productName}\n\nPlease provide quotation with:\n- Technical specifications\n- Pricing details\n- Delivery time\n- Warranty information`;
  } else {
    productInfo.style.display = "none";
    messageField.value = "";
  }
}

function closeQuotation() {
  const modal = byId("quotationModal");
  modal.classList.remove("show");
  document.body.style.overflow = "auto";
  
  // Reset form
  const form = byId("quotationForm");
  form.reset();
}


// ---------- Form handler ----------
function initForm() {
  const form = byId("quotationForm");
  const modal = byId("quotationModal");
  const closeBtn = byId("closeModal");
  
  // Form submission
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = Object.fromEntries(data);
    
    // Validate required fields
    if (!obj.name || !obj.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    
    // Get product info if available
    const productInfo = byId("productInfo");
    const isProductQuotation = productInfo.style.display !== "none";
    let productName = "";
    let productDesc = "";
    
    if (isProductQuotation) {
      productName = byId("productName").textContent;
      productDesc = byId("productDescription").textContent;
    }
    
    // Create WhatsApp message
    let message = `🔥 *ALPHA BEATS - Quotation Request*\n\n`;
    message += `👤 *Name:* ${obj.name}\n`;
    message += `📱 *Phone:* ${obj.phone}\n\n`;
    
    if (isProductQuotation) {
      message += `🔧 *Product Interested:* ${productName}\n`;
      message += `📝 *Product Info:* ${productDesc}\n\n`;
    }
    
    message += `💬 *Requirements:*\n${obj.message || 'Standard quotation requested'}\n\n`;
    message += `⭐ *Request Details:*\n`;
    message += `• Technical specifications\n`;
    message += `• Best pricing\n`;
    message += `• Delivery timeline\n`;
    message += `• Warranty information\n\n`;
    message += `---\n*Sent from ALPHA BEATS website*`;

    // Your WhatsApp number
    const whatsappNumber = "919008587582";
    
    // Create WhatsApp URL with pre-filled message
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappURL, '_blank');
    
    // Close modal and reset form
    setTimeout(() => {
      closeQuotation();
    }, 500);
    
    // Show success message
    alert("Opening WhatsApp... Your message is pre-filled. Just click Send! 🚀");
  });
  
  // Close modal handlers
  closeBtn.addEventListener("click", closeQuotation);
  
  // Close on outside click
  modal.addEventListener("click", (e) => {
    if (e.target === modal) {
      closeQuotation();
    }
  });
  
  // Close on Escape key
  // Add this to the initForm function after the existing Escape key handler:
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      const quotationModal = byId("quotationModal");
      const productModal = byId("productModal");
      
      if (quotationModal && quotationModal.classList.contains("show")) {
        closeQuotation();
      }
      if (productModal && productModal.classList.contains("show")) {
        closeProductModal();
      }
    }
  });

}



// ---------- Reveal animations ----------
function observeReveals() {
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        }
      });
    }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
    
    $$('.reveal').forEach(el => {
      if (!el.classList.contains('show')) {
        observer.observe(el);
      }
    });
  } else {
    // Fallback: show all reveals
    $$('.reveal').forEach(el => el.classList.add('show'));
  }
}

// ---------- Mobile menu ----------
function initMobileMenu() {
  const hamburger = byId("hamburger");
  const drawer = byId("mobileDrawer");
  
  hamburger.addEventListener("click", () => {
    const isOpen = drawer.classList.contains("show");
    if (isOpen) {
      drawer.classList.remove("show");
      drawer.setAttribute("aria-hidden", "true");
      hamburger.setAttribute("aria-expanded", "false");
    } else {
      drawer.classList.add("show");
      drawer.setAttribute("aria-hidden", "false");
      hamburger.setAttribute("aria-expanded", "true");
    }
  });

  // Close on link click
  $$(".mobile-link, .mobile-drawer .btn").forEach(link => {
    link.addEventListener("click", () => {
      drawer.classList.remove("show");
      drawer.setAttribute("aria-hidden", "true");
      hamburger.setAttribute("aria-expanded", "false");
    });
  });

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!drawer.contains(e.target) && !hamburger.contains(e.target)) {
      drawer.classList.remove("show");
      drawer.setAttribute("aria-hidden", "true");
      hamburger.setAttribute("aria-expanded", "false");
    }
  });
}

// ---------- Smooth link handling ----------
function initSmoothLinks() {
  $$('a[href^="#"]').forEach(link => {
    link.addEventListener('click', (e) => {
      const href = link.getAttribute('href');
      if (href.includes('/')) return; // Let router handle complex routes
      
      e.preventDefault();
      const target = $(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, null, href);
      }
    });
  });
}

// ---------- Global Quotation button handler ----------
function initGlobalQuotationButtons() {
  $$('[data-open-Quotation]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openQuotation(); // Opens general quotation form
    });
  });
}



// Portfolio Data - Replace with your actual images and descriptions
const portfolioData = {
  portfolio1: [
    { image: 'assets/bath.jpg', caption: 'Industrial steam boiler installation at textile unit' },
    { image: 'assets/boiler.webp', caption: 'High-pressure steam system for garment factory' },
    { image: 'assets/table.jpeg', caption: 'Compact electric boiler for boutique setup' },
    { image: 'assets/parts.webp', caption: 'Gas-fired boiler with automatic controls' },
  ],
  portfolio2: [
    { image: 'assets/bath.jpg', caption: 'Professional vacuum ironing table setup' },
    { image: 'assets/boiler.webp', caption: 'Steam iron with industrial boiler system' },
    { image: 'assets/table.jpeg', caption: 'Heated vacuum table for garment finishing' },
    { image: 'assets/parts.webp', caption: 'Gas-fired boiler with automatic controls' },
  ],
  portfolio3: [
    { image: 'assets/bath.jpg', caption: 'Luxury steam bath installation at spa resort' },
    { image: 'assets/boiler.webp', caption: 'Commercial steam generator for gym facility' },
    { image: 'assets/table.jpeg', caption: 'Sauna heater with premium stone arrangement' },
    { image: 'assets/parts.webp', caption: 'Steam room with LED lighting and control panel' },
  ]
};

// Render Portfolio Items
function renderPortfolio(portfolioId, trackId) {
  const track = document.getElementById(trackId);
  const items = portfolioData[portfolioId];
  
  if (!track || !items) return;
  
  // Duplicate items for seamless loop
  const allItems = [...items, ...items];
  
  track.innerHTML = allItems.map(item => `
    <div class="portfolio-item">
      <img src="${item.image}" alt="${item.caption}" loading="lazy">
      <div class="caption">${item.caption}</div>
    </div>
  `).join('');
}

// Initialize Portfolio Direction Control
function setPortfolioDirection(trackId, direction) {
  const track = document.getElementById(trackId);
  if (!track) return;
  
  track.classList.remove('direction-left', 'direction-right');
  track.classList.add(`direction-${direction}`);
  
  // Update animation
  if (direction === 'right') {
    track.style.animationName = 'marqueeRight';
  } else {
    track.style.animationName = 'marqueeLeft';
  }
}


// Initialize Portfolios - now only sets directions
function initPortfolios() {
  // Set initial direction (all left-to-right) - will be applied when portfolios are created
  setTimeout(() => {
    setPortfolioDirection('portfolioTrack1', 'right');
    setPortfolioDirection('portfolioTrack2', 'left');
    setPortfolioDirection('portfolioTrack3', 'right');
  }, 100);
}


// Direction Control Functions (Use these to change direction)
function changePortfolio1Direction(right) {
  setPortfolioDirection('portfolioTrack1', direction); // 'left' or 'right'
}

function changePortfolio2Direction(left) {
  setPortfolioDirection('portfolioTrack2', direction); // 'left' or 'right'
}

function changePortfolio3Direction(right) {
  setPortfolioDirection('portfolioTrack3', direction); // 'left' or 'right'
}



// ---------- Initialize ----------
function init() {
  initContacts();
  renderTeasers();
  renderCategories();
  renderTestimonials();
  initMobileMenu();
  initForm();
  initSmoothLinks();
  initGlobalQuotationButtons();
  initPortfolios();
  
  // Handle initial route
  handleRoute();
  
  // Listen for hash changes
  window.addEventListener('hashchange', handleRoute);
  
  // Initial reveal observation
  observeReveals();
  
  // Back to top button
  const backTop = $('.back-top');
  if (backTop) {
    backTop.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      history.pushState(null, null, '#home');
    });
  }
  
  // Show back to top after first section
  let backTopVisible = false;
  window.addEventListener('scroll', () => {
    const shouldShow = window.scrollY > window.innerHeight;
    if (shouldShow && !backTopVisible) {
      backTop?.style.setProperty('opacity', '1');
      backTopVisible = true;
    } else if (!shouldShow && backTopVisible) {
      backTop?.style.setProperty('opacity', '0.7');
      backTopVisible = false;
    }
  });
}

// ---------- Start app when DOM ready ----------
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}

// ---------- Service worker (optional PWA) ----------
if ('serviceWorker' in navigator && location.protocol === 'https:') {
  window.addEventListener('load', () => {
    // Uncomment below if you add a service worker later
    // navigator.serviceWorker.register('/sw.js');
  });
}


// ---------- Animated Scroll to Top Button with Logo ----------
function createScrollToTopButton() {
  // Create the button
  const scrollBtn = document.createElement('div');
  scrollBtn.className = 'scroll-to-top';
  scrollBtn.innerHTML = `
    <img src="assets/logo.png" alt="ALPHA BEATS Logo" />
    <div class="progress-fill"></div>
  `;
  
  // Add to body
  document.body.appendChild(scrollBtn);
  
  // Click handler
  scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    history.pushState(null, null, '#home');
  });
  
  // Update progress based on scroll
  function updateScrollProgress() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const scrollPercent = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    
    const progressFill = scrollBtn.querySelector('.progress-fill');
    progressFill.style.height = `${Math.min(scrollPercent, 100)}%`;
  }
  
  // Listen for scroll events
  window.addEventListener('scroll', updateScrollProgress);
  
  // Initial update
  updateScrollProgress();
}

// Initialize the scroll to top button
createScrollToTopButton();





