/* eslint-disable */
const { useState } = React;

// ============================================================
// Icon — simple Lucide-style sprites used across the kit
// ============================================================
const I = {
  user: <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>,
  userCircle: <><circle cx="12" cy="7" r="4"/></>,
  phone: <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>,
  mail: <><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-10 5L2 7"/></>,
  school: <><path d="m4 6 8-3 8 3"/><path d="M4 10v8"/><path d="M20 10v8"/><path d="M2 18h20"/><path d="M14 22v-4a2 2 0 0 0-4 0v4"/></>,
  bars: <><path d="M3 3v18h18"/><path d="M8 17V9"/><path d="M13 17v-5"/><path d="M18 17v-3"/></>,
  book: <><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></>,
  calendar: <><rect x="3" y="4" width="18" height="18" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/></>,
  graduation: <><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></>,
  arrowRight: <path d="M5 12h14M13 5l7 7-7 7"/>,
  play: <polygon points="6 3 20 12 6 21 6 3"/>,
  target: <><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></>,
  users: <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></>,
  brain: <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5v.5A4 4 0 0 0 4 11a4 4 0 0 0 .5 7.95A4.5 4.5 0 0 0 12 22a4.5 4.5 0 0 0 7.5-3.05A4 4 0 0 0 20 11a4 4 0 0 0-3.5-4V6.5A4.5 4.5 0 0 0 12 2Z"/>,
  trendUp: <><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"/><polyline points="16 7 22 7 22 13"/></>,
  star: <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>,
  trophy: <><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></>,
  globe: <><circle cx="12" cy="12" r="10"/><path d="M2 12h20M12 2a15 15 0 0 1 0 20M12 2a15 15 0 0 0 0 20"/></>,
  shield: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></>,
  chevron: <polyline points="6 9 12 15 18 9"/>,
};
function Icon({ name, size = 18, fill = false, className = "" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24"
      fill={fill ? "currentColor" : "none"} stroke="currentColor"
      strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" className={className}>
      {I[name]}
    </svg>
  );
}

