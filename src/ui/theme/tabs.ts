import { tabsAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tabsAnatomy.keys);

const sizes = {
	custom: definePartsStyle({
		tab: {
			fontSize: 'sm',
			fontWeight: '500',
			py: '4',
			px: '0',
			mr: '8',
			borderBottom: '4px solid',
			// This seems a bug, it is necessary to set the width again
			borderBottomWidth: 4,
		},
		tabpanel: {
			py: 2,
			px: 0,
		},
	}),
};

// export the component theme
export const tabsTheme = defineMultiStyleConfig({ sizes });
