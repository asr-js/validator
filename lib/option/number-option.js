import RequiredOption from './required-option';
/**
 * 数值校验项
 *
 * @author surh
 */
export default class NumberOption extends RequiredOption {
    constructor(name, required, strict, min, max) {
        super(name, required, strict);
        /** 最小值 */
        this.min = 0;
        /** 最大值 */
        this.max = Math.pow(2, 31) - 1;
        if (min !== undefined) {
            this.min = min;
        }
        if (max !== undefined) {
            this.max = max;
        }
    }
}
//# sourceMappingURL=number-option.js.map