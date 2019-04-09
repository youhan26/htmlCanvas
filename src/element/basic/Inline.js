/**
 * Created by: YouHan
 * Date: 2019/4/7 16:44
 * file: Inline.js
 */

import Basic from "./Basic";
import {componentTypes} from "../../utils/constants";
import engine from "../../core/engine";

class Inline extends Basic{
	constructor(element, children){
		super(element, children);

		this._type = componentTypes.block;
		this.init();
	}

	init() {
		this.initStyle();
		this.initPosition();
	}

	initStyle() {
		const {backgroundColor, color, fontSize} = this.style;
		const {borderRadius} = this.style;
		const {width, height} = this.style;

		this.box = {
			// flex: new Flex(this.style),
		};

		console.log(this);
	}

	initPosition() {
		const {flex, flexDirection, justifyContent, alignItems} = this.style;
	}

	render(){

	}
}