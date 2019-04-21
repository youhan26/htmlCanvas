/**
 * Created by: YouHan
 * Date: 2019/4/11 23:17
 * file: Style.js
 */
import pick from "../../utils/pick";

const defaultStyle = {
	fillStyle: 'white',
	strokeStyle: 'white',
	textBaseline: 'top'
};

class CanvasStyle {
	constructor(ctx, style = {}) {
		this.ctx = ctx;

		this.update({
			...defaultStyle,
			...style
		});
	}

	update(style) {
		const that = this;

		const supportStyle = pick(style, [
			'fillStyle',
			'strokeStyle',
			'font',
			'globalAlpha',
			'lineCap',
			'lineDashOffset',
			'lineJoin',
			'lineWidth',
			'shadowBlur',
			'shadowColor',
			'shadowOffsetX',
			'shadowOffsetY',
			'textAlign',
			'textBaseline',
		]);
		Object.keys(supportStyle).forEach(function (key) {
			that.ctx[key] = supportStyle[key];
		});
	}
}

export default CanvasStyle;

/**
 * unused
 * @param ctx
 */
function t(ctx) {
	// fileStyle: css color(rgba, #111) || gradient || pattern
	ctx.fillStyle = 'red' || lineGradient || radialGradient || pattern;
// strokeStyle
	ctx.strokeStyle = 'red' || lineGradient || radialGradient || pattern;
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
// textAlign
	ctx.textAlign = textAlignTypes.center;
// textBaselineTypes
	ctx.textBaselineTypes = textBaselineTypes.middle;
}

