import Backbone from "backbone";

import PickrView from "./PickrView";
import PickModel from "./PickModel";

const PickChooser = PickrView.extend({
    template: "templates/picks.html",
    className: "pick-view",

    events: {
        "click .submit-pick": "onSubmitPick"
    },

    initialize() {
        this.pickModel = new PickModel();
    },

    onSubmitPick(event) {
        this.pickModel.set("receiverId", this.model.get("id"));
        this.pickModel.set("giverId", "e95939a0-f0f7-4a6e-ae14-1c0363123cc3");
        this.pickModel.set("comment", this.$(".note").val());
        this.pickModel.save({}, {
            success: () => {
                $(".msg").text("pick submitted!");
                setTimeout(() => {
                    Backbone.navigate("home", {
                        trigger: true
                    });
                }, 1250);
            },
            error: () => {
                $(".msg").text("oh no!  an error occurred, try again later.");
                setTimeout(() => {
                    $(".msg").text("");
                }, 3000);
            }
        });
    }
});

module.exports = PickChooser;
