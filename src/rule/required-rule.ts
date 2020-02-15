import Rule from '.';
import RequiredOption from '../option/required-option';

const blacklist = [undefined, null, 0, []];

/**
 * 严格校验器
 *
 * @param rule
 * @param cValue
 * @param callback
 */
function strictValidator(
  rule: RequiredRule,
  cValue: any,
  callback: (err?: Error) => void,
) {
  switch (typeof cValue) {
    case 'string':
      const value = cValue.trim();
      if (value.length === 0 || value === '0') {
        callback(new Error(rule.message));
      }
      break;
    default:
      if (blacklist.includes(cValue)) {
        callback(new Error(rule.message));
      }
      break;
  }

  callback();
}

/**
 * 必须规则
 *
 * @author surh
 */
export default class RequiredRule extends Rule {
  public constructor(option: RequiredOption) {
    super(`${option.name}不能为空`);
    if (option.strict) {
      this.validator = strictValidator;
    }
  }

  /** 必须 */
  public static required: true = true;

  /** 验证器 */
  public validator?: (
    rule: any,
    value: string | number | null | any[],
    callback: (err?: Error) => void,
  ) => void;
}
