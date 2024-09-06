import { Period } from '../../entities/Period';
import { IPeriodRepository } from '../../ports/PeriodRepository';

export class CreatePeriod {
    constructor(private periodRepository: IPeriodRepository) {}

    async execute(period: Period): Promise<Period> {
        return await this.periodRepository.createPeriod(period);
    }
}