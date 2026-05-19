// Cloudhouse Ceylon — shop pages

function ShopLocked({ audienceCurrent, audienceTarget, setRoute }) {
  const pct = Math.min(100, Math.round(audienceCurrent / audienceTarget * 100));
  return (
    <main className="page">
      <section className="section" style={{paddingTop: 56}}>
        <div className="container">
          <Eyebrow>The Shop · Closed for now</Eyebrow>
          <h1 className="serif" style={{fontSize: "clamp(48px, 7vw, 96px)", lineHeight: .98,
                                         letterSpacing:"-.025em", margin: "18px 0 24px", fontWeight: 400}}>
            Opening at <em style={{color:"var(--accent)"}}>{audienceTarget.toLocaleString()}</em><br/>
            readers.
          </h1>
          <p style={{maxWidth: "62ch", fontSize: 18, color:"var(--ink-soft)"}}>
            We're slow-launching Cloudhouse. The shop opens to the public once the journal
            reaches {audienceTarget.toLocaleString()} subscribers — enough demand to back a small,
            ethical harvest without overpromising the smallholder estates we work with.
          </p>

          <div style={{maxWidth: 640, marginTop: 36}}>
            <div className="threshold-bar" style={{height: 8}}>
              <i style={{width: pct + "%"}} />
            </div>
            <div className="threshold-label" style={{marginTop: 10}}>
              <span>{audienceCurrent.toLocaleString()} readers · {pct}%</span>
              <span>Target: {audienceTarget.toLocaleString()}</span>
            </div>
            <div className="row" style={{marginTop: 22, gap: 10}}>
              <input className="field" placeholder="you@somewhere.com" style={{maxWidth: 320}} />
              <Btn variant="accent">Join the journal</Btn>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>Preview · What's coming</Eyebrow>
              <h2 style={{marginTop: 10}}>The first eight teas.</h2>
            </div>
            <span className="badge-lock"><span className="icon" /> Locked until launch</span>
          </div>
          <div className="product-grid">
            {PRODUCTS.map(p => <ProductCard key={p.id} product={p} locked />)}
          </div>
        </div>
      </section>
    </main>
  );
}

