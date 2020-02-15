import RequiredOption from './required-option';
/**
 * 电话校验项
 *
 * @author surh
 */
export default class PhoneOption extends RequiredOption {
    constructor(name: string, required: boolean, strict?: boolean, min?: number, max?: number, pattern?: RegExp);
    /** 最小长度 */
    min: number;
    /** 最大长度 */
    max: number;
    /** 电话正则校验 */
    pattern: RegExp;
}
//# sourceMappingURL=phone-option.d.ts.map