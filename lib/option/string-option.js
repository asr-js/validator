import RequiredOption from './required-option';
/**
 * 字符串校验项
 *
 * @author surh
 */
export default class StringOption extends RequiredOption {
    constructor(name, required, strict, min, max) {
        super(name, required, strict);
        /** 最小长度 */
        this.min = 0;
        /** 最大长度 */
        this.max = 32;
        if (min !== undefined) {
            this.min = min;
        }
        if (max !== undefined) {
            this.max = max;
        }
    }
}
//# sourceMappingURL=string-option.js.map