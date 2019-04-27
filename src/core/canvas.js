/**
 * Created by: YouHan
 * Date: 2019/4/7 13:08
 * file: canvas.js
 */


import {
	defaultCanvasSize
} from "../utils/constants";
import {getStyle} from "../utils/handleUnit";


const canvas = {
	ctx: null,
	init(ctx) {
		this.ctx = ctx;
	},
	renderRect(x, y, width, height, radius, onlyPath = false) {
		if (radius || onlyPath) {
			this.renderRectWidthRadius(x, y, width, height, radius);
		} else {
			this.ctx.fillRect(x, y, width, height);
		}
	},
	renderRectWidthRadius(x, y, width, height, radius) {
		this.ctx.moveTo(x, y + height / 2);
		this.ctx.arcTo(x, y, x + width / 2, y, radius);
		this.ctx.arcTo(x + width, y, x + width, y + height / 2, radius);
		this.ctx.arcTo(x + width, y + height, x + width / 2, y + height, radius);
		this.ctx.arcTo(x, y + height, x, y + height / 2, radius);
	},
	renderImage(image, x, y, width, height){
		this.ctx.drawImage(image, x, y, width, height);
	},
	arcTo(x0, y0, x1, y1) {
		this.ctx.arcTo(x0, y0, x1, y1);
	},
	renderText(text, position){
		this.ctx.fillText(text, position.x, position.y);
	},
	translate(x, y){
		this.ctx.setTransform(1, 0, 0, 1, 0, 0);
		this.ctx.translate(x, y);
	},
	fill() {
		this.ctx.fill();
	},
	stroke() {
		this.ctx.stroke();
	},
	start() {
		// this.ctx.restore();
		this.ctx.beginPath();
	},
	end() {
		this.ctx.closePath();
		// this.ctx.restore();
	},
	clear(){
		clear(this.ctx);
	},
};

export default canvas;


/**
 * measureFontHeight
 * @param fontStyle
 * @returns {number}
 * @refer https://gist.github.com/videlais/9589285#file-determinefontheightinpixels-js
 * @refer https://stackoverflow.com/questions/1134586/how-can-you-find-the-height-of-text-on-an-html-canvas
 */
function measureFontHeight(fontStyle) {
	const fontDraw = document.createElement("canvas");
	const ctx = fontDraw.getContext('2d');
	ctx.fillRect(0, 0, fontDraw.width, fontDraw.height);
	ctx.textBaseline = 'top';
	ctx.fillStyle = 'white';
	ctx.font = fontStyle;
	ctx.fillText('gM', 0, 0);
	const pixels = ctx.getImageData(0, 0, fontDraw.width, fontDraw.height).data;
	let start = -1;
	let end = -1;
	for (let row = 0; row < fontDraw.height; row++) {
		for (let column = 0; column < fontDraw.width; column++) {
			let index = (row * fontDraw.width + column) * 4;
			if (pixels[index] === 0) {
				if (column === fontDraw.width - 1 && start !== -1) {
					end = row;
					row = fontDraw.height;
					break;
				}
				continue;
			}
			else {
				if (start === -1) {
					start = row;
				}
				break;
			}
		}
	}
	return end - start;
}

/**
 * getCanvasSize
 * @param canvas
 * @returns {{width: *, height: *}}
 */
function getCanvasSize(canvas) {
	return {
		width: getStyle(canvas.width) || getStyle(canvas.style.width) || defaultCanvasSize,
		height: getStyle(canvas.height) || getStyle(canvas.style.height) || defaultCanvasSize
	};
}

/**
 * clear canvas
 * @param ctx
 */
function clear(ctx) {
	const {width, height} = getCanvasSize(ctx.canvas);
	ctx.clearRect(0, 0, width, height);
}


/**
 * load remote font resource
 * return promise which will return when font can be used in canvas
 * @param fontName
 * @param resourceUrl
 */
function loadFont(fontName, resourceUrl) {
	let f = new window.FontFace('test', `url(${resourceUrl})`);
	return f.load();
}
