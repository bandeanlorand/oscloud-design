"use strict";
exports.__esModule = true;
var react_router_dom_1 = require("react-router-dom");
var HomePage_tsx_1 = require("../pages/HomePage.tsx");
var Apps_tsx_1 = require("../pages/Apps.tsx");
var SignInPage_tsx_1 = require("../pages/auth/SignInPage.tsx");
var SignUpPage_tsx_1 = require("../pages/auth/SignUpPage.tsx");
var ProtectedPage_tsx_1 = require("../pages/ProtectedPage.tsx");
var _404Page_tsx_1 = require("../pages/404Page.tsx");
var AuthProtectedRoute_tsx_1 = require("./AuthProtectedRoute.tsx");
var Providers_tsx_1 = require("../Providers.tsx");
var router = react_router_dom_1.createBrowserRouter([
    {
        path: "/",
        element: React.createElement(Providers_tsx_1["default"], null),
        children: [
            // Public routes
            {
                path: "/",
                element: React.createElement(HomePage_tsx_1["default"], null)
            },
            {
                path: "/Apps",
                element: React.createElement(Apps_tsx_1["default"], null)
            },
            {
                path: "/auth/sign-in",
                element: React.createElement(SignInPage_tsx_1["default"], null)
            },
            {
                path: "/auth/sign-up",
                element: React.createElement(SignUpPage_tsx_1["default"], null)
            },
            // Protected routes (wrapped with AuthProtectedRoute)
            {
                path: "/",
                element: React.createElement(AuthProtectedRoute_tsx_1["default"], null),
                children: [
                    {
                        path: "/protected",
                        element: React.createElement(ProtectedPage_tsx_1["default"], null)
                    },
                ]
            },
        ]
    },
    {
        path: "*",
        element: React.createElement(_404Page_tsx_1["default"], null)
    },
]);
exports["default"] = router;
