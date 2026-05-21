"use client";
// Lattice — AI-native task management.
// Structure modeled after cursor.com: centered hero with layered window mockups,
// alternating editorial feature rows, testimonial grid, mini-feature row,
// changelog, applied-research block, giant centered CTA, minimal footer.
// Tokens from DESIGN.md.

import { motion, AnimatePresence } from "motion/react";
import { useEffect, useState } from "react";
import {
  ArrowRight, ArrowDown, Plus, Check, Sparkles, Trash2, Search,
  ChevronRight, ChevronDown, Boxes, Calendar,
  Mail, FileText, Link as LinkIcon, FolderPlus, Hash, MessageSquare,
  Bot, Inbox, Layers, Globe, Zap,
} from "lucide-react";

const ink = "#14120B";
const inkSoft = "#2A2820";
const paper = "#FAFAF7";
const paperCream = "#F4F2EC";
const paperWarm = "#EEEBE2";
const hairline = "#E8E4D9";
const hairlineStrong = "#D6D1C2";
const body = "#3A382E";
const muted = "#6E6B5E";
const dim = "#9A9685";
const faint = "#C5C0AE";
const blue = "#2D6FE0";
const violet = "#7C5CFF";
const green = "#1F8A4C";
const amber = "#B7791F";
const crimson = "#B0271A";

const sans = "var(--font-sans), Inter, sans-serif";
const serif = "var(--font-serif), Georgia, serif";
const mono = "var(--font-mono), 'SF Mono', Menlo, monospace";

function Mono({ children, style }: { children: React.ReactNode; style?: React.CSSProperties }) {
  return <span style={{ fontFamily: mono, ...style }}>{children}</span>;
}
function It({ children }: { children: React.ReactNode }) {
  return <span style={{ fontFamily: serif, fontStyle: "italic", fontWeight: 400 }}>{children}</span>;
}
function StatusPill({ kind, children }: { kind: "ai" | "done" | "wip" | "blocked" | "info"; children: React.ReactNode }) {
  const map = {
    ai:      { fg: ink,     bg: paperCream },
    done:    { fg: green,   bg: "#E8F4ED" },
    wip:     { fg: amber,   bg: "#FBF1DD" },
    blocked: { fg: crimson, bg: "#F7E4E1" },
    info:    { fg: blue,    bg: "#E5EEFB" },
  }[kind];
  return (
    <span style={{
      padding: "3px 9px", borderRadius: 999, fontFamily: mono, fontSize: 11, fontWeight: 500,
      letterSpacing: "0.06em", textTransform: "uppercase", color: map.fg, background: map.bg,
      display: "inline-flex", alignItems: "center", gap: 6, whiteSpace: "nowrap",
    }}>
      <span style={{ width: 5, height: 5, borderRadius: 999, background: map.fg }} />
      {children}
    </span>
  );
}
function PrimaryBtn({ children, small }: { children: React.ReactNode; small?: boolean }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -1, backgroundColor: "#1F1D14", boxShadow: "0 4px 12px rgba(20,18,11,0.16)" }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      style={{
        padding: small ? "8px 14px" : "10px 18px",
        fontSize: small ? 13 : 14, fontWeight: 500, color: paper, background: ink,
        border: `1px solid ${ink}`, borderRadius: 10, textDecoration: "none",
        height: small ? 36 : 40, display: "inline-flex", alignItems: "center",
        boxShadow: "inset 0 1px 0 rgba(255,255,255,0.08), 0 1px 2px rgba(20,18,11,0.08)",
        cursor: "pointer",
      }}
    >{children}</motion.a>
  );
}
function SecondaryBtn({ children, small }: { children: React.ReactNode; small?: boolean }) {
  return (
    <motion.a
      href="#"
      whileHover={{ y: -1, backgroundColor: paperCream, borderColor: ink }}
      whileTap={{ y: 0, scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      style={{
        padding: small ? "8px 14px" : "10px 18px",
        fontSize: small ? 13 : 14, fontWeight: 500, color: ink, background: paper,
        border: `1px solid ${hairlineStrong}`, borderRadius: 10, textDecoration: "none",
        height: small ? 36 : 40, display: "inline-flex", alignItems: "center",
        cursor: "pointer",
      }}
    >{children}</motion.a>
  );
}

/* ──────────────  LOADING SCREEN  ────────────── */
function Loader() {
  const [done, setDone] = useState(false);
  useEffect(() => {
    const t = setTimeout(() => setDone(true), 900);
    return () => clearTimeout(t);
  }, []);
  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          style={{
            position: "fixed", inset: 0, zIndex: 999,
            background: paper,
            display: "flex", alignItems: "center", justifyContent: "center",
            flexDirection: "column", gap: 18,
          }}
        >
          <motion.div
            initial={{ scale: 0.85, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.4, ease: [0.2, 0.8, 0.2, 1] }}
            style={{ display: "flex", alignItems: "center", gap: 10 }}
          >
            <motion.div
              animate={{ rotate: [0, 180, 360] }}
              transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
              style={{ display: "inline-flex" }}
            >
              <Boxes size={26} strokeWidth={1.75} color={ink} />
            </motion.div>
            <span style={{ fontSize: 18, fontWeight: 500, letterSpacing: "-0.01em" }}>Lattice</span>
          </motion.div>
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ height: 2, background: ink, borderRadius: 1, opacity: 0.5 }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}

/* ──────────────  Section reveal helper  ────────────── */
const SECTION_EASE = [0.2, 0.8, 0.2, 1] as const;
const sectionReveal = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: SECTION_EASE },
} as const;
const stagger = {
  initial: "hidden",
  whileInView: "show",
  viewport: { once: true, margin: "-60px" },
  variants: { show: { transition: { staggerChildren: 0.08, delayChildren: 0.05 } } },
} as const;
const item = {
  hidden: { opacity: 0, y: 18 },
  show: { opacity: 1, y: 0, transition: { duration: 0.55, ease: SECTION_EASE } },
} as const;

function Reveal({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: SECTION_EASE, delay }}
    >
      {children}
    </motion.div>
  );
}
function LearnMore({ children }: { children: React.ReactNode }) {
  return (
    <motion.a
      href="#"
      whileHover={{ x: 2 }}
      transition={{ type: "spring", stiffness: 400, damping: 26 }}
      style={{
        display: "inline-flex", alignItems: "center", gap: 6, fontSize: 13.5,
        fontWeight: 500, color: ink, textDecoration: "none",
        borderBottom: `1px solid ${hairlineStrong}`, paddingBottom: 2, cursor: "pointer",
      }}
    >
      {children} <ArrowRight size={14} strokeWidth={2} color={muted} />
    </motion.a>
  );
}

