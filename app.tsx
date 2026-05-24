// Cloudhouse Ceylon — App router + tweaks

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "palette": "forest",
  "typography": "editorial",
  "hero": "editorial",
  "shopUnlocked": false,
  "audienceCurrent": 1840,
  "audienceTarget": 5000,
  "dark": false,
  "density": "regular"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);
  const [route, setRoute] = React.useState("home");
  const [cart, setCart] = React.useState([]);

  // Apply tweaks to <html>
  React.useEffect(() => {
    const r = document.documentElement;
    r.setAttribute("data-palette", t.palette);
    r.setAttribute("data-typography", t.typography);
    r.setAttribute("data-hero", t.hero);
    r.setAttribute("data-theme", t.dark ? "dark" : "light");
    r.setAttribute("data-density", t.density);
  }, [t.palette, t.typography, t.hero, t.dark, t.density]);

  const addToCart = (product, qty, size) => {
    const id = `${product.id}-${size}`;
    setCart(prev => {
      const found = prev.find(l => l.id === id);
      if (found) return prev.map(l => l.id === id ? { ...l, qty: l.qty + qty } : l);
      return [...prev, { id, product, qty, size }];
    });
  };

  const cartCount = cart.reduce((s, l) => s + l.qty, 0);

  const shared = {
    setRoute, route,
    shopUnlocked: t.shopUnlocked,
    audienceCurrent: t.audienceCurrent,
    audienceTarget: t.audienceTarget,
  };

  const isAdmin = route?.startsWith("admin") && route !== "admin-login";

  return (
    <div className="app">
      {!isAdmin && (
        <Nav route={route} setRoute={setRoute}
             cartCount={cartCount} shopUnlocked={t.shopUnlocked} />
      )}

      {route === "home" && <Home {...shared} />}
      {route === "journal" && <Journal {...shared} />}
      {route === "post" && <JournalPost {...shared} />}
      {route === "about" && <About {...shared} />}
      {route === "shop" && <Shop {...shared} addToCart={addToCart} />}
      {route === "product" && <Product {...shared} addToCart={addToCart} />}
      {route === "cart" && <Cart cart={cart} setCart={setCart} setRoute={setRoute} />}
      {route === "checkout" && <Checkout cart={cart} setCart={setCart} setRoute={setRoute} />}

      {route === "admin-login" && <AdminLogin setRoute={setRoute} doLogin={() => {}} />}
      {route === "admin-dash" && <AdminDashboard {...shared} />}
      {route === "admin-posts" && <AdminPosts {...shared} />}
      {route === "admin-editor" && <AdminEditor {...shared} />}
      {route === "admin-media" && <AdminMedia {...shared} />}
      {route === "admin-products" && <AdminProducts {...shared} />}

      {!isAdmin && <Footer setRoute={setRoute} />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Route">
          <TweakSelect label="Current page" value={route}
            options={[
              { value: "home", label: "Home" },
              { value: "journal", label: "Journal index" },
              { value: "post", label: "Journal post" },
              { value: "about", label: "The House" },
              { value: "shop", label: "Shop" },
              { value: "product", label: "Product detail" },
              { value: "cart", label: "Cart" },
              { value: "checkout", label: "Checkout" },
              { value: "admin-login", label: "Admin · Login" },
              { value: "admin-dash", label: "Admin · Dashboard" },
              { value: "admin-posts", label: "Admin · Posts" },
              { value: "admin-editor", label: "Admin · Editor" },
              { value: "admin-media", label: "Admin · Media" },
              { value: "admin-products", label: "Admin · Products" }
            ]}
            onChange={(v) => { setRoute(v); window.scrollTo(0,0); }} />
        </TweakSection>

        <TweakSection label="Audience gate">
          <TweakToggle label="Shop unlocked" value={t.shopUnlocked}
            onChange={(v) => setTweak("shopUnlocked", v)} />
          <TweakSlider label="Subscribers" value={t.audienceCurrent}
            min={0} max={6000} step={20}
            onChange={(v) => setTweak("audienceCurrent", v)} />
          <TweakSlider label="Threshold" value={t.audienceTarget}
            min={1000} max={10000} step={100}
            onChange={(v) => setTweak("audienceTarget", v)} />
        </TweakSection>

        <TweakSection label="Theme">
          <TweakRadio label="Palette" value={t.palette}
            options={[
              { value: "forest", label: "Forest" },
              { value: "clay", label: "Clay" },
              { value: "mist", label: "Mist" }
            ]}
            onChange={(v) => setTweak("palette", v)} />
          <TweakToggle label="Dark mode" value={t.dark}
            onChange={(v) => setTweak("dark", v)} />
          <TweakRadio label="Density" value={t.density}
            options={[
              { value: "compact", label: "Compact" },
              { value: "regular", label: "Regular" },
              { value: "comfy", label: "Comfy" }
            ]}
            onChange={(v) => setTweak("density", v)} />
        </TweakSection>

        <TweakSection label="Type & layout">
          <TweakRadio label="Typography" value={t.typography}
            options={[
              { value: "editorial", label: "Editorial" },
              { value: "modern", label: "Modern" },
              { value: "utility", label: "Utility" }
            ]}
            onChange={(v) => setTweak("typography", v)} />
          <TweakSelect label="Hero layout" value={t.hero}
            options={[
              { value: "editorial", label: "Editorial (default)" },
              { value: "split", label: "Asymmetric split" },
              { value: "center", label: "Centered minimal" }
            ]}
            onChange={(v) => setTweak("hero", v)} />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
