import Rule from '.';
import RequiredOption from '../option/required-option';
/**
 * 必须规则
 *
 * @author surh
 */
export default class RequiredRule extends Rule {
    constructor(option: RequiredOption);
    /** 必须 */
    static required: true;
    /** 验证器 */
    validator?: (rule: any, value: string | number | null | any[], callback: (err?: Error) => void) => void;
}
//# sourceMappingURL=required-rule.d.ts.map