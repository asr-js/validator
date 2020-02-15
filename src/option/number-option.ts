import RequiredOption from './required-option';

/**
 * 数值校验项
 *
 * @author surh
 */
export default class NumberOption extends RequiredOption {
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
  /** 最小值 */
  public min: number = 0;

  /** 最大值 */
  public max: number = Math.pow(2, 31) - 1;
}
