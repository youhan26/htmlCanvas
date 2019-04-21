/**
 * Created by: YouHan
 * Date: 2019/4/7 1:31
 * file: constants.js
 */
export const componentTypes = {
	block: 'block',
	inline: 'inline',
	media: 'media',
	abstract: 'abstract'
};


/**
 * defaultUnit
 * @type {string}
 */
export const defaultUnit = 'px';
export const defaultCanvasSize = 500;

/**
 * rect shape type
 * @type {{fill: string, stroke: string}}
 */
export const rectTypes = {
	fill: 'fill',
	stroke: 'stroke'
};

/**
 * text decoration type
 * @type {{overline: string, lineThrough: string, underline: string}}
 */
export const textDecorationTypes = {
	overline: 'overline',
	lineThrough: 'line-through',
	underline: 'underline',
};


/**
 * createPattern repetition
 * @type {{repeat: string, repeat-X: string, repeat-y: string, no-repeat: string}}
 */
export const repetitionTypes = {
	'repeat': 'repeat',
	'repeat-X': 'repeat-x',
	'repeat-y': 'repeat-y',
	'no-repeat': 'no-repeat'
};

/**
 * lineCapTypes
 * @type {{butt: string, round: string, square: string}}
 */
export const lineCapTypes = {
	butt: 'butt', //default
	round: 'round',
	square: 'square'
};


/**
 * lineJoinTypes
 * @type {{bevel: string, round: string, miter: string}}
 */
export const lineJoinTypes = {
	bevel: 'bevel',
	round: 'round',
	miter: 'miter' // default
};


export const defaultShadowBlur = 10;


/**
 * textAlignTypes
 * @type {{left: string, right: string, center: string}}
 */
export const textAlignTypes = {
	left: 'left',
	right: 'right',
	center: 'center'
};

/**
 * textBaselineTypes
 * @type {{top: string, hanging: string, middle: string, alphabetic: string, ideographic: string, bottom: string}}
 */
export const textBaselineTypes = {
	top: 'top', //文本基线在文本块的顶部
	hanging: 'hanging',  //文本基线是悬挂基线
	middle: 'middle',    //文本基线在文本块的中间
	alphabetic: 'alphabetic',  // 文本基线是标准的字母基线  default
	ideographic: 'ideographic', // 文字基线是表意字基线；如果字符本身超出了alphabetic 基线，那么ideograhpic基线位置在字符本身的底部。
	bottom: 'bottom' //文本基线在文本块的底部。 与 ideographic 基线的区别在于 ideographic 基线不需要考虑下行字母。
};

/**
 * clockwiseTypes
 * @type {{false: boolean, true: boolean}}
 */
export const clockwiseTypes = {
	clockwise: false,      // 順時針 default
	anticlockwise: true    // 逆時針
};


/**
 * fillRules
 * @type {{nonzero: string, evenodd: string}}
 */
export const fillRules = {
	nonzero: 'nonzero', // 非零规则
	evenodd: 'evenodd'  // 奇偶规则
}
