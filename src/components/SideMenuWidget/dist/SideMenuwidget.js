"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
require("./side-menu-widget.scss"); // Add styling for the menu
require("./side-menu-widget.js"); // Add styling for the menu
var SideMenuWidget = function () {
    return (React.createElement("nav", { id: "menu-widget", className: "menu-widget menu" },
        React.createElement("ul", null,
            React.createElement("li", null,
                React.createElement(react_router_dom_1.NavLink, { to: "/", className: function (_a) {
                        var isActive = _a.isActive;
                        return (isActive ? "active" : "");
                    } }, "Homepage")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.NavLink, { to: "/elements", className: function (_a) {
                        var isActive = _a.isActive;
                        return (isActive ? "active" : "");
                    } }, "Elements")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.NavLink, { to: "/protected", className: function (_a) {
                        var isActive = _a.isActive;
                        return (isActive ? "active" : "");
                    } }, "Protected Page")),
            React.createElement("li", null,
                React.createElement(react_router_dom_1.NavLink, { to: "/auth/sign-in", className: function (_a) {
                        var isActive = _a.isActive;
                        return (isActive ? "active" : "");
                    } }, "Menu item 3"))),
        React.createElement("div", { className: "btn-group btn-group-sm position-sticky bottom-0" },
            React.createElement("button", { type: "button", className: "btn btn-secondary settings-btn" }, "Settings"),
            React.createElement("button", { type: "button", className: "btn btn-secondary toggle-menu", id: "toggle-btn" },
                React.createElement("i", { className: "arrow-placeholder" }),
                " ",
                React.createElement("span", { className: "item-text" }, "Close")))));
};
exports["default"] = SideMenuWidget;
