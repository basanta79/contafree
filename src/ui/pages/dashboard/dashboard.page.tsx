import Header from '../../components/header/Header';
import { Box, Grid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../components/sidebar/sidebar';

export default function DashboardPage() {
	return (
		<Grid gridTemplateRows="60px 1fr" maxWidth="100%" margin="0" padding="0">
			<Header />
				<Grid gridTemplateColumns="300px 1fr" maxWidth="100%" margin="0" padding="0">
					<Sidebar />
					<Box h="calc(100vh - 60px)" paddingY={8} paddingX={10} overflowY="scroll" data-testid="content">
						<Outlet />
					</Box>
				</Grid>
		</Grid>
	);
}