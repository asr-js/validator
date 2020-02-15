import Option from '.';
/**
 * 必须校验项
 *
 * @author surh
 */
export default class RequiredOption extends Option {
    constructor(name, required, strict) {
        super(name);
        /** 必须 */
        this.required = true;
        /** 严格的 */
        this.strict = false;
        this.required = required;
        if (strict) {
            this.strict = strict;
        }
    }
}
//# sourceMappingURL=required-option.js.map