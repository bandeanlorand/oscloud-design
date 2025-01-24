"use strict";
exports.__esModule = true;
var react_1 = require("react");
var client_1 = require("react-dom/client");
require("./index.css");
var router_1 = require("./router");
var react_router_dom_1 = require("react-router-dom");
require("bootstrap/scss/bootstrap.scss");
require("bootswatch/dist/flatly/bootstrap.min.css");
require("bootstrap/dist/js/bootstrap.bundle.min.js");
require("./assets/scss/main.scss");
client_1["default"].createRoot(document.getElementById("root")).render(react_1["default"].createElement(react_1["default"].StrictMode, null,
    react_1["default"].createElement(react_router_dom_1.RouterProvider, { router: router_1["default"] })));
