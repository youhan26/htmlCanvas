/**
 * Created by: YouHan
 * Date: 2019/4/7 16:43
 * file: Block.js
 */
import parseLikeMargin from "../../utils/parseLikeMargin";
import Basic from "./Basic";
import {componentTypes} from "../../utils/constants";

class Block extends Basic {
	constructor(element, children) {
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

		this.boxStyle = {
			padding: parseLikeMargin(this.style, 'padding'),
			margin: parseLikeMargin(this.style, 'margin'),
			border: parseLikeMargin(this.style, 'border'),
			// flex: new Flex(this.style),
		};
	}

	initPosition() {
		const {flex, flexDirection, justifyContent, alignItems} = this.style;

		const {width, height} = this.style;

		this.position = {
			x: 0,
			y: 0
		};

		const {padding, margin, border} = this.boxStyle;

		this.size = {
			block: {
				x: this.position.x,
				y: this.position.y,
				width: width + margin.left + margin.right
				+ border.left + border.right,
				height: height + margin.top + margin.bottom
				+ border.top + border.bottom
			},
			border: {
				x: margin.left,
				y: margin.top,
				width: width + border.left + border.right,
				height: height + border.top + border.bottom
			},
			padding: {}
		};
	}

	translate(x, y) {
		this.coreRender.translate(x, y);
	}

	renderMargin() {
		const {top, left} = this.boxStyle.margin;
		const {x, y} = this.position;
		this.translate(x, y);
	}

	renderBorder() {
		const {top, left, right, bottom} = this.boxStyle.border;
		const {borderRadius, borderColor, width, height} = this.style;
		this.coreRender.renderRect({
			x: 0, y: 0, width: left + width + right, height: top + height + bottom
		}, {
			color: borderColor,
			radius: borderRadius
		});
	}

	renderPadding() {
		// todo
	}

	renderContent() {

	}

	render() {
		this.renderMargin();
		this.renderBorder();
		this.renderPadding();
		this.renderContent();
	}
}

export default Block;
