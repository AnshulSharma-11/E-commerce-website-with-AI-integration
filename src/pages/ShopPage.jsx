// pages/ShopPage.jsx
import { useState } from "react";

import ProductCard from "../components/ProductCard.jsx";
import AIAssistant from "../components/AIAssistant.jsx";
import { PRODUCTS } from "../Products/store.js";

export default function ShopPage({ dispatch, showToast }) {
  const [cat, setCat]   = useState("All");
  const [maxP, setMaxP] = useState(300);
  const [sort, setSort] = useState("featured");

  // Derive category list
  const categories = ["All", ...new Set(PRODUCTS.map(p => p.category))];

  // Filter + sort
  const filtered = PRODUCTS
    .filter(p => cat === "All" || p.category === cat)
    .filter(p => p.price <= maxP)
    .sort((a, b) => {
      if (sort === "price-asc")  return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "rating")     return b.rating - a.rating;
      return 0;
    });

  const addToCart = (product) => {
    dispatch({ type: "ADD", product });
    showToast(`${product.name} added to bag ✓`);
  };

  return (
    <>
      {/* ── Filter Bar ── */}
      <div className="filter-bar">
        <div className="container">
          <div className="d-flex align-items-center gap-2 flex-wrap">

            {/* Category pills */}
            <div className="d-flex gap-2 flex-wrap me-auto">
              {categories.map(c => (
                <button
                  key={c}
                  className={`cat-pill ${cat === c ? "act" : ""}`}
                  onClick={() => setCat(c)}
                >
                  {c}
                </button>
              ))}
            </div>

            {/* Price range */}
            <div className="price-wrap d-none d-md-flex">
              <span>Max ${maxP}</span>
              <input
                type="range"
                min={30}
                max={300}
                value={maxP}
                onChange={e => setMaxP(+e.target.value)}
              />
            </div>

            {/* Sort */}
            <select
              className="s-sort"
              value={sort}
              onChange={e => setSort(e.target.value)}
            >
              <option value="featured">Featured</option>
              <option value="price-asc">Price ↑</option>
              <option value="price-desc">Price ↓</option>
              <option value="rating">Top Rated</option>
            </select>
          </div>
        </div>
      </div>

      {/* ── Products ── */}
      <div className="container py-4">
        <div className="d-flex justify-content-between align-items-baseline mb-4">
          <h2 style={{ fontFamily: "var(--font-disp)", fontWeight: 900, fontSize: "1.7rem", letterSpacing: "-1px", color: "var(--text)" }}>
            {cat === "All" ? "All Products" : cat}
          </h2>
          <span style={{ fontSize: ".85rem", color: "var(--text-lt)" }}>{filtered.length} items</span>
        </div>

        <div className="row g-4 mb-5">
          {filtered.map(p => (
            <div key={p.id} className="col-6 col-md-4 col-lg-3 d-flex">
              <ProductCard product={p} onAdd={addToCart} />
            </div>
          ))}
          {filtered.length === 0 && (
            <div className="col-12 text-center py-5" style={{ color: "var(--text-lt)" }}>
              <i className="bi bi-search d-block mb-3 opacity-25" style={{ fontSize: "3rem" }} />
              No products match your filters.
            </div>
          )}
        </div>

        {/* ── AI Style Advisor ── */}
        <div className="row">
          <div className="col-lg-8 offset-lg-2">
            <AIAssistant />
          </div>
        </div>
      </div>
    </>
  );
}
