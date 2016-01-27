import Backbone from "backbone";

import LandingView from "./LandingView";
import PickrRouter from "./PickrRouter";
import PickrView from "./PickrView";

const PickrApp = PickrView.extend({
    currentView: null,
    router: null,

    initialize() {
        console.log("new PickrApp");
        this.router = new PickrRouter(this);
        this.navigate = _.bind(this.navigate, this);
    },

    navigate(route, routeParams = {}) {
        if (!route) {
            throw new Error("no route provided!");
        }

        this.router.navigate(route, routeParams);
    },

    show(newView) {
        if (this.currentView) {
            this.currentView.remove();
        }

        this.currentView = newView;
        this.currentView.render();
        this.$el.empty().append(this.currentView.el);
    }
});

module.exports = PickrApp;
