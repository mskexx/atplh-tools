(() => {
  const addHomeLink = () => {
    if (document.getElementById("atplh-home-link")) return;

    const scriptUrl = document.currentScript && document.currentScript.src;
    if (!scriptUrl) {
      console.error("ATPL(H) home link could not determine its script URL.");
      return;
    }

    const style = document.createElement("style");
    style.textContent = `
      #atplh-home-link {
        position: fixed;
        top: max(12px, env(safe-area-inset-top));
        left: max(12px, env(safe-area-inset-left));
        z-index: 100000;
        display: inline-flex;
        align-items: center;
        gap: 8px;
        padding: 8px 12px;
        border: 1px solid rgba(239, 195, 106, 0.65);
        border-radius: 999px;
        background: rgba(13, 25, 39, 0.94);
        box-shadow: 0 3px 12px rgba(0, 0, 0, 0.28);
        color: #efc36a;
        font: 600 13px/1.2 system-ui, "Segoe UI", Arial, sans-serif;
        text-decoration: none;
        -webkit-tap-highlight-color: transparent;
        backdrop-filter: blur(8px);
      }

      #atplh-home-link:hover {
        background: #142638;
        color: #fff;
      }

      #atplh-home-link:focus-visible {
        outline: 3px solid #efc36a;
        outline-offset: 3px;
      }

      #atplh-home-link svg {
        width: 24px;
        height: 24px;
        flex: 0 0 auto;
      }
    `;
    document.head.appendChild(style);

    const link = document.createElement("a");
    link.id = "atplh-home-link";
    link.href = new URL("../index.html", scriptUrl).href;
    link.setAttribute("aria-label", "Back to ATPL(H) Tools home");
    link.title = "Back to ATPL(H) Tools home";
    link.innerHTML = `
      <svg viewBox="0 0 48 48" fill="none" aria-hidden="true">
        <g stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2.4">
          <path d="M24 18v-5m-9 0h19M24 18h8l5 10H20c-4 0-7-2-9-5h13" />
          <path d="m37 28 5-6h3M20 28l-3 6m15-6 3 6M14 34h24M9 23l-5-3m5 3-5 3" />
        </g>
      </svg>
      <span>ATPL(H) Tools</span>
    `;
    document.body.appendChild(link);
  };

  if (document.body) {
    addHomeLink();
  } else {
    document.addEventListener("DOMContentLoaded", addHomeLink, { once: true });
  }
})();
