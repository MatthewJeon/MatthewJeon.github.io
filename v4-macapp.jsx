// v4: macOS app — sidebar nav + scroll-reactive content + animated hero orb.
// Inspired by Finder / Notes / Reminders: titlebar with traffic lights,
// vibrancy sidebar, content pane with subtle chromeline dividers.

const V4_CSS = `
.v4 {
  --bg: #ffffff;
  --fg: #1d1d1f;
  --dim: #86868b;
  --faint: #d2d2d7;
  --sb-bg: rgba(246,246,246,0.72);
  --sb-fg: #1d1d1f;
  --accent: #0071e3;
  --accent-soft: rgba(0,113,227,0.12);
  --tb-bg: rgba(255,255,255,0.72);
  --divider: rgba(0,0,0,0.08);
  --card: #fbfbfd;
  --card-hover: #f5f5f7;
  --shadow-sm: 0 1px 2px rgba(0,0,0,0.04);
  --shadow-md: 0 4px 18px rgba(0,0,0,0.06);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.12);
  background: var(--bg);
  color: var(--fg);
  font-family: -apple-system, 'SF Pro Text', BlinkMacSystemFont, 'Inter', sans-serif;
  font-size: 14px;
  line-height: 1.5;
  height: 100vh;
  overflow: hidden;
  -webkit-font-smoothing: antialiased;
  letter-spacing: -0.01em;
}
.v4.dark {
  --bg: #1d1d1f;
  --fg: #f5f5f7;
  --dim: #86868b;
  --faint: #3a3a3c;
  --sb-bg: rgba(40,40,42,0.72);
  --sb-fg: #f5f5f7;
  --accent: #0a84ff;
  --accent-soft: rgba(10,132,255,0.18);
  --tb-bg: rgba(29,29,31,0.72);
  --divider: rgba(255,255,255,0.08);
  --card: #2a2a2c;
  --card-hover: #323234;
  --shadow-md: 0 4px 18px rgba(0,0,0,0.3);
  --shadow-lg: 0 20px 60px rgba(0,0,0,0.5);
}
.v4 * { box-sizing: border-box; }
.v4 .display { font-family: -apple-system, 'SF Pro Display', BlinkMacSystemFont, sans-serif; letter-spacing: -0.025em; }
.v4 .mono { font-family: 'SF Mono', ui-monospace, Menlo, monospace; font-size: 0.85em; }
.v4 .serifk { font-family: 'Noto Serif KR', serif; }

/* ───── window chrome ───── */
.v4 .window {
  display: grid;
  grid-template-columns: 248px 1fr;
  grid-template-rows: 40px 1fr;
  grid-template-areas: "tb tb" "sb main";
  height: 100%;
}
.v4 .titlebar {
  grid-area: tb;
  display: grid; grid-template-columns: 248px 1fr auto;
  align-items: center;
  background: var(--tb-bg);
  backdrop-filter: saturate(180%) blur(30px);
  -webkit-backdrop-filter: saturate(180%) blur(30px);
  border-bottom: 0.5px solid var(--divider);
  position: relative; z-index: 20;
}
.v4 .traffic { display: flex; gap: 8px; padding-left: 14px; }
.v4 .traffic span {
  width: 12px; height: 12px; border-radius: 50%;
  display: block; border: 0.5px solid rgba(0,0,0,0.08);
}
.v4 .traffic span:nth-child(1) { background: #ff5f57; }
.v4 .traffic span:nth-child(2) { background: #febc2e; }
.v4 .traffic span:nth-child(3) { background: #28c840; }
.v4 .tbtitle {
  text-align: center; font-size: 13px; font-weight: 500; color: var(--fg);
}
.v4 .tbtools { display: flex; gap: 6px; padding-right: 14px; align-items: center; }
.v4 .tbtools button {
  font: inherit; font-size: 11px; font-weight: 500;
  color: var(--fg); background: transparent;
  border: none; padding: 5px 10px; border-radius: 5px; cursor: pointer;
  transition: background 0.15s;
}
.v4 .tbtools button:hover { background: rgba(0,0,0,0.06); }
.v4.dark .tbtools button:hover { background: rgba(255,255,255,0.08); }
.v4 .tbtools .sep { width: 1px; height: 16px; background: var(--divider); margin: 0 4px; }

/* ───── sidebar ───── */
.v4 .sidebar {
  grid-area: sb;
  background: var(--sb-bg);
  backdrop-filter: saturate(180%) blur(30px);
  -webkit-backdrop-filter: saturate(180%) blur(30px);
  border-right: 0.5px solid var(--divider);
  padding: 8px 10px 20px;
  overflow-y: auto;
  color: var(--sb-fg);
}
.v4 .sb-profile {
  display: flex; gap: 10px; align-items: center;
  padding: 10px 8px 14px; margin-bottom: 4px;
}
.v4 .sb-avatar {
  width: 36px; height: 36px; border-radius: 10px;
  background: linear-gradient(135deg, #e0d8c8, #c7b897);
  display: grid; place-items: center;
  font-family: -apple-system, serif; font-style: italic; font-weight: 500; color: #3a2f1f;
  font-size: 15px; flex-shrink: 0;
  box-shadow: inset 0 0 0 0.5px rgba(0,0,0,0.1);
}
.v4 .sb-name { font-weight: 600; font-size: 13px; line-height: 1.25; }
.v4 .sb-role { font-size: 11px; color: var(--dim); }

.v4 .sb-group {
  font-size: 11px; font-weight: 600; color: var(--dim);
  text-transform: uppercase; letter-spacing: 0.04em;
  padding: 12px 10px 4px;
}
.v4 .sb-item {
  display: flex; align-items: center; gap: 8px;
  padding: 6px 10px; border-radius: 6px;
  font-size: 13px; cursor: pointer;
  transition: background 0.12s;
  color: var(--sb-fg); width: 100%;
  border: none; background: transparent; text-align: left; font: inherit;
}
.v4 .sb-item:hover { background: rgba(0,0,0,0.05); }
.v4.dark .sb-item:hover { background: rgba(255,255,255,0.06); }
.v4 .sb-item.active {
  background: var(--accent); color: #fff;
}
.v4 .sb-item.active .sb-count { color: rgba(255,255,255,0.85); }
.v4 .sb-item svg { width: 15px; height: 15px; flex-shrink: 0; }
.v4 .sb-count {
  margin-left: auto; font-size: 11px; color: var(--dim);
  font-variant-numeric: tabular-nums;
}
.v4 .sb-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; margin-left: 2px; }

/* ───── main content pane ───── */
.v4 .main {
  grid-area: main;
  overflow-y: auto;
  scroll-behavior: smooth;
  position: relative;
}
.v4 .main-inner {
  max-width: 820px;
  margin: 0 auto;
  padding: 0 56px 120px;
}

/* Hero */
.v4 .hero {
  position: relative;
  min-height: 540px;
  padding: 80px 0 60px;
  display: flex; flex-direction: column; justify-content: center;
}
.v4 .hero-orb-wrap {
  position: absolute;
  right: -80px; top: 40px;
  width: 360px; height: 360px;
  pointer-events: none;
  z-index: 0;
}
.v4 .hero-text { position: relative; z-index: 1; }
.v4 .eyebrow {
  font-size: 13px; font-weight: 500; color: var(--accent);
  letter-spacing: -0.01em; margin-bottom: 14px;
}
.v4 .hero h1 {
  font-size: clamp(44px, 5.2vw, 68px);
  line-height: 1.05; font-weight: 600;
  letter-spacing: -0.035em;
  margin: 0 0 8px;
  max-width: 640px;
}
.v4 .hero .kname { font-size: 24px; color: var(--dim); margin-bottom: 24px; }
.v4 .hero .hero-tag {
  font-size: 21px; line-height: 1.35; color: var(--fg);
  max-width: 520px; font-weight: 400;
  letter-spacing: -0.015em;
}
.v4 .hero-meta {
  margin-top: 36px; display: flex; gap: 14px; flex-wrap: wrap;
}
.v4 .chip {
  font-size: 12px; font-weight: 500; padding: 6px 12px;
  background: var(--card); border-radius: 999px;
  border: 0.5px solid var(--divider);
  color: var(--fg);
  display: inline-flex; align-items: center; gap: 6px;
}
.v4 .chip .dot { width: 6px; height: 6px; border-radius: 50%; background: #30d158; }

/* Section reveal */
.v4 .reveal {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.7s cubic-bezier(.2,.7,.3,1), transform 0.7s cubic-bezier(.2,.7,.3,1);
}
.v4 .reveal.in { opacity: 1; transform: none; }

.v4 .section { padding: 60px 0 20px; scroll-margin-top: 60px; }
.v4 .section-head { margin-bottom: 28px; }
.v4 .section-eyebrow {
  font-size: 12px; font-weight: 600; color: var(--accent);
  letter-spacing: 0; margin-bottom: 6px; text-transform: uppercase;
}
.v4 .section-title {
  font-size: clamp(32px, 4vw, 44px); font-weight: 600;
  letter-spacing: -0.03em; line-height: 1.1; margin: 0 0 10px;
}
.v4 .section-lede {
  font-size: 17px; color: var(--dim); max-width: 580px;
  line-height: 1.45;
}

/* Identity card */
.v4 .id-card {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1px;
  background: var(--divider);
  border-radius: 14px; overflow: hidden;
  box-shadow: var(--shadow-md);
}
.v4 .id-cell {
  background: var(--bg);
  padding: 22px 24px;
}
.v4 .id-cell .k {
  font-size: 11px; font-weight: 600; color: var(--dim);
  text-transform: uppercase; letter-spacing: 0.04em; margin-bottom: 8px;
}
.v4 .id-cell .v { font-size: 15px; line-height: 1.45; }
.v4 .id-cell .v .sub { font-size: 12px; color: var(--dim); margin-top: 2px; }
.v4 .id-cell a {
  color: var(--accent); text-decoration: none;
}
.v4 .id-cell a:hover { text-decoration: underline; }

/* Tags / filter */
.v4 .tags { display: flex; flex-wrap: wrap; gap: 8px; }
.v4 .tag {
  font: inherit; font-size: 13px; font-weight: 500;
  padding: 7px 14px; border-radius: 999px;
  background: var(--card); border: 0.5px solid var(--divider);
  color: var(--fg); cursor: pointer;
  transition: all 0.15s;
}
.v4 .tag:hover { background: var(--card-hover); }
.v4 .tag.active { background: var(--accent); color: #fff; border-color: var(--accent); }
.v4 .tag.clear { border-style: dashed; color: var(--dim); }

/* Publication cards */
.v4 .pub-list { display: flex; flex-direction: column; gap: 12px; }
.v4 .pub {
  background: var(--card);
  border-radius: 14px;
  padding: 22px 24px;
  border: 0.5px solid var(--divider);
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(.2,.7,.3,1), box-shadow 0.3s, background 0.2s;
  position: relative;
}
.v4 .pub:hover { transform: translateY(-2px); box-shadow: var(--shadow-md); background: var(--bg); }
.v4 .pub.expanded { background: var(--bg); box-shadow: var(--shadow-lg); transform: none; }
.v4 .pub-head {
  display: grid; grid-template-columns: 1fr auto; gap: 16px;
  align-items: start;
}
.v4 .pub-kind {
  display: inline-flex; align-items: center; gap: 6px;
  font-size: 11px; font-weight: 600; color: var(--accent);
  text-transform: uppercase; letter-spacing: 0.03em;
  margin-bottom: 8px;
}
.v4 .pub-kind::before {
  content: ""; width: 6px; height: 6px; border-radius: 50%;
  background: var(--accent);
}
.v4 .pub h3 {
  font-size: 18px; font-weight: 600; letter-spacing: -0.015em;
  line-height: 1.3; margin: 0 0 6px;
}
.v4 .pub-venue { font-size: 13px; color: var(--dim); }
.v4 .pub-year {
  font-size: 28px; font-weight: 300; color: var(--dim);
  letter-spacing: -0.02em; line-height: 1;
  font-variant-numeric: tabular-nums;
}
.v4 .pub-expand {
  max-height: 0; overflow: hidden;
  transition: max-height 0.4s cubic-bezier(.2,.7,.3,1);
}
.v4 .pub.expanded .pub-expand { max-height: 500px; }
.v4 .pub-expand-inner {
  padding-top: 16px; margin-top: 16px; border-top: 0.5px solid var(--divider);
}
.v4 .pub-authors { font-size: 13px; color: var(--dim); margin-bottom: 10px; }
.v4 .pub-note { font-size: 14px; line-height: 1.5; margin-bottom: 14px; }
.v4 .pub-row {
  display: flex; align-items: center; gap: 12px; flex-wrap: wrap;
  justify-content: space-between;
}
.v4 .pub-ptags { display: flex; gap: 6px; flex-wrap: wrap; }
.v4 .pub-ptags .tag { font-size: 11px; padding: 4px 10px; }
.v4 .pub-link {
  font-size: 13px; color: var(--accent); text-decoration: none; font-weight: 500;
  display: inline-flex; align-items: center; gap: 4px;
}
.v4 .pub-link:hover { text-decoration: underline; }

/* Project list */
.v4 .proj-list { display: flex; flex-direction: column; gap: 0; }
.v4 .proj {
  display: grid; grid-template-columns: 140px 1fr;
  gap: 24px; padding: 20px 0;
  border-top: 0.5px solid var(--divider);
}
.v4 .proj:first-child { border-top: none; }
.v4 .proj-period {
  font-size: 12px; color: var(--accent); font-weight: 500;
  font-variant-numeric: tabular-nums; padding-top: 3px;
}
.v4 .proj-title { font-size: 15px; font-weight: 500; line-height: 1.4; margin-bottom: 4px; }
.v4 .proj-sponsor { font-size: 13px; color: var(--dim); }

/* Empty state */
.v4 .empty {
  padding: 40px; text-align: center; color: var(--dim);
  font-size: 14px;
  border: 0.5px dashed var(--divider); border-radius: 12px;
}

/* Footer */
.v4 .pagefoot {
  margin-top: 80px; padding-top: 20px;
  border-top: 0.5px solid var(--divider);
  display: flex; justify-content: space-between;
  font-size: 11px; color: var(--dim);
}

/* Scrollbar - subtle, macOS-ish */
.v4 .main::-webkit-scrollbar, .v4 .sidebar::-webkit-scrollbar { width: 8px; }
.v4 .main::-webkit-scrollbar-thumb, .v4 .sidebar::-webkit-scrollbar-thumb {
  background: rgba(0,0,0,0.2); border-radius: 4px; border: 2px solid transparent;
  background-clip: padding-box;
}
.v4.dark .main::-webkit-scrollbar-thumb, .v4.dark .sidebar::-webkit-scrollbar-thumb {
  background: rgba(255,255,255,0.2); background-clip: padding-box; border: 2px solid transparent;
}
.v4 .main::-webkit-scrollbar-track, .v4 .sidebar::-webkit-scrollbar-track { background: transparent; }

@media (max-width: 720px) {
  .v4 .window { grid-template-columns: 1fr; grid-template-areas: "tb" "main"; }
  .v4 .sidebar { display: none; }
  .v4 .titlebar { grid-template-columns: auto 1fr auto; }
  .v4 .main-inner { padding: 0 24px 80px; }
  .v4 .hero-orb-wrap { right: -120px; width: 280px; height: 280px; opacity: 0.5; }
  .v4 .id-card { grid-template-columns: 1fr; }
  .v4 .proj { grid-template-columns: 1fr; gap: 4px; }
}
`;

