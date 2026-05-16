// components/Navbar.jsx
export default function Navbar({ page, setPage, cartCount, openCart }) {
  return (
    <nav className="s-nav navbar navbar-expand-lg sticky-top">
      <div className="container">
        <span className="s-brand navbar-brand" onClick={() => setPage("home")}>
          GOSOME<span>.</span>
        </span>

        <button
          className="navbar-toggler border-0"
          data-bs-toggle="collapse"
          data-bs-target="#sNav"
          aria-controls="sNav"
          aria-expanded="false"
        >
          <i className="bi bi-list fs-4" style={{ color: "var(--primary)" }} />
        </button>

        <div className="collapse navbar-collapse" id="sNav">
          <ul className="navbar-nav me-auto ms-4 gap-1">
            {[
              ["home",   "Home"],
              ["shop",   "Shop"],
              ["orders", "My Orders"],
            ].map(([p, label]) => (
              <li className="nav-item" key={p}>
                <button
                  className={`s-nav-link nav-link btn btn-link text-decoration-none ${page === p ? "active-pg" : ""}`}
                  onClick={() => setPage(p)}
                >
                  {label}
                </button>
              </li>
            ))}
          </ul>

          <button
            className="btn s-cart-btn d-flex align-items-center gap-2"
            onClick={openCart}
          >
            <i className="bi bi-bag-heart" />
            <span>Bag</span>
            {cartCount > 0 && (
              <span className="cart-bubble">{cartCount}</span>
            )}
          </button>
        </div>
      </div>
    </nav>
  );
}
