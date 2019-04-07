/**
 * Created by: YouHan
 * Date: 2019/4/6 22:41
 * file: handleUnit.js
 */

export const defaultUnit = 'px';
export const defaultStyle = '10px';

/**
 * @name toStyle
 * @params number
 */
export function toStyle(number, defaultStyle = defaultStyle) {
	const n = parseFloat(number);
	if (isNaN(n)) {
		return defaultStyle;
	}
	return n + defaultUnit;
}