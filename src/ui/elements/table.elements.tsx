import { Table, TableContainer, Tbody, Td, Th, Thead, ThemingProps, Tr } from '@chakra-ui/react';
import { Row as IRow, Table as ITable, flexRender } from '@tanstack/react-table';

interface ITableElementProps<T> {
	size?: ThemingProps<'Table'>['size'];
	table: ITable<T>;
	onRowClick?: (row: IRow<T>) => void;
}

export default function TableElement<T>(props: ITableElementProps<T>) {
	return (
		<TableContainer>
			<Table variant="simple" size={props.size || 'sm'}>
				<Thead>
					{props.table.getHeaderGroups().map((headerGroup) => (
						<Tr key={headerGroup.id}>
							{headerGroup.headers.map((header) => (
								<Th key={header.id} colSpan={header.colSpan}>
									{header.isPlaceholder ? null : flexRender(header.column.columnDef.header, header.getContext())}
								</Th>
							))}
						</Tr>
					))}
				</Thead>
				<Tbody data-testid="test">
					{props.table.getRowModel().rows.map((row) => (
						<Tr key={row.id} fontSize={14} cursor="pointer" onClick={() => props.onRowClick && props.onRowClick(row)}>
							{row.getVisibleCells().map((cell) => (
								<Td key={cell.id}>{flexRender(cell.column.columnDef.cell, cell.getContext())}</Td>
							))}
						</Tr>
					))}
				</Tbody>
			</Table>
		</TableContainer>
	);
}
