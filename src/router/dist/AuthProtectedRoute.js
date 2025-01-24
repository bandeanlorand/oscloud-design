"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var _404Page_1 = require("../pages/404Page");
var SessionContext_1 = require("../context/SessionContext");
var AuthProtectedRoute = function () {
    var session = SessionContext_1.useSession().session;
    if (!session) {
        // or you can redirect to a different page and show a message
        return React.createElement(_404Page_1["default"], null);
    }
    return React.createElement(react_router_dom_1.Outlet, null);
};
exports["default"] = AuthProtectedRoute;
