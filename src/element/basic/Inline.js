/**
 * Created by: YouHan
 * Date: 2019/4/7 16:44
 * file: Inline.js
 */

import Basic from "./Basic";
import {componentTypes} from "../../utils/constants";
import Font from "../../style/Font";

class Inline extends Basic {
	constructor(element, children, parent) {
		super(element, children, parent);

		this._type = componentTypes.block;
		this.init();
		this.text = element.text;
	}

	init() {
		this.initStyle();
		this.initPosition();
	}

	initStyle() {
		const {color} = this.style;

		this.font = new Font(this.style.font || this.style);
	}

	initPosition() {
		const {flex, flexDirection, justifyContent, alignItems} = this.style;
		this.position = {
			x: 0,
			y: 0
		};
	}

	render() {
		this.coreRender.renderText(this.text, this.position, this.parent.style, this.font);
		super.render();
	}
}


export default Inline;