// ─── animated hero orb (gradient mesh) ─────────────────────────────
function HeroOrb({ dark, scrollY = 0 }) {
  const ref = React.useRef(null);
  React.useEffect(() => {
    const c = ref.current;
    if (!c) return;
    const ctx = c.getContext("2d");
    const dpr = Math.min(window.devicePixelRatio || 1, 2);
    const size = 360;
    c.width = size * dpr;
    c.height = size * dpr;
    ctx.scale(dpr, dpr);
    let raf;
    let t = 0;

    const blobs = dark
      ? [
          { h: 230, s: 80, l: 58 },
          { h: 280, s: 70, l: 55 },
          { h: 195, s: 85, l: 52 },
          { h: 320, s: 65, l: 50 },
        ]
      : [
          { h: 220, s: 85, l: 62 },
          { h: 275, s: 72, l: 65 },
          { h: 195, s: 90, l: 60 },
          { h: 330, s: 75, l: 70 },
        ];

    const draw = () => {
      t += 0.006;
      ctx.clearRect(0, 0, size, size);
      // outer soft halo
      const halo = ctx.createRadialGradient(size/2, size/2, 40, size/2, size/2, size/2);
      halo.addColorStop(0, dark ? "rgba(120,80,200,0.35)" : "rgba(180,160,255,0.35)");
      halo.addColorStop(1, "rgba(0,0,0,0)");
      ctx.fillStyle = halo;
      ctx.fillRect(0, 0, size, size);

      // drifting blobs
      ctx.globalCompositeOperation = dark ? "screen" : "multiply";
      blobs.forEach((b, i) => {
        const angle = t + i * 1.6;
        const radius = 50 + Math.sin(t * 0.6 + i) * 20;
        const cx = size/2 + Math.cos(angle) * radius;
        const cy = size/2 + Math.sin(angle * 1.15) * radius;
        const r = 130 + Math.sin(t + i) * 20;
        const g = ctx.createRadialGradient(cx, cy, 0, cx, cy, r);
        g.addColorStop(0, `hsla(${b.h}, ${b.s}%, ${b.l}%, ${dark ? 0.85 : 0.7})`);
        g.addColorStop(1, `hsla(${b.h}, ${b.s}%, ${b.l}%, 0)`);
        ctx.fillStyle = g;
        ctx.beginPath();
        ctx.arc(cx, cy, r, 0, Math.PI * 2);
        ctx.fill();
      });
      ctx.globalCompositeOperation = "source-over";

      // crisp ring
      ctx.strokeStyle = dark ? "rgba(255,255,255,0.08)" : "rgba(0,0,0,0.06)";
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.arc(size/2, size/2, 140, 0, Math.PI * 2);
      ctx.stroke();

      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => cancelAnimationFrame(raf);
  }, [dark]);

  // parallax + subtle scale with scroll
  const k = Math.min(scrollY / 400, 1);
  const style = {
    transform: `translateY(${scrollY * 0.3}px) scale(${1 - k * 0.15}) rotate(${scrollY * 0.05}deg)`,
    opacity: 1 - k * 0.35,
    transition: "none",
    filter: `blur(${k * 2}px)`,
  };

  return (
    <div className="hero-orb-wrap" style={style}>
      <canvas ref={ref} style={{ width: 360, height: 360 }} />
    </div>
  );
}

// ─── reveal-on-scroll wrapper ──────────────────────────────────────
const ScrollRootCtx = React.createContext(null);
function Reveal({ children, id }) {
  const ref = React.useRef(null);
  const root = React.useContext(ScrollRootCtx);
  const [seen, setSeen] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      (es) => { es.forEach((e) => { if (e.isIntersecting) setSeen(true); }); },
      { root: root || null, threshold: 0.08, rootMargin: "0px 0px -10% 0px" }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, [root]);
  return (
    <section id={id} ref={ref} className={"section reveal" + (seen ? " in" : "")}>
      {children}
    </section>
  );
}

