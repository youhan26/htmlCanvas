import Div from "./custom/Div";
import Img from "./custom/Img";
import Text from './custom/Text';
import logger from '../utils/logger';
import {isClass} from "../utils/is";

const defaultDeclaration = Div;

/**
 * Elements
 */
class Elements {
	constructor() {
		this.elements = {
			default: Div
		};
	}

	define(className, declaration = defaultDeclaration) {
		this.elements[className] = isClass(declaration) ? declaration : defaultDeclaration;
	}

	instance(className, ...args) {
		if (this.elements[className]) {
			return new this.elements[className](...args);
		}
		logger.error(`class name don't exist ${className}, use default instead of`);
		return new this.elements['default'](...args);
	}
}

const elementFactory = new Elements();
elementFactory.define('div', Div);
elementFactory.define('img', Img);
elementFactory.define('text', Text);

export default elementFactory;