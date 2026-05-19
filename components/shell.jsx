"use client";

import { usePathname, useRouter } from "next/navigation";
import { Nav, Footer } from "./nav";
import {
  TweaksPanel,
  TweakSection,
  TweakSelect,
  TweakToggle,
  TweakSlider,
  TweakRadio,
} from "./tweaks-panel";
import { useTweakState } from "@/app/providers";

const ROUTE_TO_PATH = {
  home: "/",
  journal: "/journal",
  post: "/journal/mist-of-uva",
  about: "/about",
  shop: "/shop",
  product: "/shop/uva-bop",
  cart: "/cart",
  checkout: "/checkout",
  "admin-login": "/admin/login",
  "admin-dash": "/admin/dashboard",
  "admin-posts": "/admin/posts",
  "admin-editor": "/admin/editor",
  "admin-media": "/admin/media",
  "admin-products": "/admin/products",
};

const PATH_TO_ROUTE = (pathname) => {
  if (pathname === "/") return "home";
  if (pathname.startsWith("/journal/")) return "post";
  if (pathname === "/journal") return "journal";
  if (pathname.startsWith("/shop/")) return "product";
  if (pathname === "/shop") return "shop";
  if (pathname === "/about") return "about";
  if (pathname === "/cart") return "cart";
  if (pathname === "/checkout") return "checkout";
  if (pathname === "/admin/login") return "admin-login";
  if (pathname === "/admin/dashboard") return "admin-dash";
  if (pathname === "/admin/posts") return "admin-posts";
  if (pathname === "/admin/editor") return "admin-editor";
  if (pathname === "/admin/media") return "admin-media";
  if (pathname === "/admin/products") return "admin-products";
  return "home";
};

export default function Shell({ children }) {
  const pathname = usePathname() || "/";
  const router = useRouter();
  const { t, setTweak } = useTweakState();

  const isAdmin =
    pathname.startsWith("/admin") && pathname !== "/admin/login";
  const route = PATH_TO_ROUTE(pathname);

  const onRouteChange = (v) => {
    const p = ROUTE_TO_PATH[v] || "/";
    router.push(p);
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  };

  return (
    <div className="app">
      {!isAdmin && <Nav />}
      {children}
      {!isAdmin && <Footer />}

      <TweaksPanel title="Tweaks">
        <TweakSection label="Route">
          <TweakSelect
            label="Current page"
            value={route}
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
              { value: "admin-products", label: "Admin · Products" },
            ]}
            onChange={onRouteChange}
          />
        </TweakSection>

        <TweakSection label="Audience gate">
          <TweakToggle
            label="Shop unlocked"
            value={t.shopUnlocked}
            onChange={(v) => setTweak("shopUnlocked", v)}
          />
          <TweakSlider
            label="Subscribers"
            value={t.audienceCurrent}
            min={0}
            max={6000}
            step={20}
            onChange={(v) => setTweak("audienceCurrent", v)}
          />
          <TweakSlider
            label="Threshold"
            value={t.audienceTarget}
            min={1000}
            max={10000}
            step={100}
            onChange={(v) => setTweak("audienceTarget", v)}
          />
        </TweakSection>

        <TweakSection label="Theme">
          <TweakRadio
            label="Palette"
            value={t.palette}
            options={[
              { value: "forest", label: "Forest" },
              { value: "clay", label: "Clay" },
              { value: "mist", label: "Mist" },
            ]}
            onChange={(v) => setTweak("palette", v)}
          />
          <TweakToggle
            label="Dark mode"
            value={t.dark}
            onChange={(v) => setTweak("dark", v)}
          />
          <TweakRadio
            label="Density"
            value={t.density}
            options={[
              { value: "compact", label: "Compact" },
              { value: "regular", label: "Regular" },
              { value: "comfy", label: "Comfy" },
            ]}
            onChange={(v) => setTweak("density", v)}
          />
        </TweakSection>

        <TweakSection label="Type & layout">
          <TweakRadio
            label="Typography"
            value={t.typography}
            options={[
              { value: "editorial", label: "Editorial" },
              { value: "modern", label: "Modern" },
              { value: "utility", label: "Utility" },
            ]}
            onChange={(v) => setTweak("typography", v)}
          />
          <TweakSelect
            label="Hero layout"
            value={t.hero}
            options={[
              { value: "editorial", label: "Editorial (default)" },
              { value: "split", label: "Asymmetric split" },
              { value: "center", label: "Centered minimal" },
            ]}
            onChange={(v) => setTweak("hero", v)}
          />
        </TweakSection>
      </TweaksPanel>
    </div>
  );
}
