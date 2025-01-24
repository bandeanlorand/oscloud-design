"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var SessionContext_1 = require("./context/SessionContext");
var Header_1 = require("./components/Header/Header");
var SideMenuwidget_1 = require("./components/SideMenuWidget/SideMenuwidget"); // Import the Menu
var Providers = function () {
    return (React.createElement(SessionContext_1.SessionProvider, null,
        React.createElement(Header_1["default"], null),
        React.createElement("div", { className: "main-container d-flex" },
            React.createElement(SideMenuwidget_1["default"], null),
            React.createElement("div", { className: "page-content" },
                React.createElement(react_router_dom_1.Outlet, null),
                " "))));
};
exports["default"] = Providers;
