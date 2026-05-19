// Cloudhouse Ceylon — admin pages

function AdminLogin({ setRoute, doLogin }) {
  const [email, setEmail] = React.useState("editor@cloudhouse.lk");
  const [pwd, setPwd] = React.useState("••••••••••");
  return (
    <main className="page" style={{minHeight: "calc(100vh - 68px)", display: "flex",
                                    alignItems: "center", background:"var(--bg-2)"}}>
      <div className="container" style={{display:"grid", gridTemplateColumns:"1fr 1fr",
                                          gap: 56, alignItems:"center"}}>
        <div>
          <Eyebrow>Cloudhouse · Newsroom</Eyebrow>
          <h1 className="serif" style={{fontSize: "clamp(40px, 5vw, 64px)", lineHeight: 1.04,
                                         letterSpacing:"-.02em", margin: "14px 0 18px", fontWeight: 400}}>
            Sign in to the<br/><em style={{color:"var(--accent)"}}>newsroom.</em>
          </h1>
          <p style={{color:"var(--ink-soft)", maxWidth:"46ch"}}>
            The admin space for Cloudhouse editors. Write journal entries, upload films from the
            field, manage the tea catalogue, and watch the audience number tick up.
          </p>
          <div className="row" style={{marginTop: 24, gap: 24}}>
            {[
              { l: "Editors", v: "4" },
              { l: "Last published", v: "2h ago" },
              { l: "Site uptime", v: "100%" }
            ].map(s => (
              <div key={s.l}>
                <div className="mono" style={{fontSize: 10.5, color:"var(--ink-mute)",
                                              letterSpacing:".1em", textTransform:"uppercase"}}>{s.l}</div>
                <div style={{fontFamily:"var(--f-display)", fontSize: 22, marginTop: 2}}>{s.v}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="card" style={{padding: 40}}>
          <div className="stack-4">
            <div>
              <label className="label">Email</label>
              <input className="field" value={email} onChange={e => setEmail(e.target.value)} />
            </div>
            <div>
              <label className="label">Password</label>
              <input className="field" type="password" value={pwd} onChange={e => setPwd(e.target.value)} />
            </div>
            <div className="between" style={{padding: "4px 0"}}>
              <label style={{display:"flex", gap: 8, alignItems:"center", fontSize: 13, color:"var(--ink-soft)"}}>
                <input type="checkbox" defaultChecked /> Keep me signed in
              </label>
              <a href="#" style={{fontSize: 13, color:"var(--ink-soft)"}}>Forgot?</a>
            </div>
            <Btn variant="accent" onClick={() => { doLogin(); setRoute("admin-dash"); }}>
              Sign in to the newsroom
            </Btn>
            <div className="hr-dot"><span>or</span></div>
            <Btn variant="ghost">Continue with Google</Btn>
            <p style={{fontSize: 12, color:"var(--ink-mute)", textAlign:"center", margin: 0}}>
              By signing in you agree to the Cloudhouse editor terms.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

function AdminSidebar({ route, setRoute, audienceCurrent, audienceTarget }) {
  const pct = Math.min(100, Math.round(audienceCurrent / audienceTarget * 100));
  return (
    <aside className="admin-side">
      <Logo />
      <div className="group">
        <h6>Newsroom</h6>
        <a href="#" onClick={(e) => { e.preventDefault(); setRoute("admin-dash"); }}
           className={route === "admin-dash" ? "active" : ""}>
          <span>Overview</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setRoute("admin-posts"); }}
           className={route === "admin-posts" ? "active" : ""}>
          <span>Posts</span><span className="num">{POSTS.length}</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setRoute("admin-editor"); }}
           className={route === "admin-editor" ? "active" : ""}>
          <span>New entry</span><span className="num">⏎ N</span>
        </a>
        <a href="#" onClick={(e) => { e.preventDefault(); setRoute("admin-media"); }}
           className={route === "admin-media" ? "active" : ""}>
          <span>Media</span><span className="num">142</span>
        </a>
      </div>
      <div className="group">
        <h6>Shop</h6>
        <a href="#" onClick={(e) => { e.preventDefault(); setRoute("admin-products"); }}
           className={route === "admin-products" ? "active" : ""}>
          <span>Products</span><span className="num">{PRODUCTS.length}</span>
        </a>
        <a href="#"><span>Orders</span><span className="num">—</span></a>
        <a href="#"><span>Inventory</span><span className="num">—</span></a>
      </div>
      <div className="group">
        <h6>Site</h6>
        <a href="#"><span>Pages</span></a>
        <a href="#"><span>Subscribers</span><span className="num">{audienceCurrent.toLocaleString()}</span></a>
        <a href="#"><span>Settings</span></a>
      </div>

      <div style={{marginTop: 32, padding: 14, border: "1px solid var(--line)",
                   borderRadius: "var(--r-2)", background: "var(--bg-2)"}}>
        <div className="mono" style={{fontSize: 10.5, letterSpacing:".1em", textTransform:"uppercase",
                                      color:"var(--ink-mute)"}}>Audience gate</div>
        <div style={{fontFamily:"var(--f-display)", fontSize: 24, marginTop: 4}}>
          {audienceCurrent.toLocaleString()} <span style={{color:"var(--ink-mute)", fontSize: 14}}>/ {audienceTarget.toLocaleString()}</span>
        </div>
        <div className="threshold-bar" style={{marginTop: 8, height: 4}}>
          <i style={{width: pct + "%"}} />
        </div>
        <div className="mono" style={{fontSize: 10, color:"var(--ink-mute)", marginTop: 6}}>
          Shop opens at 100%
        </div>
      </div>

      <div style={{marginTop: 24, display: "flex", alignItems:"center", gap: 10,
                   padding: "8px 10px"}}>
        <PH className="round" style={{width: 32, height: 32, aspectRatio: 1}} />
        <div>
          <div style={{fontSize: 13.5}}>Sahan W.</div>
          <div className="mono" style={{fontSize: 10, color:"var(--ink-mute)",
                                        letterSpacing:".1em", textTransform:"uppercase"}}>Editor</div>
        </div>
      </div>
    </aside>
  );
}

function AdminDashboard({ route, setRoute, audienceCurrent, audienceTarget }) {
  return (
    <div className="admin-shell">
      <AdminSidebar route={route} setRoute={setRoute}
        audienceCurrent={audienceCurrent} audienceTarget={audienceTarget} />
      <main className="admin-main">
        <div className="admin-top">
          <div>
            <Eyebrow>Newsroom · Thursday, May 7</Eyebrow>
            <h1 style={{marginTop: 6}}>Good morning, Sahan.</h1>
          </div>
          <div className="row">
            <Btn variant="ghost" small>Preview site ↗</Btn>
            <Btn small onClick={() => setRoute("admin-editor")}>+ New entry</Btn>
          </div>
        </div>

        <div className="stat-grid">
          <div className="stat"><div className="l">Subscribers</div>
            <div className="v">{audienceCurrent.toLocaleString()} <em>+184 this week</em></div></div>
          <div className="stat"><div className="l">Posts published</div>
            <div className="v">{POSTS.length} <em>+2 this month</em></div></div>
          <div className="stat"><div className="l">Avg read time</div>
            <div className="v">4:48 <em>+0:12</em></div></div>
          <div className="stat"><div className="l">Shop status</div>
            <div className="v" style={{color:"var(--accent-2)"}}>Locked
              <em>{Math.round(audienceCurrent/audienceTarget*100)}% to open</em></div></div>
        </div>

        <div style={{display:"grid", gridTemplateColumns:"1.4fr 1fr", gap: 24, marginTop: 24}}>
          <div className="card" style={{padding: 24}}>
            <div className="between">
              <div>
                <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                              letterSpacing:".12em", textTransform:"uppercase"}}>
                  Audience growth · 90 days
                </div>
                <div style={{fontFamily:"var(--f-display)", fontSize: 28, marginTop: 4}}>
                  {audienceCurrent.toLocaleString()} readers
                </div>
              </div>
              <div className="row" style={{gap: 8}}>
                <Btn variant="ghost" small>30d</Btn>
                <Btn small>90d</Btn>
                <Btn variant="ghost" small>1y</Btn>
              </div>
            </div>
            <svg viewBox="0 0 600 220" style={{width:"100%", height: 220, marginTop: 16}}>
              <defs>
                <linearGradient id="ag" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0" stopColor="var(--accent)" stopOpacity=".35" />
                  <stop offset="1" stopColor="var(--accent)" stopOpacity="0" />
                </linearGradient>
              </defs>
              {[40,80,120,160].map(y => (
                <line key={y} x1="0" x2="600" y1={y} y2={y}
                      stroke="var(--line)" strokeDasharray="2 4" />
              ))}
              <path d="M0 180 C 80 175 140 160 200 150 S 320 130 400 95 S 540 50 600 30 L 600 200 L 0 200 Z"
                    fill="url(#ag)" />
              <path d="M0 180 C 80 175 140 160 200 150 S 320 130 400 95 S 540 50 600 30"
                    fill="none" stroke="var(--accent)" strokeWidth="2" />
              {[
                { x: 80, y: 175 }, { x: 200, y: 150 }, { x: 400, y: 95 }, { x: 600, y: 30 }
              ].map((p, i) => (
                <circle key={i} cx={p.x} cy={p.y} r="3.5" fill="var(--paper)"
                        stroke="var(--accent)" strokeWidth="2" />
              ))}
            </svg>
            <div className="between" style={{borderTop:"1px solid var(--line)", paddingTop: 14, marginTop: 6}}>
              <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                            letterSpacing:".08em"}}>FEB</div>
              <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)"}}>MAR</div>
              <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)"}}>APR</div>
              <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)"}}>MAY</div>
            </div>
          </div>

          <div className="card" style={{padding: 24}}>
            <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                          letterSpacing:".12em", textTransform:"uppercase"}}>
              Activity
            </div>
            <div className="stack-3" style={{marginTop: 14}}>
              {[
                { who: "Iresha P.", what: "published", t: "Mist over Uva", when: "2h" },
                { who: "Dilan K.", what: "uploaded", t: "Estate film · Dimbula (04:12)", when: "5h" },
                { who: "Sahan W.", what: "edited", t: "Brewing guide", when: "1d" },
                { who: "Iresha P.", what: "scheduled", t: "Kandyan winter recipe", when: "1d" },
                { who: "Auto", what: "synced", t: "142 media items to CDN", when: "2d" }
              ].map((a, i) => (
                <div key={i} style={{display:"grid", gridTemplateColumns:"32px 1fr auto", gap: 10,
                                     alignItems:"center", paddingBottom: 12,
                                     borderBottom: "1px solid var(--line)"}}>
                  <PH className="round" style={{aspectRatio: 1, height: 32}} />
                  <div style={{fontSize: 13}}>
                    <strong style={{fontWeight: 500}}>{a.who}</strong>
                    <span style={{color:"var(--ink-mute)"}}> {a.what} </span>
                    <em style={{fontStyle:"normal", color:"var(--ink)"}}>{a.t}</em>
                  </div>
                  <span className="mono" style={{fontSize: 10.5, color:"var(--ink-mute)"}}>{a.when}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="between" style={{marginTop: 36, marginBottom: 14}}>
          <h2 style={{fontFamily:"var(--f-display)", fontWeight: 400, fontSize: 26,
                      letterSpacing:"-.01em", margin: 0}}>Recent posts</h2>
          <Btn variant="ghost" small onClick={() => setRoute("admin-posts")}>All posts →</Btn>
        </div>

        <PostsTable setRoute={setRoute} small />
      </main>
    </div>
  );
}

function PostsTable({ setRoute, small }) {
  const status = ["live", "live", "draft", "live", "live", "draft"];
  const list = small ? POSTS.slice(0, 4) : POSTS;
  return (
    <table className="table">
      <thead>
        <tr>
          <th style={{width: 40}}></th>
          <th>Title</th>
          <th>Category</th>
          <th>Status</th>
          <th>Author</th>
          <th>Updated</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {list.map((p, i) => (
          <tr key={p.id} style={{cursor:"pointer"}}
              onClick={() => { window.__activePost = p; setRoute("admin-editor"); }}>
            <td><PH style={{width: 36, height: 36, aspectRatio: 1}} /></td>
            <td>
              <div style={{fontWeight: 500}}>{p.title}</div>
              <div className="mono" style={{fontSize: 10.5, color:"var(--ink-mute)",
                                            letterSpacing:".08em", textTransform:"uppercase"}}>
                {p.kind}
              </div>
            </td>
            <td>{p.category}</td>
            <td>
              <span className={`status-dot ${status[i] || "live"}`} />
              {(status[i] || "live").replace(/^\w/, c => c.toUpperCase())}
            </td>
            <td>{["Sahan W.", "Iresha P.", "Dilan K."][i % 3]}</td>
            <td className="mono" style={{fontSize: 12, color:"var(--ink-soft)"}}>{p.date}</td>
            <td style={{textAlign:"right", color:"var(--ink-mute)"}}>⋯</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function AdminPosts({ route, setRoute, audienceCurrent, audienceTarget }) {
  return (
    <div className="admin-shell">
      <AdminSidebar route={route} setRoute={setRoute}
        audienceCurrent={audienceCurrent} audienceTarget={audienceTarget} />
      <main className="admin-main">
        <div className="admin-top">
          <div>
            <Eyebrow>All posts</Eyebrow>
            <h1 style={{marginTop: 6}}>Posts · <em style={{color:"var(--ink-mute)",
              fontStyle:"normal", fontSize: 18, fontFamily:"var(--f-mono)",
              letterSpacing:".06em", textTransform:"uppercase"}}>{POSTS.length} entries</em></h1>
          </div>
          <div className="row">
            <input className="field" placeholder="Search posts…" style={{width: 260, height: 36}} />
            <Btn small onClick={() => { window.__activePost = null; setRoute("admin-editor"); }}>
              + New entry
            </Btn>
          </div>
        </div>
        <div className="pills" style={{marginBottom: 18}}>
          {["All", "Estate Story", "Brewing Guide", "Recipe", "The House", "Field Note", "Drafts"].map(c => (
            <button key={c} className={`pill ${c === "All" ? "active" : ""}`}>{c}</button>
          ))}
        </div>
        <PostsTable setRoute={setRoute} />
      </main>
    </div>
  );
}

function AdminEditor({ route, setRoute, audienceCurrent, audienceTarget }) {
  const existing = window.__activePost;
  const [title, setTitle] = React.useState(existing?.title || "");
  const [body, setBody] = React.useState(existing?.body?.join("\n\n") || "");
  const [cat, setCat] = React.useState(existing?.category || "Estate Story");
  return (
    <div className="admin-shell">
      <AdminSidebar route={route} setRoute={setRoute}
        audienceCurrent={audienceCurrent} audienceTarget={audienceTarget} />
      <main className="admin-main">
        <div className="admin-top">
          <div className="row" style={{gap: 14}}>
            <a href="#" onClick={(e) => { e.preventDefault(); setRoute("admin-posts"); }}
               className="mono" style={{fontSize: 11, letterSpacing:".12em", textTransform:"uppercase",
                                        color:"var(--ink-mute)"}}>← Posts</a>
            <span className="mono" style={{fontSize: 11, color:"var(--ink-mute)"}}>·</span>
            <span className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                           letterSpacing:".1em", textTransform:"uppercase"}}>
              {existing ? "Editing" : "New entry"} · Autosaved 12s ago
            </span>
          </div>
          <div className="row">
            <Btn variant="ghost" small>Preview ↗</Btn>
            <Btn variant="ghost" small>Save draft</Btn>
            <Btn small>Publish</Btn>
          </div>
        </div>

        <div className="editor-wrap">
          <div className="editor-card">
            <div className="toolbar">
              <button style={{fontWeight: 700}}>B</button>
              <button style={{fontStyle: "italic"}}>I</button>
              <button style={{textDecoration:"underline"}}>U</button>
              <div className="sep" />
              <button>H1</button>
              <button className="active">H2</button>
              <button>H3</button>
              <div className="sep" />
              <button>"</button>
              <button>—</button>
              <button>•</button>
              <button>1.</button>
              <div className="sep" />
              <button>🖼</button>
              <button>▶</button>
              <button>⌘</button>
            </div>
            <input className="editor-title" placeholder="A title that earns its space"
                   value={title} onChange={e => setTitle(e.target.value)} />
            <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                          letterSpacing:".1em", textTransform:"uppercase", marginTop: 8}}>
              {existing?.date || "Saving as draft · " + new Date().toDateString()} · {existing?.read || "—"}
            </div>
            <textarea className="editor-body" placeholder={
              "There is a particular hush to the Uva highlands in early May…\n\nPress / for blocks."
            } value={body} onChange={e => setBody(e.target.value)} />

            {/* Block inserter hint */}
            <div className="hr-dot" style={{margin: "20px 0"}}>
              <span>Insert block · ↵ Photo · ↵↵ Film · / Recipe</span>
            </div>
            <div className="row" style={{gap: 10}}>
              <button className="upload-tile" style={{aspectRatio:"auto", height: 60,
                       flexDirection:"row", padding: "0 18px"}}>
                <span style={{fontSize: 18}}>+</span> Add cover photo
              </button>
              <button className="upload-tile" style={{aspectRatio:"auto", height: 60,
                       flexDirection:"row", padding: "0 18px"}}>
                <span style={{fontSize: 18}}>▶</span> Embed YouTube / Vimeo
              </button>
              <button className="upload-tile" style={{aspectRatio:"auto", height: 60,
                       flexDirection:"row", padding: "0 18px"}}>
                <span style={{fontSize: 18}}>⌘</span> Upload film
              </button>
            </div>
          </div>

          <aside className="stack-4" style={{position:"sticky", top: 24}}>
            <div className="card" style={{padding: 20}}>
              <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                            letterSpacing:".12em", textTransform:"uppercase"}}>
                Publish
              </div>
              <div className="stack-3" style={{marginTop: 14}}>
                <div>
                  <label className="label">Status</label>
                  <select className="field">
                    <option>Draft</option>
                    <option>Scheduled</option>
                    <option>Live</option>
                  </select>
                </div>
                <div>
                  <label className="label">Publish date</label>
                  <input className="field" defaultValue="May 11, 2026" />
                </div>
                <div>
                  <label className="label">Category</label>
                  <select className="field" value={cat} onChange={e => setCat(e.target.value)}>
                    <option>Estate Story</option>
                    <option>Brewing Guide</option>
                    <option>Recipe</option>
                    <option>The House</option>
                    <option>Field Note</option>
                  </select>
                </div>
                <div>
                  <label className="label">Tags</label>
                  <div className="pills">
                    <span className="pill active">uva</span>
                    <span className="pill active">single-flush</span>
                    <span className="pill">+ add</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="card" style={{padding: 20}}>
              <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                            letterSpacing:".12em", textTransform:"uppercase"}}>
                SEO preview
              </div>
              <div style={{marginTop: 12, padding: 12, background: "var(--bg-2)",
                           borderRadius: "var(--r-2)"}}>
                <div style={{fontFamily:"var(--f-display)", fontSize: 16, color:"var(--accent)"}}>
                  {title || "Untitled · Cloudhouse Ceylon"}
                </div>
                <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)", marginTop: 2}}>
                  cloudhouse.lk/journal/…
                </div>
                <div style={{fontSize: 13, color:"var(--ink-soft)", marginTop: 6}}>
                  {body.split("\n")[0]?.slice(0, 150) || "Add a lede paragraph — first 150 characters appear here."}…
                </div>
              </div>
            </div>

            <div className="card" style={{padding: 20}}>
              <div className="mono" style={{fontSize: 11, color:"var(--ink-mute)",
                                            letterSpacing:".12em", textTransform:"uppercase"}}>
                Co-authors
              </div>
              <div className="stack-3" style={{marginTop: 12}}>
                {[
                  { n: "Sahan W.", r: "Lead writer" },
                  { n: "Iresha P.", r: "Editor" }
                ].map(c => (
                  <div key={c.n} className="row">
                    <PH className="round" style={{width: 28, height: 28, aspectRatio: 1}} />
                    <div>
                      <div style={{fontSize: 13.5}}>{c.n}</div>
                      <div className="mono" style={{fontSize: 10, color:"var(--ink-mute)",
                                                    letterSpacing:".1em", textTransform:"uppercase"}}>
                        {c.r}
                      </div>
                    </div>
                  </div>
                ))}
                <Btn variant="ghost" small>+ Invite</Btn>
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  );
}

