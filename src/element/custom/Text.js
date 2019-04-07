/**
 * basic shape: div
 * @type {{}}
 */
const defaultStyle = {};
const componentTypes = {
	component: 'component',
	abstract: 'abstract'
};

class Text {
	constructor() {
		this.children = [];
		this.style = {};
		this.events = {};

		this._type = componentTypes.component;
	}

	render(){

	}
}

export default Text




