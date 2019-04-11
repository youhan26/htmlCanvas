/**
 * Created by: YouHan
 * Date: 2019/4/11 23:21
 * file: pick.js
 */

export default function pick(obj, fields) {
	if (!obj || !fields) {
		return {};
	}

	const result = {};
	fields.forEach(function (key) {
		if (obj[key]) {
			result[key] = obj[key];
		}
	});
	return result;
}