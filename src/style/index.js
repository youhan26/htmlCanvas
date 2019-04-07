/**
 * styleTransfer
 * support style:
 * color:
 *  backgroundColor|color: 'red'/'#000000'
 *
 * font:
 *  fontSize: '16px'
 *
 * border:
 *  borderRadius
 *  borderColor
 *  borderStyle: dotted|solid|dashed|none
 *  borderWidth: '2px 10px 4px 20px'
 *  border-left|right|top|height: '1px solid red'
 *
 * padding:
 *  padding: '10px'
 *  padding-left|right|top|height: '20px'
 *
 * margin:
 *  margin: '10px 20px'
 *  margin-left|right|top|bottom: '10px'
 *
 * size:
 *  width|height: '100px'
 *
 * flex:
 *  flex: 1
 *  flexDirection: 'row|column'
 *  justifyContent: 'center'
 *  alignItems: 'center'
 *
 * zIndex:
 *  z-index: 1
 *
 * @param data
 */
const styleTransfer = function (data) {

};


import canvas, {components} from 'canvas';

const {div, text, image} = components;

//写法2
canvas.render(
	div,
	{width: '30px', height: '30px', borderRadius: '30px'},
	{
		onDrag: function () {
			console.log('');
		},
		onHover: function () {

		},
		onClick: function () {

		},
		onBlur: function () {

		}
	},
	null
);

