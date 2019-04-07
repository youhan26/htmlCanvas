/**
 * Created by: YouHan
 * Date: 2019/4/6 22:26
 * file: parseLikeMargin.js
 */

/**
 * @name parseLikeMargin
 * @params style
 * @params field
 */
function parseLikeMargin(style, field) {
	if (!style || !field || !style[field]) {
		return {top: 0, right: 0, bottom: 0, left: 0};
	}
	let [top = 0, right = top, bottom, left = right] = (' ' + style[field]).split(/[\s]+/);
	style[field + 'Top'] && (top = style[field + 'Top']);
	style[field + 'Right'] && (right = style[field + 'Right']);
	style[field + 'Bottom'] && (bottom = style[field + 'Bottom']);
	style[field + 'Left'] && (left = style[field + 'Left']);
	return {top, right, bottom, left};
}

export default parseLikeMargin;
