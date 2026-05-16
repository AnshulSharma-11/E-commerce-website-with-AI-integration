// pages/CheckoutPage.jsx
import { useState, useEffect } from "react";
import { askClaude } from "../api";


export default function CheckoutPage({ cart, dispatch, setPage }) {
  const [f, setF] = useState({
    email: "", first: "", last: "",
    address: "", city: "", zip: "",
    card: "4242 4242 4242 4242", expiry: "12/28", cvc: "",
  });
  const [placed,   setPlaced]   = useState(false);
  const [aiNote,   setAiNote]   = useState("");
  const [loadNote, setLoadNote] = useState(false);

  const upd = (key, val) => setF(prev => ({ ...prev, [key]: val }));

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal > 150 ? 0 : 9.99;
  const total    = subtotal + shipping;

  // Personalized AI greeting on mount
  useEffect(() => {
    if (!cart.length) return;
    setLoadNote(true);
    const names = cart.map(i => i.name).join(", ");
    askClaude(
      `The customer is buying: ${names}. Write a warm 1-sentence thank-you + style tip.`,
      "Friendly fashion assistant. One sentence, warm and personal."
    ).then(result => { setAiNote(result); setLoadNote(false); });
  }, []);

  // ── Order Confirmed Screen ──────────────────────────────────────────────────
  if (placed) {
    return (
      <div className="container">
        <div className="success-page">
          <div className="success-ring">
            <i className="bi bi-check-lg" />
          </div>
          <h2 className="success-h">Order Confirmed! 🎉</h2>
          <p style={{ color: "var(--text-md)", maxWidth: 400, margin: "1rem auto 2rem" }}>
            Thank you! A confirmation email with tracking details is on its way.
          </p>
          <div className="d-flex gap-3 justify-content-center flex-wrap">
            <button className="btn-hero-primary" onClick={() => setPage("orders")}>View My Orders</button>
            <button className="btn-hero-outline" onClick={() => setPage("shop")}>Continue Shopping</button>
          </div>
        </div>
      </div>
    );
  }

  // ── Checkout Form ───────────────────────────────────────────────────────────
  return (
    <div className="container py-5">
      {/* Back link */}
      <button
        style={{ background: "none", border: "none", cursor: "pointer", color: "var(--text-md)", fontSize: ".875rem", fontFamily: "var(--font-body)", padding: 0, marginBottom: "1.5rem", display: "flex", alignItems: "center", gap: ".35rem" }}
        onClick={() => setPage("shop")}
      >
        <i className="bi bi-arrow-left" /> Back to Shop
      </button>

      <h2 style={{ fontFamily: "var(--font-disp)", fontWeight: 900, letterSpacing: "-1px", marginBottom: "2rem", color: "var(--text)" }}>
        Checkout
      </h2>

      {/* AI personalised banner */}
      {(aiNote || loadNote) && (
        <div className="ai-note-banner">
          <i className="bi bi-stars me-2" style={{ color: "var(--primary)" }} />
          {loadNote ? "Personalizing your experience…" : aiNote}
        </div>
      )}

      <div className="row g-4">
        {/* ── Left: Form ── */}
        <div className="col-lg-7">
          <div className="checkout-card">
            {/* Contact */}
            <div className="section-sep">Contact</div>
            <div className="mb-3">
              <label className="form-label">Email address</label>
              <input className="form-control" type="email" placeholder="you@example.com"
                value={f.email} onChange={e => upd("email", e.target.value)} />
            </div>

            {/* Shipping */}
            <div className="section-sep">Shipping</div>
            <div className="row g-3">
              <div className="col-6">
                <label className="form-label">First name</label>
                <input className="form-control" value={f.first} onChange={e => upd("first", e.target.value)} />
              </div>
              <div className="col-6">
                <label className="form-label">Last name</label>
                <input className="form-control" value={f.last} onChange={e => upd("last", e.target.value)} />
              </div>
              <div className="col-12">
                <label className="form-label">Address</label>
                <input className="form-control" placeholder="123 Blossom Ave"
                  value={f.address} onChange={e => upd("address", e.target.value)} />
              </div>
              <div className="col-7">
                <label className="form-label">City</label>
                <input className="form-control" value={f.city} onChange={e => upd("city", e.target.value)} />
              </div>
              <div className="col-5">
                <label className="form-label">ZIP</label>
                <input className="form-control" value={f.zip} onChange={e => upd("zip", e.target.value)} />
              </div>
            </div>

            {/* Payment */}
            <div className="section-sep">Payment</div>
            <div className="stripe-pill mb-3">
              <span style={{ fontSize: "1.4rem" }}>💳</span>
              <div>
                <strong style={{ color: "#635bff" }}>Stripe</strong> — Secure payment processing.<br />
                <span style={{ fontSize: ".72rem", color: "var(--text-lt)" }}>
                  In production, use <code>@stripe/react-stripe-js</code>.
                </span>
              </div>
            </div>
            <div className="mb-3">
              <label className="form-label">Card number</label>
              <input className="form-control" value={f.card} onChange={e => upd("card", e.target.value)} />
            </div>
            <div className="row g-3">
              <div className="col-6">
                <label className="form-label">Expiry</label>
                <input className="form-control" placeholder="MM / YY"
                  value={f.expiry} onChange={e => upd("expiry", e.target.value)} />
              </div>
              <div className="col-6">
                <label className="form-label">CVC</label>
                <input className="form-control" placeholder="···"
                  value={f.cvc} onChange={e => upd("cvc", e.target.value)} />
              </div>
            </div>
          </div>
        </div>

        {/* ── Right: Summary ── */}
        <div className="col-lg-5">
          <div className="summary-sidebar">
            <div className="summ-title">
              <i className="bi bi-receipt me-2" style={{ color: "var(--primary)" }} />
              Order Summary
            </div>

            {cart.map(item => (
              <div key={item.id} className="d-flex gap-3 mb-3 align-items-center">
                <div style={{ position: "relative" }}>
                  <img className="summ-img" src={item.img} alt={item.name} />
                  <span className="summ-qty-badge">{item.qty}</span>
                </div>
                <div>
                  <div style={{ fontSize: ".875rem", fontWeight: 600, color: "var(--text)" }}>{item.name}</div>
                  <div style={{ fontSize: ".83rem", color: "var(--primary)", fontWeight: 700 }}>
                    ${(item.price * item.qty).toFixed(2)}
                  </div>
                </div>
              </div>
            ))}

            <hr style={{ borderColor: "var(--border)" }} />
            <div className="summ-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
            <div className="summ-row">
              <span>Shipping</span>
              <span style={{ color: shipping === 0 ? "var(--teal)" : undefined }}>
                {shipping === 0 ? "Free" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="summ-row total">
              <span>Total</span>
              <span style={{ color: "var(--primary)" }}>${total.toFixed(2)}</span>
            </div>

            <button
              className="btn-place mt-3"
              onClick={() => { dispatch({ type: "CLEAR" }); setPlaced(true); }}
            >
              <i className="bi bi-shield-check me-2" />
              Place Order · ${total.toFixed(2)}
            </button>
            <div className="text-center mt-2" style={{ fontSize: ".72rem", color: "var(--text-lt)" }}>
              256-bit SSL · Powered by Stripe
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
