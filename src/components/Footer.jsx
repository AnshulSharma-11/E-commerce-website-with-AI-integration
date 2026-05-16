// components/Footer.jsx
export default function Footer() {
  const columns = [
    { title: "Shop",    links: ["New Arrivals", "Sneakers", "Bags", "Outerwear", "Accessories"] },
    { title: "Company", links: ["About Us", "Sustainability", "Careers", "Press"] },
    { title: "Help",    links: ["Shipping & Returns", "Size Guide", "Contact", "FAQ"] },
  ];

  return (
    <footer className="s-footer">
      <div className="container">
        <div className="row g-4">
          {/* Brand */}
          <div className="col-lg-4">
            <div className="footer-brand">GOSOME<span>.</span></div>
            <p className="footer-desc">
              Premium fashion for every story. Sustainably sourced, thoughtfully designed, made to last.
            </p>
          </div>

          {/* Link Columns */}
          {columns.map(col => (
            <div key={col.title} className="col-6 col-lg-2">
              <div className="footer-col-title">{col.title}</div>
              {col.links.map(link => (
                <a key={link} className="footer-link">{link}</a>
              ))}
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <span>© 2026 GOSOME. · All rights reserved</span>
          <div className="d-flex gap-3">
            {["bi-instagram", "bi-twitter-x", "bi-tiktok", "bi-pinterest"].map(ic => (
              <i key={ic} className={`bi ${ic} social-icon`} />
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
