import $ from "jquery";
import Backbone from "backbone";

import PickrApp from "./PickrApp";
import PickrRouter from "./PickrRouter";

require("bootstrap/less/bootstrap.less");
require("bootstrap/js/button.js");

const app = new PickrApp();

app.render();
$("#app").append(app.el);
Backbone.navigate = app.navigate;
Backbone.history.start();

app.navigate(window.location.hash || "home", {
    trigger: true
});
