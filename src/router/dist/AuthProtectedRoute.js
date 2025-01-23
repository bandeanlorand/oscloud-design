"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var SessionContext_1 = require("../context/SessionContext");
var AuthProtectedRoute = function () {
    var session = SessionContext_1.useSession().session;
    // If session exists, allow access to the child components.
    // Otherwise, redirect to the sign-in page.
    return session ? React.createElement(react_router_dom_1.Outlet, null) : React.createElement(react_router_dom_1.Navigate, { to: "/auth/sign-in", replace: true });
};
exports["default"] = AuthProtectedRoute;
