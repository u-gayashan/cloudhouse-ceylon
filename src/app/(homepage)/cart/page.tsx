"use client";

import type { CSSProperties } from "react";
import { useRouter } from "next/navigation";
import { Btn, Eyebrow, PH } from "@/components/ui";
import { useCart } from "@/app/providers";
import type { CartLine } from "@/lib/types";

export default function CartPage() {
  const router = useRouter();
  const { cart, setCart } = useCart();

  const subtotal = cart.reduce((s, l) => s + l.qty * l.product.price, 0);
  const shipping = subtotal > 5000 ? 0 : 450;
  const total = subtotal + shipping;

  const set = (id: string, fn: (l: CartLine) => Partial<CartLine>) =>
    setCart(
      cart
        .map((l) => (l.id === id ? { ...l, ...fn(l) } : l))
        .filter((l) => l.qty > 0)
    );

  if (cart.length === 0) {
    return (
      <main className="page">
        <section
          className="section"
          style={{ paddingTop: 96, paddingBottom: 96, textAlign: "center" }}
        >
          <div className="container">
            <Eyebrow>Your cart</Eyebrow>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(34px, 9vw, 64px)",
                letterSpacing: "-.02em",
                margin: "16px 0 14px",
                fontWeight: 400,
              }}
            >
              An <em style={{ color: "var(--accent)" }}>empty tin</em> on the shelf.
            </h1>
            <p style={{ color: "var(--ink-soft)", maxWidth: "44ch", margin: "0 auto" }}>
              Browse the shop and add a tea — Cloudhouse orders ship every Thursday.
            </p>
            <div className="row" style={{ justifyContent: "center", marginTop: 24 }}>
              <Btn variant="accent" onClick={() => router.push("/shop")}>
                Browse the shop
              </Btn>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="section" style={{ paddingTop: 56 }}>
        <div
          className="container col-split"
          style={{ "--cols": "1.5fr 1fr", "--col-gap": "56px" } as CSSProperties}
        >
          <div>
            <Eyebrow>
              Your cart · {cart.length} item{cart.length !== 1 ? "s" : ""}
            </Eyebrow>
            <h1
              className="serif"
              style={{
                fontSize: "clamp(30px, 7vw, 48px)",
                letterSpacing: "-.02em",
                margin: "14px 0 24px",
                fontWeight: 400,
              }}
            >
              Ready to <em style={{ color: "var(--accent)" }}>steep.</em>
            </h1>

            <div>
              {cart.map((line) => (
                <div key={line.id} className="cart-line">
                  <PH label={line.product.region.slice(0, 3)} />
                  <div className="stack-2">
                    <div
                      className="mono"
                      style={{
                        fontSize: 10.5,
                        color: "var(--ink-mute)",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {line.product.region} · {line.size}
                    </div>
                    <div style={{ fontFamily: "var(--f-display)", fontSize: 19 }}>
                      {line.product.name}
                    </div>
                  </div>
                  <div className="qty">
                    <button onClick={() => set(line.id, (l) => ({ qty: l.qty - 1 }))}>−</button>
                    <span>{line.qty}</span>
                    <button onClick={() => set(line.id, (l) => ({ qty: l.qty + 1 }))}>+</button>
                  </div>
                  <div
                    className="mono"
                    style={{ textAlign: "right", fontVariantNumeric: "tabular-nums" }}
                  >
                    LKR {(line.product.price * line.qty).toLocaleString()}
                  </div>
                  <button
                    style={{
                      border: 0,
                      background: "transparent",
                      color: "var(--ink-mute)",
                      cursor: "pointer",
                      fontSize: 18,
                    }}
                    onClick={() => set(line.id, () => ({ qty: 0 }))}
                  >
                    ×
                  </button>
                </div>
              ))}
            </div>

            <div className="row" style={{ marginTop: 28 }}>
              <Btn variant="ghost" onClick={() => router.push("/shop")}>
                ← Keep browsing
              </Btn>
            </div>
          </div>

          <div className="summary">
            <div
              className="mono"
              style={{
                fontSize: 11,
                letterSpacing: ".12em",
                textTransform: "uppercase",
                color: "var(--ink-mute)",
              }}
            >
              Order summary
            </div>
            <div style={{ marginTop: 14 }}>
              <div className="ln">
                <span>Subtotal</span>
                <span>LKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="ln">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `LKR ${shipping.toLocaleString()}`}</span>
              </div>
              <div className="ln">
                <span>Tax</span>
                <span>Included</span>
              </div>
              <div className="ln total">
                <span>Total</span>
                <span>LKR {total.toLocaleString()}</span>
              </div>
            </div>
            <Btn
              variant="accent"
              style={{ width: "100%", justifyContent: "center", marginTop: 18 }}
              onClick={() => router.push("/checkout")}
            >
              Checkout →
            </Btn>
            <div
              className="row"
              style={{
                justifyContent: "center",
                gap: 14,
                marginTop: 12,
                color: "var(--ink-mute)",
                fontSize: 12,
              }}
            >
              <span>Visa</span>
              <span>Mastercard</span>
              <span>PayHere</span>
              <span>FrimiPay</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
