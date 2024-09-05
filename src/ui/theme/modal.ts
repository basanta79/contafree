import { modalAnatomy as parts } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/styled-system';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(parts.keys);

const baseStyle = definePartsStyle({
	overlay: {
		bg: 'blackAlpha.600',
	},
	dialog: {
		borderRadius: '2xl',
	},
	header: {
		fontSize: 24,
	},
	closeButton: {
		rounded: 'full',
		padding: 5,
		fontSize: 16,
		marginTop: '6px',
	},
	footer: {
		borderTop: '1px solid',
		borderTopColor: 'gray.200',
	},
});

export const modalTheme = defineMultiStyleConfig({
	baseStyle,
});
