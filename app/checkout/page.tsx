"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { Btn, Eyebrow, PH } from "@/components/ui";
import { useCart } from "@/app/providers";

export default function CheckoutPage() {
  const router = useRouter();
  const { cart, setCart } = useCart();
  const [step, setStep] = React.useState(1);

  const subtotal = cart.reduce((s, l) => s + l.qty * l.product.price, 0);
  const shipping = subtotal > 5000 ? 0 : 450;
  const total = subtotal + shipping;

  return (
    <main className="page">
      <section className="section" style={{ paddingTop: 56 }}>
        <div
          className="container"
          style={{ display: "grid", gridTemplateColumns: "1.5fr 1fr", gap: 56 }}
        >
          <div>
            <Eyebrow>Checkout</Eyebrow>
            <h1
              className="serif"
              style={{
                fontSize: 44,
                letterSpacing: "-.02em",
                margin: "12px 0 28px",
                fontWeight: 400,
              }}
            >
              {step === 4 ? "Thank you." : "A few details."}
            </h1>

            {step < 4 && (
              <div className="stepper">
                {[
                  { n: 1, l: "Contact" },
                  { n: 2, l: "Address" },
                  { n: 3, l: "Payment" },
                ].map((s, i) => (
                  <React.Fragment key={s.n}>
                    <div
                      className={`step ${step === s.n ? "active" : ""} ${
                        step > s.n ? "done" : ""
                      }`}
                    >
                      <span className="n">{step > s.n ? "✓" : s.n}</span>
                      <span>{s.l}</span>
                    </div>
                    {i < 2 && (
                      <div
                        style={{
                          flex: 1,
                          height: 1,
                          background: "var(--line)",
                          alignSelf: "center",
                        }}
                      />
                    )}
                  </React.Fragment>
                ))}
              </div>
            )}

            {step === 1 && (
              <div className="stack-4">
                <div>
                  <label className="label">Email</label>
                  <input className="field" placeholder="you@somewhere.com" />
                </div>
                <div className="row" style={{ gap: 14 }}>
                  <div style={{ flex: 1 }}>
                    <label className="label">First name</label>
                    <input className="field" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="label">Last name</label>
                    <input className="field" />
                  </div>
                </div>
                <div>
                  <label className="label">Phone (for delivery)</label>
                  <input className="field" placeholder="+94 ..." />
                </div>
                <Btn variant="accent" onClick={() => setStep(2)}>
                  Continue to address →
                </Btn>
              </div>
            )}

            {step === 2 && (
              <div className="stack-4">
                <div>
                  <label className="label">Street address</label>
                  <input className="field" placeholder="No. 14, Cottage Lane" />
                </div>
                <div className="row" style={{ gap: 14 }}>
                  <div style={{ flex: 1 }}>
                    <label className="label">City</label>
                    <input className="field" placeholder="Colombo" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="label">Postal code</label>
                    <input className="field" placeholder="00100" />
                  </div>
                </div>
                <div>
                  <label className="label">Country</label>
                  <input className="field" placeholder="Sri Lanka" />
                </div>
                <div className="row">
                  <Btn variant="ghost" onClick={() => setStep(1)}>
                    ← Back
                  </Btn>
                  <Btn variant="accent" onClick={() => setStep(3)}>
                    Continue to payment →
                  </Btn>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="stack-4">
                <div>
                  <label className="label">Card number</label>
                  <input className="field" placeholder="•••• •••• •••• ••••" />
                </div>
                <div className="row" style={{ gap: 14 }}>
                  <div style={{ flex: 1 }}>
                    <label className="label">Expiry</label>
                    <input className="field" placeholder="MM / YY" />
                  </div>
                  <div style={{ flex: 1 }}>
                    <label className="label">CVC</label>
                    <input className="field" placeholder="•••" />
                  </div>
                </div>
                <div>
                  <label className="label">Name on card</label>
                  <input className="field" />
                </div>
                <div className="row">
                  <Btn variant="ghost" onClick={() => setStep(2)}>
                    ← Back
                  </Btn>
                  <Btn
                    variant="accent"
                    onClick={() => {
                      setStep(4);
                      setCart([]);
                    }}
                  >
                    Place order — LKR {total.toLocaleString()}
                  </Btn>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="stack-4">
                <PH
                  label="ORDER CONFIRMED · 21:9"
                  style={{ aspectRatio: "21/6", marginBottom: 8 }}
                />
                <p style={{ color: "var(--ink-soft)", maxWidth: "56ch", fontSize: 17 }}>
                  Order{" "}
                  <span className="mono" style={{ color: "var(--ink)" }}>
                    #CH-26-04812
                  </span>{" "}
                  is on its way. We pack and ship every Thursday from Nuwara Eliya — your tea
                  should arrive within five working days.
                </p>
                <div className="row" style={{ marginTop: 8 }}>
                  <Btn variant="accent" onClick={() => router.push("/shop")}>
                    Back to the shop
                  </Btn>
                  <Btn variant="ghost" onClick={() => router.push("/journal")}>
                    Read the journal
                  </Btn>
                </div>
              </div>
            )}
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
              Your order
            </div>
            <div style={{ marginTop: 12 }}>
              {cart.length === 0 && step === 4 && (
                <div
                  style={{ color: "var(--ink-mute)", padding: "12px 0", fontSize: 14 }}
                >
                  ✓ Shipping to your address
                </div>
              )}
              {cart.map((l) => (
                <div
                  key={l.id}
                  className="row"
                  style={{ padding: "10px 0", borderBottom: "1px solid var(--line)" }}
                >
                  <PH
                    label=""
                    style={{ width: 44, height: 44, aspectRatio: "1", flexShrink: 0 }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14 }}>{l.product.name}</div>
                    <div
                      className="mono"
                      style={{
                        fontSize: 10.5,
                        color: "var(--ink-mute)",
                        letterSpacing: ".1em",
                        textTransform: "uppercase",
                      }}
                    >
                      {l.size} · ×{l.qty}
                    </div>
                  </div>
                  <div className="mono" style={{ fontSize: 13 }}>
                    {(l.product.price * l.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 12 }}>
              <div className="ln">
                <span>Subtotal</span>
                <span>LKR {subtotal.toLocaleString()}</span>
              </div>
              <div className="ln">
                <span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `LKR ${shipping.toLocaleString()}`}</span>
              </div>
              <div className="ln total">
                <span>Total</span>
                <span>LKR {total.toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