/* ──────────────  NAV  ────────────── */
function Nav() {
  return (
    <nav style={{
      position: "sticky", top: 0, zIndex: 100,
      background: "rgba(250,250,247,0.85)", backdropFilter: "blur(20px)",
      WebkitBackdropFilter: "blur(20px)", borderBottom: `1px solid ${hairline}`,
    }}>
      <div style={{ maxWidth: 1240, margin: "0 auto", padding: "14px 32px", height: 60,
        display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 36 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <Boxes size={20} strokeWidth={1.75} color={ink} />
            <span style={{ fontSize: 15, fontWeight: 500, letterSpacing: "-0.01em" }}>Lattice</span>
          </div>
          <div style={{ display: "flex", gap: 4 }}>
            {["Product", "Agents", "Pricing", "Changelog", "Docs"].map((l) => (
              <a key={l} href="#" style={{ padding: "8px 12px", borderRadius: 8, fontSize: 13, fontWeight: 500, color: body, textDecoration: "none" }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <a href="#" style={{ padding: "8px 12px", fontSize: 13, fontWeight: 500, color: body, textDecoration: "none" }}>Sign in</a>
          <PrimaryBtn small>Start free</PrimaryBtn>
        </div>
      </div>
    </nav>
  );
}

/* ──────────────  1. HERO  ────────────── */
function Hero() {
  const ease = [0.2, 0.8, 0.2, 1] as const;
  return (
    <section style={{ padding: "96px 32px 120px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", textAlign: "center" }}>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease, delay: 0.1 }}
          style={{
            fontSize: "clamp(40px, 5.2vw, 64px)",
            fontWeight: 500,
            lineHeight: 1.08,
            letterSpacing: "-0.025em",
            color: ink,
            maxWidth: 920,
            margin: "0 auto",
          }}
        >
          Built to make you extraordinarily productive. Lattice is the best way to <It>manage work</It> with AI.
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease, delay: 0.25 }}
          style={{ display: "flex", gap: 10, justifyContent: "center", marginTop: 32 }}
        >
          <PrimaryBtn small>Start free</PrimaryBtn>
          <SecondaryBtn small><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>Request a demo <ArrowRight size={14} strokeWidth={2} /></span></SecondaryBtn>
        </motion.div>

        {/* Layered window stack on a soft photo backdrop */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, ease, delay: 0.4 }}
          style={{ marginTop: 64, position: "relative", padding: "40px 0", maxWidth: 1100, margin: "64px auto 0" }}>
          {/* atmosphere */}
          <div style={{
            position: "absolute", inset: 0,
            background: "radial-gradient(ellipse at 20% 50%, #D8D1B8 0%, transparent 55%), radial-gradient(ellipse at 80% 60%, #C7D4D0 0%, transparent 60%), " + paperCream,
            borderRadius: 16, opacity: 0.55,
          }} />
          {/* Window 1 — kanban (back) */}
          <div style={{ position: "relative", maxWidth: 760, margin: "0 auto" }}>
            <Window title="lattice / workspace / billing-v2" rightPill={<StatusPill kind="ai">agent active</StatusPill>}>
              <div style={{ display: "grid", gridTemplateColumns: "200px 1fr 240px" }}>
                {/* sidebar */}
                <div style={{ borderRight: `1px solid ${hairline}`, padding: "14px 12px", fontFamily: mono, fontSize: 12, lineHeight: 1.9, color: body }}>
                  <Mono style={{ fontSize: 10, color: muted, letterSpacing: "0.04em", display: "block", marginBottom: 6 }}>WORKSPACE</Mono>
                  <div>▾ Billing v2</div>
                  <div style={{ paddingLeft: 12 }}>▾ This week</div>
                  <div style={{ paddingLeft: 22, background: paperWarm, borderRadius: 4, padding: "0 6px", margin: "0 -6px 0 16px", color: ink }}>EU rollout</div>
                  <div style={{ paddingLeft: 22 }}>Tax engine</div>
                  <div style={{ paddingLeft: 12 }}>▸ Inbox</div>
                  <div style={{ paddingLeft: 12 }}>▸ Backlog</div>
                  <div>▸ Roadmap</div>
                </div>
                {/* task list */}
                <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 8 }}>
                  {[
                    { t: "EU rollout — refund flow", p: <StatusPill kind="wip">in progress</StatusPill> },
                    { t: "Tax engine migration", p: <StatusPill kind="info">P1</StatusPill> },
                    { t: "Audit log retention policy", p: <StatusPill kind="blocked">blocked</StatusPill> },
                    { t: "Quarterly billing report", p: <StatusPill kind="ai">ai-drafted</StatusPill> },
                    { t: "SSO enterprise rollout", p: <StatusPill kind="done">shipped</StatusPill> },
                  ].map((r, i) => (
                    <div key={i} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "9px 12px", border: `1px solid ${hairline}`, borderRadius: 8 }}>
                      <span style={{ fontSize: 12.5, color: ink }}>{r.t}</span>
                      {r.p}
                    </div>
                  ))}
                </div>
                {/* details panel preview */}
                <div style={{ borderLeft: `1px solid ${hairline}`, background: paper, padding: 14 }}>
                  <Mono style={{ fontSize: 10, color: muted, letterSpacing: "0.04em" }}>DETAILS</Mono>
                  <div style={{ fontSize: 13, fontWeight: 500, marginTop: 8, lineHeight: 1.4 }}>EU rollout — refund flow</div>
                  <Mono style={{ fontSize: 10, color: dim, marginTop: 8, display: "block" }}>owner · maya</Mono>
                  <Mono style={{ fontSize: 10, color: dim, marginTop: 2, display: "block" }}>due · fri</Mono>
                  <div style={{ marginTop: 12, height: 4, background: paperWarm, borderRadius: 2, overflow: "hidden" }}>
                    <div style={{ width: "68%", height: "100%", background: ink }} />
                  </div>
                  <Mono style={{ fontSize: 10, color: muted, marginTop: 6, display: "block" }}>68% complete</Mono>
                </div>
              </div>
            </Window>
          </div>
          {/* Window 2 — agent panel (front, offset right) */}
          <div style={{ position: "absolute", right: "8%", top: 130, width: 340 }}>
            <Window title="agent · standup brief" small>
              <div style={{ padding: 16 }}>
                <Mono style={{ fontSize: 10, color: muted, letterSpacing: "0.04em" }}>SUMMARY</Mono>
                <p style={{ fontSize: 13, color: ink, lineHeight: 1.5, marginTop: 6 }}>
                  3 tasks moved overnight. 1 blocker needs you.
                </p>
                <div style={{ marginTop: 10, padding: "10px 12px", background: paper, border: `1px solid ${hairline}`, borderRadius: 8, fontSize: 12, color: body, lineHeight: 1.55 }}>
                  · Tax engine PR opened<br />
                  · Audit log blocked — legal pinged<br />
                  · 4 inbox items auto-tagged
                </div>
                <div style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 8px", border: `1px solid ${hairline}`, borderRadius: 6, fontSize: 11.5, fontWeight: 500 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: ink }} />
                  Claude <Mono style={{ fontSize: 10.5 }}>4.7</Mono>
                </div>
              </div>
            </Window>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Window({ title, children, rightPill, small }: { title: string; children: React.ReactNode; rightPill?: React.ReactNode; small?: boolean }) {
  return (
    <div style={{
      background: "#FFFFFF", border: `1px solid ${hairline}`, borderRadius: 12,
      boxShadow: small
        ? "0 1px 2px rgba(20,18,11,0.06), 0 12px 32px rgba(20,18,11,0.10)"
        : "0 1px 2px rgba(20,18,11,0.06), 0 20px 48px rgba(20,18,11,0.10), 0 40px 96px rgba(20,18,11,0.05)",
      overflow: "hidden",
    }}>
      <div style={{ height: 34, background: paperCream, borderBottom: `1px solid ${hairline}`, display: "flex", alignItems: "center", padding: "0 12px", gap: 10 }}>
        <div style={{ display: "flex", gap: 5 }}>
          <span style={{ width: 9, height: 9, borderRadius: 999, background: "#E0573F" }} />
          <span style={{ width: 9, height: 9, borderRadius: 999, background: "#E0B23F" }} />
          <span style={{ width: 9, height: 9, borderRadius: 999, background: "#5FB85C" }} />
        </div>
        <Mono style={{ fontSize: 11, color: muted }}>{title}</Mono>
        {rightPill && <div style={{ marginLeft: "auto" }}>{rightPill}</div>}
      </div>
      {children}
    </div>
  );
}

