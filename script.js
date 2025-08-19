/* =========================================================
   ALPHA BEATS — Single-page catalog with product details
   Uses hash routing: #home | #category/<slug> | #product/<id>
   Author: You + Assistant
========================================================= */

// ---------- Site config (edit these) ----------
const SITE = {
  email: "mail.yogeshv@gmail.com", // change to real email
  phone: "+91 9008587582",          // change to real number
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
const imgUnsplash = (query, w = 1200) =>
  `https://images.unsplash.com/photo-1556905055-8f358a7a47b2?q=80&w=${w}&fit=crop&auto=format`; // fallback factory image

const img = (query, w = 1200) =>
  `https://source.unsplash.com/${w}x${Math.round(w*0.75)}/?${encodeURIComponent(query)},industrial`;

// ---------- Data ----------
const categories = [
  {
    id: 1,
    name: "Steam Boilers",
    slug: "steam-boilers",
    description: "Reliable electric, diesel and gas-fired boilers for garment and industrial applications.",
    image: img("steam boiler machinery")
  },
  {
    id: 2,
    name: "Garment Finishing Systems",
    slug: "garment-finishing",
    description: "Steam irons, vacuum iron tables, spotting and complete finishing stations.",
    image: img("industrial ironing table")
  },
  {
    id: 3,
    name: "Steam Bath & Sauna",
    slug: "steam-bath-sauna",
    description: "Steam bath generators, sauna heaters and wellness accessories for gyms and spas.",
    image: img("spa steam sauna")
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
const products = [
  // Steam Boilers
  P("AB Compact Steam Boiler 9kW", "steam-boilers", "electric steam boiler 9kW",
    "Compact electric boiler for small units and boutiques.",
    { Power: "9 kW", Capacity: "12 kg/hr", Voltage: "415V", Phase: "3 Ph", Body: "SS 304", Safety: "Dry-run, PRV" }),
  P("AB Industrial Steam Boiler 18kW", "steam-boilers", "electric steam boiler 18kW",
    "Higher output electric boiler for continuous pressing lines.",
    { Power: "18 kW", Capacity: "24 kg/hr", Voltage: "415V", Phase: "3 Ph", Control: "Digital", Safety: "Dual thermostat" }),
    P("AB Gas Fired Boiler 100 kg/hr", "steam-boilers", "gas fired steam boiler",
    "Efficient gas-fired steam boiler with rapid steam generation.",
    { Fuel: "PNG/LPG", Output: "100 kg/hr", Pressure: "7 bar", Efficiency: "88%", Control: "Auto ignition", Safety: "Flame failure" }),
  P("AB Diesel Boiler 200 kg/hr", "steam-boilers", "diesel fired steam boiler",
    "Heavy-duty diesel-fired unit for industrial laundries.",
    { Fuel: "HSD", Output: "200 kg/hr", Pressure: "10 bar", Coil: "IBR quality", Safety: "High-temp cutoff" }),
  P("AB Twin Electric Boiler 24kW", "steam-boilers", "twin electric steam boiler",
    "Twin-heater module for redundancy and energy saving.",
    { Power: "2 x 12 kW", Output: "32 kg/hr", Voltage: "415V", Phase: "3 Ph", Control: "Step control", Tank: "SS 304" }),
  P("AB High Pressure Boiler 300 kg/hr", "steam-boilers", "high pressure industrial boiler",
    "For pressing lines and dyeing auxiliaries needing stable pressure.",
    { Output: "300 kg/hr", Pressure: "12 bar", Feedwater: "Auto", Blowdown: "Manual/Auto", Mounting: "Skid" }),
  P("AB Portable Steam Generator 6kW", "steam-boilers", "portable steam generator",
    "Plug‑and‑play portable generator for sampling rooms.",
    { Power: "6 kW", Output: "8 kg/hr", Tank: "8 L", Voltage: "230V", Mobility: "Wheels" }),
  P("AB Vertical Steam Boiler 150 kg/hr", "steam-boilers", "vertical steam boiler",
    "Compact vertical design with small footprint.",
    { Output: "150 kg/hr", Fuel: "Diesel/Gas", Pressure: "10 bar", Shell: "MS/SS", Control: "Digital" }),

  // Garment Finishing Systems
  P("AB Pro Steam Iron with 3L Boiler", "garment-finishing", "industrial steam iron with boiler",
    "Professional steam iron with inbuilt 3L boiler and safety controls.",
    { Boiler: "3 L", Power: "2.2 kW", Voltage: "230V", Hose: "Silicone", Safety: "Low-water alarm" }),
  P("AB Vacuum Ironing Table VT‑01", "garment-finishing", "vacuum ironing table",
    "Standard vacuum table for moisture extraction and fast drying.",
    { Bed: "1200 x 750 mm", Motor: "0.5 HP", Heater: "800 W", Height: "Adjustable", Addons: "Sleeve arm" }),
  P("AB Heated Vacuum Table HVT‑02", "garment-finishing", "heated vacuum table industrial",
    "Heated top with vacuum for professional finishing rooms.",
    { Bed: "1300 x 800 mm", TopHeat: "1 kW", Motor: "0.75 HP", Thermostat: "Digital", Phase: "1/3 Ph" }),
  P("AB Stain Removal Machine SR‑01", "garment-finishing", "stain removal spotting machine",
    "Two-gun spotting station with steam/air and built‑in vacuum.",
    { Guns: "2", Functions: "Steam/Air/Vacuum", Material: "SS 304", Lighting: "LED", Tank: "Solvent tray" }),
  P("AB Spotting Table ST‑02", "garment-finishing", "spotting table laundry",
    "Ergonomic spotting table with SS top and waste collection.",
    { Top: "SS 304", Arm: "Suction", Compressor: "External", Fan: "0.5 HP", Drain: "Integrated" }),
  P("AB Steam Iron Box SI‑900", "garment-finishing", "steam iron box",
    "Heavy-duty steam iron with Teflon shoe and long-life solenoid.",
    { Power: "1000 W", Soleplate: "Teflon", Cord: "3 m", Pressure: "Up to 5 bar", Weight: "1.5 kg" }),
  P("AB Double Station Vacuum Table VT‑2S", "garment-finishing", "double station vacuum table",
    "Two-station table for high throughput lines.",
    { Stations: "2", Motor: "1 HP", Control: "Independent", Bed: "1200 x 750 mm x2", Phase: "3 Ph" }),
    P("AB Portable Ironing System PS‑01", "garment-finishing", "portable ironing system",
    "Compact trolley system with boiler + iron for mobile operations.",
    { Boiler: "5 L", Mobility: "Trolley", Hose: "3 m", Power: "3 kW", Safety: "Pressure switch" }),

  // Steam Bath & Sauna
  P("AB Steam Bath Generator SB‑6", "steam-bath-sauna", "steam bath generator",
    "Home/club steam generator with digital controller.",
    { Power: "6 kW", Voltage: "230/415V", Tank: "SS 304", Control: "Digital panel", Protection: "Overheat, dry" }),
  P("AB Steam Bath Generator SB‑9", "steam-bath-sauna", "spa steam generator 9kW",
    "For medium cabins in gyms and spas.",
    { Power: "9 kW", Phase: "3 Ph", Control: "Timer + Temp", AutoFlush: "Yes", SteamOut: "SS 304" }),
  P("AB Steam Bath Generator SB‑12", "steam-bath-sauna", "commercial steam generator 12kW",
    "Commercial-grade continuous steam output.",
    { Power: "12 kW", Phase: "3 Ph", AutoFlush: "Yes", Protection: "Dry, overheat", Case: "Powder coated" }),
  P("AB Sauna Heater SH‑6", "steam-bath-sauna", "sauna heater 6kW",
    "Efficient sauna heater for compact rooms.",
    { Power: "6 kW", Stones: "15 kg", Control: "Analog/Digital", Material: "Stainless", Phase: "1/3 Ph" }),
  P("AB Sauna Heater SH‑9", "steam-bath-sauna", "sauna heater 9kW",
    "For larger sauna rooms in premium gyms.",
    { Power: "9 kW", Controller: "Wall mount", Case: "Alu-Zn", Safety: "Thermal cut-off" }),
  P("AB Steam Room Panel & Lights", "steam-bath-sauna", "steam room lights",
    "Complete accessory kit with LED lights and control panel.",
    { Lights: "IP65", ControlPanel: "Touch", Voltage: "230V", Warranty: "1 year" }),
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
  { name: "Karthik R.", company: "Bengaluru Apparel Pvt Ltd", rating: 5, quote: "Solid build quality. Our pressing line uptime improved a lot." },
  { name: "Neha M.", company: "Urban Laundry", rating: 5, quote: "Great vacuum tables and quick support from the team." },
  { name: "Javed S.", company: "FitPro Gym", rating: 4, quote: "Steam bath generator is reliable and easy to maintain." },
  { name: "Sahana K.", company: "Boutique Studio", rating: 5, quote: "Portable steam generator is perfect for sampling." }
];

// Build indices
const productById = {};
for (const p of products) productById[p.id] = p;

// ---------- DOM population ----------
function initContacts() {
  const e = SITE.email, ph = SITE.phone;
  const emailLinks = [byId("contactEmail"), byId("footerEmail")].filter(Boolean);
  const phoneLinks = [byId("contactPhone"), byId("footerPhone")].filter(Boolean);
  emailLinks.forEach(a => { a.textContent = e; a.href = `mailto:${e}`; });
  phoneLinks.forEach(a => { a.textContent = ph; a.href = `tel:${ph.replace(/\s+/g,'')}`; });

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
        <button class="btn ghost sm" data-quote="${p.name}">Get Quote</button>
      </div>
    </div>`;
  // quote button
  card.querySelector('[data-quote]').addEventListener('click', (e) => {
    e.preventDefault();
    openQuote(p.name);
  });
  return card;
}

function renderCategories() {
  const wrap = byId("categoryBlocks");
  wrap.innerHTML = "";
  categories.forEach(c => {
    const section = el("section", "category-block container");
    section.id = `cat-${c.slug}`;
    section.innerHTML = `
      <div class="category-header">
        <h2>${c.name}</h2>
        <a class="btn ghost sm" href="#category/${c.slug}">View ${c.name}</a>
      </div>
      <div class="product-grid" id="grid-${c.slug}"></div>
    `;
    wrap.appendChild(section);
    // eight products per category visible
    const list = products.filter(p => p.categorySlug === c.slug).slice(0, 8);
    const grid = byId(`grid-${c.slug}`);
    list.forEach(p => grid.appendChild(productCard(p)));
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
  testimonials.forEach(t => {
    const card = el("div", "testi reveal");
    const stars = "★★★★★★★★★★★".slice(0, t.rating);
    card.innerHTML = `
      <div class="stars" aria-label="${t.rating} stars">${"★".repeat(t.rating)}${"☆".repeat(5 - t.rating)}</div>
      <p>“${t.quote}”</p>
      <div class="meta">
        <div>— ${t.name}</div>
        <div class="muted">• ${t.company}</div>
      </div>`;
    grid.appendChild(card);
  });
  observeReveals();
}

// ---------- Product detail ----------
function renderProductView(id) {
  const p = productById[id];
  if (!p) return;

  const view = byId("productView");
  view.classList.remove("hidden");
  const cat = categories.find(c => c.slug === p.categorySlug);

  const bullets = Object.entries(p.specs).slice(0, 5)
    .map(([k,v]) => `<li><strong>${k}:</strong> ${v}</li>`).join("");

  const specsRows = Object.entries(p.specs)
    .map(([k,v]) => `<tr><th>${k}</th><td>${v}</td></tr>`).join("");

  // Related
  const related = p.related.map(id => productById[id]).filter(Boolean);
  const recHTML = related.map(r => `
    <a class="product-card" href="#product/${r.id}">
      <div class="cover"><img loading="lazy" src="${r.images[0]}" alt="${r.name}"></div>
      <div class="pad">
        <h4>${r.name}</h4>
        <p>${r.short}</p>
        <div class="actions"><span class="btn primary sm">View</span></div>
      </div>
    </a>
  `).join("");

  view.innerHTML = `
    <div class="container">
      <div class="pv-header">
                <a class="pv-back" href="#category/${p.categorySlug}">← Back to ${cat?.name || 'Products'}</a>
        <button class="btn primary sm" data-quote="${p.name}">Get Quote</button>
      </div>
      <div class="pv-grid">
        <div class="pv-figure">
          <img class="pv-main" id="pvMain" src="${p.images[0]}" alt="${p.name}">
          <div class="pv-thumbs" id="pvThumbs">
            ${p.images.map((img, i) => `<img src="${img}" alt="${p.name} ${i+1}" data-index="${i}" ${i===0?'class="active"':''}>`).join('')}
          </div>
        </div>
        <div class="pv-info">
          <h1 class="title">${p.name}</h1>
          <p>${p.short}</p>
          <ul class="pv-bullets">${bullets}</ul>
          <div class="pv-sticky-actions">
            <button class="btn primary" data-quote="${p.name}">Request Quote</button>
            <button class="btn ghost">Download Brochure</button>
          </div>
          <div class="pv-tabs">
            <div class="pv-tab active" data-tab="overview">Overview</div>
            <div class="pv-tab" data-tab="specs">Specifications</div>
            <div class="pv-tab" data-tab="related">Related</div>
          </div>
        </div>
      </div>
      <div class="pv-sections container">
        <div class="pv-section" data-section="overview">
          <div class="card">
            <h3>Product Overview</h3>
            <p>${p.short} This industrial-grade solution is designed for continuous operation with premium materials and safety features.</p>
            <p>Suitable for industrial laundries, garment manufacturing, hotels, and commercial applications requiring reliable steam generation.</p>
          </div>
        </div>
        <div class="pv-section hidden" data-section="specs">
          <div class="card">
            <h3>Technical Specifications</h3>
            <table class="specs-table">
              <tbody>${specsRows}</tbody>
            </table>
          </div>
        </div>
        <div class="pv-section hidden" data-section="related">
          <div class="card">
            <h3>Related Products</h3>
            <div class="rec-grid">${recHTML}</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Image gallery
  const main = byId("pvMain");
  const thumbs = $$("#pvThumbs img");
  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      const idx = parseInt(thumb.dataset.index);
      main.src = p.images[idx];
      thumbs.forEach(t => t.classList.remove("active"));
      thumb.classList.add("active");
    });
  });

  // Tabs
  const tabs = $$(".pv-tab");
  const sections = $$(".pv-section");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      const target = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove("active"));
      sections.forEach(s => s.classList.add("hidden"));
      tab.classList.add("active");
      $(`[data-section="${target}"]`).classList.remove("hidden");
    });
  });

  // Quote buttons in product view
  $$('[data-quote]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openQuote(btn.dataset.quote);
    });
  });

  // Scroll to top
  view.scrollIntoView({ behavior: 'smooth' });
}

