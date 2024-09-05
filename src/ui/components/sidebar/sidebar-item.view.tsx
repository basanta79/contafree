import { FlexProps, Flex, Icon } from "@chakra-ui/react";
import { ReactNode } from "react";
import { IconType } from "react-icons";
import { NavLink } from "react-router-dom";

interface NavItemProps extends FlexProps {
	icon: IconType;
	to: string;
	name: ReactNode;
}
export function NavItem(props: NavItemProps) {
	return (
		<NavLink to={props.to} style={{ textDecoration: 'none' }}>
			{({ isActive }) => {
				return isActive ? (
					<Flex
						align="center"
						p="3"
						mx="4"
						mb="1"
						borderRadius="lg"
						role="group"
						cursor="pointer"
						bg="gray.100"
						_hover={{
							bg: 'purple.600',
							color: 'white',
						}}
					>
						<Icon
							mr="4"
							fontSize="16"
							_groupHover={{
								color: 'white',
							}}
							as={props.icon}
						/>
						{props.name}
					</Flex>
				) : (
					<Flex
						align="center"
						p="3"
						mx="4"
						mb="1"
						borderRadius="lg"
						role="group"
						cursor="pointer"
						_hover={{
							bg: 'purple.600',
							color: 'white',
						}}
					>
						<Icon
							mr="4"
							fontSize="16"
							_groupHover={{
								color: 'white',
							}}
							as={props.icon}
						/>
						{props.name}
					</Flex>
				);
			}}
		</NavLink>
	);
}
