// Cloudhouse Ceylon — marketing pages (Home, Journal, JournalPost, About)

function Home({ setRoute, shopUnlocked, audienceCurrent, audienceTarget }) {
  const featured = POSTS.slice(0, 3);
  const products = PRODUCTS.slice(0, 4);
  const pct = Math.min(100, Math.round(audienceCurrent / audienceTarget * 100));

  return (
    <main className="page">
      {/* HERO */}
      <section className="hero">
        <div className="container">
          {/* Editorial layout */}
          <div className="hero-variant hero-editorial">
            <Eyebrow>Ceylon · Single-origin · From the mist</Eyebrow>
            <h1 className="display" style={{marginTop: 16}}>
              Tea grown above<br/>the <em>clouds.</em>
            </h1>
            <p className="hero-sub">
              Cloudhouse is a small Sri Lankan tea project — single-origin leaf from the
              upcountry estates of Nuwara Eliya, Uva and Dimbula, paired with field
              journals from the people who grow it. A round-door cottage in the hills
              is on the way.
            </p>
            <div className="row hero-actions" style={{marginTop: 28, gap: 12}}>
              <Btn onClick={() => setRoute("journal")}>Read the journal →</Btn>
              <Btn variant="ghost" onClick={() => setRoute("shop")}>
                {shopUnlocked ? "Browse the shop" : "Preview the shop"}
              </Btn>
            </div>

            <div className="hero-photo ph" style={{marginTop: 56}}>
              <div className="ph-label">HERO PHOTO · TEA PICKERS AT FIRST LIGHT · 21:9</div>
            </div>

            <div className="hero-meta">
              <div className="hero-meta-item">
                <span className="l">Estate elevation</span>
                <span className="v">1,610 — 1,868 m</span>
              </div>
              <div className="hero-meta-item">
                <span className="l">Regions on the page</span>
                <span className="v">Five</span>
              </div>
              <div className="hero-meta-item">
                <span className="l">Journal entries</span>
                <span className="v">{POSTS.length} this season</span>
              </div>
              <div className="hero-meta-item">
                <span className="l">Cottage status</span>
                <span className="v">Foundations laid</span>
              </div>
            </div>
          </div>

          {/* Split layout */}
          <div className="hero-variant hero-grid">
            <div>
              <Eyebrow>Ceylon · Since 2024</Eyebrow>
              <h1 className="display" style={{marginTop: 16}}>
                Tea grown above the <em>clouds.</em>
              </h1>
              <p className="hero-sub">Single-origin leaf from the upcountry mist.</p>
            </div>
            <PH label="HERO PHOTO · 4:5" />
          </div>

          {/* Centered layout */}
          <div className="hero-variant hero-center">
            <Eyebrow>Cloudhouse · Ceylon</Eyebrow>
            <h1 className="display" style={{marginTop: 16}}>
              Tea grown above<br/>the <em>clouds.</em>
            </h1>
            <p className="hero-sub">Single-origin Ceylon, slow-launched alongside the journal.</p>
            <div className="row hero-actions" style={{gap: 12}}>
              <Btn onClick={() => setRoute("journal")}>Read the journal →</Btn>
              <Btn variant="ghost" onClick={() => setRoute("shop")}>Preview the shop</Btn>
            </div>
            <div className="hero-disc" />
          </div>
        </div>
      </section>

      <Marquee items={[
        "Nuwara Eliya|.",
        "Uva|.",
        "Dimbula|.",
        "Kandy|.",
        "Ruhuna|.",
        "Sabaragamuwa|.",
        "Above 1,500 m|."
      ]} />

      {/* JOURNAL TEASER */}
      <section className="section">
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>The Journal</Eyebrow>
              <h2 style={{marginTop: 10}}>Field notes from <em>the leaf.</em></h2>
            </div>
            <a href="#" onClick={(e) => { e.preventDefault(); setRoute("journal"); }}
               className="mono" style={{fontSize: 12, letterSpacing: ".1em", textTransform:"uppercase",
                                        color:"var(--ink-soft)"}}>
              All entries →
            </a>
          </div>

          <div className="journal-grid">
            {featured.map(p => (
              <JournalCard key={p.id} post={p}
                onOpen={(post) => { setRoute("post"); window.__activePost = post; window.dispatchEvent(new Event("post-change")); }} />
            ))}
          </div>
        </div>
      </section>

      {/* THE HOUSE TEASER */}
      <section className="section" style={{background: "var(--bg-2)", borderTop: "1px solid var(--line)", borderBottom: "1px solid var(--line)"}}>
        <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 48, alignItems:"center"}}>
          <div>
            <Eyebrow>The House · In progress</Eyebrow>
            <h2 style={{marginTop: 10, fontFamily: "var(--f-display)", fontSize: "clamp(28px, 3.4vw, 48px)",
                        letterSpacing: "-.015em", lineHeight: 1.02, margin: 0, fontWeight: 400}}>
              A small round-door cottage,<br/>somewhere above the cloud line.
            </h2>
            <p style={{marginTop: 18, maxWidth: "44ch", color:"var(--ink-soft)", fontSize: 16}}>
              We're building a tiny stone-and-timber retreat in the upcountry — one
              circular door, one long table, one stove on at all hours. Tea drinkers
              welcome, eventually.
            </p>
            <div className="row" style={{marginTop: 22}}>
              <Btn variant="ghost" onClick={() => setRoute("about")}>Read the build journal</Btn>
            </div>
          </div>
          <PH label="THE HOUSE · CONCEPT RENDER · 4:3" style={{aspectRatio: "4/3"}} />
        </div>
      </section>

      {/* REGIONS */}
      <section className="section">
        <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1.3fr", gap: 56, alignItems:"start"}}>
          <div style={{position:"sticky", top: 88}}>
            <Eyebrow>The Map</Eyebrow>
            <h2 style={{marginTop: 10, fontFamily:"var(--f-display)", fontSize: "clamp(28px, 3.4vw, 48px)",
                        letterSpacing: "-.015em", lineHeight: 1.02, margin: 0, fontWeight: 400}}>
              Five regions,<br/>five <em>cups.</em>
            </h2>
            <p style={{marginTop: 16, maxWidth: "38ch", color:"var(--ink-soft)"}}>
              Ceylon tea is shaped by elevation, monsoon, and soil. We work with
              smallholder estates across five tea regions of Sri Lanka.
            </p>
            <div className="stack-3" style={{marginTop: 24}}>
              {[
                { id:"nuwara", name:"Nuwara Eliya", elev:"1,800+ m", note:"Bright, floral, the 'champagne' of Ceylon"},
                { id:"uva", name:"Uva", elev:"1,400–1,800 m", note:"Wintergreen, honey, single-flush prized"},
                { id:"dimbula", name:"Dimbula", elev:"1,100–1,650 m", note:"Brisk citrus, the classic morning cup"},
                { id:"kandy", name:"Kandy", elev:"600–1,200 m", note:"Malt-forward, mid-grown rounded body"},
                { id:"ruhuna", name:"Ruhuna", elev:"sea — 600 m", note:"Low-grown, caramel and cocoa weight"}
              ].map(r => (
                <div key={r.id} style={{display:"grid", gridTemplateColumns:"1fr auto", gap: 8,
                                        padding: "14px 0", borderBottom: "1px solid var(--line)"}}>
                  <div>
                    <div style={{fontFamily:"var(--f-display)", fontSize: 20}}>{r.name}</div>
                    <div style={{fontSize: 13, color:"var(--ink-soft)", marginTop: 2}}>{r.note}</div>
                  </div>
                  <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                                letterSpacing:".08em", alignSelf:"start", paddingTop: 4}}>
                    {r.elev}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <CeylonMap />
        </div>
      </section>

      {/* SHOP TEASER — locked or unlocked */}
      <section className="section" style={{background: "var(--bg-2)", borderTop:"1px solid var(--line)"}}>
        <div className="container">
          <div className="section-head">
            <div>
              <Eyebrow>{shopUnlocked ? "The Shop · Open" : "The Shop · Locked"}</Eyebrow>
              <h2 style={{marginTop: 10}}>
                {shopUnlocked ? <>Pure Ceylon, <em>shipped warm.</em></> : <>Opening at <em>{audienceTarget.toLocaleString()}</em> readers.</>}
              </h2>
            </div>
            {shopUnlocked && (
              <a href="#" onClick={(e) => { e.preventDefault(); setRoute("shop"); }}
                 className="mono" style={{fontSize: 12, letterSpacing: ".1em", textTransform:"uppercase",
                                          color:"var(--ink-soft)"}}>
                Full catalogue →
              </a>
            )}
          </div>

          {shopUnlocked ? (
            <div className="product-grid">
              {products.map(p => (
                <ProductCard key={p.id} product={p}
                  onOpen={(prod) => { setRoute("product"); window.__activeProduct = prod;
                                       window.dispatchEvent(new Event("product-change")); }} />
              ))}
            </div>
          ) : (
            <div className="locked">
              <div className="ph-bg" style={{
                background: "repeating-linear-gradient(135deg, transparent 0 22px, color-mix(in oklch, var(--ink) 5%, transparent) 22px 23px)"
              }} />
              <div className="inner">
                <Eyebrow>Audience-gated</Eyebrow>
                <h3 style={{fontFamily:"var(--f-display)", fontSize: 36, margin: "12px 0 6px",
                            fontWeight: 400, letterSpacing:"-.015em"}}>
                  The shop opens when the journal does.
                </h3>
                <p style={{color:"var(--ink-soft)", maxWidth: "50ch", margin: "0 auto"}}>
                  We're slow-launching. Once {audienceTarget.toLocaleString()} readers have joined
                  the Cloudhouse journal, we'll open online ordering for tea pulled this season.
                </p>

                <div className="threshold-bar"><i style={{width: pct + "%"}} /></div>
                <div className="threshold-label">
                  <span>{audienceCurrent.toLocaleString()} readers · {pct}%</span>
                  <span>Target: {audienceTarget.toLocaleString()}</span>
                </div>

                <div className="row" style={{marginTop: 22, justifyContent:"center"}}>
                  <input className="field" placeholder="you@somewhere.com"
                         style={{maxWidth: 280, height: 44}} />
                  <Btn variant="accent">Join the journal</Btn>
                </div>

                <div className="pills" style={{marginTop: 22, justifyContent:"center"}}>
                  <span className="pill">Preview the catalogue ↗</span>
                  <span className="pill">When? Q3 2026</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* QUOTE */}
      <section className="section">
        <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 56}}>
          <div className="quote">
            "You don't drink the elevation. <em>But you can taste it,</em> if the leaf has been left alone."
          </div>
          <div className="stack-3">
            <Eyebrow>Letter from the field · No. 04</Eyebrow>
            <p style={{color:"var(--ink-soft)"}}>
              Every Cloudhouse tea is single-estate and single-flush. We don't blend across
              regions or years. The cup you receive in May is the cup that grew in March.
            </p>
            <p style={{color:"var(--ink-soft)"}}>
              That's also why we're slow. Our small volumes go fast, and we won't stretch a
              harvest by mixing.
            </p>
            <div className="row" style={{gap: 12, marginTop: 10}}>
              <PH className="round" style={{width: 44, height: 44, aspectRatio: 1}} />
              <div>
                <div style={{fontFamily:"var(--f-display)", fontSize: 16}}>Sahan Wijesinghe</div>
                <div className="mono" style={{fontSize: 10.5, letterSpacing: ".1em",
                                              textTransform:"uppercase", color:"var(--ink-mute)"}}>
                  Founder · Tea buyer
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Journal({ setRoute }) {
  const [filter, setFilter] = React.useState("All");
  const cats = ["All", ...new Set(POSTS.map(p => p.category))];
  const list = filter === "All" ? POSTS : POSTS.filter(p => p.category === filter);

  return (
    <main className="page">
      <section className="section" style={{paddingTop: 56}}>
        <div className="container">
          <Eyebrow>The Journal · {POSTS.length} entries this season</Eyebrow>
          <h1 className="serif" style={{fontSize: "clamp(48px, 7vw, 96px)", lineHeight: .98,
                                         letterSpacing: "-.025em", margin: "18px 0 32px"}}>
            Stories from <em style={{color:"var(--accent)"}}>the leaf.</em>
          </h1>

          <div className="between" style={{borderTop: "1px solid var(--line)", paddingTop: 20}}>
            <div className="pills">
              {cats.map(c => (
                <button key={c} className={`pill ${filter === c ? "active" : ""}`}
                        onClick={() => setFilter(c)}>{c}</button>
              ))}
            </div>
            <div className="mono" style={{fontSize: 11, color: "var(--ink-mute)",
                                          letterSpacing:".1em", textTransform:"uppercase"}}>
              Showing {list.length} of {POSTS.length}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{paddingTop: 24}}>
        <div className="container">
          {/* Featured first */}
          {filter === "All" && (
            <article style={{display:"grid", gridTemplateColumns:"1.3fr 1fr", gap: 56,
                             marginBottom: 64, cursor:"pointer"}}
                     onClick={() => { window.__activePost = POSTS[0]; setRoute("post"); }}>
              <PH label="FEATURED · 21:9" style={{aspectRatio: "21/9"}} />
              <div className="stack-3" style={{alignSelf:"center"}}>
                <div className="row" style={{gap: 10}}>
                  <Tag variant="accent">Featured</Tag>
                  <Tag>{POSTS[0].category}</Tag>
                </div>
                <h2 className="serif" style={{fontSize: 40, lineHeight: 1.08,
                                              letterSpacing:"-.015em", margin: 0, fontWeight: 400}}>
                  {POSTS[0].title}
                </h2>
                <p style={{color:"var(--ink-soft)"}}>{POSTS[0].excerpt}</p>
                <div className="mono" style={{fontSize: 11, color: "var(--ink-mute)",
                                              letterSpacing:".08em", textTransform:"uppercase"}}>
                  {POSTS[0].date} · {POSTS[0].read}
                </div>
              </div>
            </article>
          )}

          <div className="journal-grid">
            {(filter === "All" ? list.slice(1) : list).map(p => (
              <JournalCard key={p.id} post={p}
                onOpen={(post) => { window.__activePost = post; setRoute("post"); }} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function JournalPost({ setRoute }) {
  const [post, setPost] = React.useState(window.__activePost || POSTS[0]);
  React.useEffect(() => {
    const handler = () => setPost(window.__activePost || POSTS[0]);
    window.addEventListener("post-change", handler);
    return () => window.removeEventListener("post-change", handler);
  }, []);
  const body = post.body || [
    "Lorem note from the field. The post body is held in the admin CMS — this preview shows the published shape.",
    "Each paragraph runs at a measure of about 70 characters. Pull-quotes and inline imagery sit in the same grid.",
    "When we publish a film we drop the embed in place of the lede photo. Recipes break into ingredients and method."
  ];

  return (
    <main className="page">
      <article className="container" style={{maxWidth: 760, paddingTop: 56, paddingBottom: 96}}>
        <a href="#" onClick={(e) => { e.preventDefault(); setRoute("journal"); }}
           className="mono" style={{fontSize: 11, letterSpacing:".12em", textTransform:"uppercase",
                                    color:"var(--ink-mute)"}}>
          ← The Journal
        </a>
        <div className="row" style={{gap: 10, marginTop: 24}}>
          <Tag variant="accent">{post.category}</Tag>
          <span className="mono" style={{fontSize: 11, color:"var(--ink-mute)", letterSpacing:".08em",
                                         textTransform:"uppercase"}}>
            {post.date} · {post.read}
          </span>
        </div>
        <h1 className="serif" style={{fontSize: "clamp(36px, 5vw, 64px)", lineHeight: 1.04,
                                       letterSpacing:"-.02em", margin: "20px 0 24px", fontWeight: 400}}>
          {post.title}
        </h1>
        <p style={{fontSize: 19, lineHeight: 1.6, color:"var(--ink-soft)", marginBottom: 36}}>
          {post.excerpt}
        </p>

        <PH label="LEDE PHOTO · 16:9" style={{aspectRatio: "16/9", marginBottom: 36}} />

        <div style={{fontSize: 17.5, lineHeight: 1.78}}>
          {body.map((p, i) => (
            <React.Fragment key={i}>
              <p>{p}</p>
              {i === 1 && (
                <blockquote style={{borderLeft: "2px solid var(--accent)", paddingLeft: 24, margin: "32px 0",
                                    fontFamily:"var(--f-display)", fontSize: 26, lineHeight: 1.3,
                                    letterSpacing:"-.01em", color: "var(--ink)"}}>
                  "You can't rush the second flush. The leaf tells you when."
                </blockquote>
              )}
              {i === 2 && (
                <PH label="ESTATE MAP · 21:9" style={{aspectRatio: "21/9", margin: "28px 0"}} />
              )}
            </React.Fragment>
          ))}
        </div>

        <div className="divider" style={{marginTop: 56}}>
          <div className="line" /><span className="mark" /><div className="line" />
        </div>

        <div className="row" style={{justifyContent:"space-between", marginTop: 40, alignItems:"center"}}>
          <div className="row">
            <PH className="round" style={{width: 56, height: 56, aspectRatio: 1}} />
            <div>
              <div style={{fontFamily:"var(--f-display)", fontSize: 18}}>Sahan Wijesinghe</div>
              <div className="mono" style={{fontSize: 10.5, letterSpacing: ".1em",
                                            textTransform:"uppercase", color:"var(--ink-mute)"}}>
                Founder · Field correspondent
              </div>
            </div>
          </div>
          <div className="row" style={{gap: 8}}>
            <Btn variant="ghost" small>Share</Btn>
            <Btn variant="ghost" small>Save</Btn>
          </div>
        </div>
      </article>

      <section className="section" style={{background: "var(--bg-2)", borderTop: "1px solid var(--line)"}}>
        <div className="container">
          <div className="section-head">
            <h2>More from the journal</h2>
          </div>
          <div className="journal-grid">
            {POSTS.filter(p => p.id !== post.id).slice(0, 3).map(p => (
              <JournalCard key={p.id} post={p}
                onOpen={(np) => { window.__activePost = np;
                                  window.dispatchEvent(new Event("post-change"));
                                  window.scrollTo(0,0); }} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

function About({ setRoute }) {
  return (
    <main className="page">
      <section className="section" style={{paddingTop: 56}}>
        <div className="container">
          <Eyebrow>The House · A small upcountry cottage</Eyebrow>
          <h1 className="serif" style={{fontSize: "clamp(56px, 8vw, 120px)", lineHeight: .96,
                                        letterSpacing:"-.025em", margin: "20px 0 0", fontWeight: 400}}>
            One door,<br/>one <em style={{color:"var(--accent)"}}>long table,</em><br/>one stove on.
          </h1>
          <p style={{maxWidth: "60ch", fontSize: 18, color:"var(--ink-soft)", marginTop: 28}}>
            Cloudhouse is also a place — eventually. We're building a small round-door cottage
            in the upcountry, somewhere above the cloud line. One room. Stone walls. A long
            shared table where the tea is always hot.
          </p>
        </div>
      </section>

      <section className="section" style={{paddingTop: 0}}>
        <div className="container">
          <PH label="THE HOUSE · CONCEPT 1 · 21:9" style={{aspectRatio: "21/9"}} />
          <div style={{display:"grid", gridTemplateColumns:"repeat(3, 1fr)", gap: 16, marginTop: 16}}>
            <PH label="SITE · 4:5" style={{aspectRatio: "4/5"}} />
            <PH label="STONE WORK · 4:5" style={{aspectRatio: "4/5"}} />
            <PH label="DOOR DETAIL · 4:5" style={{aspectRatio: "4/5"}} />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1fr", gap: 56}}>
          <div>
            <Eyebrow>Build log</Eyebrow>
            <div className="stack-4" style={{marginTop: 18}}>
              {[
                { d: "Apr 2026", t: "Foundations laid", n: "Stone footings cut from a quarry 4 km downhill." },
                { d: "Feb 2026", t: "Land surveyed", n: "Half a hectare on a south-facing slope, 1,720 m." },
                { d: "Nov 2025", t: "First sketches", n: "A single room, a round door, a hearth." },
                { d: "—", t: "Doors open · TBD", n: "When the leaf and the cottage are both ready." }
              ].map((s, i) => (
                <div key={i} style={{display:"grid", gridTemplateColumns:"100px 1fr", gap: 18,
                                     paddingBottom: 18, borderBottom: "1px solid var(--line)"}}>
                  <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                                letterSpacing:".1em", textTransform:"uppercase"}}>{s.d}</div>
                  <div>
                    <div style={{fontFamily:"var(--f-display)", fontSize: 20}}>{s.t}</div>
                    <div style={{color:"var(--ink-soft)", fontSize: 14, marginTop: 4}}>{s.n}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <Eyebrow>What it is, what it isn't</Eyebrow>
            <p style={{marginTop: 18, color:"var(--ink-soft)"}}>
              The cottage isn't a hotel. It's a small place to host tea drinkers a few at a time —
              estate visits, tasting sessions, an afternoon by the stove when the rain comes in
              sideways and stays.
            </p>
            <p style={{color:"var(--ink-soft)"}}>
              We'll open a small waiting list when the roof is on. For now, the journal is the
              best way to follow the build.
            </p>
            <div className="row" style={{marginTop: 22}}>
              <Btn onClick={() => setRoute("journal")}>Follow the build</Btn>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { Home, Journal, JournalPost, About });
