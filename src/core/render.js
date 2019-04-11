/**
 * Created by: YouHan
 * Date: 2019/4/7 1:33
 * file: index.js
 */

import logger from "../utils/logger";
import CanvasStyle from "./canvas/CanvasStyle";
import {getStyle} from "../utils/handleUnit";

/**
 *@name Render
 */
class Render {
	constructor(ctx) {
		this.ctx = ctx;

		this.canvasStyle = new CanvasStyle(this.ctx);

		this.renderRect = this.renderWrapper(this.renderRect);
		this.renderImage = this.renderWrapper(this.renderImage);
		this.renderText = this.renderWrapper(this.renderText);

	}


	renderRect(option) {
		const {position, style} = option;
		const {x, y, width, height} = position;
		// TODO support  all border css style
		const {backgroundColor, borderColor, borderWidth, radius} = style;

		const isFill = !borderWidth;

		const updateStyle = {};
		if (isFill) {
			updateStyle.fillStyle = backgroundColor;
		} else {
			updateStyle.strokeStyle = borderColor;
			updateStyle.lineWidth = getStyle(borderWidth);
		}

		this.canvasStyle.update({
			fillStyle: color,
			strokeStyle: color
		});

		if(borderWidth){

		}

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
