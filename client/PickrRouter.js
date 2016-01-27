import Backbone from "backbone";

import HomeModel from "./HomeModel";
import HomeView from "./HomeView";
import LandingView from "./LandingView";
import NominationChooser from "./NominationChooser";
import PersonModel from "./PersonModel";
import PersonView from "./PersonView";
import PickChooser from "./PickChooser";

const PickrRouter = Backbone.Router.extend({
    app: null,

    initialize(app) {
        this.app = app;
        this.onHome = _.bind(this.onHome, this);
    },

    routes: {
        "home": "onHome",
        "landing": "onLanding",
        "people/:id/nominate": "onNominate",
        "people/:id": "onPerson",
        "people/:id/nomination": "onNomination",
        "people/:id/pick": "onPick"
    },

    onHome() {
        const model = new HomeModel();

        model.fetch({
            success: () => {
                this.app.show(new HomeView({
                    model: model
                }));
            }
        });
    },

    onLanding() {
        this.app.show(new LandingView());
    },

    onNomination(personId) {
        const model = new PersonModel({
            id: personId
        });

        model.fetch({
            success: () => {
                this.app.show(new NominationChooser({
                    model: model
                }));
            }
        });
    },

    onPerson(personId) {
        const model = new PersonModel({
            id: personId
        });

        model.fetch({
            success: () => {
                this.app.show(new PersonView({
                    model: model
                }));
            }
        });
    },

    onPick(personId) {
        const model = new PersonModel({
            id: personId
        });

        model.fetch({
            success: () => {
                this.app.show(new PickChooser({
                    model: model
                }));
            }
        });
    }
});

module.exports = PickrRouter;
