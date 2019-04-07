/**
 * toCamels
 * @param styleObj
 */
export default function toCamels({...styleObj}) {
	Object.keys(styleObj).forEach((styleName) => {
		const handled = toCamel(styleName);
		if (handled !== styleName) {
			styleObj[toCamel(styleName)] = styleObj[styleName];
			delete styleObj[styleName];
		}
	});
	return styleObj;
}

/**
 * @name toCamel
 * @param s
 */
export function toCamel(s) {
	return s.replace(/([-_][a-z])/ig, function ($1) {
		return $1.toUpperCase()
			.replace('-', '')
			.replace('_', '');
	});
}
