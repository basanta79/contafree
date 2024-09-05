import { Period } from '../entities/Period';
import { PeriodRepository } from '../ports/PeriodRepository';

export class GetPeriods {
    constructor(private PeriodRepository: PeriodRepository) {}

    async execute(): Promise<Period[]> {
        return await this.PeriodRepository.getAllPeriods();
    }
}