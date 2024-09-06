import { Period } from '../../entities/Period';
import { IPeriodRepository } from '../../ports/PeriodRepository';

export class GetPeriods {
    constructor(private PeriodRepository: IPeriodRepository) {}

    async execute(): Promise<Period[]> {
        return await this.PeriodRepository.getAllPeriods();
    }
}