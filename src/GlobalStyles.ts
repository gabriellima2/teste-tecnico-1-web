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
`;
