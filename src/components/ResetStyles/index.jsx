import { createGlobalStyle } from 'styled-components';
import { reset } from 'react95';

const ResetStyles = createGlobalStyle`
	${reset}
	body {
		background-color: teal
	}

	.visually-hidden {
		position: absolute;
		width: 1px;
		height: 1px;
		overflow: hidden;
		clip: rect(0, 0, 0, 0);
		padding: 0;
		border: 0;
		white-space: nowrap;
		pointer-events: none;
	}

	*:focus,
	*:focus + div
	 {
		outline: none !important;
		box-shadow:
			0 0 0 0.125rem rgba(0, 0, 128, 0.8),
			0 0 0 0.375rem rgb(16, 52, 166, 0.6) !important;
	}
`;

export default ResetStyles;
