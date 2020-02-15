import RequiredOption from './required-option';
/**
 * 数值校验项
 *
 * @author surh
 */
export default class NumberOption extends RequiredOption {
    constructor(name: string, required: boolean, strict?: boolean, min?: number, max?: number);
    /** 最小值 */
    min: number;
    /** 最大值 */
    max: number;
}
//# sourceMappingURL=number-option.d.ts.map