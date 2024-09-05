import { Period } from '../entities/Period';

export interface PeriodRepository {
    getAllPeriods(): Promise<Period[]>;
}