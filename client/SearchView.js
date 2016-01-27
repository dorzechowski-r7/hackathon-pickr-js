import PickrView from "./PickrView";

//require("bootstrap.min.css");

const SearchView = PickrView.extend({
    template: "templates/main.html",

    events: {
        "click": "onUserImageClick"
    },

    initialize() {
        console.log("hello from searchview");
    }
});

module.exports = SearchView;