// ============================================================
// Button
// ============================================================
function Button({ variant = "primary", children, icon = "arrowRight", style, onClick, full }) {
  const base = {
    display: "inline-flex", alignItems: "center", justifyContent: "center", gap: 10,
    height: 52, padding: "0 22px", borderRadius: 16,
    fontFamily: "var(--font-sans)", fontWeight: 600, fontSize: 15,
    border: 0, cursor: "pointer", transition: "all 200ms cubic-bezier(.2,.7,.2,1)",
    width: full ? "100%" : "auto",
  };
  const variants = {
    primary: { background: "var(--orange-500)", color: "#fff", boxShadow: "0 10px 24px -6px rgba(255,101,52,.55)" },
    secondary: { background: "transparent", color: "#fff", border: "1px solid rgba(255,255,255,.22)" },
  };
  const arrowBg = variant === "secondary" ? "var(--orange-500)" : "rgba(255,255,255,.22)";
  return (
    <button className={`btn-${variant}`} onClick={onClick} style={{ ...base, ...variants[variant], ...style }}>
      {children}
      {icon && (
        <span style={{ width: 24, height: 24, borderRadius: 999, background: arrowBg,
          display: "inline-flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
          <Icon name={icon} size={13} fill={icon === "play"} />
        </span>
      )}
    </button>
  );
}

// ============================================================
// Field & Select
// ============================================================
function Field({ icon, placeholder, type = "text", value, onChange, hasChevron }) {
  const [focused, setFocused] = useState(false);
  return (
    <div style={{
      display: "flex", alignItems: "center", gap: 12, height: 56, padding: "0 18px",
      background: "var(--bg-field)", borderRadius: 16,
      boxShadow: focused
        ? "inset 0 0 0 1px var(--orange-500), 0 0 0 3px rgba(255,101,52,.28)"
        : "inset 0 0 0 1px rgba(255,255,255,.08)",
      transition: "box-shadow 160ms",
    }}>
      <span style={{ color: "var(--orange-500)", flex: "0 0 auto", display: "flex" }}>
        <Icon name={icon} size={18} />
      </span>
      <input
        type={type} value={value || ""} placeholder={placeholder}
        onChange={(e) => onChange?.(e.target.value)}
        onFocus={() => setFocused(true)} onBlur={() => setFocused(false)}
        style={{
          flex: 1, background: "transparent", border: 0, outline: "none",
          color: "var(--fg-1)", fontFamily: "var(--font-sans)", fontSize: 14,
        }}
      />
      {hasChevron && <span style={{ color: "var(--fg-3)" }}><Icon name="chevron" size={16} /></span>}
    </div>
  );
}

function Select({ icon, placeholder, value, onChange, options = [] }) {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ position: "relative" }}>
      <div onClick={() => setOpen(!open)} style={{
        display: "flex", alignItems: "center", gap: 12, height: 56, padding: "0 18px",
        background: "var(--bg-field)", borderRadius: 16,
        boxShadow: open
          ? "inset 0 0 0 1px var(--orange-500), 0 0 0 3px rgba(255,101,52,.28)"
          : "inset 0 0 0 1px rgba(255,255,255,.08)",
        cursor: "pointer", transition: "box-shadow 160ms",
      }}>
        <span style={{ color: "var(--orange-500)", display: "flex" }}><Icon name={icon} size={18} /></span>
        <span style={{ flex: 1, color: value ? "var(--fg-1)" : "var(--fg-3)", fontSize: 14 }}>
          {value || placeholder}
        </span>
        <span style={{ color: "var(--fg-3)", transform: open ? "rotate(180deg)" : "none", transition: "transform 160ms" }}>
          <Icon name="chevron" size={16} />
        </span>
      </div>
      {open && (
        <div style={{
          position: "absolute", top: "calc(100% + 6px)", left: 0, right: 0, zIndex: 10,
          background: "var(--navy-700)", borderRadius: 14, border: "1px solid rgba(255,255,255,.12)",
          padding: 6, boxShadow: "0 18px 48px rgba(0,0,0,.55)",
        }}>
          {options.map((o) => (
            <div key={o} onClick={() => { onChange?.(o); setOpen(false); }}
              style={{ padding: "10px 12px", borderRadius: 10, fontSize: 14, cursor: "pointer" }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255,255,255,.06)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "transparent"}>
              {o}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

// ============================================================
// FeaturePill, MathCanvas, Stats, etc.
// ============================================================
function FeaturePill({ icon, title, sub }) {
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start", gap: 8 }}>
      <div style={{
        width: 40, height: 40, borderRadius: 999, background: "rgba(255,101,52,.16)",
        color: "var(--orange-500)", display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <Icon name={icon} size={20} fill={icon === "star"} />
      </div>
      <div style={{ fontSize: 14, fontWeight: 700, lineHeight: 1.2 }}>{title}</div>
      <div style={{ fontSize: 12, color: "var(--fg-3)" }}>{sub}</div>
    </div>
  );
}

function StatItem({ icon, num, lbl, fillIcon }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
      <div style={{ width: 36, height: 36, borderRadius: 10, background: "rgba(255,101,52,.14)",
        color: "var(--orange-500)", display: "flex", alignItems: "center", justifyContent: "center", flex: "0 0 36px" }}>
        <Icon name={icon} size={18} fill={fillIcon} />
      </div>
      <div>
        <div style={{ fontSize: 22, fontWeight: 800, color: "var(--orange-500)", letterSpacing: "-0.01em", lineHeight: 1 }}>{num}</div>
        <div style={{ fontSize: 12, color: "var(--fg-3)", marginTop: 4 }}>{lbl}</div>
      </div>
    </div>
  );
}

// Decorative floating math glyphs (typeset, not iconography)
function MathCanvas() {
  const glyphs = [
    { c: "π",        x: "3%",  y: "16%", size: 64, op: 0.9, color: "var(--fg-1)" },
    { c: "√x",       x: "5%",  y: "36%", size: 36, op: 0.5, color: "var(--fg-2)" },
    { c: "∫₀ᵇ f(x)dx", x: "42%", y: "12%", size: 30, op: 0.6, color: "var(--fg-2)" },
    { c: "x²",       x: "54%", y: "32%", size: 32, op: 0.55, color: "var(--fg-2)" },
    { c: "f(x)",     x: "26%", y: "70%", size: 36, op: 0.5, color: "var(--fg-2)" },
    { c: "sinθ",     x: "55%", y: "70%", size: 30, op: 0.55, color: "var(--fg-2)" },
  ];
  return (
    <div aria-hidden style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none" }}>
      {/* Faint dot grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "radial-gradient(rgba(255,255,255,.06) 1px, transparent 1px)",
        backgroundSize: "28px 28px",
        maskImage: "radial-gradient(ellipse at 30% 50%, #000 30%, transparent 70%)",
        WebkitMaskImage: "radial-gradient(ellipse at 30% 50%, #000 30%, transparent 70%)",
      }} />
      {/* Glyphs */}
      {glyphs.map((g, i) => (
        <div key={i} style={{
          position: "absolute", left: g.x, top: g.y,
          fontSize: g.size, color: g.color, opacity: g.op,
          fontFamily: "Plus Jakarta Sans, serif", fontStyle: "italic", fontWeight: 500,
          textShadow: "0 0 24px rgba(255,101,52,.15)",
        }}>{g.c}</div>
      ))}
      {/* Decorative line accents */}
      <svg style={{ position: "absolute", inset: 0, width: "100%", height: "100%", opacity: .3 }}>
        <line x1="3%" y1="22%" x2="42%" y2="14%" stroke="rgba(255,101,52,.35)" strokeWidth="1" strokeDasharray="2 6"/>
        <line x1="42%" y1="14%" x2="54%" y2="34%" stroke="rgba(255,101,52,.35)" strokeWidth="1" strokeDasharray="2 6"/>
        <line x1="26%" y1="72%" x2="55%" y2="72%" stroke="rgba(255,101,52,.35)" strokeWidth="1" strokeDasharray="2 6"/>
      </svg>
      {/* Soft orange vignette near triangle */}
      <div style={{ position: "absolute", right: "30%", top: "20%", width: 320, height: 320,
        background: "radial-gradient(circle, rgba(255,101,52,.18), transparent 60%)" }}/>
    </div>
  );
}

// ============================================================
// Nav
// ============================================================
function Nav({ active = "Home" }) {
  const links = ["Home", "Courses", "Why Us", "Results", "Testimonials", "Contact"];
  return (
    <nav style={{
      display: "flex", alignItems: "center", justifyContent: "space-between",
      padding: "20px 64px", position: "relative", zIndex: 5,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 14 }}>
        <img src="../../assets/preppals-logo.png" alt="" style={{ width: 48, height: "auto" }}/>
        <div style={{ display: "flex", flexDirection: "column", gap: 2, lineHeight: 1 }}>
          <div style={{ fontSize: 18, fontWeight: 800, letterSpacing: "-0.01em" }}>
            <span style={{ color: "var(--fg-3)", fontWeight: 600, marginRight: 6 }}>CSCA</span>PrepPals
          </div>
          <div style={{ fontSize: 10.5, color: "var(--fg-3)", letterSpacing: ".04em" }}>Master Today, Excel Tomorrow.</div>
        </div>
      </div>
      <div style={{ display: "flex", gap: 32 }}>
        {links.map((l) => (
          <a key={l} href="#" style={{
            color: active === l ? "var(--fg-1)" : "var(--fg-2)", textDecoration: "none",
            fontSize: 14, fontWeight: 500, position: "relative", paddingBottom: 6,
            borderBottom: active === l ? "2px solid var(--orange-500)" : "2px solid transparent",
          }}>{l}</a>
        ))}
      </div>
      <Button variant="primary">Book Free Trial</Button>
    </nav>
  );
}

// ============================================================
// Hero (left column)
// ============================================================
function Hero() {
  return (
    <div style={{ position: "relative", zIndex: 2, maxWidth: 620 }}>
      {/* Social proof pill */}
      <div style={{
        display: "inline-flex", alignItems: "center", gap: 10, padding: "6px 14px 6px 6px",
        borderRadius: 999, background: "rgba(255,255,255,.06)",
        border: "1px solid rgba(255,255,255,.14)", backdropFilter: "blur(8px)", marginBottom: 28,
      }}>
        <span style={{ width: 26, height: 26, borderRadius: 999, background: "var(--orange-500)",
          display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
          <Icon name="users" size={14} />
        </span>
        <span style={{ fontSize: 13, fontWeight: 600 }}>
          <b style={{ color: "var(--orange-500)" }}>127</b> students joined this month
        </span>
      </div>

      <h1 style={{
        fontSize: 72, fontWeight: 800, lineHeight: 1.04, letterSpacing: "-0.025em",
        marginBottom: 20,
      }}>
        Master Math.<br/>
        Unlock Your <span style={{ color: "var(--orange-500)" }}>Future.</span>
      </h1>
      <p style={{ fontSize: 17, color: "var(--fg-2)", maxWidth: 520, lineHeight: 1.6, marginBottom: 36 }}>
        Expert math tuition designed to build confidence, strengthen concepts,
        and achieve outstanding results.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24, marginBottom: 36, maxWidth: 580 }}>
        <FeaturePill icon="target" title="Proven Results" sub="92% improved grades" />
        <FeaturePill icon="users" title="Small Class Sizes" sub="Personalized attention" />
        <FeaturePill icon="brain" title="Exam Strategies" sub="Smarter. Faster. Better." />
        <FeaturePill icon="trendUp" title="Top Performance" sub="For school & beyond" />
      </div>

      <div style={{ display: "flex", gap: 12 }}>
        <Button variant="primary" icon="arrowRight">Book Free Trial</Button>
        <Button variant="secondary" icon="play">View Courses</Button>
      </div>
    </div>
  );
}

// ============================================================
// Registration Card
// ============================================================
function RegistrationCard() {
  const [form, setForm] = useState({});
  const set = (k) => (v) => setForm((f) => ({ ...f, [k]: v }));
  const [submitted, setSubmitted] = useState(false);

  return (
    <div style={{
      width: 460, background: "var(--bg-surface)",
      borderRadius: 24, border: "1px solid rgba(255,255,255,.08)",
      padding: 32, boxShadow: "0 28px 64px rgba(0,0,0,.5)",
      position: "relative", zIndex: 3,
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
        <div style={{ width: 44, height: 44, borderRadius: 12, background: "var(--orange-500)",
          display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", flex: "0 0 44px" }}>
          <Icon name="graduation" size={22} />
        </div>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontSize: 19, fontWeight: 800, letterSpacing: "-0.01em", lineHeight: 1.15 }}>Start Your Math Journey</div>
          <div style={{ fontSize: 12.5, color: "var(--fg-3)", marginTop: 4, lineHeight: 1.4 }}>Fill in your details to book a free trial class.</div>
        </div>
      </div>

      {submitted ? (
        <div style={{ padding: "24px 12px", textAlign: "center" }}>
          <div style={{ fontSize: 40, marginBottom: 8 }}>🎯</div>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 6 }}>You're booked.</div>
          <div style={{ fontSize: 14, color: "var(--fg-3)", marginBottom: 20 }}>
            We'll email you with trial details within 24 hours.
          </div>
          <Button variant="secondary" full icon={null} onClick={() => { setSubmitted(false); setForm({}); }}>
            Submit another
          </Button>
        </div>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Field icon="user" placeholder="Full Name" value={form.name} onChange={set("name")} />
            <Field icon="phone" placeholder="Phone Number" value={form.phone} onChange={set("phone")} />
          </div>
          <Field icon="mail" placeholder="Email Address" type="email" value={form.email} onChange={set("email")} />
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
            <Select icon="school" placeholder="School" value={form.school} onChange={set("school")}
              options={["Public school", "Private school", "International school", "Homeschool"]} />
            <Select icon="bars" placeholder="Grade / Level" value={form.grade} onChange={set("grade")}
              options={["Grade 6", "Grade 7", "Grade 8", "Grade 9", "Grade 10", "Grade 11", "Grade 12"]} />
          </div>
          <Select icon="book" placeholder="Subject Interested" value={form.subject} onChange={set("subject")}
            options={["Algebra", "Geometry", "Pre-Calculus", "Calculus", "Statistics", "SAT / ACT Prep"]} />
          <Select icon="calendar" placeholder="Preferred Trial Date" value={form.date} onChange={set("date")}
            options={["This week", "Next week", "In 2 weeks", "Flexible"]} />

          <div style={{ marginTop: 8 }}>
            <Button variant="primary" full icon="arrowRight" onClick={() => setSubmitted(true)}>
              Start My Journey
            </Button>
          </div>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
            color: "var(--fg-3)", fontSize: 12, marginTop: 4 }}>
            <Icon name="shield" size={14} />
            We respect your privacy. Your information is safe with us.
          </div>
        </div>
      )}
    </div>
  );
}

// ============================================================
// Stats Strip
// ============================================================
function StatsStrip() {
  return (
    <div style={{
      margin: "32px 64px 24px", padding: "20px 28px",
      background: "var(--bg-surface)", borderRadius: 18,
      border: "1px solid rgba(255,255,255,.08)",
      display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 24,
      position: "relative", zIndex: 4,
    }}>
      <StatItem icon="graduation" num="500+" lbl="Students Taught" />
      <StatItem icon="star" fillIcon num="4.9 ★" lbl="Parent Rating" />
      <StatItem icon="trophy" num="5+ Years" lbl="Teaching Excellence" />
      <StatItem icon="globe" num="Multiple" lbl="Curriculum Support" />
    </div>
  );
}

// Expose to global so index.html can mount
Object.assign(window, {
  Icon, Button, Field, Select, FeaturePill, StatItem, MathCanvas, Nav, Hero, RegistrationCard, StatsStrip,
});
