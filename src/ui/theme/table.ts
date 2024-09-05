import { tableAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(tableAnatomy.keys);

const baseStyle = definePartsStyle({
	thead: {
		th: {
			textTransform: 'none',
			letterSpacing: 'var(--chakra-letterSpacings-wide)',
			color: 'var(--chakra-colors-gray-800)',
		},
	},
	tbody: {
		tr: {
			'&:hover': {
				td: {
					borderColor: 'transparent',
					background: 'var(--chakra-colors-gray-100)',
				},
			},
			'&:has(+ tr:hover)': {
				td: {
					borderColor: 'transparent',
				},
			},
			td: {
				'&:first-of-type': {
					borderTopLeftRadius: '8px',
					borderBottomLeftRadius: '8px',
				},
				'&:last-of-type': {
					borderTopRightRadius: '8px',
					borderBottomRightRadius: '8px',
				},
			},
		},
	},
});

export const tableTheme = defineMultiStyleConfig({ baseStyle });
