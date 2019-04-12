/**
 * Created by: YouHan
 * Date: 2019/4/7 1:33
 * file: index.js
 */

import CanvasStyle from "./canvas/CanvasStyle";
import {getStyle} from "../utils/handleUnit";

/**
 *@name Render
 */
class Render {
	constructor(ctx) {
		this.canvasStyle = new CanvasStyle(this.ctx);

		canvas.init(ctx);
	}

	renderRect(position, style) {
		const {x, y, width, height} = position;
		const {color, radius} = style;

		const updateStyle = {
			lineWidth: 1,
			fillStyle: color
		};

		this.canvasStyle.update(updateStyle);

		const r = parseFloat(getStyle(radius));
		canvas.start();
		canvas.renderRect(x, y, width, height, r);
		canvas.fill();
		canvas.end();
	}

	/**
	 * use relative by container position
	 * @param x
	 * @param y
	 */
	translate(x, y) {
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.translate(x, y);
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
}

export default Render;
