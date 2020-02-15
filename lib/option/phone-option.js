import RequiredOption from './required-option';
/** 电话正则校验 */
const phoneReg = /^(((\+\d{2}-)?0\d{2,3}-\d{7,8})|((\+\d{2}-)?(\d{2,3}-)?([1][3,4,5,7,8][0-9]\d{8})))$/;
/**
 * 电话校验项
 *
 * @author surh
 */
export default class PhoneOption extends RequiredOption {
    constructor(name, required, strict, min, max, pattern) {
        super(name, required, strict);
        /** 最小长度 */
        this.min = 0;
        /** 最大长度 */
        this.max = 11;
        /** 电话正则校验 */
        this.pattern = phoneReg;
        if (min !== undefined) {
            this.min = min;
        }
        if (max !== undefined) {
            this.max = max;
        }
        if (pattern) {
            this.pattern = pattern;
        }
    }
}
//# sourceMappingURL=phone-option.js.map