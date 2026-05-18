// components/CartDrawer.jsx
export default function CartDrawer({ cart, dispatch, open, setOpen, setPage }) {
  let subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  let shipping = subtotal > 150 ? 0 : 9.99;
  let total    = subtotal + shipping;

  return (
    <>
      {/* Backdrop */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          style={{ position: "fixed", inset: 0, background: "rgba(44,36,22,.35)", zIndex: 1044 }}
        />
      )}

      {/* Drawer */}
      <div
        className="s-offcanvas offcanvas offcanvas-end"
        style={{ zIndex: 1045, width: 420, visibility: open ? "visible" : "hidden" }}
      >
        {/* Header */}
        <div className="offcanvas-header border-bottom">
          <h5 className="s-offcanvas-title">
            <i className="bi bi-bag-heart me-2" style={{ color: "var(--primary)" }} />
            Your Bag
            {cart.length > 0 && (
              <span
                className="ms-2 badge"
                style={{ background: "var(--peach)", color: "var(--primary)", fontSize: ".72rem", borderRadius: 20 }}
              >
                {cart.reduce((s, i) => s + i.qty, 0)} items
              </span>
            )}
          </h5>
          <button className="btn-close" onClick={() => setOpen(false)} />
        </div>

        {/* Body */}
        <div className="offcanvas-body">
          {cart.length === 0 ? (
            /* Empty state */
            <div className="text-center py-5" style={{ color: "var(--text-lt)" }}>
              <i className="bi bi-bag-x d-block mb-3 opacity-25" style={{ fontSize: "3rem" }} />
              <p className="mb-3">Your bag is empty</p>
              <button
                style={{ background: "var(--primary)", color: "#fff", border: "none", borderRadius: 8, padding: ".45rem 1.25rem", fontFamily: "var(--font-body)", fontWeight: 600, cursor: "pointer" }}
                onClick={() => setOpen(false)}
              >
                Keep Shopping
              </button>
            </div>
          ) : (
            <>
              {/* Cart items */}
              {cart.map(item => (
                <div key={item.id} className="d-flex gap-3 py-3 border-bottom align-items-start">
                  <img className="cart-thumb" src={item.img} alt={item.name} />

                  <div className="flex-grow-1">
                    <div style={{ fontSize: ".875rem", fontWeight: 600, color: "var(--text)", marginBottom: ".2rem" }}>
                      {item.name}
                    </div>
                    <div style={{ fontSize: ".8rem", color: "var(--text-lt)", marginBottom: ".4rem" }}>
                      ${item.price} each
                    </div>
                    <div className="qty-ctrl">
                      <button
                        className="qty-btn"
                        onClick={() => dispatch({ type: "UPDATE_QTY", id: item.id, qty: item.qty - 1 })}
                      >−</button>
                      <span style={{ fontSize: ".875rem", minWidth: 24, textAlign: "center", fontWeight: 600 }}>
                        {item.qty}
                      </span>
                      <button
                        className="qty-btn"
                        onClick={() => dispatch({ type: "UPDATE_QTY", id: item.id, qty: item.qty + 1 })}
                      >+</button>
                    </div>
                  </div>

                  <div className="text-end">
                    <div style={{ fontWeight: 700, fontSize: ".95rem", color: "var(--primary)" }}>
                      ${(item.price * item.qty).toFixed(2)}
                    </div>
                    <button
                      style={{ background: "none", border: "none", cursor: "pointer", fontSize: ".75rem", color: "var(--text-lt)", marginTop: ".35rem" }}
                      onClick={() => dispatch({ type: "REMOVE", id: item.id })}
                    >
                      <i className="bi bi-trash" /> Remove
                    </button>
                  </div>
                </div>
              ))}

              {/* Totals */}
              <div className="cart-subtotal mt-3">
                <div className="csubt-row"><span>Subtotal</span><span>${subtotal.toFixed(2)}</span></div>
                <div className="csubt-row">
                  <span>Shipping</span>
                  <span style={{ color: shipping === 0 ? "var(--teal)" : "inherit" }}>
                    {shipping === 0 ? "FREE" : `$${shipping.toFixed(2)}`}
                  </span>
                </div>
                {subtotal < 150 && (
                  <div style={{ fontSize: ".73rem", color: "var(--primary)", marginBottom: ".3rem" }}>
                    <i className="bi bi-info-circle me-1" />
                    Add ${(150 - subtotal).toFixed(2)} more for free shipping
                  </div>
                )}
                <div className="csubt-row grand">
                  <span>Total</span>
                  <span>${total.toFixed(2)}</span>
                </div>

                <button
                  className="btn-checkout"
                  onClick={() => { setOpen(false); setPage("checkout"); }}
                >
                  Checkout <i className="bi bi-arrow-right ms-1" />
                </button>
                <div className="secure-note">
                  <i className="bi bi-shield-check me-1" style={{ color: "var(--teal)" }} />
                  Secured by Stripe · SSL encrypted
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
}
