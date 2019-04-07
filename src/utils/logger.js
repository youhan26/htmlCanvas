/**
 * Created by: YouHan
 * Date: 2019/4/7 1:46
 * file: logger.js
 */

const isBrowser = typeof window !== 'undefined' && typeof window.document !== 'undefined';

/**
 * @name noop
 */
function noop() {

}

const logger = (function () {
	if (isBrowser) {
		const {log, warn, error} = window.console;
		return {log, warn, error};
	} else {
		return {log: noop, warn: noop, error: noop};
	}
})();

export default logger;
