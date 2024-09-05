import React from 'react';
import { usePeriods } from '../../../hooks/usePeriods';
import { Box, Button, Grid, Heading } from '@chakra-ui/react';
import TableElement from '../../../elements/table.elements';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';

export const PeriodList: React.FC = () => {
    const periods = usePeriods();

    const columns = React.useMemo(() => [
        {
            accessorKey: 'id',
            header: 'ID',
        },
        {
            accessorKey: 'period',
            header: 'Period',
        }
    ], []);

    const table = useReactTable({
        data: periods,
        columns: columns,
        getCoreRowModel: getCoreRowModel() 
    })

    return (
        <Grid gridTemplateRows="auto 1fr auto">
			<Grid gridTemplateColumns="auto 1fr auto" alignItems="center" mb={8} gap={4}>
				<Heading as="h1" size="lg">
					Periods
				</Heading>
            </Grid>

            <Box overflow="auto">
				<TableElement table={table} />
			</Box>

            {/* <TablePagination
				goToPrevPage={goToPrevPage}
				goToNextPage={goToNextPage}
				handlePaginationChange={handlePaginationChange}
				limit={limit}
			/> */}

			{/* <Search defaultValues={criteria} isOpen={isOpen} onClose={onClose} btnRef={btnRef} /> */}
		</Grid>
    );
};