function hideProductView() {
  const view = byId("productView");
  view.classList.add("hidden");
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

  // Hide product view by default
  hideProductView();

  if (route === "product" && param) {
    renderProductView(param);
  } else if (route === "category" && param) {
    scrollToCategory(param);
  } else {
    // Default home or other sections - smooth scroll
    const target = $(hash);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  }
}

// ---------- Quote modal ----------
function openQuote(productName = "") {
  const productField = byId("formProduct");
  if (productField && productName) {
    productField.value = productName;
  }
  // Scroll to contact form
  const contact = byId("contact");
  if (contact) {
    contact.scrollIntoView({ behavior: 'smooth' });
  }
}

// ---------- Form handler ----------
function initForm() {
  const form = byId("quoteForm");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const obj = Object.fromEntries(data);
    
    // Create email body
    const body = `
New quote request from ${obj.name}

Company: ${obj.company}
Email: ${obj.email}
Phone: ${obj.phone}
Product: ${obj.product}
Message: ${obj.message}
Prefer WhatsApp: ${obj.whatsapp ? 'Yes' : 'No'}
    `.trim();

    const subject = `Quote Request - ${obj.product || 'ALPHA BEATS Product'}`;
    const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    
    // Open email client
    window.location.href = mailto;
    
    // Show success message
    alert("Quote request prepared! Your email client should open. If not, please email us directly at " + SITE.email);
    form.reset();
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

// ---------- Global quote button handler ----------
function initGlobalQuoteButtons() {
  $$('[data-open-quote]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      openQuote();
    });
  });
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
  initGlobalQuoteButtons();
  
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
