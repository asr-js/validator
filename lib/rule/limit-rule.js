import Rule from './';
import NumberOption from '../option/number-option';
import StringOption from '../option/string-option';
import PhoneOption from '../option/phone-option';
/**
 * 生成消息
 *
 * @param option 校验项
 */
function generateMessage(option) {
    let message = '';
    if (option instanceof NumberOption) {
        message = `${option.name}值必须不小于 ${option.min} 且不大于 ${option.max} 之间`;
    }
    else if (option instanceof StringOption) {
        message = `${option.name}长度不小于 ${option.min} 且不大于 ${option.max} 个字符`;
    }
    else if (option instanceof PhoneOption) {
        message = `请输入正确的${option.name}`;
    }
    return message;
}
/**
 * 限制规则
 *
 * @author surh
 */
export default class LimitRule extends Rule {
    constructor(option) {
        super(generateMessage(option));
        /** 类型 */
        this.type = 'any';
        /** 最小 */
        this.min = 0;
        /** 最大 */
        this.max = 0;
        this.min = option.min;
        this.max = option.max;
        if (option instanceof NumberOption) {
            this.type = 'number';
        }
        else if (option instanceof StringOption) {
            this.type = 'string';
        }
        else if (option instanceof PhoneOption) {
            this.pattern = option.pattern;
        }
    }
}
//# sourceMappingURL=limit-rule.js.map