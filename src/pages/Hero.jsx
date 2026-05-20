// pages/Hero.jsx
export default function Hero({ setPage }) {
  let stats = [
    ["10K+", "Products"],
    ["98%",  "Satisfaction"],
    ["Free", "Returns"],
  ];

  return (
    <section className="hero">
      <div className="container">
        <div className="row align-items-center g-5">

          {/* Left: Copy */}
          <div className="col-lg-6">
            <div className="hero-eyebrow">
              <i className="bi bi-stars" /> S26 Collection
            </div>

            <h1 className="hero-title">
              Style that<br />
              <span className="ht-color">blooms</span><br />
              with <span className="ht-teal">you.</span>
            </h1>

            <p className="hero-sub">
              Curated fashion that celebrates every version of you. Sustainably sourced,
              beautifully made, yours to own.
            </p>

            <div className="d-flex gap-3 flex-wrap">
              <button className="btn-hero-primary" onClick={() => setPage("shop")}>
                Shop Collection <i className="bi bi-arrow-right ms-1" />
              </button>
              <button className="btn-hero-outline">View Lookbook</button>
            </div>

            {/* Stats */}
            <div className="hero-stat-row">
              {stats.map(([val, label]) => (
                <div key={label}>
                  <div className="hero-stat-val">{val}</div>
                  <div className="hero-stat-lbl">{label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Images */}
          <div className="col-lg-5 offset-lg-1">
            <div className="hero-img-grid">
              <img
                src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=300&q=80"
                alt="Model 1"
              />
              <img
                src="https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=300&q=80"
                alt="Model 2"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
