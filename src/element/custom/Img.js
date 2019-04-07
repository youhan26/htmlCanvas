/**
 * basic shape: div
 * @type {{}}
 */
const defaultStyle = {};
const componentTypes = {
	component: 'component',
	abstract: 'abstract'
};

class Img {
	constructor() {
		this.children = [];
		this.style = {};
		this.events = {};

		this._type = componentTypes.component;
	}

	render(){

	}
}

export default Img




