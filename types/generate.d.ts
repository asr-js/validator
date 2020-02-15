import Option from './option';
import Rule from './rule';
/** 规则类型 */
declare type RuleType = 'required' | 'string' | 'number' | 'phone';
/**
 * 生成规则
 *
 * @param ruleType 规则类型
 * @param option 校验项
 */
export default function generate(ruleType: RuleType, option: Option): Rule[];
export {};
//# sourceMappingURL=generate.d.ts.map