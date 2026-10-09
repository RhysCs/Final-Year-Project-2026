// Shared navigation bar. Edit the links here once and every page updates.
(function () {
    const links = [
        { href: "index.html", label: "Home" },
        { href: "wifi.html", label: "WiFi" },
        { href: "location.html", label: "Test Location" },
        { href: "tool.html", label: "Tool" },
        { href: "description.html", label: "Description" }
    ];

    // Default nav styles. :where() keeps specificity at zero, so any
    // .navbar rules in your own CSS will override these.
    const css =
        ":where(.navbar){display:flex;flex-wrap:wrap;gap:8px;align-items:center;" +
        "padding:12px 24px;background:#1f2937;}" +
        ":where(.navbar a){color:#fff;text-decoration:none;padding:8px 16px;" +
        "border-radius:6px;font-family:system-ui,sans-serif;}" +
        ":where(.navbar a:hover){background:rgba(255,255,255,.15);}" +
        ":where(.navbar a.active){background:rgba(255,255,255,.25);font-weight:600;}";

    function insertNav() {
        // Avoid a duplicate if a page still has its own hard-coded nav
        const old = document.querySelector("nav.navbar");
        if (old) old.remove();

        const style = document.createElement("style");
        style.textContent = css;
        document.head.appendChild(style);

        const current = location.pathname.split("/").pop() || "index.html";

        const html =
            '<nav class="navbar">' +
            links.map(function (l) {
                const active = l.href === current ? ' class="active" aria-current="page"' : "";
                return '<a href="' + l.href + '"' + active + ">" + l.label + "</a>";
            }).join("") +
            "</nav>";

        document.body.insertAdjacentHTML("afterbegin", html);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", insertNav);
    } else {
        insertNav();
    }
})();