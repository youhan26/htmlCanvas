/**
 * Created by: YouHan
 * Date: 2019/4/8 23:47
 * file: Font.js
 */



export const defaultFont = '10px sans-serif';

class Font {
	constructor(data) {
		if (typeof  data === 'object') {
			const {fontStyle, fontVariant, fontWeight, fontSize, lineHeight, fontFamily} = data;
			this.fontStyle = fontStyle || 'normal';
			this.fontVariant = fontVariant || 'normal';
			this.fontWeight = fontWeight || 'normal';
			this.fontSize = fontSize || 'medium';
			this.lineHeight = lineHeight || 'normal';
			this.fontFamily = fontFamily || 'sans-serif';
		} else if (typeof data === 'string') {
			this.value = data;
		} else {
			this.value = defaultFont;
		}
	}

	toString() {
		if (this.value) {
			return this.value;
		}
		return `${this.fontStyle} ${this.fontVariant} ${this.fontWeight} ${this.fontSize} ${this.lineHeight} ${this.fontFamily}`;
	}
}

export default Font;
