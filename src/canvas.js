/**
 * Created by: YouHan
 * Date: 2019/4/27 20:58
 * file: canvas.js
 */
import DomSelector from 'react-native-dom-parser';
import {isSupportCanvas} from "./utils";
import factory from './element';
import {getStyle} from "./utils/handleUnit";
import engine from "./core/engine";
import {defaultCanvasSize, defaultUnit} from "./utils/constants";


class Canvas {
	constructor(el, config = {}) {
		this.el = el;
		if (isSupportCanvas(el)) {
			this.ctx = el.getContext('2d');
		} else {
			this.ctx = {};
			console.warn('not support canvas');
		}

		const {width = defaultCanvasSize, height = defaultCanvasSize, ...others} = config;
		(width || height ) && this.updateStyle(width, height);

		engine.init(this.ctx, {svg: false, node: false});
	}

	updateStyle(width, height) {
		if (!this.el) {
			return;
		}
		const styleWidth = getStyle(width, true, defaultUnit);
		const styleHeight = getStyle(height, true, defaultUnit);
		this.el.style.width = styleWidth;
		this.el.style.height = styleHeight;
		this.el.width = getStyle(width);
		this.el.height = getStyle(height);
	}

	/**
	 * zoom config
	 * @param max
	 * @param min
	 * @param init
	 */
	zoom(max, min, init) {
		// TODO
	}

	render(rawhtml) {
		if (!rawhtml || !this.ctx) {
			return;
		}

		const tempNode = DomSelector(rawhtml);
		if (!tempNode) {
			console.log('parse html template error');
		}

		const node = factory.instance(tempNode.tagName || 'text', tempNode, tempNode.children);
		console.log(node);
		node.render();
	}
}

export default Canvas;
