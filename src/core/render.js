/**
 * Created by: YouHan
 * Date: 2019/4/7 1:33
 * file: index.js
 */

import CanvasStyle from "./canvas/CanvasStyle";
import {getStyle} from "../utils/handleUnit";
import canvas from './canvas';
import Font from "../style/Font";

/**
 *@name Render
 */
class Render {
	constructor(ctx) {
		this.canvasStyle = new CanvasStyle(ctx);

		canvas.init(ctx);
	}

	/**
	 * renderRect
	 * @param position
	 * @param style
	 */
	renderRect(position, style) {
		const {x, y, width, height} = position;
		const {color, radius} = style;

		const updateStyle = {
			lineWidth: 1,
			fillStyle: color
		};

		canvas.start();
		this.canvasStyle.update(updateStyle);
		const r = parseFloat(getStyle(radius || 0));
		canvas.renderRect(x, y, width, height, r);
		canvas.fill();
		canvas.end();
	}

	/**
	 * renderText
	 * @param text
	 * @param position
	 * @param style
	 * @param font
	 */
	renderText(text, position, style, font = new Font()) {
		const {shadow = {}, textDecoration, color} = style;
		const {shadowColor, shadowOffsetX, shadowOffsetY, shadowBlur} = shadow;

		const updateStyle = {
			fillStyle: color,
			font,
		};
		this.canvasStyle.update(updateStyle);
		canvas.renderText(text, position);
	}

	/**
	 * use relative by container position
	 * @param x
	 * @param y
	 */
	translate(x, y) {
		canvas.translate(x, y);
	}

	renderImage(image, position, style) {
		canvas.drawImage(image)
	}

	// new Path2D()
	renderPath(path) {
		this.ctx.beginPath();
		// draw path
		this.ctx.closePath();
	}
}

export default Render;
