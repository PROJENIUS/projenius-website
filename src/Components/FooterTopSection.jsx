import React from "react";

export default function FooterTopSection() {
  return (
    /* Outer wrapper — overflow visible so man escapes the section clip */
    <div style={{ position: "relative", overflow: "visible", marginTop: 80 }}>

      {/* ── MAN IMAGE — outside section so overflow:hidden won't clip him ── */}
      <img
        src="https://demo.casethemes.net/proactive/wp-content/uploads/2024/04/h1-man-1.png"
        alt="consultant"
        style={{
          position: "absolute",
          bottom: 0,
          left: "20%",
          transform: "translateX(-50%)",
          width: 420,
          zIndex: 10,
          pointerEvents: "none",
        }}
      />

      {/* ── STAT CARDS — also outside section, sit on top ── */}

      {/* Audience card */}
      <div style={{
        position: "absolute", bottom: 40, left: "2%", width: 168,
        background: "#fff", borderRadius: 14, padding: "12px 16px",
        zIndex: 11, boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
      }}>
        <div style={{ fontSize: 10, color: "#888", marginBottom: 4 }}>New Audience Members</div>
        <div style={{ fontSize: 20, fontWeight: 700, color: "#111" }}>1.2k ↗</div>
        <div style={{ display: "flex", gap: 4, marginTop: 6 }}>
          {["#f87171","#60a5fa","#fbbf24"].map((c, i) => (
            <div key={i} style={{
              width: 22, height: 22, borderRadius: "50%",
              background: c, border: "2px solid #fff"
            }} />
          ))}
        </div>
        <svg viewBox="0 0 130 30" style={{ width: "100%", height: 30, marginTop: 6 }}>
          <polyline
            points="0,25 20,20 35,22 50,15 65,18 80,10 100,12 130,5"
            fill="none" stroke="#f97316" strokeWidth="2" strokeLinejoin="round"
          />
        </svg>
      </div>

      {/* Business Goal card */}
      <div style={{
        position: "absolute", bottom: 40, left: "14%", width: 155,
        background: "#fff", borderRadius: 14, padding: "12px 16px",
        zIndex: 11, boxShadow: "0 8px 32px rgba(0,0,0,0.4)"
      }}>
        <div style={{ fontSize: 22, fontWeight: 700, color: "#111" }}>98%</div>
        <div style={{ fontSize: 11, color: "#666", marginBottom: 8 }}>Business Goal</div>
        <div style={{ display: "flex", alignItems: "flex-end", gap: 5, height: 44 }}>
          {[65, 50, 100, 55, 40, 28].map((h, i) => (
            <div key={i} style={{
              flex: 1, height: `${h}%`,
              borderRadius: "3px 3px 0 0",
              background: i === 2 ? "#3b82f6" : i < 2 ? "#93c5fd" : "#bfdbfe"
            }} />
          ))}
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
          {["Jan","Feb","Mar","Apl","May"].map(m => (
            <span key={m} style={{ fontSize: 8, color: "#999" }}>{m}</span>
          ))}
        </div>
      </div>

      {/* ── MAIN SECTION — bg + blob + form only ── */}
      <section style={{
        position: "relative",
        display: "flex",
        alignItems: "center",
        minHeight: 500,
        overflow: "hidden",
        padding: "0 5%",
        background: "linear-gradient(135deg, #0a0d1a 0%, #0d1128 100%)",
      }}>

        {/* Purple blob */}
        <div style={{
          position: "absolute", right: "-2%", top: "50%",
          transform: "translateY(-50%)",
          width: "58%", height: "110%",
          background: "linear-gradient(135deg, #5b2fc9 0%, #7c3aed 100%)",
          borderRadius: "52% 48% 40% 60% / 55% 45% 55% 45%",
          zIndex: 1
        }} />

        {/* Left spacer to push form right */}
        <div style={{ width: "48%", zIndex: 2 }} />

        {/* RIGHT — form */}
        <div style={{
          position: "relative", zIndex: 3,
          width: "46%", padding: "48px 0 48px 81px",
          color: "#fff",
        }}>
          <div style={{ display: "flex", alignItems: "center", gap: 7, fontSize: 13, marginBottom: 16 }}>
            <span style={{
              width: 8, height: 8, background: "#e0306a",
              borderRadius: "50%", display: "inline-block"
            }} />
            Contact us
          </div>

          <h2 style={{
            fontSize: 38, fontWeight: 800, lineHeight: 1.2,
            marginBottom: 16, color: "#fff"
          }}>
            We will provide<br />awesome services
          </h2>

          <p style={{
            fontSize: 13, color: "rgba(255,255,255,0.78)",
            marginBottom: 30, lineHeight: 1.65, maxWidth: 360
          }}>
            We understand the importance of approaching each work
            integrally and believe in the power of simple.
          </p>

          <div style={{ display: "flex", flexWrap: "wrap", gap: 14 }}>
            <input placeholder="NAME"  style={inputStyle} />
            <input placeholder="PHONE" style={inputStyle} />
            <input placeholder="SUBJECT" style={{ ...inputStyle, width: "100%", flex: "none" }} />
            <button style={btnStyle}>Start Consult</button>
          </div>
        </div>

      </section>
    </div>
  );
}

const inputStyle = {
  flex: 1,
  minWidth: 130,
  padding: "14px 22px",
  borderRadius: 40,
  border: "none",
  background: "rgba(255,255,255,0.90)",
  color: "#111",
  fontSize: 12,
  fontWeight: 600,
  letterSpacing: "0.07em",
  outline: "none",
};

const btnStyle = {
  width: "100%",
  padding: "15px",
  borderRadius: 40,
  border: "2px solid transparent",
  background: "#0a0d1a",
  color: "#fff",
  fontSize: 15,
  fontWeight: 700,
  cursor: "pointer",
  letterSpacing: "0.02em",
  backgroundImage: "linear-gradient(#0a0d1a, #0a0d1a), linear-gradient(90deg, #00c6ff, #e0306a)",
  backgroundOrigin: "border-box",
  backgroundClip: "padding-box, border-box",
};