/**
 * data like:
 * {
 *  tag: 'div",
 *  data: {id: 1},
 *  style: {color: 'red', height: '100px', flex: 1, flexDirection: 'row', textAlign: 'center'},
 *
 * }
 * @param data
 */
function htmlCanvas(data) {


}


class HtmlCanvas {
	constructor(el) {
		if (el instanceof Element && el.tagName === 'CANVAS') {
			this._canvasEl = el;
		} else {
			throw new Error('must be canvas el');
		}
		this.ctx = this._canvasEl.getContext('2d');
		this.size(el.style.width, el.style.height);
	}

	size(width = '300px', height) {
		this._canvasEl.width = width;
		this._canvasEl.height = height || width;
	}


}


import {HtmlCanvas, div, span} from 'HtmlCanvas';

const htmlCanvas = new HtmlCanvas('canvas');
htmlCanvas.render(`
	<div style="position: absolute; left: 0;right: 0;width: 100; height: 200">
	</div>
`);

/**
 * ctx.fillStyle = 'green';
 * ctx.fillRect(10, 10, 100, 100);
 *
 *
 *
 *
 *
 *
 *
 *
 *
 *
 */