function ShopOpen({ setRoute, addToCart }) {
  const [region, setRegion] = React.useState("All");
  const regions = ["All", ...new Set(PRODUCTS.map(p => p.region))];
  const list = region === "All" ? PRODUCTS : PRODUCTS.filter(p => p.region === region);
  return (
    <main className="page">
      <section className="section" style={{paddingTop: 56, paddingBottom: 32}}>
        <div className="container">
          <Eyebrow>The Shop · Open · Pulled this season</Eyebrow>
          <h1 className="serif" style={{fontSize: "clamp(48px, 7vw, 96px)", lineHeight: .98,
                                         letterSpacing:"-.025em", margin: "18px 0 32px", fontWeight: 400}}>
            Pure Ceylon,<br/><em style={{color:"var(--accent)"}}>single-origin.</em>
          </h1>
          <div className="between" style={{borderTop:"1px solid var(--line)", paddingTop: 20}}>
            <div className="pills">
              {regions.map(r => (
                <button key={r} className={`pill ${region === r ? "active" : ""}`}
                        onClick={() => setRegion(r)}>{r}</button>
              ))}
            </div>
            <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                          letterSpacing:".1em", textTransform:"uppercase"}}>
              {list.length} teas · Free shipping over LKR 5,000
            </div>
          </div>
        </div>
      </section>
      <section className="section" style={{paddingTop: 8}}>
        <div className="container">
          <div className="product-grid">
            {list.map(p => (
              <ProductCard key={p.id} product={p}
                onOpen={(prod) => { window.__activeProduct = prod;
                                    window.dispatchEvent(new Event("product-change"));
                                    setRoute("product"); }} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Shop(props) {
  return props.shopUnlocked ? <ShopOpen {...props} /> : <ShopLocked {...props} />;
}

function Product({ setRoute, addToCart, shopUnlocked }) {
  const [p, setP] = React.useState(window.__activeProduct || PRODUCTS[0]);
  const [qty, setQty] = React.useState(1);
  const [size, setSize] = React.useState("100g");
  React.useEffect(() => {
    const handler = () => setP(window.__activeProduct || PRODUCTS[0]);
    window.addEventListener("product-change", handler);
    return () => window.removeEventListener("product-change", handler);
  }, []);

  return (
    <main className="page">
      <section style={{padding: "32px 0 64px"}}>
        <div className="container">
          <a href="#" onClick={(e) => { e.preventDefault(); setRoute("shop"); }}
             className="mono" style={{fontSize: 11, letterSpacing:".12em", textTransform:"uppercase",
                                      color:"var(--ink-mute)"}}>
            ← The Shop
          </a>
          <div style={{display:"grid", gridTemplateColumns:"1.1fr 1fr", gap: 56, marginTop: 28, alignItems:"start"}}>
            <div>
              <PH label={`${p.region} · MAIN · 4:5`} style={{aspectRatio: "4/5"}} />
              <div style={{display:"grid", gridTemplateColumns:"repeat(4, 1fr)", gap: 8, marginTop: 8}}>
                {["DRY LEAF", "LIQUOR", "ESTATE", "TIN"].map(l => (
                  <PH key={l} label={l} style={{aspectRatio: 1}} />
                ))}
              </div>
            </div>

            <div style={{position:"sticky", top: 88}}>
              <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                            letterSpacing:".1em", textTransform:"uppercase"}}>
                {p.region} · {p.elevation}
              </div>
              <h1 className="serif" style={{fontSize: 52, lineHeight: 1.04, letterSpacing:"-.02em",
                                            margin: "10px 0 20px", fontWeight: 400}}>
                {p.name}
              </h1>
              <div className="row" style={{gap: 8, flexWrap:"wrap"}}>
                <Tag>{p.grade}</Tag>
                <Tag>{p.estate}</Tag>
                <Tag>{p.flush}</Tag>
              </div>

              <p style={{marginTop: 24, color:"var(--ink-soft)", fontSize: 16, lineHeight: 1.65}}>
                Notes of <strong style={{color:"var(--ink)"}}>{p.notes}</strong>. A single-flush,
                single-estate Ceylon, sealed within seven days of withering. Brew at 95°C for
                three minutes; the cup is bright on first pour, deeper on the second.
              </p>

              <div className="hr-dot" style={{margin: "28px 0 18px"}}>
                <span>Tasting · Brewing · Origin</span>
              </div>

              <div style={{display:"grid", gridTemplateColumns:"1fr 1fr 1fr", gap: 16}}>
                {[
                  { l: "Water", v: "95°C" },
                  { l: "Leaf", v: "3 g / 200 ml" },
                  { l: "Steep", v: "3 minutes" }
                ].map(m => (
                  <div key={m.l}>
                    <div className="mono" style={{fontSize: 10.5, color:"var(--ink-mute)",
                                                  letterSpacing:".1em", textTransform:"uppercase"}}>{m.l}</div>
                    <div style={{fontFamily:"var(--f-display)", fontSize: 22, marginTop: 2}}>{m.v}</div>
                  </div>
                ))}
              </div>

              <div className="hr-dot" style={{margin: "28px 0 18px"}}>
                <span>Order</span>
              </div>

              <div className="row" style={{gap: 16, flexWrap:"wrap"}}>
                <div>
                  <div className="label">Size</div>
                  <div className="pills">
                    {["50g", "100g", "250g"].map(s => (
                      <button key={s} className={`pill ${size === s ? "active" : ""}`}
                              onClick={() => setSize(s)}>{s}</button>
                    ))}
                  </div>
                </div>
                <div>
                  <div className="label">Quantity</div>
                  <div className="qty" style={{height: 40}}>
                    <button onClick={() => setQty(Math.max(1, qty-1))}>−</button>
                    <span>{qty}</span>
                    <button onClick={() => setQty(qty+1)}>+</button>
                  </div>
                </div>
              </div>

              <div className="row" style={{gap: 12, marginTop: 24}}>
                <Btn variant="accent" onClick={() => {
                  if (!shopUnlocked) return;
                  addToCart(p, qty, size);
                  setRoute("cart");
                }}>
                  {shopUnlocked
                    ? <>Add to cart — LKR {(p.price * qty).toLocaleString()}</>
                    : <>Locked · open at launch</>}
                </Btn>
                <Btn variant="ghost">Save for later</Btn>
              </div>

              <div className="row" style={{gap: 14, marginTop: 18, color:"var(--ink-soft)", fontSize: 13}}>
                <span>◦ Ships in 3 days</span>
                <span>◦ Vacuum-sealed</span>
                <span>◦ Returns within 14 days</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{background: "var(--bg-2)", borderTop:"1px solid var(--line)"}}>
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>From the estate</Eyebrow>
              <h2 style={{marginTop: 10}}>The land behind <em>this leaf.</em></h2>
            </div>
          </div>
          <div style={{display:"grid", gridTemplateColumns:"1.2fr 1fr", gap: 56, alignItems:"center"}}>
            <PH label={`${p.estate.toUpperCase()} · ESTATE FILM · 16:9`} style={{aspectRatio: "16/9"}} />
            <div>
              <h3 className="serif" style={{fontSize: 32, letterSpacing:"-.015em",
                                            margin: 0, lineHeight: 1.1, fontWeight: 400}}>
                {p.estate}
              </h3>
              <p style={{color:"var(--ink-soft)", marginTop: 14}}>
                A smallholder estate in {p.region}, working at {p.elevation} above sea level. The
                {" "}{p.flush.toLowerCase()} is what we've sealed for you here — pulled in the cool
                weeks of the season and lightly withered.
              </p>
              <div className="row" style={{marginTop: 18}}>
                <Btn variant="ghost" onClick={() => setRoute("journal")}>Estate journal</Btn>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head"><h2>You might also try</h2></div>
          <div className="product-grid">
            {PRODUCTS.filter(x => x.id !== p.id).slice(0, 4).map(prod => (
              <ProductCard key={prod.id} product={prod}
                onOpen={(np) => { window.__activeProduct = np;
                                  window.dispatchEvent(new Event("product-change"));
                                  window.scrollTo(0,0); }} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function Cart({ cart, setCart, setRoute }) {
  const subtotal = cart.reduce((s, l) => s + l.qty * l.product.price, 0);
  const shipping = subtotal > 5000 ? 0 : 450;
  const total = subtotal + shipping;
  const set = (id, fn) => setCart(cart.map(l => l.id === id ? { ...l, ...fn(l) } : l).filter(l => l.qty > 0));

  if (cart.length === 0) {
    return (
      <main className="page">
        <section className="section" style={{paddingTop: 96, paddingBottom: 96, textAlign:"center"}}>
          <div className="container">
            <Eyebrow>Your cart</Eyebrow>
            <h1 className="serif" style={{fontSize: 64, letterSpacing:"-.02em", margin: "16px 0 14px", fontWeight: 400}}>
              An <em style={{color:"var(--accent)"}}>empty tin</em> on the shelf.
            </h1>
            <p style={{color:"var(--ink-soft)", maxWidth: "44ch", margin: "0 auto"}}>
              Browse the shop and add a tea — Cloudhouse orders ship every Thursday.
            </p>
            <div className="row" style={{justifyContent:"center", marginTop: 24}}>
              <Btn variant="accent" onClick={() => setRoute("shop")}>Browse the shop</Btn>
            </div>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="page">
      <section className="section" style={{paddingTop: 56}}>
        <div className="container" style={{display:"grid", gridTemplateColumns:"1.5fr 1fr", gap: 56}}>
          <div>
            <Eyebrow>Your cart · {cart.length} item{cart.length !== 1 ? "s" : ""}</Eyebrow>
            <h1 className="serif" style={{fontSize: 48, letterSpacing:"-.02em",
                                          margin: "14px 0 24px", fontWeight: 400}}>
              Ready to <em style={{color:"var(--accent)"}}>steep.</em>
            </h1>

            <div>
              {cart.map(line => (
                <div key={line.id} className="cart-line">
                  <PH label={line.product.region.slice(0,3)} />
                  <div className="stack-2">
                    <div className="mono" style={{fontSize: 10.5, color:"var(--ink-mute)",
                                                  letterSpacing:".1em", textTransform:"uppercase"}}>
                      {line.product.region} · {line.size}
                    </div>
                    <div style={{fontFamily:"var(--f-display)", fontSize: 19}}>{line.product.name}</div>
                  </div>
                  <div className="qty">
                    <button onClick={() => set(line.id, l => ({qty: l.qty - 1}))}>−</button>
                    <span>{line.qty}</span>
                    <button onClick={() => set(line.id, l => ({qty: l.qty + 1}))}>+</button>
                  </div>
                  <div className="mono" style={{textAlign:"right", fontVariantNumeric:"tabular-nums"}}>
                    LKR {(line.product.price * line.qty).toLocaleString()}
                  </div>
                  <button style={{border:0, background:"transparent", color:"var(--ink-mute)",
                                  cursor:"pointer", fontSize: 18}}
                          onClick={() => set(line.id, () => ({qty: 0}))}>×</button>
                </div>
              ))}
            </div>

            <div className="row" style={{marginTop: 28}}>
              <Btn variant="ghost" onClick={() => setRoute("shop")}>← Keep browsing</Btn>
            </div>
          </div>

          <div className="summary">
            <div className="mono" style={{fontSize: 11, letterSpacing:".12em",
                                          textTransform:"uppercase", color:"var(--ink-mute)"}}>
              Order summary
            </div>
            <div style={{marginTop: 14}}>
              <div className="ln"><span>Subtotal</span><span>LKR {subtotal.toLocaleString()}</span></div>
              <div className="ln"><span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `LKR ${shipping.toLocaleString()}`}</span></div>
              <div className="ln"><span>Tax</span><span>Included</span></div>
              <div className="ln total"><span>Total</span><span>LKR {total.toLocaleString()}</span></div>
            </div>
            <Btn variant="accent" style={{width:"100%", justifyContent:"center", marginTop: 18}}
                 onClick={() => setRoute("checkout")}>
              Checkout →
            </Btn>
            <div className="row" style={{justifyContent:"center", gap: 14, marginTop: 12,
                                         color:"var(--ink-mute)", fontSize: 12}}>
              <span>Visa</span><span>Mastercard</span><span>PayHere</span><span>FrimiPay</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Checkout({ cart, setCart, setRoute }) {
  const [step, setStep] = React.useState(1);
  const subtotal = cart.reduce((s, l) => s + l.qty * l.product.price, 0);
  const shipping = subtotal > 5000 ? 0 : 450;
  const total = subtotal + shipping;

  return (
    <main className="page">
      <section className="section" style={{paddingTop: 56}}>
        <div className="container" style={{display:"grid", gridTemplateColumns:"1.5fr 1fr", gap: 56}}>
          <div>
            <Eyebrow>Checkout</Eyebrow>
            <h1 className="serif" style={{fontSize: 44, letterSpacing:"-.02em",
                                          margin: "12px 0 28px", fontWeight: 400}}>
              {step === 4 ? "Thank you." : "A few details."}
            </h1>

            {step < 4 && (
              <div className="stepper">
                {[
                  { n: 1, l: "Contact" },
                  { n: 2, l: "Address" },
                  { n: 3, l: "Payment" }
                ].map((s, i) => (
                  <React.Fragment key={s.n}>
                    <div className={`step ${step === s.n ? "active" : ""} ${step > s.n ? "done" : ""}`}>
                      <span className="n">{step > s.n ? "✓" : s.n}</span>
                      <span>{s.l}</span>
                    </div>
                    {i < 2 && <div style={{flex: 1, height: 1, background:"var(--line)", alignSelf:"center"}} />}
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
                <div className="row" style={{gap: 14}}>
                  <div style={{flex:1}}>
                    <label className="label">First name</label>
                    <input className="field" />
                  </div>
                  <div style={{flex:1}}>
                    <label className="label">Last name</label>
                    <input className="field" />
                  </div>
                </div>
                <div>
                  <label className="label">Phone (for delivery)</label>
                  <input className="field" placeholder="+94 ..." />
                </div>
                <Btn variant="accent" onClick={() => setStep(2)}>Continue to address →</Btn>
              </div>
            )}

            {step === 2 && (
              <div className="stack-4">
                <div>
                  <label className="label">Street address</label>
                  <input className="field" placeholder="No. 14, Cottage Lane" />
                </div>
                <div className="row" style={{gap: 14}}>
                  <div style={{flex:1}}>
                    <label className="label">City</label>
                    <input className="field" placeholder="Colombo" />
                  </div>
                  <div style={{flex:1}}>
                    <label className="label">Postal code</label>
                    <input className="field" placeholder="00100" />
                  </div>
                </div>
                <div>
                  <label className="label">Country</label>
                  <input className="field" placeholder="Sri Lanka" />
                </div>
                <div className="row">
                  <Btn variant="ghost" onClick={() => setStep(1)}>← Back</Btn>
                  <Btn variant="accent" onClick={() => setStep(3)}>Continue to payment →</Btn>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="stack-4">
                <div>
                  <label className="label">Card number</label>
                  <input className="field" placeholder="•••• •••• •••• ••••" />
                </div>
                <div className="row" style={{gap: 14}}>
                  <div style={{flex:1}}>
                    <label className="label">Expiry</label>
                    <input className="field" placeholder="MM / YY" />
                  </div>
                  <div style={{flex:1}}>
                    <label className="label">CVC</label>
                    <input className="field" placeholder="•••" />
                  </div>
                </div>
                <div>
                  <label className="label">Name on card</label>
                  <input className="field" />
                </div>
                <div className="row">
                  <Btn variant="ghost" onClick={() => setStep(2)}>← Back</Btn>
                  <Btn variant="accent" onClick={() => { setStep(4); setCart([]); }}>
                    Place order — LKR {total.toLocaleString()}
                  </Btn>
                </div>
              </div>
            )}

            {step === 4 && (
              <div className="stack-4">
                <PH label="ORDER CONFIRMED · 21:9" style={{aspectRatio: "21/6", marginBottom: 8}} />
                <p style={{color:"var(--ink-soft)", maxWidth: "56ch", fontSize: 17}}>
                  Order <span className="mono" style={{color:"var(--ink)"}}>#CH-26-04812</span>
                  {" "}is on its way. We pack and ship every Thursday from Nuwara Eliya — your tea
                  should arrive within five working days.
                </p>
                <div className="row" style={{marginTop: 8}}>
                  <Btn variant="accent" onClick={() => setRoute("shop")}>Back to the shop</Btn>
                  <Btn variant="ghost" onClick={() => setRoute("journal")}>Read the journal</Btn>
                </div>
              </div>
            )}
          </div>

          <div className="summary">
            <div className="mono" style={{fontSize: 11, letterSpacing:".12em",
                                          textTransform:"uppercase", color:"var(--ink-mute)"}}>
              Your order
            </div>
            <div style={{marginTop: 12}}>
              {cart.length === 0 && step === 4 && (
                <div style={{color:"var(--ink-mute)", padding: "12px 0", fontSize: 14}}>
                  ✓ Shipping to your address
                </div>
              )}
              {cart.map(l => (
                <div key={l.id} className="row" style={{padding: "10px 0",
                                                         borderBottom:"1px solid var(--line)"}}>
                  <PH label="" style={{width: 44, height: 44, aspectRatio: 1, flexShrink: 0}} />
                  <div style={{flex:1}}>
                    <div style={{fontSize: 14}}>{l.product.name}</div>
                    <div className="mono" style={{fontSize: 10.5, color:"var(--ink-mute)",
                                                  letterSpacing:".1em", textTransform:"uppercase"}}>
                      {l.size} · ×{l.qty}
                    </div>
                  </div>
                  <div className="mono" style={{fontSize: 13}}>
                    {(l.product.price * l.qty).toLocaleString()}
                  </div>
                </div>
              ))}
            </div>
            <div style={{marginTop: 12}}>
              <div className="ln"><span>Subtotal</span><span>LKR {subtotal.toLocaleString()}</span></div>
              <div className="ln"><span>Shipping</span>
                <span>{shipping === 0 ? "Free" : `LKR ${shipping.toLocaleString()}`}</span></div>
              <div className="ln total"><span>Total</span><span>LKR {total.toLocaleString()}</span></div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Shop, Product, Cart, Checkout });
