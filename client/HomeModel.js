import Backbone from "backbone";

//const host = "http://triforce.cam.rapid7.com:8053/";
const host = "";

const HomeModel = Backbone.Model.extend({

    url() {
        return host + "api/1/people?name=" + (this.get("searchString") ? this.get("searchString") : "");
    }
});

module.exports = HomeModel;
