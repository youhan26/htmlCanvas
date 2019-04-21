import toCamels from "../../utils/toCamel";
import Block from "../basic/Block";

/**
 * basic shape: div
 * @type {{}}
 */

const defaultStyle = {};

const componentTypes = {
	component: 'component',
	abstract: false
};

class Div extends Block{
	constructor(node) {

		super(node, node.children);

		const {style, attributes, events, children} = node;
		this.children = children;
		this.style = toCamels(style);
		this.events = events || {};
		this.attributes = attributes || {};

		this._type = componentTypes.component;

		// this.initBox();
	}

	render() {
		super.render();
	}
}

export default Div;
