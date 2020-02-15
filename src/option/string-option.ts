import RequiredOption from './required-option';

/**
 * 字符串校验项
 *
 * @author surh
 */
export default class StringOption extends RequiredOption {
  public constructor(
    name: string,
    required: boolean,
    strict?: boolean,
    min?: number,
    max?: number,
  ) {
    super(name, required, strict);
    if (min !== undefined) {
      this.min = min;
    }
    if (max !== undefined) {
      this.max = max;
    }
  }

  /** 最小长度 */
  public min: number = 0;

  /** 最大长度 */
  public max: number = 32;
}
