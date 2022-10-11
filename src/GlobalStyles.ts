import { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	body {
		${({ theme }) => css`
			background-color: ${theme.colors.background};
			color: ${theme.colors.font};
			font-family: ${theme.fonts.main};
		`}
	}

	#root {
		${({ theme }) => css`
			padding: 0px ${theme.spaces[4]};
		`}
	}

	a, button {
		${({ theme }) => css`
			color: ${theme.colors.font};
		`}
	}

	li {
		list-style: none;
	}

	a {
		text-decoration: none;
	}

	button, input {
		${({ theme }) => css`
			font-family: ${theme.fonts.main};
		`}
	}

	button {
		border: none;
	}

	input {

		${({ theme }) => css`
			background: none;
			outline: none;
			border: none;

			color: ${theme.colors.font};
		`}



	}
`;
