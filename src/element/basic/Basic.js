import {isFunction} from "../../utils/is";
import toCamels from "../../utils/toCamel";
import engine from "../../core/engine";


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
	constructor(element, children) {
		const {style, ...others} = element;
		const {attributes, events} = pickElement(others);
		this.children = children;
		this.style = toCamels(style);
		this.events = events || {};
		this.attributes = attributes || {};

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
}

export default Basic;
