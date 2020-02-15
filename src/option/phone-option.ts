import RequiredOption from './required-option';

/** 电话正则校验 */
const phoneReg: RegExp = /^(((\+\d{2}-)?0\d{2,3}-\d{7,8})|((\+\d{2}-)?(\d{2,3}-)?([1][3,4,5,7,8][0-9]\d{8})))$/;

/**
 * 电话校验项
 *
 * @author surh
 */
export default class PhoneOption extends RequiredOption {
  public constructor(
    name: string,
    required: boolean,
    strict?: boolean,
    min?: number,
    max?: number,
    pattern?: RegExp,
  ) {
    super(name, required, strict);
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

  /** 最小长度 */
  public min: number = 0;

  /** 最大长度 */
  public max: number = 11;

  /** 电话正则校验 */
  public pattern: RegExp = phoneReg;
}
