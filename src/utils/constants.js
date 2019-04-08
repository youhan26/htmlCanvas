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