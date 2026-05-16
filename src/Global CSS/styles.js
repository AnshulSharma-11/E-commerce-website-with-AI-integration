// ─── Global CSS ───────────────────────────────────────────────────────────────
export const GLOBAL_CSS = `
  :root {
    --primary:   #E8431A;
    --primary-lt:#FF6B45;
    --teal:      #1A8C7A;
    --teal-lt:   #22B5A0;
    --amber:     #F5A623;
    --ivory:     #FFFDF8;
    --cream:     #FEF7ED;
    
    --peach:     #FDE8DC;
    --sage-bg:   #EEF6F4;
    --text:      #2C2416;
    --text-md:   #5A4F42;
    --text-lt:   #8C7E72;
    --border:    #EAE0D5;
    --white:     #FFFFFF;
    --font-disp: 'Fraunces', serif;
    --font-body: 'Plus Jakarta Sans', sans-serif;
    --radius:    12px;
    --shadow:    0 4px 24px rgba(44,36,22,.08);
    --shadow-lg: 0 12px 48px rgba(44,36,22,.14);
  }
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: var(--font-body); background: var(--ivory); color: var(--text); }

  /* NAVBAR */
  .s-nav { background: var(--white) !important; border-bottom: 2px solid var(--peach); box-shadow: 0 2px 16px rgba(232,67,26,.07); }
  .s-brand { font-family: var(--font-disp); font-size: 1.65rem; font-weight: 900; color: var(--primary) !important; letter-spacing: -1px; cursor: pointer; }
  .s-brand span { color: var(--teal); }
  .s-nav-link { color: var(--text-md) !important; font-size: .875rem; font-weight: 500; transition: color .18s; }
  .s-nav-link:hover, .s-nav-link.active-pg { color: var(--primary) !important; }
  .s-cart-btn { background: var(--primary) !important; border: none !important; border-radius: 8px !important; color: var(--white) !important; font-weight: 600 !important; font-size: .875rem !important; padding: .45rem 1.2rem !important; position: relative; transition: background .18s !important; }
  .s-cart-btn:hover { background: var(--primary-lt) !important; }
  .cart-bubble { position: absolute; top: -7px; right: -7px; background: var(--amber); color: var(--text); border-radius: 50%; width: 20px; height: 20px; font-size: .65rem; font-weight: 800; display: flex; align-items: center; justify-content: center; border: 2px solid var(--white); }

  /* HERO */
  .hero { background: linear-gradient(135deg, var(--cream) 0%, var(--peach) 60%, #fde8c8 100%); padding: 5rem 0 4rem; position: relative; overflow: hidden; }
  .hero::after { content: ''; position: absolute; bottom: -60px; right: -60px; width: 420px; height: 420px; border-radius: 50%; background: radial-gradient(circle, rgba(232,67,26,.12) 0%, transparent 70%); pointer-events: none; }
  .hero-eyebrow { display: inline-flex; align-items: center; gap: .5rem; background: var(--peach); border: 1.5px solid rgba(232,67,26,.25); color: var(--primary); font-size: .72rem; font-weight: 700; letter-spacing: .12em; text-transform: uppercase; padding: .3rem .9rem; border-radius: 20px; margin-bottom: 1.25rem; }
  .hero-title { font-family: var(--font-disp); font-size: clamp(2.8rem, 5vw, 4.8rem); font-weight: 900; line-height: 1.02; letter-spacing: -2px; color: var(--text); margin-bottom: 1.25rem; }
  .hero-title .ht-color { color: var(--primary); font-style: italic; }
  .hero-title .ht-teal { color: var(--teal); }
  .hero-sub { font-size: 1rem; color: var(--text-md); font-weight: 300; line-height: 1.8; max-width: 420px; margin-bottom: 2rem; }
  .btn-hero-primary { background: var(--primary); color: var(--white); border: none; border-radius: 10px; padding: .75rem 1.75rem; font-family: var(--font-body); font-weight: 600; font-size: .9rem; transition: all .2s; cursor: pointer; }
  .btn-hero-primary:hover { background: var(--primary-lt); transform: translateY(-2px); box-shadow: 0 6px 20px rgba(232,67,26,.3); }
  .btn-hero-outline { background: transparent; color: var(--text); border: 2px solid var(--border); border-radius: 10px; padding: .75rem 1.75rem; font-family: var(--font-body); font-weight: 600; font-size: .9rem; transition: all .2s; cursor: pointer; }
  .btn-hero-outline:hover { border-color: var(--primary); color: var(--primary); }
  .hero-stat-row { display: flex; gap: 2rem; margin-top: 2rem; padding-top: 1.5rem; border-top: 1.5px solid var(--border); }
  .hero-stat-val { font-family: var(--font-disp); font-weight: 900; font-size: 1.5rem; color: var(--primary); }
  .hero-stat-lbl { font-size: .72rem; font-weight: 600; color: var(--text-lt); letter-spacing: .06em; text-transform: uppercase; }
  .hero-img-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 14px; }
  .hero-img-grid img { width: 100%; aspect-ratio: 3/4; object-fit: cover; border-radius: var(--radius); box-shadow: var(--shadow-lg); }
  .hero-img-grid img:first-child { margin-top: 36px; }

  /* FILTER BAR */
  .filter-bar { background: var(--white); border-bottom: 1.5px solid var(--border); padding: .85rem 0; position: sticky; top: 56px; z-index: 90; box-shadow: 0 2px 8px rgba(44,36,22,.04); }
  .cat-pill { font-family: var(--font-body); font-size: .78rem; font-weight: 600; padding: .35rem 1rem; border-radius: 20px; border: 1.5px solid var(--border); background: transparent; color: var(--text-lt); cursor: pointer; transition: all .18s; white-space: nowrap; }
  .cat-pill:hover { border-color: var(--primary); color: var(--primary); background: var(--peach); }
  .cat-pill.act { background: var(--primary); color: var(--white); border-color: var(--primary); }
  .s-sort { font-family: var(--font-body); font-size: .8rem; border: 1.5px solid var(--border); border-radius: 8px; padding: .35rem .85rem; background: var(--white); color: var(--text); cursor: pointer; }
  .price-wrap { display: flex; align-items: center; gap: .5rem; font-size: .78rem; color: var(--text-lt); }
  .price-wrap input { accent-color: var(--primary); width: 100px; }

  /* PRODUCT CARD */
  .prod-card { background: var(--white); border: 1.5px solid var(--border); border-radius: var(--radius); overflow: hidden; transition: transform .22s, box-shadow .22s; position: relative; }
  .prod-card:hover { transform: translateY(-6px); box-shadow: var(--shadow-lg); }
  .prod-img-wrap { position: relative; aspect-ratio: 4/5; overflow: hidden; background: var(--cream); }
  .prod-img { width: 100%; height: 100%; object-fit: cover; transition: transform .45s; display: block; }
  .prod-card:hover .prod-img { transform: scale(1.07); }
  .prod-badge { position: absolute; top: 10px; left: 10px; font-size: .62rem; font-weight: 800; letter-spacing: .1em; text-transform: uppercase; padding: .22rem .65rem; border-radius: 6px; color: var(--white); }
  .badge-hot  { background: var(--primary); }
  .badge-new  { background: var(--teal); }
  .badge-sale { background: var(--amber); color: var(--text); }
  .quick-add { position: absolute; bottom: 0; left: 0; right: 0; background: rgba(232,67,26,.92); color: var(--white); border: none; padding: .75rem; font-family: var(--font-body); font-size: .8rem; font-weight: 700; letter-spacing: .04em; text-transform: uppercase; cursor: pointer; transform: translateY(100%); transition: transform .25s; }
  .prod-card:hover .quick-add { transform: translateY(0); }
  .prod-body { padding: .9rem 1rem 1rem; }
  .prod-cat { font-size: .65rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--teal); margin-bottom: .2rem; }
  .prod-name { font-size: .95rem; font-weight: 600; color: var(--text); margin-bottom: .3rem; line-height: 1.35; }
  .prod-price { font-family: var(--font-disp); font-size: 1.1rem; font-weight: 700; color: var(--primary); }
  .prod-rating { font-size: .75rem; color: var(--text-lt); }
  .star { color: var(--amber); }
  .ai-desc-btn { background: none; border: none; padding: 0; cursor: pointer; font-family: var(--font-body); font-size: .72rem; font-weight: 600; color: var(--teal); display: flex; align-items: center; gap: .25rem; margin-top: .4rem; transition: color .15s; }
  .ai-desc-btn:hover { color: var(--teal-lt); }
  .ai-desc-box { font-size: .78rem; color: var(--text-md); line-height: 1.65; margin-top: .4rem; background: var(--sage-bg); border-left: 3px solid var(--teal); padding: .5rem .7rem; border-radius: 0 6px 6px 0; }

  /* AI PANEL */
  .ai-panel { background: linear-gradient(135deg, var(--teal) 0%, #156B5C 100%); border-radius: 16px; padding: 2rem; box-shadow: 0 8px 32px rgba(26,140,122,.25); }
  .ai-panel-title { font-family: var(--font-disp); font-size: 1.25rem; font-weight: 700; color: var(--white); margin-bottom: .5rem; display: flex; align-items: center; gap: .5rem; }
  .ai-panel-sub { font-size: .82rem; color: rgba(255,255,255,.65); margin-bottom: 1rem; }
  .ai-chip { display: inline-block; background: rgba(255,255,255,.15); border: 1px solid rgba(255,255,255,.25); color: rgba(255,255,255,.9); font-size: .75rem; font-weight: 500; padding: .3rem .85rem; border-radius: 20px; cursor: pointer; margin: .2rem; transition: background .15s; font-family: var(--font-body); }
  .ai-chip:hover { background: rgba(255,255,255,.28); }
  .ai-response { background: rgba(255,255,255,.12); border-left: 3px solid var(--amber); padding: 1rem; border-radius: 0 8px 8px 0; font-size: .85rem; color: rgba(255,255,255,.9); line-height: 1.7; margin-top: .85rem; white-space: pre-wrap; }

  /* CART OFFCANVAS */
  .s-offcanvas { background: var(--ivory) !important; }
  .s-offcanvas-title { font-family: var(--font-disp); font-weight: 700; color: var(--text); }
  .cart-thumb { width: 72px; height: 90px; object-fit: cover; border-radius: 8px; flex-shrink: 0; }
  .qty-ctrl { display: flex; align-items: center; gap: .4rem; }
  .qty-btn { width: 28px; height: 28px; border: 1.5px solid var(--border); border-radius: 6px; background: var(--white); font-size: 1rem; cursor: pointer; display: flex; align-items: center; justify-content: center; color: var(--text); transition: all .15s; }
  .qty-btn:hover { background: var(--primary); color: var(--white); border-color: var(--primary); }
  .cart-subtotal { background: var(--cream); border-radius: 12px; padding: 1.25rem; }
  .csubt-row { display: flex; justify-content: space-between; font-size: .875rem; color: var(--text-lt); margin-bottom: .4rem; }
  .csubt-row.grand { font-weight: 700; color: var(--text); font-size: 1rem; border-top: 1.5px solid var(--border); padding-top: .5rem; margin-top: .25rem; }
  .btn-checkout { width: 100%; padding: .9rem; background: var(--primary); color: var(--white); border: none; border-radius: 10px; font-family: var(--font-body); font-weight: 700; font-size: .95rem; cursor: pointer; transition: all .18s; margin-top: 1rem; }
  .btn-checkout:hover { background: var(--primary-lt); transform: translateY(-1px); box-shadow: 0 4px 16px rgba(232,67,26,.3); }
  .secure-note { text-align: center; font-size: .72rem; color: var(--text-lt); margin-top: .6rem; }

  /* CHECKOUT */
  .checkout-card { background: var(--white); border: 1.5px solid var(--border); border-radius: 14px; padding: 2rem; }
  .form-label { font-size: .72rem; font-weight: 700; letter-spacing: .07em; text-transform: uppercase; color: var(--text-lt); }
  .form-control, .form-select { border-radius: 8px !important; border: 1.5px solid var(--border) !important; font-family: var(--font-body) !important; font-size: .9rem !important; background: var(--ivory) !important; }
  .form-control:focus, .form-select:focus { border-color: var(--primary) !important; box-shadow: 0 0 0 3px rgba(232,67,26,.12) !important; }
  .section-sep { font-family: var(--font-disp); font-size: 1.1rem; font-weight: 700; color: var(--text); margin: 1.75rem 0 1rem; padding-bottom: .6rem; border-bottom: 1.5px solid var(--border); }
  .stripe-pill { background: var(--sage-bg); border: 1.5px solid rgba(26,140,122,.2); border-radius: 10px; padding: .85rem 1rem; display: flex; align-items: center; gap: .85rem; font-size: .8rem; color: var(--text-md); }
  .btn-place { width: 100%; padding: 1rem; background: var(--primary); color: var(--white); border: none; border-radius: 10px; font-family: var(--font-body); font-weight: 700; font-size: 1rem; cursor: pointer; transition: all .18s; }
  .btn-place:hover { background: var(--primary-lt); transform: translateY(-1px); box-shadow: 0 6px 24px rgba(232,67,26,.3); }
  .summary-sidebar { background: var(--cream); border: 1.5px solid var(--border); border-radius: 14px; padding: 1.75rem; position: sticky; top: 80px; }
  .summ-title { font-family: var(--font-disp); font-weight: 700; font-size: 1.1rem; margin-bottom: 1.25rem; color: var(--text); }
  .summ-img { width: 52px; height: 64px; object-fit: cover; border-radius: 8px; flex-shrink: 0; }
  .summ-qty-badge { position: absolute; top: -6px; right: -6px; background: var(--primary); color: var(--white); border-radius: 50%; width: 18px; height: 18px; font-size: .62rem; font-weight: 800; display: flex; align-items: center; justify-content: center; }
  .summ-row { display: flex; justify-content: space-between; font-size: .85rem; color: var(--text-lt); margin-bottom: .35rem; }
  .summ-row.total { font-weight: 700; color: var(--text); font-size: 1rem; border-top: 1.5px solid var(--border); padding-top: .6rem; margin-top: .25rem; }
  .ai-note-banner { background: var(--peach); border: 1.5px solid rgba(232,67,26,.2); border-left: 4px solid var(--primary); border-radius: 10px; padding: .85rem 1rem; font-size: .83rem; color: var(--text-md); margin-bottom: 1.5rem; }

  /* ORDER HISTORY */
  .order-card { background: var(--white); border: 1.5px solid var(--border); border-radius: 14px; overflow: hidden; }
  .order-head { background: var(--cream); border-bottom: 1.5px solid var(--border); padding: 1rem 1.5rem; }
  .o-label { font-size: .65rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase; color: var(--text-lt); margin-bottom: .15rem; }
  .o-val { font-size: .875rem; font-weight: 600; color: var(--text); }
  .status-pill { display: inline-flex; align-items: center; gap: .35rem; background: #ECFDF5; color: #065F46; font-size: .78rem; font-weight: 600; padding: .2rem .65rem; border-radius: 20px; }
  .status-dot { width: 6px; height: 6px; border-radius: 50%; background: #10B981; }
  .order-thumb { width: 60px; height: 75px; object-fit: cover; border-radius: 8px; }
  .ai-rec-box { background: var(--sage-bg); border-left: 3px solid var(--teal); border-radius: 0 8px 8px 0; padding: .6rem .85rem; font-size: .8rem; color: var(--text-md); }
  .btn-ai-rec { background: var(--sage-bg); border: 1.5px solid rgba(26,140,122,.25); border-radius: 8px; padding: .4rem .9rem; font-family: var(--font-body); font-size: .78rem; font-weight: 600; color: var(--teal); cursor: pointer; transition: all .15s; }
  .btn-ai-rec:hover { background: var(--teal); color: var(--white); border-color: var(--teal); }

  /* SUCCESS */
  .success-page { text-align: center; padding: 5rem 1rem; }
  .success-ring { width: 84px; height: 84px; border-radius: 50%; background: linear-gradient(135deg, var(--teal), var(--teal-lt)); color: var(--white); display: flex; align-items: center; justify-content: center; font-size: 2.2rem; margin: 0 auto 1.5rem; box-shadow: 0 8px 32px rgba(26,140,122,.3); }
  .success-h { font-family: var(--font-disp); font-size: 2.5rem; font-weight: 900; color: var(--text); }

  /* TOAST */
  .s-toast { position: fixed; bottom: 1.5rem; left: 50%; transform: translateX(-50%) translateY(12px); background: var(--white); color: var(--text); border-left: 4px solid var(--primary); box-shadow: 0 8px 32px rgba(44,36,22,.16); padding: .75rem 1.5rem; font-size: .85rem; font-weight: 600; border-radius: 10px; z-index: 9999; opacity: 0; pointer-events: none; transition: all .3s; white-space: nowrap; }
  .s-toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }

  /* FOOTER */
  .s-footer { background: var(--cream); border-top: 2px solid var(--peach); padding: 3.5rem 0 2rem; margin-top: 5rem; }
  .footer-brand { font-family: var(--font-disp); font-size: 1.5rem; font-weight: 900; color: var(--primary); margin-bottom: .5rem; }
  .footer-brand span { color: var(--teal); }
  .footer-desc { font-size: .83rem; color: var(--text-lt); max-width: 270px; line-height: 1.75; }
  .footer-col-title { font-size: .65rem; font-weight: 800; letter-spacing: .12em; text-transform: uppercase; color: var(--text-lt); margin-bottom: .85rem; }
  .footer-link { display: block; font-size: .83rem; color: var(--text-md); margin-bottom: .35rem; cursor: pointer; transition: color .15s; text-decoration: none; }
  .footer-link:hover { color: var(--primary); }
  .footer-bottom { border-top: 1.5px solid var(--border); margin-top: 2.5rem; padding-top: 1.5rem; font-size: .78rem; color: var(--text-lt); display: flex; justify-content: space-between; align-items: center; flex-wrap: wrap; gap: .5rem; }
  .social-icon { color: var(--text-lt); font-size: 1.1rem; cursor: pointer; transition: color .15s; }
  .social-icon:hover { color: var(--primary); }

  @media (max-width: 768px) {
    .hero-img-grid { display: none; }
    .hero-title { letter-spacing: -1px; }
  }
`;
