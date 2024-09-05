import {
	TbBarrel,
	TbBat,
	TbBriefcase,
	TbCalendarCheck,
	TbCheck,
	TbCheckbox,
	TbCompass,
	TbCreditCard,
	TbFileAnalytics,
	TbMoneybag,
	TbRecycle,
	TbReportMoney,
	TbScale,
	TbTrendingUp,
	TbUpload,
	TbUsers,
	TbUsersGroup,
	TbWebhook,
	TbFileDots,
} from 'react-icons/tb';
import {
    PERIODS_LIST_ROUTE
} from '../../constants/routes'
import { IconType } from 'react-icons';
import { Badge, Box, Tooltip } from '@chakra-ui/react';
import { NavItem } from './sidebar-item.view';
import { ReactNode } from 'react';

function failedTasksCountText(count: number): ReactNode {
	const VISIBLE_ITEMS = 99;

	if (count === 0) {
		return 'Task management';
	}
	if (count <= VISIBLE_ITEMS) {
		return (
			<span data-testid="tasks-tab">
				Task management
				<Badge ml={2} colorScheme="red">
					{count}
				</Badge>
			</span>
		);
	} else {
		return (
			<span data-testid="tasks-tab">
				Task management{' '}
				<Tooltip hasArrow label={`${count} failed tasks`} bg="red.500" placement="right">
					<Badge ml={2} colorScheme="red">
						{VISIBLE_ITEMS}+
					</Badge>
				</Tooltip>
			</span>
		);
	}
}

interface LinkItemProps {
	name: ReactNode;
	icon: IconType;
	to: string;
}

export function SidebarItems() {

	const LinkItems: Array<LinkItemProps> = [
		{ to: PERIODS_LIST_ROUTE, name: 'Periods', icon: TbMoneybag },
	];

	return (
		<Box>
			{LinkItems.map((link) => (
				<NavItem key={link.to} icon={link.icon} to={link.to} name={link.name} />
			))}
		</Box>
	);
}
