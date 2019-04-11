/**
 * Created by: YouHan
 * Date: 2019/4/7 13:08
 * file: canvas.js
 */


import {
	clockwiseTypes, defaultCanvasSize,
	defaultShadowBlur, fillRules, lineCapTypes, lineJoinTypes, repetitionTypes, textAlignTypes,
	textBaseLineTypes
} from "../utils/constants";
import Font from "../style/Font";
import {getStyle} from "../utils/handleUnit";

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
 * @param canvas
 */
function clear(ctx, canvas) {
	const {width, height} = getCanvasSize(canvas);
	ctx.clearRect(0, 0, width, height);
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

	// arc(x, y, radius, startAngle, endAngle, anticlockwise)
	ctx.arc(50, 50, 50, 0, degreeToAngle(180), clockwiseTypes.clockwise);
	// arcTo(x0, y0, x1, y1, radius) 有点类似二次貝塞爾曲綫: 控制點：x0, y0, 终点： x1, y1
	ctx.arcTo(20, 20, 100, 100, 100);
	// ctx.quadraticCurveTo(cpx, cpy, x, y)  二次贝塞尔曲线
	ctx.quadraticCurveTo(0, 0, 10, 10);
	// beginPath
	ctx.beginPath();
	// bezierCurveTo(cp1x, cp1y, cp2x, cp2y, x, y) 三次贝塞尔曲线： 控制点 cp1, cp2，终点：x, y
	ctx.bezierCurveTo(20, 20, 100, 100, 50, 50);
	// clearRect(x, y, width, height)
	ctx.clearRect(0, 0, 500, 500);
	// TODO clip
	ctx.clip();
	// closePath()  Canvas 2D API 将笔点返回到当前子路径起始点的方法。它尝试从当前点到起始点绘制一条直线。 如果图形已经是封闭的或者只有一个点，那么此方法不会做任何操作
	ctx.closePath();
	//ctx.getImageData(x, y, width, height)
	//ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
	ctx.getImageData(0, 0, 100, 100);
	// TODO createImageData(width, height) / createImageData(imageData)
	//ImageData { width: 100, height: 100, data: Uint8ClampedArray[40000] }
	const imageData = ctx.createImageData(100, 100);
	// ctx.drawImage(image, dx, dy)
	// ctx.drawImage(image, dx, dy, dWidth, dHeight)
	// ctx.drawImage(image, sx, sy, sWidth, sHeight, dx, dy, dWidth, dHeight)
	ctx.drawImage(image, 100, 100);
	// ctx.ellipse(x, y, xRadius, yRadius, rotation, startAngle, endAngle, anticlockwise)
	// rotation： 顺时针旋转角度
	// anticlockwise： 是否逆时针画
	ctx.ellipse(100, 100, 50, 75, Math.PI / 4, 0, Math.PI, true);
	// ctx.fill([path][,pathRule]) 填充当前 / 已存在的路径的方法
	ctx.fill(fillRules.nonzero);
	// ctx.fillRect(x, y, width, height)
	ctx.fillRect(0, 0, 100, 100);
	// ctx.strokeRect(x, y, width, height)
	ctx.strokeRect(0, 0, 100, 100);
	// ctx.fillText(text, x, y [, maxWidth])
	// 直接绘制到画布而不修改当前路径，因此任何后续fill() 或stroke()调用对它没有影响
	ctx.fillText('32131', 0, 0, 100);
	ctx.strokeText('113', 0, 0, 100);
	// ctx.getLineDash(): array
	ctx.getLineDash();
	// boolean ctx.isPointInPath(x, y);
	// boolean ctx.isPointInPath(x, y, fillRule);
	// boolean ctx.isPointInPath(path, x, y);
	// boolean ctx.isPointInPath(path, x, y, fillRule);
	// 用于判断在当前路径中是否包含检测点的方法
	ctx.isPointInPath(10, 10);
	// boolean ctx.isPointInStroke(x, y);
	// boolean ctx.isPointInStroke(path, x, y);
	// 检测某点是否在路径的描边线上的方法
	ctx.isPointInStroke(10, 10);
	// ctx.lineTo(x, y)
	ctx.lineTo(10, 10);
	// ctx.measureText('32131'): {width}
	ctx.measureText('3213213');
	// ctx.moveTo(x, y) 将一个新的子路径的起始点移动到(x，y)坐标的方法
	// ctx.beginPath()
	// ctx.lineTo(50, 50) = ctx.moveTo(50, 50)
	ctx.moveTo(50, 50);
	// void ctx.putImageData(imagedata, dx, dy);
	// void ctx.putImageData(imagedata, dx, dy, dirtyX, dirtyY, dirtyWidth, dirtyHeight);
	ctx.putImageData(imageData, 10, 10, 0, 0, 100, 100);
	// ctx.rect(x, y, width, height)
	ctx.rect(0, 0, 100, 100);
	// ctx.save()
	ctx.save();
	// ctx.restore(): 通过在绘图状态栈中弹出顶端的状态，将 canvas 恢复到最近的保存状态的方法。 如果没有保存状态，此方法不做任何改变
	ctx.restore();
	// ctx.rotate() 顺时针旋转坐标系
	ctx.rotate(degreeToAngle(45));
	// ctx.scale(x, y) 根据 x 水平方向和 y 垂直方向，为canvas 单位添加缩放变换的方法
	// 可以使用 ctx.scale(-1, 1) 水平翻转上下文，使用 ctx.scale(1, -1) 垂直翻转上下文
	ctx.scale(0.5, 0.5);
	// ctx.setLineDash([1, 2])
	ctx.setLineDash([1, 2]);
	// void ctx.setTransform(a, b, c, d, e, f);
	// a (m11) 水平缩放
	// b (m12) 水平倾斜
	// c (m21) 垂直倾斜
	// d (m22) 垂直缩放
	// e (dx) 水平移动
	// f (dy) 垂直移动
	ctx.setTransform(1, 0, 0, 1, 0, 0);
	// ctx.stroke() 使用非零环绕规则
	ctx.stroke();
	// ctx.translate(x, y)
	ctx.translate(10, 10);


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
	ctx.lineDashOffset = 0.0;
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
	// textBaseLineTypes
	ctx.textBaseLineTypes = textBaseLineTypes.middle;


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


function degreeToAngle(number) {
	return (number / 180) * Math.PI;
}

function angleToDegree(angle) {
	return (angle / Math.PI) * 180;
}

