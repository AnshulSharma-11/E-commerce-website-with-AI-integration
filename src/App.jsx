// App.jsx — Root component, wires all pages and components together
import { useState, useReducer, useCallback } from "react";


import Navbar        from "./components/Navbar.jsx";
import Toast         from "./components/Toast.jsx";
import CartDrawer    from "./components/CartDrawer.jsx";
import Footer        from "./components/Footer.jsx";

import Hero          from "./pages/Hero.jsx";
import ShopPage      from "./pages/ShopPage.jsx";
import CheckoutPage  from "./pages/CheckoutPage.jsx";
import OrdersPage    from "./pages/OrdersPage.jsx";
import { useBootstrap } from "./api.js";
import { cartReducer } from "./Products/store.js";
import { GLOBAL_CSS } from "./Global CSS/styles.js";

export default function App() {
  useBootstrap();

  const [cart, dispatch]        = useReducer(cartReducer, []);
  const [page, setPage]         = useState("home");
  const [cartOpen, setCartOpen] = useState(false);
  const [toast, setToast]       = useState({ msg: "", show: false });

  const showToast = useCallback((msg) => {
    setToast({ msg, show: true });
    setTimeout(() => setToast(t => ({ ...t, show: false })), 2800);
  }, []);

  const cartCount = cart.reduce((s, i) => s + i.qty, 0);

  return (
    <>
      
      <style>{GLOBAL_CSS}</style>

      <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
        {/* ── Navigation ── */}
        <Navbar
          page={page}
          setPage={setPage}
          cartCount={cartCount}
          openCart={() => setCartOpen(true)}
        />

        {/* ── Pages ── */}
        <main style={{ flex: 1 }}>
          {page === "home" && (
            <>
              <Hero setPage={setPage} />
              <ShopPage dispatch={dispatch} showToast={showToast} />
            </>
          )}
          {page === "shop"     && <ShopPage dispatch={dispatch} showToast={showToast} />}
          {page === "checkout" && <CheckoutPage cart={cart} dispatch={dispatch} setPage={setPage} />}
          {page === "orders"   && <OrdersPage setPage={setPage} />}
        </main>

        {/* ── Footer ── */}
        <Footer />

        {/* ── Cart Sidebar ── */}
        <CartDrawer
          cart={cart}
          dispatch={dispatch}
          open={cartOpen}
          setOpen={setCartOpen}
          setPage={setPage}
        />

        {/* ── Toast Notification ── */}
        <Toast msg={toast.msg} show={toast.show} />
      </div>
    </>
  );
}
