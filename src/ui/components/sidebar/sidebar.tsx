import { Grid, Text, useColorModeValue } from '@chakra-ui/react';
import { SidebarItems } from './sidebar-items.view';

export default function Sidebar() {
	return (
		<Grid
			gridTemplateRows="1fr auto"
			w="full"
			h="calc(100vh - 60px)"
			paddingTop={4}
			paddingBottom={4}
			borderRight="1px"
			borderRightColor={useColorModeValue('gray.200', 'gray.700')}
			bg={useColorModeValue('white', 'gray.900')}
		>
			<SidebarItems />

			<Text fontSize="xs" textAlign="center" mt="auto" color={'gray.500'}>
				{/* Version: {__APP_VERSION__} */}
                Version: 1.0.0
			</Text>
		</Grid>
	);
}
