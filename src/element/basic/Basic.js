import {isFunction} from "../../utils/is";
import toCamels from "../../utils/toCamel";
import engine from "../../core/engine";
import factory from './../../element';


/**
 * @name pickElement
 * @params element
 */
function pickElement(element = {}) {
	const events = {};
	const attributes = {};
	Object.keys(element).forEach(function (key) {
		if (isFunction(element[key])) {
			events[key] = element[key];
		} else {
			attributes[key] = element[key];
		}
	});
	return {events, attributes};
}


/**
 * Basic component
 */
class Basic {
	constructor(element, children = [], parent) {
		const {style, ...others} = element;
		const {attributes, events} = pickElement(others);
		this.style = toCamels(style);
		this.events = events || {};
		this.attributes = attributes || {};
		this.parent = parent;
		const that = this;
		this.children = children.map(function (childData) {
			return factory.instance(childData.tagName || 'text', childData, childData.children, that);
		});

		this.initEventHandle();
		this.initLayer();

		this.coreRender = engine.render;
	}

	initEventHandle() {
		// TODO handle event
	}

	initLayer() {
		const {zindex} = this.style;
		// TODO handle layer
	}

	render() {
		if (this.children && this.children.length > 0) {
			this.children.forEach(function (child) {
				child.render();
			});
		}
	}
}

export default Basic;