/* ──────────────  2. TRUST  ────────────── */
function Trust() {
  const teams = ["stripe", "OpenAI", "Linear", "Chronos", "ramp", "Adobe", "Notion", "Figma", "Vercel", "Arc"];
  const loop = [...teams, ...teams];
  return (
    <section style={{ padding: "56px 0", borderTop: `1px solid ${hairline}`, borderBottom: `1px solid ${hairline}`, overflow: "hidden" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center", padding: "0 32px" }}>
        <Mono style={{ fontSize: 11.5, color: muted, letterSpacing: "0.04em", display: "block", marginBottom: 32 }}>
          trusted by teams that ship modern-class software
        </Mono>
      </div>
      <div style={{ position: "relative", maskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, #000 12%, #000 88%, transparent)" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 28, ease: "linear", repeat: Infinity }}
          style={{ display: "flex", gap: 72, width: "max-content", paddingLeft: 36 }}
        >
          {loop.map((t, i) => (
            <span key={i} style={{ fontSize: 21, fontWeight: 500, letterSpacing: "-0.02em", color: inkSoft, opacity: 0.7, whiteSpace: "nowrap" }}>{t}</span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ──────────────  3-6. FEATURE ROWS (alternating)  ────────────── */
function FeatureRow({
  eyebrow, title, body: copy, learnMore, mockup, flip,
}: {
  eyebrow?: string; title: React.ReactNode; body: string; learnMore: string;
  mockup: React.ReactNode; flip?: boolean;
}) {
  return (
    <motion.section {...sectionReveal} style={{ padding: "128px 32px", background: paperCream }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid",
        gridTemplateColumns: flip ? "1.4fr 1fr" : "1fr 1.4fr", gap: 64, alignItems: "center" }}>
        {!flip && (
          <div>
            {eyebrow && <Mono style={{ fontSize: 11.5, color: muted, letterSpacing: "0.04em", display: "block", marginBottom: 14 }}>{eyebrow}</Mono>}
            <h2 style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.02em", color: ink }}>{title}</h2>
            <p style={{ fontSize: 15.5, color: body, lineHeight: 1.6, marginTop: 16, maxWidth: 360 }}>{copy}</p>
            <div style={{ marginTop: 24 }}><LearnMore>{learnMore}</LearnMore></div>
          </div>
        )}
        <div>{mockup}</div>
        {flip && (
          <div>
            {eyebrow && <Mono style={{ fontSize: 11.5, color: muted, letterSpacing: "0.04em", display: "block", marginBottom: 14 }}>{eyebrow}</Mono>}
            <h2 style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.02em", color: ink }}>{title}</h2>
            <p style={{ fontSize: 15.5, color: body, lineHeight: 1.6, marginTop: 16, maxWidth: 360 }}>{copy}</p>
            <div style={{ marginTop: 24 }}><LearnMore>{learnMore}</LearnMore></div>
          </div>
        )}
      </div>
    </motion.section>
  );
}

function MockupTriage() {
  return (
    <Window title="lattice · inbox">
      <div style={{ padding: 14, display: "flex", flexDirection: "column", gap: 8 }}>
        {[
          { from: "support@", t: "Refund flow stuck on EU cards", p: <StatusPill kind="ai">routed → eng</StatusPill> },
          { from: "#design", t: "Pricing page typo on /enterprise", p: <StatusPill kind="ai">routed → marketing</StatusPill> },
          { from: "meeting", t: "Quarterly billing report draft", p: <StatusPill kind="info">P2 · this week</StatusPill> },
          { from: "github", t: "PR #482 needs review", p: <StatusPill kind="wip">in progress</StatusPill> },
          { from: "calendar", t: "Customer interview · Acme", p: <StatusPill kind="info">thu 14:00</StatusPill> },
        ].map((r, i) => (
          <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "10px 12px", border: `1px solid ${hairline}`, borderRadius: 8 }}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, minWidth: 0 }}>
              <Mono style={{ fontSize: 11, color: dim, minWidth: 64 }}>{r.from}</Mono>
              <span style={{ fontSize: 13, color: ink, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{r.t}</span>
            </div>
            {r.p}
          </div>
        ))}
      </div>
    </Window>
  );
}

function MockupAgent() {
  return (
    <Window title="agent · plan">
      <div style={{ padding: 16 }}>
        <Mono style={{ fontSize: 10.5, color: muted, letterSpacing: "0.04em" }}>STEP 1 OF 4</Mono>
        <h4 style={{ fontSize: 15, fontWeight: 500, marginTop: 8 }}>Migrate computeTax to regional table</h4>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 6 }}>
          {[
            { s: "✓", t: "Read regions.json", c: green },
            { s: "✓", t: "Update computeTax signature", c: green },
            { s: "→", t: "Migrate 4 call sites", c: amber },
            { s: "·", t: "Run pnpm test billing", c: dim },
          ].map((r, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", gap: 10, fontSize: 13 }}>
              <span style={{ width: 18, color: r.c, fontFamily: mono, textAlign: "center" }}>{r.s}</span>
              <span style={{ color: r.c === dim ? dim : ink }}>{r.t}</span>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 16, padding: "10px 12px", background: paper, border: `1px solid ${hairline}`, borderRadius: 8, fontFamily: mono, fontSize: 12, color: body }}>
          $ lattice run --plan eu-rollout
        </div>
      </div>
    </Window>
  );
}

function MockupChat() {
  return (
    <Window title="#product · slack">
      <div style={{ padding: 16, display: "flex", flexDirection: "column", gap: 14, fontSize: 13 }}>
        <div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ width: 22, height: 22, borderRadius: 999, background: paperWarm, border: `1px solid ${hairline}` }} />
            <span style={{ fontWeight: 500 }}>idris</span>
            <Mono style={{ fontSize: 10.5, color: dim }}>10:42</Mono>
          </div>
          <div style={{ marginLeft: 30, marginTop: 4, color: body }}>can someone own the refund-flow bug? eu only</div>
        </div>
        <div style={{ marginLeft: 30, padding: "10px 12px", background: paper, border: `1px dashed ${hairlineStrong}`, borderRadius: 8 }}>
          <Mono style={{ fontSize: 10.5, color: ink, letterSpacing: "0.04em", display: "block", marginBottom: 6 }}>LATTICE</Mono>
          <span style={{ color: ink, fontSize: 13 }}>Created task <Mono style={{ fontSize: 12 }}>BIL-482</Mono> for <span style={{ color: blue }}>@maya</span> · P1 · due fri</span>
        </div>
        <div>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <div style={{ width: 22, height: 22, borderRadius: 999, background: paperWarm, border: `1px solid ${hairline}` }} />
            <span style={{ fontWeight: 500 }}>maya</span>
            <Mono style={{ fontSize: 10.5, color: dim }}>10:43</Mono>
          </div>
          <div style={{ marginLeft: 30, marginTop: 4, color: body }}>on it 👍</div>
        </div>
      </div>
    </Window>
  );
}

function MockupSearch() {
  return (
    <Window title="recall · ask anything">
      <div style={{ padding: 16 }}>
        <div style={{ padding: "10px 12px", background: paper, border: `1px solid ${hairline}`, borderRadius: 8, fontFamily: mono, fontSize: 13, color: ink, display: "flex", alignItems: "center", gap: 8 }}>
          <Search size={13} strokeWidth={2} color={dim} /> what blocked the EU rollout last month
        </div>
        <div style={{ marginTop: 14, display: "flex", flexDirection: "column", gap: 8 }}>
          {[
            { k: "ticket", t: "BIL-441 — legal review of refund policy", m: "blocked → resolved 12d" },
            { k: "thread", t: "#eu-launch — pricing schema mismatch", m: "23 replies · resolved" },
            { k: "post-mortem", t: "EU rollout retro", m: "owner · maya" },
          ].map((r, i) => (
            <div key={i} style={{ padding: "10px 12px", border: `1px solid ${hairline}`, borderRadius: 8 }}>
              <Mono style={{ fontSize: 10.5, color: ink, letterSpacing: "0.04em" }}>{r.k}</Mono>
              <div style={{ fontSize: 13, color: ink, marginTop: 4 }}>{r.t}</div>
              <Mono style={{ fontSize: 10.5, color: muted, marginTop: 4, display: "block" }}>{r.m}</Mono>
            </div>
          ))}
        </div>
      </div>
    </Window>
  );
}

/* ──────────────  BENTO  ────────────── */
function BentoCard({
  visual, title, body: copy, accent,
}: { visual: React.ReactNode; title: string; body: string; accent?: boolean }) {
  return (
    <motion.div
      variants={item}
      whileHover={{ y: -3 }}
      transition={{ type: "spring", stiffness: 300, damping: 22 }}
      style={{
        background: accent ? "linear-gradient(180deg, #2D6FE0 0%, #1B4FB0 100%)" : paperCream,
        borderRadius: 20,
        padding: 24,
        display: "flex",
        flexDirection: "column",
        gap: 20,
        border: accent ? "none" : `1px solid ${hairline}`,
        minHeight: 380,
        overflow: "hidden",
        position: "relative",
      }}>
      <div style={{ height: 220, display: "flex", alignItems: "center", justifyContent: "center", position: "relative" }}>
        {visual}
      </div>
      <div style={{ marginTop: "auto" }}>
        <h4 style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em", color: accent ? "#FFFFFF" : ink }}>{title}</h4>
        <p style={{ fontSize: 13.5, lineHeight: 1.55, marginTop: 8, color: accent ? "rgba(255,255,255,0.78)" : body }}>{copy}</p>
      </div>
    </motion.div>
  );
}

function Bento() {
  return (
    <motion.section {...sectionReveal} style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ textAlign: "center", maxWidth: 760, margin: "0 auto" }}>
          <span style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            padding: "5px 12px", borderRadius: 8,
            background: paper, border: `1px solid ${hairline}`,
            fontSize: 12, fontWeight: 500, color: ink,
          }}>
            <Layers size={13} strokeWidth={1.75} color={muted} />
            Features
          </span>
          <h2 style={{ fontSize: 40, fontWeight: 500, lineHeight: 1.15, letterSpacing: "-0.025em", marginTop: 20 }}>
            Everything you need to turn signal into shipped — <It>all in one workspace</It>
          </h2>
          <p style={{ fontSize: 15.5, color: muted, marginTop: 16, lineHeight: 1.6, maxWidth: 560, margin: "16px auto 0" }}>
            We empower product teams to capture, plan, and manage AI-driven workflows without ever switching tabs.
          </p>
        </div>

        {/* Row 1 — 3 cards */}
        <motion.div {...stagger} style={{ marginTop: 64, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20 }}>
          <BentoCard
            title="AI-Optimized Task Data"
            body="Automatically rewrite task titles, descriptions, and acceptance criteria with context-rich copy that's clearer and shippable."
            visual={
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div style={{
                  position: "absolute", left: 4, top: 8, width: 150, height: 150,
                  borderRadius: 12, border: `1px solid ${hairline}`,
                  background: `linear-gradient(135deg, ${paperWarm}, #C7BFA8)`,
                }}>
                  <div style={{ padding: 10, fontSize: 9, fontFamily: mono, color: muted }}>
                    <div style={{ width: 60, height: 60, borderRadius: 8, background: "#8C7F62", marginTop: 28, marginLeft: 24, opacity: 0.7 }} />
                  </div>
                </div>
                <div style={{
                  position: "absolute", left: 84, top: 24, width: 220,
                  background: "#FFFFFF", border: `1px solid ${hairline}`, borderRadius: 10,
                  padding: 12, boxShadow: "0 8px 20px rgba(20,18,11,0.08)",
                }}>
                  <Mono style={{ fontSize: 9, color: muted, letterSpacing: "0.05em" }}>TITLE</Mono>
                  <div style={{ fontSize: 12, color: ink, marginTop: 4, fontWeight: 500, lineHeight: 1.35 }}>
                    Refund flow stuck on EU cards — investigate
                  </div>
                  <div style={{ marginTop: 10, display: "inline-flex", alignItems: "center", gap: 6, padding: "4px 10px", background: ink, color: "#FFF", borderRadius: 6, fontSize: 11, fontWeight: 500 }}>
                    <Sparkles size={12} strokeWidth={2.25} /> Optimize <span style={{ opacity: 0.6, marginLeft: 4 }}>B U I</span>
                  </div>
                </div>
                <div style={{
                  position: "absolute", left: 60, top: 130, width: 220,
                  background: "#FFFFFF", border: `1px solid ${hairline}`, borderRadius: 10,
                  padding: 12, boxShadow: "0 8px 20px rgba(20,18,11,0.08)",
                }}>
                  <div style={{ display: "inline-flex", alignItems: "center", gap: 5, fontSize: 9.5, fontWeight: 500, color: green }}>
                    <span style={{ width: 14, height: 14, borderRadius: 999, background: green, color: "#FFF", display: "inline-flex", alignItems: "center", justifyContent: "center" }}>
                      <Check size={9} strokeWidth={3} />
                    </span>
                    AI SUGGESTION
                  </div>
                  <div style={{ fontSize: 12, color: ink, marginTop: 6, lineHeight: 1.4 }}>
                    Investigate refund failure for EU Visa & Mastercard transactions, owner Maya, P1 due Fri.
                  </div>
                </div>
              </div>
            }
          />

          <BentoCard
            title="Capture from Anywhere"
            body="Import from Slack, Gmail, GitHub, or any tool with an API. Lattice syncs everything automatically into one inbox."
            visual={
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                {/* faded card row */}
                <div style={{ position: "absolute", top: 14, left: 0, right: 0, display: "flex", gap: 8, opacity: 0.45 }}>
                  {["Refund issue · #support", "Pricing typo · marketing"].map((t, i) => (
                    <div key={i} style={{ flex: 1, background: "#FFFFFF", border: `1px solid ${hairline}`, borderRadius: 10, padding: "8px 10px", display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: body }}>
                      <span style={{ width: 18, height: 18, borderRadius: 999, background: paperWarm, border: `1px solid ${hairline}` }} />
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t}</span>
                    </div>
                  ))}
                </div>
                {/* central source pills */}
                <div style={{ position: "absolute", top: 90, left: "50%", transform: "translateX(-50%)", display: "flex", gap: 10, zIndex: 2 }}>
                  {[
                    { Icon: Hash, c: green, w: 44, label: null as string | null },
                    { Icon: Sparkles, c: ink, w: 44, label: null as string | null },
                    { Icon: null, c: ink, w: 56, label: "XML" },
                  ].map((p, i) => (
                    <div key={i} style={{
                      width: p.w, height: 44, borderRadius: 12,
                      background: "#FFFFFF", border: `1px solid ${hairline}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: p.c,
                      boxShadow: "0 6px 16px rgba(20,18,11,0.08)",
                    }}>
                      {p.Icon ? <p.Icon size={20} strokeWidth={1.75} /> : <Mono style={{ fontSize: 12, fontWeight: 600, color: ink }}>{p.label}</Mono>}
                    </div>
                  ))}
                </div>
                {/* faded card row bottom */}
                <div style={{ position: "absolute", bottom: 14, left: 0, right: 0, display: "flex", gap: 8, opacity: 0.45 }}>
                  {["Audit log policy · legal", "Acme interview · cal"].map((t, i) => (
                    <div key={i} style={{ flex: 1, background: "#FFFFFF", border: `1px solid ${hairline}`, borderRadius: 10, padding: "8px 10px", display: "flex", alignItems: "center", gap: 8, fontSize: 11, color: body }}>
                      <span style={{ width: 18, height: 18, borderRadius: 999, background: paperWarm, border: `1px solid ${hairline}` }} />
                      <span style={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            }
          />

          <BentoCard
            accent
            title="Bulk Plan at Scale"
            body="Plan hundreds of tasks in seconds. Save hours of manual triage and keep your backlog calibrated, every day."
            visual={
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div style={{
                  position: "absolute", top: 10, left: 10, right: 10,
                  background: "#FFFFFF", borderRadius: 12, padding: 14,
                  boxShadow: "0 12px 28px rgba(0,0,0,0.16)",
                }}>
                  <Mono style={{ fontSize: 10.5, color: muted, letterSpacing: "0.04em" }}>ALL OPEN TASKS</Mono>
                  <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 8 }}>
                    {[
                      { t: "Refund flow — EU cards", on: true },
                      { t: "Tax engine migration", on: true },
                      { t: "Audit log retention policy", on: false },
                    ].map((r, i) => (
                      <div key={i} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 12, color: ink }}>
                        <span style={{
                          width: 16, height: 16, borderRadius: 4,
                          background: r.on ? green : "#FFFFFF",
                          border: `1px solid ${r.on ? green : hairlineStrong}`,
                          color: "#FFF", display: "inline-flex", alignItems: "center", justifyContent: "center",
                        }}>{r.on ? <Check size={11} strokeWidth={3} /> : null}</span>
                        {r.t}
                      </div>
                    ))}
                    <div style={{ marginTop: 4, display: "inline-flex", alignSelf: "flex-start", alignItems: "center", gap: 6, padding: "5px 10px", borderRadius: 6, background: paperCream, border: `1px solid ${hairline}`, fontSize: 11, color: ink }}>
                      <Sparkles size={11} strokeWidth={2} color={ink} /> Click to optimize
                    </div>
                  </div>
                </div>
                <div style={{
                  position: "absolute", right: -8, bottom: -8, width: 110, height: 110,
                  borderRadius: 999, background: "rgba(255,255,255,0.18)",
                  filter: "blur(2px)",
                }} />
              </div>
            }
          />
        </motion.div>

        {/* Row 2 — 2 wide cards */}
        <motion.div {...stagger} style={{ marginTop: 20, display: "grid", gridTemplateColumns: "1.15fr 1fr", gap: 20 }}>
          <BentoCard
            title="Create a Workflow From Scratch"
            body="Generate a complete, ready-to-run workflow in minutes — including triggers, owners, and review steps."
            visual={
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div style={{
                  position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                  width: "85%", background: "#FFFFFF", borderRadius: 12, padding: 18,
                  boxShadow: "0 10px 24px rgba(20,18,11,0.08)", border: `1px solid ${hairline}`,
                }}>
                  <div style={{ display: "grid", gridTemplateColumns: "1fr 0.6fr", gap: 12 }}>
                    <div>
                      <Mono style={{ fontSize: 10, color: muted, letterSpacing: "0.04em" }}>WORKFLOW NAME</Mono>
                      <div style={{ marginTop: 6, padding: "8px 10px", border: `1px solid ${hairline}`, borderRadius: 8, fontSize: 12, color: ink }}>EU Refund Triage</div>
                    </div>
                    <div>
                      <Mono style={{ fontSize: 10, color: muted, letterSpacing: "0.04em" }}>OWNER</Mono>
                      <div style={{ marginTop: 6, padding: "8px 10px", border: `1px solid ${hairline}`, borderRadius: 8, fontSize: 12, color: ink }}>@maya</div>
                    </div>
                  </div>
                  <div style={{ marginTop: 12 }}>
                    <Mono style={{ fontSize: 10, color: muted, letterSpacing: "0.04em" }}>TRIGGER</Mono>
                    <div style={{ marginTop: 6, padding: "8px 10px", border: `1px solid ${hairline}`, borderRadius: 8, fontSize: 12, color: ink, fontFamily: mono }}>
                      slack:#support contains "refund"
                    </div>
                  </div>
                  <div style={{ marginTop: 14, padding: "10px 14px", background: ink, color: paper, borderRadius: 8, fontSize: 12.5, fontWeight: 500, textAlign: "center" }}>
                    Create workflow with Lattice
                  </div>
                </div>
              </div>
            }
          />

          <BentoCard
            title="Multi-region Integration"
            body="Go global. Run localized task templates per region and language for international product launches."
            visual={
              <div style={{ position: "relative", width: "100%", height: "100%" }}>
                <div style={{
                  position: "absolute", top: 10, left: 10, width: 260,
                  background: "#FFFFFF", borderRadius: 12, padding: 14,
                  boxShadow: "0 10px 24px rgba(20,18,11,0.08)", border: `1px solid ${hairline}`,
                }}>
                  <Mono style={{ fontSize: 10.5, color: muted, letterSpacing: "0.04em" }}>LOCALES</Mono>
                  <div style={{ marginTop: 10, display: "flex", flexDirection: "column", gap: 9 }}>
                    {[
                      { n: "Spain", v: "100%" },
                      { n: "France", v: "15%" },
                      { n: "Sweden", v: "35%" },
                      { n: "United States", v: "40%" },
                    ].map((r) => (
                      <div key={r.n} style={{ display: "flex", justifyContent: "space-between", alignItems: "center", fontSize: 12 }}>
                        <span style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
                          <span style={{ width: 16, height: 12, background: paperWarm, border: `1px solid ${hairline}`, borderRadius: 2 }} />
                          <span style={{ color: ink }}>{r.n}</span>
                        </span>
                        <Mono style={{ fontSize: 11, color: muted }}>{r.v}</Mono>
                      </div>
                    ))}
                  </div>
                </div>
                <div style={{
                  position: "absolute", right: 12, top: 24,
                  width: 42, height: 42, borderRadius: 10, background: green,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#FFF",
                }}><Globe size={20} strokeWidth={2} /></div>
                <div style={{
                  position: "absolute", right: 0, top: 100,
                  padding: "5px 10px", background: "#E8F4ED", color: green,
                  borderRadius: 999, fontSize: 11, fontWeight: 500, border: `1px solid #C8E4D2`,
                  display: "inline-flex", alignItems: "center", gap: 6,
                }}><Sparkles size={11} strokeWidth={2.25} /> Localizing tasks</div>
                <div style={{ position: "absolute", right: 6, bottom: 14, display: "flex", flexDirection: "column", gap: 4, opacity: 0.5 }}>
                  {[0,1,2].map((i) => <div key={i} style={{ width: 90, height: 8, background: "#FFFFFF", border: `1px solid ${hairline}`, borderRadius: 4 }} />)}
                </div>
              </div>
            }
          />
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ──────────────  CONNECTED  ────────────── */
function Connected() {
  return (
    <motion.section {...sectionReveal} style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1.2fr 1fr", gap: 64, alignItems: "start" }}>
          <div>
            <span style={{
              display: "inline-flex", alignItems: "center", gap: 6,
              padding: "5px 12px", borderRadius: 8,
              background: paper, border: `1px solid ${hairline}`,
              fontSize: 12, fontWeight: 500, color: ink, marginBottom: 24,
            }}>
              <span style={{ width: 14, height: 14, borderRadius: 3, border: `1px solid ${muted}` }} />
              How Lattice helps
            </span>
            <h2 style={{ fontSize: 48, fontWeight: 500, lineHeight: 1.05, letterSpacing: "-0.03em" }}>
              Work flows better when everything stays <It>connected</It>.
            </h2>
          </div>
          <p style={{ fontSize: 15.5, color: muted, lineHeight: 1.65, marginTop: 56 }}>
            Lattice removes friction from everyday work with simple, flexible
            tools your team can adapt to any process.
          </p>
        </div>

        <motion.div {...stagger} style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 24 }}>
          {/* Panel 1 — Organized workspaces */}
          <motion.div variants={item}>
            <div style={{
              height: 380, borderRadius: 16,
              background: "linear-gradient(135deg, #D6D6CC 0%, #B8B5A6 100%)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                width: 340, background: "#FFFFFF", borderRadius: 14, padding: 18,
                boxShadow: "0 20px 48px rgba(20,18,11,0.18)",
              }}>
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                  <span style={{ display: "inline-flex", alignItems: "center", gap: 8, fontSize: 13, fontWeight: 500 }}>
                    <Inbox size={14} strokeWidth={1.75} color={muted} />
                    To-do <Mono style={{ fontSize: 11.5, color: muted, marginLeft: 4 }}>3</Mono>
                  </span>
                  <div style={{ display: "flex" }}>
                    {[{l:"S",c:"#E07F58"},{l:"M",c:"#7C5CFF"},{l:"T",c:"#1B4FB0"}].map((a, i) => (
                      <span key={i} style={{
                        width: 22, height: 22, borderRadius: 999, background: a.c, color: "#FFF",
                        fontSize: 10, fontWeight: 600, display: "inline-flex", alignItems: "center", justifyContent: "center",
                        border: "2px solid #FFFFFF", marginLeft: i === 0 ? 0 : -6,
                      }}>{a.l}</span>
                    ))}
                  </div>
                </div>
                <div style={{ marginTop: 16, display: "flex", flexDirection: "column" }}>
                  {[
                    { t: "Sprint Planning Call", s: "Completed", bg: "#E8F4ED", fg: green },
                    { t: "Marketing Assets", s: "Ongoing", bg: "#FBF1DD", fg: amber },
                    { t: "Developer Handover", s: "To-do", bg: "#E5EEFB", fg: blue },
                  ].map((r, i, arr) => (
                    <div key={i} style={{
                      display: "flex", justifyContent: "space-between", alignItems: "center",
                      padding: "12px 0", borderTop: i === 0 ? "none" : `1px solid ${hairline}`,
                    }}>
                      <span style={{ fontSize: 13, color: ink }}>{r.t}</span>
                      <span style={{ padding: "3px 10px", borderRadius: 6, background: r.bg, color: r.fg, fontSize: 11, fontWeight: 500 }}>{r.s}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <h4 style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em", marginTop: 24 }}>Organized Workspaces</h4>
            <p style={{ fontSize: 14, color: muted, lineHeight: 1.6, marginTop: 8, maxWidth: 460 }}>
              Bring all your tasks, docs, and information together. No more switching between tools — keep everything fully structured and searchable.
            </p>
          </motion.div>

          {/* Panel 2 — Shared collab */}
          <motion.div variants={item}>
            <div style={{
              height: 380, borderRadius: 16,
              background: "linear-gradient(135deg, #ECECEA 0%, #D2D2CE 100%)",
              position: "relative", overflow: "hidden",
            }}>
              <div style={{
                position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
                width: 320, display: "flex", flexDirection: "column", gap: 12, alignItems: "center",
              }}>
                {[
                  { Icon: LinkIcon, n: "Sprint Management System" },
                  { Icon: FolderPlus, n: "Create Sprint Folder" },
                  { Icon: MessageSquare, n: "Send Message to Channel" },
                ].map((r, i) => (
                  <div key={r.n} style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    {i > 0 && <div style={{ width: 1, height: 12, background: hairlineStrong, marginBottom: 12 }} />}
                    <div style={{
                      width: "100%", display: "flex", alignItems: "center", gap: 10,
                      padding: "12px 14px", background: "#FFFFFF", borderRadius: 10,
                      boxShadow: "0 6px 16px rgba(20,18,11,0.08)",
                    }}>
                      <r.Icon size={15} strokeWidth={1.75} color={ink} />
                      <span style={{ fontSize: 13, color: ink, flex: 1 }}>{r.n}</span>
                      <Trash2 size={14} strokeWidth={1.75} color={dim} />
                    </div>
                  </div>
                ))}
                <div style={{ width: 1, height: 12, background: hairlineStrong }} />
                <motion.div
                  whileHover={{ scale: 1.08 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                  style={{
                    width: 38, height: 38, borderRadius: 999, background: blue,
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#FFF", boxShadow: "0 6px 16px rgba(45,111,224,0.32)",
                    cursor: "pointer",
                  }}
                ><Plus size={18} strokeWidth={2.25} /></motion.div>
              </div>
            </div>
            <h4 style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em", marginTop: 24 }}>Shared Views & Collaboration</h4>
            <p style={{ fontSize: 14, color: muted, lineHeight: 1.6, marginTop: 8, maxWidth: 460 }}>
              Bring all your tasks, docs, and information together. No more switching between tools — searchable and in the right place.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ──────────────  7. TESTIMONIALS  ────────────── */
function Testimonials() {
  const quotes = [
    { q: "We deleted three tools the week we adopted Lattice. Standup is just the brief now.", a: "Maya Chen", r: "Eng Lead at Ramp" },
    { q: "It's the first AI workspace that actually reduced my open tab count. Every team should be using this.", a: "Idris Patel", r: "Founder at Specter" },
    { q: "Our backlog used to be a graveyard. Now it's a living document we trust." , a: "Sara Lindqvist", r: "Head of Product at Arc" },
  ];
  return (
    <motion.section {...sectionReveal} style={{ padding: "120px 32px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h2 style={{ fontSize: 32, fontWeight: 500, letterSpacing: "-0.02em", textAlign: "center" }}>
          The <It>new</It> way to manage work.
        </h2>
        <motion.div {...stagger} style={{ marginTop: 56, display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
          {quotes.map((q, i) => (
            <motion.div variants={item} key={i} whileHover={{ y: -4 }} transition={{ type: "spring", stiffness: 300, damping: 22 }} style={{ background: "#FFFFFF", border: `1px solid ${hairline}`, borderRadius: 12, padding: 24, display: "flex", flexDirection: "column" }}>
              <p style={{ fontSize: 14.5, lineHeight: 1.6, color: ink }}>"{q.q}"</p>
              <div style={{ marginTop: 24, paddingTop: 16, borderTop: `1px solid ${hairline}`, display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 32, height: 32, borderRadius: 999, background: paperWarm, border: `1px solid ${hairline}` }} />
                <div>
                  <div style={{ fontSize: 13, fontWeight: 500 }}>{q.a}</div>
                  <Mono style={{ fontSize: 10.5, color: muted, display: "block", marginTop: 2 }}>{q.r}</Mono>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}

/* ──────────────  8. STAY ON FRONTIER (mini 3-col)  ────────────── */
function Frontier() {
  return (
    <motion.section {...sectionReveal} style={{ padding: "40px 32px 120px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 28 }}>Stay on the frontier</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
          {/* Card 1 — model picker */}
          <FrontierCard
            title="Use the best model for every task"
            body="Choose between models or by project. Lattice routes Claude, GPT, and Gemini."
            link="Explore models"
            visual={
              <div style={{ padding: 14, background: paper, border: `1px solid ${hairline}`, borderRadius: 10 }}>
                {[
                  { n: "Auto", on: false },
                  { n: "Claude 4.7", on: true },
                  { n: "GPT-5", on: false },
                  { n: "Gemini 2.5", on: false },
                  { n: "Haiku 4.5", on: false },
                ].map((r) => (
                  <div key={r.n} style={{ display: "flex", justifyContent: "space-between", padding: "6px 8px", borderRadius: 6, background: r.on ? paperWarm : "transparent", fontSize: 12 }}>
                    <span>{r.n}</span>
                    {r.on && <span style={{ color: ink }}>●</span>}
                  </div>
                ))}
              </div>
            }
          />
          {/* Card 2 — knowledge */}
          <FrontierCard
            title="Complete codebase understanding"
            body="Lattice knows your whole workspace, surfaces what matters, then drafts the next move."
            link="Learn about codebase indexing"
            visual={
              <div style={{ padding: 14, background: paper, border: `1px solid ${hairline}`, borderRadius: 10, fontFamily: mono, fontSize: 12, color: body }}>
                <Mono style={{ fontSize: 10.5, color: ink, letterSpacing: "0.04em", display: "block", marginBottom: 8 }}>ASK</Mono>
                <div style={{ color: ink }}>Where are these rate limits defined?</div>
                <div style={{ marginTop: 10, color: blue }}>→ lib/billing/limits.ts:42</div>
                <div style={{ color: blue }}>→ docs/rate-limits.md</div>
                <div style={{ color: blue }}>→ #infra · 14d ago</div>
              </div>
            }
          />
          {/* Card 3 — devs as people */}
          <FrontierCard
            title="Developing winning software"
            body="Equipping you and the team to build amazing experiences, every day."
            link="Explore categories"
            visual={
              <div style={{ height: 168, background: `linear-gradient(135deg, ${ink}, ${inkSoft})`, borderRadius: 10, position: "relative", overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, padding: 16, fontFamily: mono, fontSize: 10.5, color: "#9A9685", lineHeight: 1.7 }}>
                  <div style={{ color: "#7C5CFF" }}>function</div>
                  <div>computeTax(order, region) {`{`}</div>
                  <div style={{ paddingLeft: 14 }}>const rate = regions[region];</div>
                  <div style={{ paddingLeft: 14, color: "#5FB85C" }}>return order.subtotal * rate;</div>
                  <div>{`}`}</div>
                </div>
              </div>
            }
          />
        </div>
      </div>
    </motion.section>
  );
}

function FrontierCard({ title, body: copy, link, visual }: { title: string; body: string; link: string; visual: React.ReactNode }) {
  return (
    <div style={{ background: "#FFFFFF", border: `1px solid ${hairline}`, borderRadius: 12, padding: 20, display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <h4 style={{ fontSize: 16, fontWeight: 500, letterSpacing: "-0.01em", lineHeight: 1.3 }}>{title}</h4>
        <p style={{ fontSize: 13.5, color: body, marginTop: 6, lineHeight: 1.55 }}>{copy}</p>
        <a href="#" style={{ fontSize: 12.5, fontWeight: 500, color: ink, textDecoration: "none", display: "inline-block", marginTop: 10, borderBottom: `1px solid ${hairlineStrong}`, paddingBottom: 2 }}>{link} →</a>
      </div>
      {visual}
    </div>
  );
}

/* ──────────────  9. CHANGELOG  ────────────── */
function Changelog() {
  const rows = [
    { d: "May 19, 2026", t: "Bento improvements · Custom automations" },
    { d: "May 14, 2026", t: "Lattice 4.0" },
    { d: "May 10, 2026", t: "Companion 2.0" },
    { d: "May 06, 2026", t: "For everyone — Roles and Org Chart" },
  ];
  return (
    <motion.section {...sectionReveal} style={{ padding: "0 32px 120px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 20 }}>Changelog</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", borderTop: `1px solid ${hairline}` }}>
          {rows.map((r, i) => (
            <div key={i} style={{ padding: "20px 16px", borderRight: i < rows.length - 1 ? `1px solid ${hairline}` : "none", borderBottom: `1px solid ${hairline}` }}>
              <Mono style={{ fontSize: 11, color: muted }}>{r.d}</Mono>
              <div style={{ fontSize: 13.5, color: ink, marginTop: 8, lineHeight: 1.5 }}>{r.t}</div>
            </div>
          ))}
        </div>
        <a href="#" style={{ display: "inline-block", marginTop: 18, fontSize: 13.5, fontWeight: 500, color: ink, textDecoration: "none", borderBottom: `1px solid ${hairlineStrong}`, paddingBottom: 2 }}>See all recent shipped →</a>
      </div>
    </motion.section>
  );
}

/* ──────────────  10. APPLIED RESEARCH  ────────────── */
function Research() {
  return (
    <motion.section {...sectionReveal} style={{ padding: "0 32px 120px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto", display: "grid", gridTemplateColumns: "1fr 1.4fr", gap: 64, alignItems: "center" }}>
        <div>
          <h2 style={{ fontSize: 32, fontWeight: 500, lineHeight: 1.2, letterSpacing: "-0.02em" }}>
            Lattice is an applied research lab focused on building the <It>future</It> of how teams work.
          </h2>
          <div style={{ marginTop: 28 }}><LearnMore>About us</LearnMore></div>
        </div>
        <div style={{
          height: 320, borderRadius: 12, border: `1px solid ${hairline}`,
          background: `
            radial-gradient(circle at 30% 50%, ${paperWarm}, transparent 60%),
            radial-gradient(circle at 70% 60%, #D3C7B0, transparent 55%),
            linear-gradient(135deg, ${paperCream} 0%, ${paperWarm} 100%)
          `,
          position: "relative", overflow: "hidden",
        }}>
          <div style={{ position: "absolute", bottom: 24, left: 24, right: 24, display: "flex", gap: 16, alignItems: "flex-end" }}>
            <div style={{ width: 80, height: 80, borderRadius: 999, background: "#A89878", opacity: 0.7 }} />
            <div style={{ width: 60, height: 60, borderRadius: 999, background: "#8C7F62", opacity: 0.6 }} />
            <div style={{ flex: 1 }} />
            <Mono style={{ fontSize: 11, color: muted }}>est. 2024 · sf, ny, london</Mono>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

/* ──────────────  11. RECENT HIGHLIGHTS  ────────────── */
function Highlights() {
  const rows = [
    { d: "May 12, 2026 — Release", t: "Lattice is a participant at Compositer 2" },
    { d: "May 09, 2026 — Release", t: "Introducing Companion 2.0" },
    { d: "May 02, 2026 — Release", t: "Meet the new Lattice" },
    { d: "May 19, 2026 — Release", t: "Introducing Companion 2.0" },
  ];
  return (
    <motion.section {...sectionReveal} style={{ padding: "0 32px 120px" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <h3 style={{ fontSize: 22, fontWeight: 500, letterSpacing: "-0.015em", marginBottom: 20 }}>Recent highlights</h3>
        <div style={{ borderTop: `1px solid ${hairline}` }}>
          {rows.map((r, i) => (
            <div key={i} style={{ padding: "18px 0", borderBottom: `1px solid ${hairline}`, display: "grid", gridTemplateColumns: "240px 1fr auto", gap: 24, alignItems: "center" }}>
              <Mono style={{ fontSize: 11, color: muted }}>{r.d}</Mono>
              <div style={{ fontSize: 14, color: ink }}>{r.t}</div>
              <Mono style={{ fontSize: 11, color: muted }}>Quick read · 4 min read</Mono>
            </div>
          ))}
        </div>
        <a href="#" style={{ display: "inline-block", marginTop: 18, fontSize: 13.5, fontWeight: 500, color: ink, textDecoration: "none", borderBottom: `1px solid ${hairlineStrong}`, paddingBottom: 2 }}>More All blog posts →</a>
      </div>
    </motion.section>
  );
}

/* ──────────────  12. FINAL CTA  ────────────── */
function FinalCTA() {
  return (
    <motion.section {...sectionReveal} style={{ padding: "120px 32px 140px", textAlign: "center" }}>
      <h2 style={{ fontSize: 88, fontWeight: 500, lineHeight: 1, letterSpacing: "-0.04em" }}>
        Try Lattice <It>now</It>.
      </h2>
      <div style={{ marginTop: 36, display: "inline-flex", gap: 10 }}>
        <PrimaryBtn small><span style={{ display: "inline-flex", alignItems: "center", gap: 6 }}>Download for macOS <ArrowDown size={14} strokeWidth={2} /></span></PrimaryBtn>
      </div>
    </motion.section>
  );
}

/* ──────────────  FOOTER  ────────────── */
function Footer() {
  return (
    <footer style={{ borderTop: `1px solid ${hairline}`, padding: "48px 32px 32px", background: paper }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 32 }}>
          {[
            { h: "Product", l: ["Pricing", "Downloads", "Students", "Enterprise", "Web", "CLI"] },
            { h: "Resources", l: ["Changelog", "Docs", "Forum", "Status"] },
            { h: "Company", l: ["Anthropic", "Blog", "Careers", "Customers", "Community"] },
            { h: "Legal", l: ["Terms of Service", "Privacy Policy", "Security", "Trust Center"] },
          ].map((col) => (
            <div key={col.h}>
              <Mono style={{ fontSize: 11, color: muted, letterSpacing: "0.04em" }}>{col.h}</Mono>
              <ul style={{ listStyle: "none", padding: 0, margin: "14px 0 0", display: "flex", flexDirection: "column", gap: 8 }}>
                {col.l.map((l) => (
                  <li key={l}><a href="#" style={{ fontSize: 13, color: body, textDecoration: "none" }}>{l}</a></li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div style={{ marginTop: 48, paddingTop: 20, borderTop: `1px solid ${hairline}`, display: "flex", justifyContent: "space-between", alignItems: "center" }}>
          <Mono style={{ fontSize: 11, color: muted }}>© 2026 Lattice Labs, Inc.</Mono>
          <Mono style={{ fontSize: 11, color: muted }}>v4.0.2</Mono>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main>
      <Loader />
      <Nav />
      <Hero />
      <Trust />
      <FeatureRow
        eyebrow="agents turn ideas into tasks"
        title={<>Agents turn <It>ideas</It> into tasks.</>}
        body="Accelerate planning by letting agents capture work from Slack, email, and meetings — while you focus on shipping."
        learnMore="Learn about agents in Lattice"
        mockup={<MockupAgent />}
      />
      <FeatureRow
        eyebrow="works autonomously, runs in parallel"
        title={<>Works autonomously, <It>runs</It> in parallel.</>}
        body="Agents use the same workspace to build, test, and check features end-to-end for you to review."
        learnMore="Learn about Lattice"
        mockup={<MockupTriage />}
        flip
      />
      <FeatureRow
        eyebrow="in every tool, at every step"
        title={<>In every tool, at every <It>step</It>.</>}
        body="Lattice lives in your terminal, collaborates in Slack, and reviews PRs in GitHub. One source of truth across all of it."
        learnMore="Learn about Lattice"
        mockup={<MockupChat />}
      />
      <FeatureRow
        eyebrow="magically accurate recall"
        title={<>Magically accurate <It>recall</It>.</>}
        body="Ask anything across tickets, docs, and chat. Lattice returns the decision, the owner, and the next step."
        learnMore="Learn about recall"
        mockup={<MockupSearch />}
        flip
      />
      <Bento />
      <Connected />
      <Testimonials />
      <Frontier />
      <Research />
      <FinalCTA />
      <Footer />
    </main>
  );
}
