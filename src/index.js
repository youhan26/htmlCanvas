import DomSelector from 'react-native-dom-parser';
import Resource from './resource';
import {isSupportCanvas} from "./utils";
import factory from './element';
import {toStyle} from "./utils/handleUnit";
import engine from "./core/engine";

const defaultSize = 100;


class Canvas {
	constructor(el, config = {}) {
		this.el = el;
		if (isSupportCanvas(el)) {
			this.ctx = el.getContext('2d');
		} else {
			this.ctx = {};
			console.warn('not support canvas');
		}

		const {width = defaultSize, height = defaultSize, ...others} = config;
		(width || height ) && this.updateStyle(width, height);


		this.resource = new Resource(this.sourceLoadFinish);
		engine.init(this.ctx, {svg: false, node: false});
	}

	sourceLoadFinish() {
		//TODO check queue
	}


	updateStyle(width, height) {
		if (!this.el) {
			return;
		}
		const styleWidth = toStyle(width);
		const styleHeight = toStyle(height);
		this.el.style.width = styleWidth;
		this.el.style.height = styleHeight;
		this.el.width = styleWidth;
		this.el.height = styleHeight;
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

		function convertItem(node) {
			const {children} = node;
			if (children && children.length > 0) {
				node.children = children.map(function (child) {
					return convertItem(child);
				});
			}
			return factory.instance(node.tagName, node);
		}

		const node = convertItem(tempNode);
		node.render();
	}
}

export default Canvas;