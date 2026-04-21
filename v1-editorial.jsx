// Variation 1: Editorial Paper
// Serif-first, journal-inspired layout with numbered sections, running headers,
// and printed-page rhythm. Heavy use of small caps + numerical hierarchy.

const V1_CSS = `
.v1 {
  --ink: #111110;
  --paper: #f6f3ec;
  --rule: #111110;
  --muted: #6b6a66;
  --accent: #111110;
  background: var(--paper);
  color: var(--ink);
  font-family: 'EB Garamond', 'Iowan Old Style', Georgia, serif;
  font-size: 14px;
  line-height: 1.55;
  height: 100%;
  overflow-y: auto;
  position: relative;
}
.v1.dark {
  --ink: #ece8de;
  --paper: #111110;
  --rule: #ece8de;
  --muted: #7a786f;
}
.v1 * { box-sizing: border-box; }
.v1 .mono { font-family: 'JetBrains Mono', ui-monospace, monospace; font-feature-settings: 'ss01'; }
.v1 .sc { font-variant: small-caps; letter-spacing: 0.08em; }
.v1 .num { font-variant-numeric: oldstyle-nums; }
.v1 .chrome {
  position: sticky; top: 0; z-index: 10;
  display: flex; align-items: center; justify-content: space-between;
  padding: 14px 40px 12px; background: var(--paper);
  border-bottom: 1px solid var(--ink);
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.15em;
}
.v1 .chrome .folio { display: flex; gap: 28px; }
.v1 .chrome .tools { display: flex; gap: 16px; align-items: center; }
.v1 .chrome button {
  font: inherit; text-transform: inherit; letter-spacing: inherit;
  background: none; border: 1px solid var(--ink); color: var(--ink);
  padding: 4px 10px; cursor: pointer;
}
.v1 .chrome button:hover { background: var(--ink); color: var(--paper); }
.v1 .head { padding: 72px 40px 40px; border-bottom: 1px solid var(--ink); }
.v1 .head .issue {
  display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.2em; color: var(--muted);
  margin-bottom: 48px;
}
.v1 .head h1 {
  font-size: clamp(56px, 9vw, 96px); line-height: 1.02; font-weight: 400;
  letter-spacing: -0.03em; margin: 0 0 16px;
  font-style: italic;
}
.v1 .head .kname {
  font-size: 28px; color: var(--muted); margin-bottom: 24px;
  font-family: 'Noto Serif KR', 'EB Garamond', serif;
}
.v1 .head .role { font-size: 18px; margin-bottom: 4px; }
.v1 .head .tagline { color: var(--muted); font-style: italic; max-width: 540px; }
.v1 section { padding: 40px 40px 56px; border-bottom: 1px solid var(--ink); }
.v1 .section-head {
  display: grid; grid-template-columns: 60px 1fr; gap: 16px;
  margin-bottom: 28px;
}
.v1 .section-num {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  color: var(--muted); padding-top: 10px;
}
.v1 .section-title {
  font-size: 32px; font-style: italic; font-weight: 400;
  letter-spacing: -0.02em; margin: 0;
}
.v1 .section-sub {
  color: var(--muted); margin-top: 2px; font-size: 13px;
  font-family: 'JetBrains Mono', monospace;
}
.v1 .grid2 {
  display: grid; grid-template-columns: 60px 1fr; gap: 16px;
}
.v1 p { margin: 0 0 14px; max-width: 560px; }
.v1 .bio { font-size: 18px; line-height: 1.5; }
.v1 .meta-grid {
  display: grid; grid-template-columns: 120px 1fr; row-gap: 6px; column-gap: 24px;
  font-size: 13px; margin-top: 16px;
}
.v1 .meta-grid .k {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.15em;
  color: var(--muted); padding-top: 3px;
}
.v1 .tags { display: flex; flex-wrap: wrap; gap: 6px; }
.v1 .tag {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.1em;
  padding: 4px 10px; border: 1px solid var(--ink); color: var(--ink);
  background: transparent; cursor: pointer; transition: all 0.15s;
}
.v1 .tag:hover { background: var(--ink); color: var(--paper); }
.v1 .tag.active { background: var(--ink); color: var(--paper); }
.v1 .tag.dim { opacity: 0.3; }
.v1 .filter-bar {
  display: flex; align-items: baseline; gap: 12px; flex-wrap: wrap;
  margin-bottom: 28px; padding-bottom: 14px;
  border-bottom: 1px dashed var(--muted);
}
.v1 .filter-bar .lbl {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.15em; color: var(--muted);
}
.v1 .pub-list { list-style: none; margin: 0; padding: 0; }
.v1 .pub {
  padding: 20px 0; border-top: 1px solid var(--muted);
  display: grid; grid-template-columns: 60px 1fr 100px; gap: 16px;
  transition: background 0.2s, padding 0.2s;
}
.v1 .pub:first-child { border-top: none; padding-top: 0; }
.v1 .pub:hover { padding-left: 8px; }
.v1 .pub .idx {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  color: var(--muted); padding-top: 4px;
}
.v1 .pub .body { min-width: 0; }
.v1 .pub-venue {
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.15em;
  color: var(--muted); margin-bottom: 6px;
}
.v1 .pub-title {
  font-size: 20px; line-height: 1.3; margin-bottom: 6px;
  font-style: italic;
}
.v1 .pub-authors { font-size: 13px; color: var(--muted); margin-bottom: 8px; }
.v1 .pub-note { font-size: 13px; color: var(--ink); max-width: 540px; }
.v1 .pub-tags { display: flex; flex-wrap: wrap; gap: 4px; margin-top: 10px; }
.v1 .pub-tags .tag { font-size: 9px; padding: 2px 6px; }
.v1 .pub .year {
  font-family: 'JetBrains Mono', monospace; font-size: 11px;
  color: var(--muted); text-align: right; padding-top: 4px;
}
.v1 .pub a.src {
  display: inline-block; margin-top: 8px;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.1em;
  color: var(--ink); text-decoration: none; border-bottom: 1px solid var(--ink);
  padding-bottom: 1px;
}
.v1 .pub a.src:hover { color: var(--muted); border-color: var(--muted); }
.v1 .proj { padding: 18px 0; border-top: 1px solid var(--muted); display: grid; grid-template-columns: 60px 160px 1fr 1fr; gap: 20px; }
.v1 .proj:first-child { border-top: none; padding-top: 0; }
.v1 .proj .idx { font-family: 'JetBrains Mono', monospace; font-size: 10px; color: var(--muted); padding-top: 3px; }
.v1 .proj .period { font-family: 'JetBrains Mono', monospace; font-size: 11px; color: var(--muted); padding-top: 3px; }
.v1 .proj .sponsor { font-size: 13px; padding-top: 2px; color: var(--muted); font-style: italic; }
.v1 .proj .ptitle { font-size: 14px; line-height: 1.5; }
.v1 .foot {
  padding: 40px; display: flex; justify-content: space-between;
  font-family: 'JetBrains Mono', monospace; font-size: 10px;
  text-transform: uppercase; letter-spacing: 0.15em; color: var(--muted);
}
.v1 .ornament {
  text-align: center; padding: 24px 0;
  font-family: 'EB Garamond', serif; font-size: 18px; color: var(--muted);
  letter-spacing: 0.5em;
}
.v1 a.inline {
  color: var(--ink); text-decoration: none;
  border-bottom: 1px solid var(--ink);
  padding-bottom: 1px;
}
.v1 a.inline:hover { color: var(--muted); border-color: var(--muted); }
`;

