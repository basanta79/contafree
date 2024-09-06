import React, { useEffect } from 'react';
import { usePeriods } from '../../hooks/usePeriods';
import { PeriodList } from './components/PeriodList';
import PeriodModal from './components/PeriodModal';
import { Box, Heading, Button } from '@chakra-ui/react';

const PeriodListUi: React.FC = () => {

    const { periods, loadPeriods } = usePeriods();

    return (
        <Box p={4}>
            <PeriodModal onCloseModal={loadPeriods}/>

            <Heading mb={4}>Llista de periodes</Heading>

            <PeriodList periods={periods} />
        </Box>
    );
};

export default PeriodListUi;