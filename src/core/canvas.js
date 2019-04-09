/**
 * Created by: YouHan
 * Date: 2019/4/7 13:08
 * file: canvas.js
 */


import {defaultShadowBlur, lineCapTypes, lineJoinTypes, repetitionTypes, textAlignTypes} from "../utils/constants";
import Font from "../style/Font";

/**
 * clearCanvas
 * @param ctx
 * @param size
 */
function clearCanvas(ctx, size) {
	ctx.clearRect(-size, -size, size * 2, size * 2);
}

/**
 * drawLineArea
 * @param ctx
 * @param positions
 */
function drawLineArea(ctx, ...positions) {
	ctx.beginPath();
	positions.forEach(function (position, index) {
		if (index) {
			ctx.lineTo(position.x, position.y);
		} else {
			ctx.moveTo(position.x, position.y);
		}
	});
}

/**
 * drawRoundLineArea
 * @param ctx
 * @param radius
 * @param positions
 */
function drawRoundLineArea(ctx, radius, ...positions) {
	const r = radius;
	ctx.beginPath();
	ctx.moveTo(positions[0].x + r, positions[0].y);
	ctx.arcTo(positions[3].x, positions[3].y, positions[2].x, positions[2].y, r);
	ctx.arcTo(positions[2].x, positions[2].y, positions[1].x, positions[1].y, r);
	ctx.arcTo(positions[1].x, positions[1].y, positions[0].x, positions[0].y, r);
	ctx.arcTo(positions[0].x, positions[0].y, positions[0].x + radius, positions[0].y, r);
}

/**
 * drawText
 * @param ctx
 * @param position
 * @param text
 */
function drawText(ctx, position, text) {
	ctx.fillText(text, position.x, position.y);
}


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


function demo(ctx) {
	const image = new Image();


	/**
	 * method
	 */
	// fillRect: rect() + fill()
	ctx.fillRect(x, y, width, height);


	// createLinearGradient(x0, y0, x1, y1)
	const lineGradient = ctx.createLinearGradient(0, 0, 100, 100);
	lineGradient.addColorStop(0, 'green');
	lineGradient.addColorStop(1, 'red');

	// createRadialGradient(x0, y0, r0, x1, y1, r1)
	// https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/createRadialGradient
	const radialGradient = ctx.createRadialGradient(0, 0, 10, 100, 100, 10);
	radialGradient.addColorStop(0, 'green');
	radialGradient.addColorStop(0, 'green');

	// createPatten(image, repetition)
	const pattern = ctx.createPattern(image, repetitionTypes.repeat);

	/**
	 * property
	 */

	// fileStyle: css color(rgba, #111) || gradient || pattern
	ctx.fillStyle = 'red' || lineGradient || radialGradient || pattern;
	// font: css font string
	ctx.font = new Font();
	// globalAlpha
	ctx.globalAlpha = 0.5;
	// imageSmoothingEnabled
	ctx.imageSmoothingEnabled = false;
	// lineCap: work for stroke(), strokeRect(), strokeText()
	ctx.lineCap = lineCapTypes.round;
	// lineDashOffset
	ctx.lineDashOffset = 0.0
	// lineJoin
	ctx.lineJoin = lineJoinTypes.miter;
	// lineWidth: work for stroke(), strokeRect(), strokeText()
	// min work value >=1. 0.1 will work like opacity and width is 1
	ctx.lineWidth = 1;
	// shadowBlur
	ctx.shadowBlur = defaultShadowBlur;
	// shadowColor
	ctx.shadowColor = 'green';
	// shadowOffsetX, shadowOffsetY: float type
	ctx.shadowOffsetX = 10;
	ctx.shadowOffsetY = 10;
	// strokeStyle
	ctx.strokeStyle = 'red' || lineGradient || radialGradient || pattern;
	// textAlign
	ctx.textAlign = textAlignTypes.center;



	/// https://developer.mozilla.org/zh-CN/docs/Web/API/CanvasRenderingContext2D/lineJoin
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


