! function() {
    "use strict";
    if ("querySelector" in document && "addEventListener" in window) {
        var s = function(e, t) {
            e.preventDefault(), t = t || this;
            var a = document.querySelectorAll(".navigation-search"),
                s = document.querySelectorAll(".search-item"),
                c = document.querySelectorAll('a[href], area[href], input:not([disabled]):not(.navigation-search), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]'),
                r = "";
            t.closest(".mobile-menu-control-wrapper") && (r = document.getElementById("site-navigation"));
            for (var n = 0; n < a.length; n++)
                if (a[n].classList.contains("nav-search-active")) {
                    if (a[n].closest("#sticky-placeholder")) continue;
                    a[n].classList.remove("nav-search-active");
                    var i = document.querySelector(".has-active-search");
                    i && i.classList.remove("has-active-search");
                    for (var o = 0; o < s.length; o++) {
                        s[o].classList.remove("close-search"), s[o].classList.remove("active"), s[o].querySelector("a").setAttribute("aria-label", generatepressNavSearch.open);
                        for (var l = 0; l < c.length; l++) c[l].closest(".navigation-search") || c[l].closest(".search-item") || c[l].removeAttribute("tabindex")
                    }
                    document.activeElement.blur()
                } else {
                    if (a[n].closest("#sticky-placeholder")) continue;
                    var d = a[n].closest(".toggled");
                    d && d.querySelector("button.menu-toggle").click(), r && r.classList.add("has-active-search"), a[n].classList.add("nav-search-active");
                    var v, u = this.closest("nav");
                    u && (u.classList.contains("mobile-menu-control-wrapper") && (u = r), (v = u.querySelector(".search-field")) && v.focus());
                    for (o = 0; o < s.length; o++) {
                        s[o].classList.add("active"), s[o].querySelector("a").setAttribute("aria-label", generatepressNavSearch.close);
                        for (l = 0; l < c.length; l++) c[l].closest(".navigation-search") || c[l].closest(".search-item") || c[l].setAttribute("tabindex", "-1");
                        s[o].classList.add("close-search")
                    }
                }
        };
        if (document.body.classList.contains("nav-search-enabled")) {
            for (var e = document.querySelectorAll(".search-item"), t = 0; t < e.length; t++) e[t].addEventListener("click", s, !1);
            document.addEventListener("keydown", function(e) {
                if (document.querySelector(".navigation-search.nav-search-active") && 27 === (e.which || e.keyCode))
                    for (var t = document.querySelectorAll(".search-item.active"), a = 0; a < t.length; a++) {
                        s(e, t[a]);
                        break
                    }
            }, !1)
        }
    }
}();
