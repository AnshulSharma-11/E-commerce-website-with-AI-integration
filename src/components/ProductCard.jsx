// components/ProductCard.jsx
import { useState } from "react";
import { askClaude } from "../api";


export default function ProductCard({ product, onAdd }) {
  let [desc, setDesc]         = useState("");
  let [loadDesc, setLoadDesc] = useState(false);
  let [showDesc, setShowDesc] = useState(false);

  let fetchDesc = async () => {
    // Toggle off if already loaded
    if (desc) { setShowDesc(s => !s); return; }

    setLoadDesc(true);
    setShowDesc(true);
    let result = await askClaude(
      `One-sentence product description for "${product.name}" ($${product.price}, category: ${product.category}). Punchy, fashion-forward.`,
      "You are a fashion copywriter. Respond with exactly one sentence. No quotes or extra text."
    );
    setDesc(result);
    setLoadDesc(false);
  };

  return (
    <div className="prod-card h-100">
      {/* Image */}
      <div className="prod-img-wrap">
        <img className="prod-img" src={product.img} alt={product.name} />
        {product.badge && (
          <span className={`prod-badge badge-${product.badge.toLowerCase()}`}>
            {product.badge}
          </span>
        )}
        <button className="quick-add" onClick={() => onAdd(product)}>
          <i className="bi bi-bag-plus me-1" />Add to Bag
        </button>
      </div>

      {/* Info */}
      <div className="prod-body">
        <div className="prod-cat">{product.category}</div>
        <div className="prod-name">{product.name}</div>

        <div className="d-flex justify-content-between align-items-center mb-1">
          <span className="prod-price">${product.price}</span>
          <span className="prod-rating">
            <span className="star">★</span> {product.rating}{" "}
            <span style={{ color: "var(--text-lt)" }}>({product.reviews})</span>
          </span>
        </div>

        {/* AI Description toggle */}
        <button className="ai-desc-btn" onClick={fetchDesc}>
          <i className="bi bi-stars" />
          {showDesc ? "Hide" : "AI"} description
        </button>

        {showDesc && (
          <div className="ai-desc-box">
            {loadDesc
              ? <><i className="bi bi-hourglass-split me-1" />Generating…</>
              : desc
            }
          </div>
        )}
      </div>
    </div>
  );
}
