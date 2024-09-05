import { useState, useEffect } from 'react';
import { RestPeriodListRepository } from '../../infrastructure/adapters/rest/RestPeriodRepository';
import { GetPeriods } from '../../core/use-cases/GetPeriods';
import { Period } from '../../core/entities/Period';

export const usePeriods = (): Period[] => {
    const [periods, setPeriods] = useState<Period[]>([]);

    useEffect(() => {
        const periodRepository = new RestPeriodListRepository();
        const getPeriods = new GetPeriods(periodRepository);

        getPeriods.execute().then(setPeriods);
    }, []);

    return periods;
};