// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';
//
// ReactDOM.render(<App />, document.getElementById('root'));
//
// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();



// import Canvas, {Components} from 'canvas';
//
// const canvas = new Canvas();
//
// canvas.init(document.getElementById('canvas'), {
// 	width: '300px',
// 	height: '300px',
// }, {
// 	drag: true,
// 	zoom: true
// });
//
// const layer = new canvas.Layer({
// 	zoom: true,
// 	drag: true
// });
//
// /**
//  * 0:slow ~ 1 fast
//  * minScale
//  * maxScale
//  */
// layer.zoom(0.8, 0.5, 2);
//
// canvas.add(layer);
// const layer2 = layer.copy();
// canvas.add(layer2);
//
// // refresh canvas
// canvas.render(function () {
// 	// this: canvas
// 	// after render finish
// 	console.log(this);
// });
//
// canvas.clear();
// canvas.remove(layer);
//
// layer2.distory();

import Canvas from 'htmlCanvas';

const canvas = new Canvas(document.getElementById('canvasId'), {width: 500, height: 500});

canvas.resource.loadHelper('./img.jpg')
	.then(function (resource) {
		canvas.resource.addResource('img1', resource);
	});

canvas.render(`
	<div style="width: 100px; height: 100px; background-color: red;">
		<div>
			<img src="img1"/>
		</div>
	</div>
`);