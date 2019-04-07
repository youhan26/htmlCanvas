/**
 * component extend
 */
import Div from "./element/custom/Div";

canvas.define('Circle', Div, function () {


});

const components = {};

function define(classname, baseClass, {
	style: {},
	events: {},
	children: []
}) {
	components[classname] = class extends baseClass {
		constructor(context, style = {}, events = [], children = []) {
			super();

			this.style = {
				...this.style,
				...style
			};
			this.children = [...this.children, ...children];
			this.events = {
				...this.events,
				...events
			};
		}
	};
}
