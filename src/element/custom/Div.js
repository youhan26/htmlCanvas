import Component from "../basic/Basic";
import toCamels from "../../utils/toCamel";

/**
 * basic shape: div
 * @type {{}}
 */

const defaultStyle = {};

const componentTypes = {
	component: 'component',
	abstract: false
};

class Div extends Component{
	constructor(node) {
		super();

		const {style, attributes, events, children} = node;
		this.children = children;
		this.style = toCamels(style);
		this.events = events || {};
		this.attributes = attributes || {};

		this._type = componentTypes.component;

		this.initBox();
	}

	render() {

	}
}

export default Div;
