/**
 * Created by: YouHan
 * Date: 2019/4/7 16:44
 * file: Source.js
 */
import resource from '../../utils/resource';
import Basic from "./Basic";
import {componentTypes} from "../../utils/constants";


class Source extends Basic {
	constructor(element, children, parent) {
		super(element, children, parent);

		console.log('-----');
		console.log(element);

		this._type = componentTypes.media;
		this.bindResource(element);
		this.init();
	}

	bindResource(element){
		const name = element.attributes.src;
		const image = resource.getResourceByName(name);
		console.log(image);
	}

	init() {
		this.initPosition();
	}

	initPosition() {
		this.position = {
			x: 0,
			y: 0
		};
	}

	render() {
		this.coreRender.renderImage();
	}
}

export default Source;