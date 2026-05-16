import { useEffect } from "react";

// ─── Load Bootstrap 5 + Icons + Google Fonts ────────────────────────────────
export function useBootstrap() {
  useEffect(() => {
    const links = [
      "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css",
      "https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.css",
      "https://fonts.googleapis.com/css2?family=Fraunces:ital,wght@0,500;0,700;0,900;1,500&family=Plus+Jakarta+Sans:wght@300;400;500;600&display=swap",
    ];
    links.forEach(href => {
      if (!document.querySelector(`link[href="${href}"]`)) {
        const el = document.createElement("link");
        el.rel = "stylesheet";
        el.href = href;
        document.head.appendChild(el);
      }
    });
    const src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js";
    if (!document.querySelector(`script[src="${src}"]`)) {
      const s = document.createElement("script");
      s.src = src;
      document.body.appendChild(s);
    }
  }, []);
}

// ─── Anthropic API Call ──────────────────────────────────────────────────────
export async function askClaude(prompt, system = "") {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      model: "claude-sonnet-4-20250514",
      max_tokens: 1000,
      system: system || "You are a helpful e-commerce assistant. Be concise.",
      messages: [{ role: "user", content: prompt }],
    }),
  });
  const data = await res.json();
  return data.content?.map(b => b.text || "").join("") || "";
}
