import axios from 'axios';
import { IPeriodRepository } from '../../../core/ports/PeriodRepository';
import { Period } from '../../../core/entities/Period';
import { AMPA_TREASURY_ROUTE, PERIODS_RESOURCE } from '../../constants/sources';

export class RestPeriodRepository implements IPeriodRepository {
    async getAllPeriods(): Promise<Period[]> {
        const response = await axios.get(`${AMPA_TREASURY_ROUTE}${PERIODS_RESOURCE}`);
        return response.data.map(
            (period: any) => new Period(period.period, period.id)
        );
    }

    async createPeriod(period: Period): Promise<Period> {
        const response = await axios.post<Period>(`${AMPA_TREASURY_ROUTE}${PERIODS_RESOURCE}`, period);
        return response.data;
    }
}