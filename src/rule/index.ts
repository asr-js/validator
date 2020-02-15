/**
 * 规则
 *
 * @author surh
 */
export default class Rule {
  public constructor(message: string, tigger?: 'change' | 'blur') {
    this.message = message;
    if (tigger) {
      this.trigger = tigger;
    }
  }

  /** 消息 */
  public message: string = '';

  /** 触发 */
  public trigger: 'change' | 'blur' = 'change';
}
