import { Period } from '../entities/Period';

export interface IPeriodRepository {
    getAllPeriods(): Promise<Period[]>;
    createPeriod(period: Period): Promise<Period>;
}