"use strict";
exports.__esModule = true;
var react_1 = require("react");
var SessionContext_1 = require("../../context/SessionContext");
var oscloud_logo_svg_1 = require("../../assets/oscloud-logo.svg");
var react_router_dom_1 = require("react-router-dom");
var Header = function () {
    var _a;
    var session = (SessionContext_1.useSession() || null).session;
    return (react_1["default"].createElement("header", { className: 'sticky-top bg-light p-0' },
        react_1["default"].createElement("div", { className: 'container-fluid' },
            react_1["default"].createElement("nav", { className: "navbar navbar-expand-lg navbar-light bg-light" },
                react_1["default"].createElement("a", { className: "navbar-brand", href: "#" },
                    react_1["default"].createElement("img", { src: oscloud_logo_svg_1["default"], alt: "OSCloud Logo" })),
                react_1["default"].createElement("button", { className: "navbar-toggler", type: "button", "data-bs-toggle": "collapse", "data-bs-target": "#navbarNav", "aria-controls": "navbarNav", "aria-expanded": "false", "aria-label": "Toggle navigation" },
                    react_1["default"].createElement("span", { className: "navbar-toggler-icon" })),
                react_1["default"].createElement("div", { className: "user-menu" }, session ? (react_1["default"].createElement(react_1["default"].Fragment, null,
                    react_1["default"].createElement("div", { className: "collapse navbar-collapse", id: "navbarNav" },
                        react_1["default"].createElement("ul", { className: "navbar-nav" },
                            react_1["default"].createElement("li", { className: "nav-item" },
                                react_1["default"].createElement("a", { className: "nav-link active", "aria-current": "page", href: "#" }, "Apps")),
                            react_1["default"].createElement("li", { className: "nav-item" },
                                react_1["default"].createElement("a", { className: "nav-link", href: "#" }, "Supports")),
                            react_1["default"].createElement("li", { className: "nav-item" },
                                react_1["default"].createElement("a", { className: "nav-link", href: "#" }, "Documentations")),
                            react_1["default"].createElement("li", { className: "nav-item" },
                                react_1["default"].createElement("a", { className: "nav-link disabled", href: "#" }, "Settings")),
                            react_1["default"].createElement("li", { className: "nav-item" },
                                react_1["default"].createElement("a", { className: "nav-link disabled", href: "#" }, "Admin")))),
                    react_1["default"].createElement("div", { className: 'd-flex' },
                        react_1["default"].createElement("div", null, (_a = session.user) === null || _a === void 0 ? void 0 : _a.email),
                        react_1["default"].createElement("div", null, "Workspace name")))) : (react_1["default"].createElement("ul", { className: "navbar-nav" },
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement(react_router_dom_1.Link, { className: "nav-link", to: "/auth/sign-in" }, "Sign In")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement("a", { className: "nav-link", href: "#" }, "Register")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement("a", { className: "nav-link", href: "#" }, "Home")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement("a", { className: "nav-link disabled", href: "#" }, "Support")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement("a", { className: "nav-link disabled", href: "#" }, "Documentation")),
                    react_1["default"].createElement("li", { className: "nav-item" },
                        react_1["default"].createElement("a", { className: "nav-link disabled", href: "#" }, "Other apps")))))))));
};
exports["default"] = Header;
