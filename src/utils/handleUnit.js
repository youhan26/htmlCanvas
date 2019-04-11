/**
 * Created by: YouHan
 * Date: 2019/4/6 22:41
 * file: handleUnit.js
 */

import {defaultUnit} from "./constants";

/**
 * getStyle
 * @param style
 * @param withUnit
 * @param defaultUnit
 * @returns {*}
 */
export function getStyle(style = '', withUnit = false, defaultUnit = defaultUnit){
	const match = String(style).match(/(\d+(?:.\d+)?)(\S*)/);
	if(match){
		const [_, num, unit] = match;
		return parseFloat(num) + (withUnit ? unit || defaultUnit : '');
	}
	return null;
}
