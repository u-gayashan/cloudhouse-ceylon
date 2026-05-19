// Cloudhouse Ceylon — shared components
// Atoms + molecules used across marketing, shop, and admin

const Logo = ({ size = "md" }) => (
  <div className="logo" data-size={size}>
    <div className="logo-mark" />
    <div className="logo-name">Cloudhouse<em>Ceylon</em></div>
  </div>
);

const Eyebrow = ({ children, dot = true }) => (
  <div className="eyebrow">{dot && <span className="dot" />}{children}</div>
);

const Tag = ({ children, variant }) => (
  <span className={`tag ${variant || ""}`}>{children}</span>
);

const Btn = ({ children, onClick, variant = "", small, icon, ...rest }) => (
  <button
    className={`btn ${variant} ${small ? "small" : ""} ${icon ? "icon" : ""}`}
    onClick={onClick}
    {...rest}
  >
    {children}
  </button>
);

// Striped placeholder. Pass label="HERO PHOTO" etc.
const PH = ({ label, className = "", style }) => (
  <div className={`ph ${className}`} style={style}>
    {label && <div className="ph-label">{label}</div>}
  </div>
);

// Top navigation. Pass route + setRoute from parent (App).
function Nav({ route, setRoute, cartCount = 0, shopUnlocked = true }) {
  const go = (r) => (e) => { e.preventDefault(); setRoute(r); window.scrollTo(0,0); };
  const is = (r) => route === r || (r === "journal" && route === "post") ||
                    (r === "shop" && route === "product");
  return (
    <header className="nav">
      <div className="container nav-inner">
        <a href="#" onClick={go("home")}><Logo /></a>
        <nav className="nav-links">
          <a href="#" onClick={go("home")} className={is("home") ? "active" : ""}>Home</a>
          <a href="#" onClick={go("journal")} className={is("journal") ? "active" : ""}>Journal</a>
          <a href="#" onClick={go("about")} className={is("about") ? "active" : ""}>The House</a>
          <a href="#" onClick={go("shop")} className={is("shop") ? "active" : ""}>
            Shop {!shopUnlocked && <span className="badge-lock" style={{marginLeft:6}}><span className="icon" /></span>}
          </a>
          <a href="#" onClick={go("admin-login")} className={route?.startsWith("admin") ? "active" : ""}>Admin</a>
        </nav>
        <div className="row" style={{gap: 10}}>
          <Btn variant="ghost" small onClick={() => setRoute("cart")}>
            Cart <span className="mono" style={{opacity:.6, marginLeft:4}}>{String(cartCount).padStart(2, "0")}</span>
          </Btn>
        </div>
      </div>
    </header>
  );
}

function Footer({ setRoute }) {
  const go = (r) => (e) => { e.preventDefault(); setRoute(r); window.scrollTo(0,0); };
  return (
    <footer className="foot">
      <div className="container">
        <div className="foot-grid">
          <div>
            <Logo />
            <p style={{marginTop: 18, maxWidth: "36ch", color: "var(--ink-soft)", fontSize: 14}}>
              Single-origin Ceylon tea from the upcountry mist of Sri Lanka.
              Stories from the leaf. A small cottage in the hills, coming soon.
            </p>
          </div>
          <div>
            <h5>Read</h5>
            <a href="#" onClick={go("journal")}>Journal</a>
            <a href="#" onClick={go("about")}>The House</a>
            <a href="#">Brewing guide</a>
            <a href="#">Estate map</a>
          </div>
          <div>
            <h5>Shop</h5>
            <a href="#" onClick={go("shop")}>All tea</a>
            <a href="#">Loose leaf</a>
            <a href="#">Gift sets</a>
            <a href="#">Subscription</a>
          </div>
          <div>
            <h5>Contact</h5>
            <a href="#">hello@cloudhouse.lk</a>
            <a href="#">Instagram</a>
            <a href="#">YouTube</a>
            <a href="#">Press</a>
          </div>
        </div>
        <div className="meta">
          <span>© 2026 Cloudhouse Ceylon · Nuwara Eliya, Sri Lanka</span>
          <span>06°58&apos;N · 80°46&apos;E · ELEV. 1,868 M</span>
        </div>
      </div>
    </footer>
  );
}

// Journal post card
function JournalCard({ post, onOpen }) {
  return (
    <article className="journal-card" onClick={() => onOpen?.(post)}>
      <PH label={post.kind || "PHOTO"} />
      <div className="stack-2">
        <div className="meta">
          <Tag>{post.category}</Tag>
          <span style={{fontSize: 12, color: "var(--ink-mute)"}}>{post.date}</span>
          <span className="sep" />
          <span style={{fontSize: 12, color: "var(--ink-mute)"}}>{post.read}</span>
        </div>
        <h3>{post.title}</h3>
        <p>{post.excerpt}</p>
      </div>
    </article>
  );
}

function ProductCard({ product, onOpen, locked }) {
  return (
    <article className="product-card" onClick={() => !locked && onOpen?.(product)}
             style={{opacity: locked ? 0.55 : 1, cursor: locked ? "default" : "pointer"}}>
      <PH label={product.region} />
      <div className="stack-2">
        <div className="origin">{product.region} · {product.elevation}</div>
        <div className="name">{product.name}</div>
        <div className="between">
          <div className="price">LKR {product.price.toLocaleString()}</div>
          {locked
            ? <span className="badge-lock"><span className="icon" /> Locked</span>
            : <span className="tag" style={{fontSize: 10}}>{product.weight}</span>}
        </div>
      </div>
    </article>
  );
}

// A simple Sri Lanka silhouette + pinned regions
function CeylonMap({ activeRegion }) {
  return (
    <div className="region-map">
      <svg viewBox="0 0 200 260" style={{position:"absolute", inset: 16, width: "calc(100% - 32px)", height: "calc(100% - 32px)"}}>
        <path
          d="M100 12 C 130 14, 150 35, 158 70 C 168 110, 172 145, 160 185 C 150 218, 130 245, 100 248 C 70 248, 50 225, 42 192 C 34 158, 36 120, 46 86 C 56 50, 70 22, 100 12 Z"
          fill="var(--bg-3)" stroke="var(--ink-soft)" strokeWidth="0.6" strokeDasharray="2 2" opacity="0.7"
        />
      </svg>
      {[
        { id: "nuwara", name: "Nuwara Eliya", x: "52%", y: "44%" },
        { id: "uva", name: "Uva", x: "68%", y: "60%" },
        { id: "dimbula", name: "Dimbula", x: "42%", y: "54%" },
        { id: "kandy", name: "Kandy", x: "56%", y: "32%" },
        { id: "ruhuna", name: "Ruhuna", x: "50%", y: "78%" }
      ].map(p => (
        <div key={p.id} className="pin" style={{left: p.x, top: p.y,
              opacity: activeRegion && activeRegion !== p.id ? 0.35 : 1}}>
          <i />
          <span>{p.name}</span>
        </div>
      ))}
    </div>
  );
}

// Marquee strip
function Marquee({ items }) {
  const all = [...items, ...items];
  return (
    <div className="marquee">
      <div className="marquee-inner">
        {all.map((t, i) => (
          <span key={i}>
            <span className="glyph">◦</span>
            {t.includes("|") ? (
              <span>{t.split("|")[0]}<em>{t.split("|")[1]}</em></span>
            ) : t}
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, {
  Logo, Eyebrow, Tag, Btn, PH, Nav, Footer,
  JournalCard, ProductCard, CeylonMap, Marquee
});
