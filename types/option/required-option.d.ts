import Option from '.';
/**
 * 必须校验项
 *
 * @author surh
 */
export default class RequiredOption extends Option {
    constructor(name: string, required: boolean, strict?: boolean);
    /** 必须 */
    required: boolean;
    /** 严格的 */
    strict: boolean;
}
//# sourceMappingURL=required-option.d.ts.map