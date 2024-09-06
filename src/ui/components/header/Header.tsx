import { DASHBOARD_ROUTE } from '../../constants/routes';
// import { useGetUserInfoQuery } from '@/queries/user.queries';
import { Box, Flex, Image, useColorModeValue } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export default function Header() {
	// const getUserInfoQuery = useGetUserInfoQuery();
	return (
		<Box
			minH="60px"
			bg={useColorModeValue('white', 'gray.900')}
			borderBottom="1px"
			borderBottomColor={useColorModeValue('gray.200', 'gray.700')}
			w="full"
			h="full"
		>
			<Flex h="60px" alignItems="center" mx="4" justifyContent="space-between" p={3}>
				<Link to={DASHBOARD_ROUTE} style={{ display: 'inline-block', height: '100%' }}>
					<Image height="100%" src="/img/logo.png" />
				</Link>

				{/* {getUserInfoQuery.data?.name} */}
			</Flex>
		</Box>
	);
}
