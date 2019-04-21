import Block from "../basic/Block";

/**
 * basic shape: div
 * @type {{}}
 */

class Div extends Block{
	constructor(node) {
		super(node, node.children);
	}

	render() {
		super.render();
	}
}

export default Div;
