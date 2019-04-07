/**
 * Created by: YouHan
 * Date: 2019/4/7 16:56
 * file: is.js
 */
/**
 * isFunction
 * @param f
 * @returns {*|boolean}
 */
export function isFunction(f) {
	return f && typeof f === 'function';
}

/**
 * @name isClass
 * @params f
 */
export function isClass(f) {
	return isFunction(f) && isFunction(f.constructor);
}
