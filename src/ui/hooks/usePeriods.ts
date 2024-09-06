import { useState, useEffect } from 'react';
import { RestPeriodRepository } from '../../infrastructure/adapters/rest/RestPeriodRepository';
import { GetPeriods } from '../../core/use-cases/Periods/GetPeriods';
import { Period } from '../../core/entities/Period';

export const usePeriods = () => {
    const [periods, setPeriods] = useState<Period[]>([]);

    const loadPeriods = async () => {
        const periodRepository = new RestPeriodRepository();
        try {
            const getPeriods = new GetPeriods(periodRepository);
            getPeriods.execute().then(setPeriods);
        } catch (error) {
            console.error('Error al cargar los períodos:', error);
        }
    }

    // useEffect(() => {
    //     const periodRepository = new RestPeriodRepository();
    //     const getPeriods = new GetPeriods(periodRepository);

    //     getPeriods.execute().then(setPeriods);
    // }, []);

    useEffect(() => {
        loadPeriods();
    }, []);

    return { periods, loadPeriods };
};