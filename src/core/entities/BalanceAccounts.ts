export class BalanceAccount {
    constructor (
        public readonly id: string,
        public readonly description: String,
        public readonly balance: String,
        public readonly currency: String
    ) {}
}