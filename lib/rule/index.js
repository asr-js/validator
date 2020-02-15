/**
 * 规则
 *
 * @author surh
 */
export default class Rule {
    constructor(message, tigger) {
        /** 消息 */
        this.message = '';
        /** 触发 */
        this.trigger = 'change';
        this.message = message;
        if (tigger) {
            this.trigger = tigger;
        }
    }
}
//# sourceMappingURL=index.js.map