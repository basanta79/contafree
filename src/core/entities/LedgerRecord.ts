export class LedgerRecord {
    constructor (
        public readonly id: string,
        public readonly description: String,
        public readonly category: String,
        public readonly amount: String,
        public readonly currency: String,
        public readonly operation_date: string
    ) {}
}
