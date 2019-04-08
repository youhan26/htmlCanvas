/**
 * Created by: YouHan
 * Date: 2019/4/8 23:18
 * file: engine.js
 */
import logger from '../utils/logger';
import Render from "./render";

const engine = {
	ctx: null,
	render: null,
	init: function (ctx, config) {
		if (!ctx) {
			logger.error('init error');
		}
		this.ctx = ctx;
		this.render = new Render(this.ctx);
	}
};


export default engine;
