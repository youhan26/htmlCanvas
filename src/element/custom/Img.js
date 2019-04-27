import Source from '../basic/Source';

/**
 * basic shape: div
 * @type {{}}
 */
const defaultStyle = {};
const componentTypes = {
	component: 'component',
	abstract: 'abstract'
};

class Img extends Source {
	constructor(element, children, parent) {
		super(element, children, parent);
		this._type = componentTypes.component;
	}

	render() {
		super.render();
	}
}

export default Img;




