/**
 * Created by: YouHan
 * Date: 2019/4/7 16:44
 * file: Source.js
 */
import Basic from "./Basic";
import {componentTypes} from "../../utils/constants";


class Source extends Basic {
	constructor(element, children, parent) {
		super(element, children, parent);

		this._type = componentTypes.media;
		this.init();
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
		this.coreRender.renderImage()
	}
}