import _ from "lodash";
import Backbone from "backbone";

const renderFns = {};

const PickrView = Backbone.View.extend({
    render() {
        const renderFn = (fn) => {
            this.$el.html(fn({
                model: this.model
            }));
        };

        if (this.template) {
            if (renderFns[this.template]) {
                renderFn(renderFns[this.template]);
            }
            else {
                $.get(this.template)
                    .done((templateData) => {
                        renderFns[this.template] = _.template(templateData);
                        renderFn(renderFns[this.template]);
                    })
            }
        }
        else if (this.templateHTML) {
            this.$el.html(this.templateHTML);
        }
    }
});

module.exports = PickrView;
