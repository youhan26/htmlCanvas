/**
 * Created by: YouHan
 * Date: 2019/4/6 23:29
 * file: ratio.js
 */

const PIXEL_RATIO = (() => {
	let ctx = document.createElement("canvas").getContext("2d");
	let dpr = window.devicePixelRatio || 1;
	let bsr = (
		ctx.webkitBackingStorePixelRatio ||
		ctx.mozBackingStorePixelRatio ||
		ctx.msBackingStorePixelRatio ||
		ctx.oBackingStorePixelRatio ||
		ctx.backingStorePixelRatio || 1
	);
	let ratio = dpr / bsr;
	return (ratio);
})();