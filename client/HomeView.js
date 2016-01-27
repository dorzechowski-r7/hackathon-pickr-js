import PersonModel from "./PersonModel";
import PersonSearchResultView from "./PersonSearchResultView";
import PickrView from "./PickrView";

const HomeView = PickrView.extend({
    template: "templates/home.html",
    className: "home-view",

    events: {
        "keyup .people-entry": "onNameChanged",
        "blur .people-entry": "onNameChanged"
    },

    children: [],

    initialize() {
        this.onNameChanged = _.debounce(_.bind(this.onNameChanged, this), 500);
    },

    onNameChanged(event) {
        const $input = $(event.currentTarget);
        const searchString = $input.val();

        if (!searchString) {
            this.children.forEach((child) => {
                child.remove();
            });

            this.children = [];
            this.$(".people-list").empty();
        }
        else if (searchString !== this.model.get("searchString")) {
            this.model.clear();
            this.model.set("searchString", $input.val());
            this.model.fetch({
                success: (model, data) => {
                    this.children.forEach((child) => {
                        child.remove();
                    });

                    this.children = [];
                    this.$(".people-list").empty();

                    data.forEach((result) => {
                        this.children.push(new PersonSearchResultView({
                            model: new PersonModel(result)
                        }));
                    });

                    this.children.forEach((child) => {
                        child.render();
                        this.$(".people-list").append(child.el);
                    });
                }
            });
        }
    }
});

module.exports = HomeView;
