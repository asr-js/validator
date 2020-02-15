import Rule from '.';
const blacklist = [undefined, null, 0, []];
/**
 * 严格校验器
 *
 * @param rule
 * @param cValue
 * @param callback
 */
function strictValidator(rule, cValue, callback) {
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
    constructor(option) {
        super(`${option.name}不能为空`);
        if (option.strict) {
            this.validator = strictValidator;
        }
    }
}
/** 必须 */
RequiredRule.required = true;
//# sourceMappingURL=required-rule.js.map