function V1Editorial({ lang, setLang, dark, setDark, tag, setTag }) {
  const D = window.PORTFOLIO_DATA;
  const L = window.T;
  const pubs = tag ? D.publications.filter((p) => p.tags.includes(tag)) : D.publications;
  const projs = tag ? D.projects.filter((p) => p.tags.includes(tag)) : D.projects;
  const today = "April 21, 2026";

  return (
    <React.Fragment>
      <style>{V1_CSS}</style>
      <div className={"v1" + (dark ? " dark" : "")}>
        <div className="chrome">
          <div className="folio">
            <span>Jeon — Portfolio</span>
            <span>Vol. I · No. 1</span>
            <span>{today}</span>
          </div>
          <div className="tools">
            <button onClick={() => setLang(lang === "en" ? "ko" : "en")}>{lang === "en" ? "KO" : "EN"}</button>
            <button onClick={() => setDark(!dark)}>{dark ? "Light" : "Dark"}</button>
          </div>
        </div>

        <header className="head">
          <div className="issue">
            <span>The Hwyjoon Jeon Review</span>
            <span>A Dossier of Work in Generative Models</span>
            <span>₩ — / $ —</span>
          </div>
          <h1>{D.name[lang]}</h1>
          {lang === "en" && <div className="kname">{D.nameAlt[lang]}</div>}
          <div className="role sc">{D.role[lang]}</div>
          <div className="tagline">{D.tagline[lang]}</div>
          <div className="meta-grid">
            <div className="k">{L.labels.education[lang]}</div>
            <div>
              {D.education.map((e, i) => (
                <div key={i}>
                  {e.degree[lang]}, {e.school[lang]} <span className="mono" style={{opacity:0.6}}>· {e.year}</span>
                </div>
              ))}
            </div>
            <div className="k">{L.labels.citizenship[lang]}</div>
            <div>{D.citizenship[lang]}</div>
            <div className="k">{L.labels.email[lang]}</div>
            <div><a className="inline" href={"mailto:" + D.contact.email}>{D.contact.email}</a></div>
            <div className="k">{L.labels.scholar[lang]}</div>
            <div><a className="inline" href={D.contact.scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a></div>
            <div className="k">{L.labels.github[lang]}</div>
            <div><a className="inline" href={D.contact.github} target="_blank" rel="noreferrer">MatthewJeon ↗</a></div>
          </div>
        </header>

        <section>
          <div className="section-head">
            <div className="section-num">§ I.</div>
            <div>
              <div className="section-title">{lang === "en" ? "Preface" : "머리말"}</div>
              <div className="section-sub">about</div>
            </div>
          </div>
          <div className="grid2">
            <div />
            <p className="bio">{D.bio[lang]}</p>
          </div>
        </section>

        <section>
          <div className="section-head">
            <div className="section-num">§ II.</div>
            <div>
              <div className="section-title">{L.labels.interests[lang]}</div>
              <div className="section-sub">
                {lang === "en" ? "click a tag to filter everything below" : "태그를 클릭하면 아래가 필터링됩니다"}
              </div>
            </div>
          </div>
          <div className="grid2">
            <div />
            <div className="tags">
              {D.interests.map((i) => (
                <button
                  key={i.id}
                  className={"tag" + (tag === i.id ? " active" : "")}
                  onClick={() => setTag(tag === i.id ? null : i.id)}
                >
                  {i[lang]}
                </button>
              ))}
              {tag && (
                <button className="tag" onClick={() => setTag(null)} style={{ borderStyle: "dashed" }}>
                  × {L.labels.clearFilter[lang]}
                </button>
              )}
            </div>
          </div>
        </section>

        <section>
          <div className="section-head">
            <div className="section-num">§ III.</div>
            <div>
              <div className="section-title">{L.labels.publications[lang]}</div>
              <div className="section-sub">{pubs.length} {lang === "en" ? "works" : "편"} {tag && `· filtered`}</div>
            </div>
          </div>
          <ul className="pub-list">
            {pubs.length === 0 && <p style={{color:"var(--muted)",paddingLeft:76}}>{L.labels.noResults[lang]}</p>}
            {pubs.map((p, i) => (
              <li key={p.id} className="pub">
                <div className="idx">{String(i + 1).padStart(2, "0")}.</div>
                <div className="body">
                  <div className="pub-venue">{p.venueClass[lang]} · {p.venue}</div>
                  <div className="pub-title">{p.title[lang]}</div>
                  <div className="pub-authors">{p.authors[lang]}</div>
                  <div className="pub-note">{p.note[lang]}</div>
                  <a className="src" href={p.link} target="_blank" rel="noreferrer">{p.linkLabel} ↗</a>
                  <div className="pub-tags">
                    {p.tags.map((t) => {
                      const int = D.interests.find((x) => x.id === t);
                      return (
                        <button key={t} className={"tag" + (tag === t ? " active" : "")} onClick={() => setTag(tag === t ? null : t)}>
                          {int ? int[lang] : t}
                        </button>
                      );
                    })}
                  </div>
                </div>
                <div className="year">{p.year}</div>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <div className="section-head">
            <div className="section-num">§ IV.</div>
            <div>
              <div className="section-title">{L.labels.projects[lang]}</div>
              <div className="section-sub">{projs.length} {lang === "en" ? "engagements" : "건"}</div>
            </div>
          </div>
          <div>
            {projs.length === 0 && <p style={{color:"var(--muted)",paddingLeft:76}}>{L.labels.noProjectResults[lang]}</p>}
            {projs.map((p, i) => (
              <div key={i} className="proj">
                <div className="idx">{String(i + 1).padStart(2, "0")}.</div>
                <div className="period">{p.period}</div>
                <div className="sponsor">{p.sponsor[lang]}</div>
                <div className="ptitle">{p.title[lang]}</div>
              </div>
            ))}
          </div>
        </section>

        <div className="ornament">· · ·</div>
        <div className="foot">
          <span>Colophon — Set in EB Garamond & JetBrains Mono</span>
          <span>End of Dossier</span>
        </div>
      </div>
    </React.Fragment>
  );
}

window.V1Editorial = V1Editorial;
