import Option from '.';

/**
 * 必须校验项
 *
 * @author surh
 */
export default class RequiredOption extends Option {
  public constructor(name: string, required: boolean, strict?: boolean) {
    super(name);
    this.required = required;
    if (strict) {
      this.strict = strict;
    }
  }

  /** 必须 */
  public required: boolean = true;

  /** 严格的 */
  public strict: boolean = false;
}
