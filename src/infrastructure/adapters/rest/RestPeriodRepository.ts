import axios from 'axios';
import { PeriodRepository } from '../../../core/ports/PeriodRepository';
import { Period } from '../../../core/entities/Period';
import { AMPA_TREASURY_ROUTE, PERIODS_RESOURCE } from '../../constants/sources';

export class RestPeriodListRepository implements PeriodRepository {
    async getAllPeriods(): Promise<Period[]> {
        const response = await axios.get(`${AMPA_TREASURY_ROUTE}${PERIODS_RESOURCE}`);
        return response.data.map(
            (period: any) => new Period(period.id, period.period)
        );
    }
}