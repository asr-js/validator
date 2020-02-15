import RequiredOption from './required-option';
/**
 * 字符串校验项
 *
 * @author surh
 */
export default class StringOption extends RequiredOption {
    constructor(name: string, required: boolean, strict?: boolean, min?: number, max?: number);
    /** 最小长度 */
    min: number;
    /** 最大长度 */
    max: number;
}
//# sourceMappingURL=string-option.d.ts.map