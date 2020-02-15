import RequireOption from './option/required-option';
import StringOption from './option/string-option';
import NumberOption from './option/number-option';
import PhoneOption from './option/phone-option';
import RequiredRule from './rule/required-rule';
import LimitRule from './rule/limit-rule';
/**
 * 生成规则
 *
 * @param ruleType 规则类型
 * @param option 校验项
 */
export default function generate(ruleType, option) {
    const rules = [];
    switch (ruleType) {
        case 'required':
            if (option instanceof RequireOption) {
                if (option.required) {
                    rules.push(new RequiredRule(option));
                }
                break;
            }
            throw new Error('option expected: RequireOption');
        case 'string':
            if (option instanceof StringOption) {
                if (option.required) {
                    rules.push(new RequiredRule(option));
                }
                rules.push(new LimitRule(option));
                break;
            }
            throw new Error('option expected: StringOption');
        case 'number':
            if (option instanceof NumberOption) {
                if (option.required) {
                    rules.push(new RequiredRule(option));
                }
                rules.push(new LimitRule(option));
                break;
            }
            throw new Error('option expected: NumberOption');
        case 'phone':
            if (option instanceof PhoneOption) {
                if (option.required) {
                    rules.push(new RequiredRule(option));
                }
                rules.push(new LimitRule(option));
                break;
            }
            throw new Error('option expected: PhoneOption');
        default:
            throw new Error(`ruleType expected: 'required' | 'string' | 'number' | 'phone'`);
    }
    return rules;
}
//# sourceMappingURL=generate.js.map