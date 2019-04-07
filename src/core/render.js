/**
 * Created by: YouHan
 * Date: 2019/4/7 1:33
 * file: index.js
 */

import logger from "../utils/logger";

/**
 *@name Render
 */
class Render {
	constructor(ctx) {
		this.ctx = ctx;

		this.renderRect = this.renderWrapper(this.renderRect);
		this.renderImage = this.renderWrapper(this.renderImage);
		this.renderText = this.renderWrapper(this.renderText);
	}

	/**
	 * use relative by container position
	 * @param startPosition
	 */
	translate(startPosition) {
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		const {x, y} = startPosition;
		this.ctx.translate(x, y);
	}

	renderWrapper(func) {
		return (...args) => {
			let result;
			this.ctx.save();
			try {
				result = func && func(...args);
			} catch (e) {
				logger.log(e);
			}
			this.ctx.restore();
			return result;
		};
	}

	renderRect(option) {
		const {rectType, radius, startPoint, size = {width, height}, style} = option;

	}

	renderImage(option) {

	}

	renderText(option) {
		const {style} = option;
		const {font, shadow, textDecoration} = style;
		const {fontStyle, fontVariant, fontWeight, fontSize, fontFamily} = font;
		const {shadowColor, shadowOffsetX, shadowOffsetY, shadowBlur} = shadow;

	}

	// new Path2D()
	renderPath(path) {
		this.ctx.beginPath();
		// draw path
		this.ctx.closePath();
	}

	// TODO
	createRadialGradientStyle() {

	}

	// TODO
	createLinearGradientStyle() {

	}

	// TODO
	createImagePatternStyle() {

	}

	// TODO
	transformMove() {

	}
}

let render = {
	instance: null,
	init(ctx) {
		this.instance = new Render(ctx);
		render = this.instance;
	}
};

export default render;
