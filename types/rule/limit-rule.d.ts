import Rule from './';
import NumberOption from '../option/number-option';
import StringOption from '../option/string-option';
import PhoneOption from '../option/phone-option';
/**
 * 限制规则
 *
 * @author surh
 */
export default class LimitRule extends Rule {
    constructor(option: NumberOption | StringOption | PhoneOption);
    /** 类型 */
    type: 'string' | 'number' | 'boolean' | 'method' | 'regexp' | 'integer' | 'float' | 'array' | 'object' | 'enum' | 'date' | 'url' | 'hex' | 'email' | 'any';
    /** 最小 */
    min: number;
    /** 最大 */
    max: number;
    /** 正则匹配 */
    pattern?: RegExp;
}
//# sourceMappingURL=limit-rule.d.ts.map