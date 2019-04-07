/**
 * Created by: YouHan
 * Date: 2019/4/7 16:06
 * file: cache.js
 */


/**
 *@name Cache
 */
export default class Cache {
	constructor() {
		this.clear();
	}

	set(cacheKey, data) {
		this.cache.set(cacheKey, data);
	}

	get(cacheKey) {
		return this.cache.get(cacheKey);
	}

	clear() {
		this.cache = new Map();
	}
}
