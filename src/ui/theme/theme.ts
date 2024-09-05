import { extendTheme } from '@chakra-ui/react';
import { modalTheme } from './modal';
import { tableTheme } from './table';
import { tabsTheme } from './tabs';

export const theme = extendTheme({
	components: { Modal: modalTheme, Table: tableTheme, Tabs: tabsTheme },
});
