// pages/OrdersPage.jsx
import { useState } from "react";

import { askClaude } from "../api.js";
import { MOCK_ORDERS } from "../Products/store.js";

export default function OrdersPage({ setPage }) {
  const [insights, setInsights] = useState({});
  const [loading,  setLoading]  = useState({});

  const getRec = async (order) => {
    if (insights[order.id]) return;
    setLoading(l => ({ ...l, [order.id]: true }));

    const names = order.items.map(i => i.name).join(", ");
    const result = await askClaude(
      `Customer previously bought: ${names}. Suggest ONE specific product they'd love next from a fashion store.`,
      "Fashion recommendation AI. One sentence, specific, enthusiastic."
    );

    setInsights(i => ({ ...i, [order.id]: result }));
    setLoading(l => ({ ...l, [order.id]: false }));
  };

  return (
    <div className="container py-5">
      <h2 style={{ fontFamily: "var(--font-disp)", fontWeight: 900, letterSpacing: "-1px", marginBottom: "2rem", color: "var(--text)" }}>
        My Orders
      </h2>

      {MOCK_ORDERS.length === 0 ? (
        <div className="text-center py-5" style={{ color: "var(--text-lt)" }}>
          <i className="bi bi-bag-x d-block mb-3 opacity-25" style={{ fontSize: "3rem" }} />
          <p className="mb-3">No orders yet.</p>
          <button className="btn-hero-primary" onClick={() => setPage("shop")}>Start Shopping</button>
        </div>
      ) : (
        <div className="d-flex flex-column gap-4">
          {MOCK_ORDERS.map(order => (
            <div key={order.id} className="order-card">

              {/* Order meta header */}
              <div className="order-head">
                <div className="row align-items-center">
                  {[
                    ["Order", order.id],
                    ["Date",  order.date],
                    ["Total", `$${order.total}`],
                  ].map(([label, value]) => (
                    <div key={label} className="col-6 col-md-3 mb-2 mb-md-0">
                      <div className="o-label">{label}</div>
                      <div className="o-val">{value}</div>
                    </div>
                  ))}
                  <div className="col-6 col-md-3">
                    <div className="o-label">Status</div>
                    <span className="status-pill">
                      <span className="status-dot" />
                      {order.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* Item thumbnails + AI recommendation */}
              <div className="p-3">
                <div className="d-flex gap-2 flex-wrap mb-3">
                  {order.items.map(item => (
                    <img
                      key={item.id}
                      className="order-thumb"
                      src={item.img}
                      alt={item.name}
                      title={item.name}
                    />
                  ))}
                </div>

                {!insights[order.id] ? (
                  <button className="btn-ai-rec" onClick={() => getRec(order)}>
                    <i className="bi bi-stars me-1" />
                    {loading[order.id] ? "Finding recommendation…" : "What to buy next? (AI)"}
                  </button>
                ) : (
                  <div className="ai-rec-box">
                    <i className="bi bi-stars me-1" style={{ color: "var(--teal)" }} />
                    {insights[order.id]}
                  </div>
                )}
              </div>

            </div>
          ))}
        </div>
      )}
    </div>
  );
}
