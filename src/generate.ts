import Option from './option';
import RequireOption from './option/required-option';
import StringOption from './option/string-option';
import NumberOption from './option/number-option';
import PhoneOption from './option/phone-option';

import Rule from './rule';
import RequiredRule from './rule/required-rule';
import LimitRule from './rule/limit-rule';

/** 规则类型 */
type RuleType = 'required' | 'string' | 'number' | 'phone';

/**
 * 生成规则
 *
 * @param ruleType 规则类型
 * @param option 校验项
 */
export default function generate(ruleType: RuleType, option: Option): Rule[] {
  const rules: Rule[] = [];
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
      throw new Error(
        `ruleType expected: 'required' | 'string' | 'number' | 'phone'`,
      );
  }

  return rules;
}
