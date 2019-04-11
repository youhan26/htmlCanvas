/**
 * Created by: YouHan
 * Date: 2019/4/7 16:43
 * file: Block.js
 */
import parseLikeMargin from "../../utils/parseLikeMargin";
import Basic from "./Basic";
import {componentTypes} from "../../utils/constants";

class Block extends Basic{
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
			padding: parseLikeMargin(this.style, 'padding'),
			margin: parseLikeMargin(this.style, 'margin'),
			border: parseLikeMargin(this.style, 'border'),

			// flex: new Flex(this.style),
		};

		console.log(this);
	}

	initPosition() {
		const {flex, flexDirection, justifyContent, alignItems} = this.style;
	}

	render(){
		// super.coreRender
	}
}

export default Block;