// ─── sidebar icons ─────────────────────────────────────────────────
const Icon = {
  home: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 10l9-7 9 7v11a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1z"/></svg>,
  person: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-8 8-8s8 3.6 8 8"/></svg>,
  book: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M4 5a2 2 0 012-2h12v18H6a2 2 0 01-2-2z"/><path d="M4 17h14"/></svg>,
  flask: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M9 3v5L4 19a2 2 0 001.8 3h12.4a2 2 0 001.8-3L15 8V3"/><path d="M8 3h8"/></svg>,
  tag: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 12V4h8l10 10-8 8L3 12z"/><circle cx="7.5" cy="7.5" r="1.2" fill="currentColor"/></svg>,
  mail: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 7l9 7 9-7"/></svg>,
};

// ─── main ──────────────────────────────────────────────────────────
function V4MacApp({ lang, setLang, dark, setDark, tag, setTag }) {
  const D = window.PORTFOLIO_DATA;
  const L = window.T;
  const pubs = tag ? D.publications.filter((p) => p.tags.includes(tag)) : D.publications;
  const projs = tag ? D.projects.filter((p) => p.tags.includes(tag)) : D.projects;

  const [active, setActive] = React.useState("overview");
  const [scrollY, setScrollY] = React.useState(0);
  const [expanded, setExpanded] = React.useState(null);
  const mainRef = React.useRef(null);

  // scroll tracking: drives hero parallax + active-section in sidebar
  React.useEffect(() => {
    const el = mainRef.current;
    if (!el) return;
    const onScroll = () => {
      setScrollY(el.scrollTop);
      const sections = ["overview", "identity", "interests", "publications", "projects"];
      let cur = "overview";
      for (const id of sections) {
        const sec = el.querySelector(`#${id}`);
        if (sec) {
          const rect = sec.getBoundingClientRect();
          const parent = el.getBoundingClientRect();
          if (rect.top - parent.top < 140) cur = id;
        }
      }
      setActive(cur);
    };
    el.addEventListener("scroll", onScroll, { passive: true });
    return () => el.removeEventListener("scroll", onScroll);
  }, []);

  const go = (id) => {
    const el = mainRef.current?.querySelector(`#${id}`);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  // mainRef is the scroll container — the Reveal IntersectionObserver
  // must use it as `root` (ScrollRootCtx). mountedRoot forces a re-render
  // once mainRef is populated so context consumers pick it up.
  const [mountedRoot, setMountedRoot] = React.useState(null);
  React.useEffect(() => { setMountedRoot(mainRef.current); }, []);

  const navItems = [
    { id: "overview", icon: Icon.home, label: { en: "Overview", ko: "개요" }, count: null },
    { id: "identity", icon: Icon.person, label: { en: "Identity", ko: "정체" }, count: null },
    { id: "interests", icon: Icon.tag, label: { en: "Interests", ko: "관심 분야" }, count: D.interests.length },
    { id: "publications", icon: Icon.book, label: { en: "Publications", ko: "논문" }, count: pubs.length },
    { id: "projects", icon: Icon.flask, label: { en: "Projects", ko: "프로젝트" }, count: projs.length },
  ];

  return (
    <React.Fragment>
      <style>{V4_CSS}</style>
      <div className={"v4" + (dark ? " dark" : "")}>
        <div className="window">
          {/* Titlebar */}
          <div className="titlebar">
            <div className="traffic"><span/><span/><span/></div>
            <div className="tbtitle">{D.name.en} — Portfolio</div>
            <div className="tbtools">
              <button onClick={() => setLang(lang === "en" ? "ko" : "en")}>
                {lang === "en" ? "한국어" : "English"}
              </button>
              <div className="sep"/>
              <button onClick={() => setDark(!dark)} title="Toggle appearance">
                {dark ? "☀ Light" : "☾ Dark"}
              </button>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="sidebar">
            <div className="sb-profile">
              <div className="sb-avatar">M</div>
              <div>
                <div className="sb-name">{D.name[lang]}</div>
                <div className="sb-role">{D.role[lang]}</div>
              </div>
            </div>

            <div className="sb-group">Portfolio</div>
            {navItems.map((n) => (
              <button
                key={n.id}
                className={"sb-item" + (active === n.id ? " active" : "")}
                onClick={() => go(n.id)}
              >
                {n.icon}
                <span>{n.label[lang]}</span>
                {n.count != null && <span className="sb-count">{n.count}</span>}
              </button>
            ))}

            <div className="sb-group">Connect</div>
            <a className="sb-item" href={"mailto:" + D.contact.email}>
              {Icon.mail}<span>Email</span>
            </a>
            <a className="sb-item" href={D.contact.scholar} target="_blank" rel="noreferrer">
              {Icon.book}<span>Scholar</span>
            </a>
            <a className="sb-item" href={D.contact.github} target="_blank" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12c0 4.4 2.9 8.2 6.8 9.5.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.3-3.4-1.3-.5-1.2-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.3 1.1 2.9.8.1-.6.3-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.7 1 .8-.2 1.7-.3 2.5-.3s1.7.1 2.5.3c1.9-1.3 2.7-1 2.7-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.6 5 .4.3.7.9.7 1.8v2.6c0 .3.2.6.7.5 4-1.3 6.8-5 6.8-9.5C22 6.5 17.5 2 12 2z"/></svg>
              <span>GitHub</span>
            </a>
          </aside>

          {/* Main */}
          <main className="main" ref={mainRef}>
            <ScrollRootCtx.Provider value={mountedRoot}>
            <div className="main-inner">
              {/* Overview / Hero */}
              <section id="overview" className="hero">
                <HeroOrb dark={dark} scrollY={scrollY} />
                <div className="hero-text">
                  <div className="eyebrow">{lang === "en" ? "Portfolio · 2026" : "포트폴리오 · 2026"}</div>
                  <h1 className="display">{D.name[lang]}</h1>
                  {lang === "en" && <div className="kname serifk">{D.nameAlt[lang]}</div>}
                  <p className="hero-tag">{D.bio[lang]}</p>
                  <div className="hero-meta">
                    <span className="chip"><span className="dot"/>{lang === "en" ? "Available for collaboration" : "협업 가능"}</span>
                    <span className="chip">{D.education[0].school[lang]}</span>
                    <span className="chip">{D.tagline[lang]}</span>
                  </div>
                </div>
              </section>

              {/* Identity */}
              <Reveal id="identity">
                <div className="section-head">
                  <div className="section-eyebrow">01 — {lang === "en" ? "Identity" : "정체"}</div>
                  <h2 className="section-title display">{lang === "en" ? "The basics." : "기본 정보."}</h2>
                  <p className="section-lede">{lang === "en" ? "Education, citizenship, and where to reach me." : "학력, 국적, 그리고 연락처."}</p>
                </div>
                <div className="id-card">
                  <div className="id-cell">
                    <div className="k">{L.labels.education[lang]}</div>
                    <div className="v">
                      {D.education[0].degree[lang]}
                      <div className="sub">{D.education[0].school[lang]} · {D.education[0].year}</div>
                    </div>
                  </div>
                  <div className="id-cell">
                    <div className="k">{L.labels.education[lang]}</div>
                    <div className="v">
                      {D.education[1].degree[lang]}
                      <div className="sub">{D.education[1].school[lang]} · {D.education[1].year}</div>
                    </div>
                  </div>
                  <div className="id-cell">
                    <div className="k">{L.labels.citizenship[lang]}</div>
                    <div className="v">{D.citizenship[lang]}</div>
                  </div>
                  <div className="id-cell">
                    <div className="k">{L.labels.email[lang]}</div>
                    <div className="v"><a href={"mailto:" + D.contact.email}>{D.contact.email}</a></div>
                  </div>
                </div>
              </Reveal>

              {/* Interests */}
              <Reveal id="interests">
                <div className="section-head">
                  <div className="section-eyebrow">02 — {L.labels.interests[lang]}</div>
                  <h2 className="section-title display">{lang === "en" ? "What I think about." : "관심 있는 것들."}</h2>
                  <p className="section-lede">{lang === "en" ? "Tap any tag to filter publications and projects below." : "태그를 누르면 아래 논문과 프로젝트가 필터링됩니다."}</p>
                </div>
                <div className="tags">
                  {D.interests.map((i) => (
                    <button key={i.id} className={"tag" + (tag === i.id ? " active" : "")} onClick={() => setTag(tag === i.id ? null : i.id)}>
                      {i[lang]}
                    </button>
                  ))}
                  {tag && (
                    <button className="tag clear" onClick={() => setTag(null)}>
                      × {L.labels.clearFilter[lang]}
                    </button>
                  )}
                </div>
              </Reveal>

              {/* Publications */}
              <Reveal id="publications">
                <div className="section-head">
                  <div className="section-eyebrow">03 — {L.labels.publications[lang]}</div>
                  <h2 className="section-title display">{lang === "en" ? "Published work." : "출판된 연구."}</h2>
                  <p className="section-lede">
                    {pubs.length} {lang === "en" ? "works" : "편"}
                    {tag && (lang === "en" ? ` · filtered by ${D.interests.find(i=>i.id===tag)?.en}` : ` · ${D.interests.find(i=>i.id===tag)?.ko} 필터`)}
                    {" · "}{lang === "en" ? "click a card to expand" : "카드를 누르면 펼쳐집니다"}
                  </p>
                </div>
                {pubs.length === 0 ? (
                  <div className="empty">{L.labels.noResults[lang]}</div>
                ) : (
                  <div className="pub-list">
                    {pubs.map((p) => (
                      <div key={p.id} className={"pub" + (expanded === p.id ? " expanded" : "")} onClick={() => setExpanded(expanded === p.id ? null : p.id)}>
                        <div className="pub-head">
                          <div>
                            <div className="pub-kind">{p.venueClass[lang]}</div>
                            <h3>{p.title[lang]}</h3>
                            <div className="pub-venue">{p.venue}</div>
                          </div>
                          <div className="pub-year">{p.year}</div>
                        </div>
                        <div className="pub-expand">
                          <div className="pub-expand-inner">
                            <div className="pub-authors">{p.authors[lang]}</div>
                            <div className="pub-note">{p.note[lang]}</div>
                            <div className="pub-row">
                              <div className="pub-ptags">
                                {p.tags.map((t) => {
                                  const int = D.interests.find((x) => x.id === t);
                                  return (
                                    <button key={t} className={"tag" + (tag === t ? " active" : "")} onClick={(e) => { e.stopPropagation(); setTag(tag === t ? null : t); }}>
                                      {int ? int[lang] : t}
                                    </button>
                                  );
                                })}
                              </div>
                              <a className="pub-link" href={p.link} target="_blank" rel="noreferrer" onClick={(e) => e.stopPropagation()}>
                                {p.linkLabel} →
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>

              {/* Projects */}
              <Reveal id="projects">
                <div className="section-head">
                  <div className="section-eyebrow">04 — {L.labels.projects[lang]}</div>
                  <h2 className="section-title display">{lang === "en" ? "Research projects." : "연구 프로젝트."}</h2>
                  <p className="section-lede">{projs.length} {lang === "en" ? "engagements" : "건"}</p>
                </div>
                {projs.length === 0 ? (
                  <div className="empty">{L.labels.noProjectResults[lang]}</div>
                ) : (
                  <div className="proj-list">
                    {projs.map((p, i) => (
                      <div key={i} className="proj">
                        <div className="proj-period">{p.period}</div>
                        <div>
                          <div className="proj-title">{p.title[lang]}</div>
                          <div className="proj-sponsor">{p.sponsor[lang]}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </Reveal>

              <div className="pagefoot">
                <span>© {D.name.en} · 2026</span>
                <span className="mono">v4 — macOS</span>
              </div>
            </div>
            </ScrollRootCtx.Provider>
          </main>
        </div>
      </div>
    </React.Fragment>
  );
}

window.V4MacApp = V4MacApp;
