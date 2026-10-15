// Shared navigation bar
(function () {
    const links = [
        { href: "index.html", label: "Home" },
        { href: "location.html", label: "Our Locations" },
        { href: "tool.html", label: "Tool" },
        { href: "summarypage.html", label: "Our Project" }
    ];

    const css =
        ":where(.navbar){display:flex;flex-wrap:wrap;gap:8px;align-items:center;" +
        "padding:12px 24px;background:#1f2937;}" +
        ":where(.navbar a){color:#fff;text-decoration:none;padding:8px 16px;" +
        "border-radius:6px;font-family:system-ui,sans-serif;}" +
        ":where(.navbar a:hover){background:rgba(255,255,255,.15);}" +
        ":where(.navbar a.active){background:rgba(255,255,255,.25);font-weight:600;}";

    // Draw the nav    
    function insertNav() {

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
(function () {
    const contact = {
        email: "kvg6009@autuni.ac.nz"
    };

    const links = [
        { href: "faqs.html", label: "FAQs" },
        { href: "terms.html", label: "Terms and Conditions" }
    ];

    // Footer styles
    const css2 =
        ":where(body){min-height:100vh;min-height:100dvh;display:flex;flex-direction:column;}" +
        ":where(.site-footer){display:flex;flex-wrap:wrap;justify-content:space-between;" +
        "align-items:center;gap:12px 24px;padding:20px 24px;margin-top:auto;" +
        "background: #ebebeb;color: #1f2937 ;border-top:1px solid #dbdada;" +
        "font-family:system-ui,sans-serif;font-size:0.95rem;}" +
        ":where(.site-footer a){color:#1f2937;text-decoration:none;}" +
        ":where(.site-footer a:hover){text-decoration:underline;}" +
        ":where(.site-footer .footer-contact),:where(.site-footer .footer-links){" +
        "display:flex;flex-wrap:wrap;gap:8px 24px;}";

    function insertFooter() {
        const old = document.querySelector("footer.site-footer");
        if (old) old.remove();

        const style = document.createElement("style");
        style.textContent = css2;
        document.head.appendChild(style);

        const html =
            '<footer class="site-footer">' +
            '<div class="footer-contact">' +
            '<span>Contact us:</span>' +
            '<a href="mailto:' + contact.email + '">' + contact.email + "</a>" +
            "<div>" +
            '<nav class="footer-links" aria-label="Footer">' +
            links.map(function (l) {
                return '<a href="' + l.href + '">' + l.label + "</a>";
            }).join("") +
            "</nav>" +
            "</footer>";

        document.body.insertAdjacentHTML("beforeend", html);
    }

    if (document.readyState === "loading") {
        document.addEventListener("DOMContentLoaded", insertFooter);
    } else {
        insertFooter();
    }
})();