function AdminMedia({ route, setRoute, audienceCurrent, audienceTarget }) {
  const media = [
    { t: "PHOTO", l: "uva-pickers-dawn.jpg" },
    { t: "FILM", l: "dimbula-04-12.mp4" },
    { t: "PHOTO", l: "leaf-detail-03.jpg" },
    { t: "PHOTO", l: "estate-map-uva.png" },
    { t: "EMBED", l: "youtube · nuwara estate" },
    { t: "PHOTO", l: "tin-shoot-mountain.jpg" },
    { t: "PHOTO", l: "ruhuna-lowland.jpg" },
    { t: "FILM", l: "the-house-build-01.mp4" },
    { t: "PHOTO", l: "kandy-table.jpg" },
  ];
  return (
    <div className="admin-shell">
      <AdminSidebar route={route} setRoute={setRoute}
        audienceCurrent={audienceCurrent} audienceTarget={audienceTarget} />
      <main className="admin-main">
        <div className="admin-top">
          <div>
            <Eyebrow>Media library</Eyebrow>
            <h1 style={{marginTop: 6}}>Photos, films, embeds.</h1>
          </div>
          <div className="row">
            <input className="field" placeholder="Search media…" style={{width: 260, height: 36}} />
            <Btn small>↑ Upload</Btn>
          </div>
        </div>
        <div className="pills" style={{marginBottom: 18}}>
          {["All · 142", "Photos · 116", "Films · 21", "Embeds · 5", "Drafts"].map(c => (
            <button key={c} className={`pill ${c.startsWith("All") ? "active" : ""}`}>{c}</button>
          ))}
        </div>
        <div className="media-grid">
          <button className="upload-tile">
            <span style={{fontSize: 24}}>+</span>
            Drag files or browse
          </button>
          {media.map((m, i) => (
            <div key={i} className="media-tile">
              <PH label="" />
              <span className="badge">{m.t}</span>
              <div style={{position:"absolute", left: 8, right: 8, bottom: 8,
                           fontFamily:"var(--f-mono)", fontSize: 10, color: "var(--paper)",
                           background:"rgba(0,0,0,.55)", padding: "4px 6px", borderRadius: 4,
                           textOverflow:"ellipsis", overflow:"hidden", whiteSpace:"nowrap"}}>
                {m.l}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

function AdminProducts({ route, setRoute, audienceCurrent, audienceTarget }) {
  return (
    <div className="admin-shell">
      <AdminSidebar route={route} setRoute={setRoute}
        audienceCurrent={audienceCurrent} audienceTarget={audienceTarget} />
      <main className="admin-main">
        <div className="admin-top">
          <div>
            <Eyebrow>Catalogue</Eyebrow>
            <h1 style={{marginTop: 6}}>Products · <em style={{color:"var(--ink-mute)",
              fontStyle:"normal", fontSize: 18, fontFamily:"var(--f-mono)",
              letterSpacing:".06em", textTransform:"uppercase"}}>{PRODUCTS.length} SKUs</em></h1>
          </div>
          <div className="row">
            <Btn variant="ghost" small>Export CSV</Btn>
            <Btn small>+ New product</Btn>
          </div>
        </div>

        <div style={{padding: 14, background: "var(--bg-3)", border: "1px solid var(--line)",
                     borderRadius: "var(--r-2)", marginBottom: 18,
                     display: "flex", gap: 14, alignItems:"center"}}>
          <span className="badge-lock"><span className="icon" /></span>
          <div style={{flex: 1}}>
            <div style={{fontWeight: 500}}>The storefront is currently locked.</div>
            <div style={{fontSize: 13, color:"var(--ink-soft)"}}>
              Catalogue is editable now; products go live when audience reaches the unlock threshold.
            </div>
          </div>
          <Btn variant="ghost" small>Manage gate</Btn>
        </div>

        <table className="table">
          <thead>
            <tr>
              <th style={{width: 50}}></th>
              <th>Name</th>
              <th>Region</th>
              <th>Grade</th>
              <th>Price</th>
              <th>Stock</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {PRODUCTS.map((p, i) => (
              <tr key={p.id}>
                <td><PH style={{width: 40, height: 40, aspectRatio: 1}} /></td>
                <td><div style={{fontWeight: 500}}>{p.name}</div>
                  <div className="mono" style={{fontSize: 10.5, color:"var(--ink-mute)",
                                                letterSpacing:".08em"}}>{p.estate}</div></td>
                <td>{p.region}</td>
                <td className="mono" style={{fontSize: 12}}>{p.grade.split("—")[0]}</td>
                <td className="mono" style={{fontSize: 13}}>LKR {p.price.toLocaleString()}</td>
                <td className="mono" style={{fontSize: 13}}>{[48, 32, 64, 18, 96, 12, 8, "∞"][i] ?? "—"}</td>
                <td>
                  <span className={`status-dot ${i === 1 || i === 6 ? "draft" : "live"}`} />
                  {i === 1 || i === 6 ? "Draft" : "Ready"}
                </td>
                <td style={{textAlign:"right", color:"var(--ink-mute)"}}>⋯</td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
    </div>
  );
}

Object.assign(window, { AdminLogin, AdminDashboard, AdminPosts, AdminEditor, AdminMedia, AdminProducts });
