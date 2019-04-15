/**
 * Created by: YouHan
 * Date: 2019/4/7 16:43
 * file: Block.js
 */
import parseLikeMargin from "../../utils/parseLikeMargin";
import Basic from "./Basic";
import {componentTypes} from "../../utils/constants";
import {getStyle, getStyleNumber} from "../../utils/handleUnit";

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

		let {width, height} = this.style;

		width = getStyleNumber(width);
		height = getStyleNumber(height);

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
			padding: {
				x: margin.left + border.left,
				y: margin.top + border.top,
				width,
				height
			},
			content: {
				x: margin.left + border.left + padding.left,
				y: margin.top + border.top + padding.top,
				width: width - padding.left - padding.right,
				height: height - padding.top - padding.bottom
			}
		};
	}

	translate(x, y) {
		this.coreRender.translate(x, y);
	}

	renderMargin() {
		const {x, y} = this.size.block;
		this.translate(x, y);
	}

	renderBorder() {
		const {borderRadius, borderColor} = this.style;
		this.coreRender.renderRect(this.size.border, {
			color: borderColor,
			radius: borderRadius
		});
	}

	renderPadding() {
		const {backgroundColor} = this.style;
		this.coreRender.renderRect(this.size.padding, {
			color: backgroundColor
		});
	}

	renderContent() {
		// TODO
	}

	render() {
		this.renderMargin();
		this.renderBorder();
		this.renderPadding();
		this.renderContent();
	}
}

export default Block;
