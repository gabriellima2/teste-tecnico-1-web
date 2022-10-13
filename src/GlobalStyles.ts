import styled, { createGlobalStyle, css } from "styled-components";

export const GlobalStyles = createGlobalStyle`
	* {
		box-sizing: border-box;
		padding: 0;
		margin: 0;
	}

	html,body {
		overflow-x: hidden;
		scroll-behavior: smooth;
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
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;

			padding: 0px ${theme.spaces[6]};
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

export const Float = styled.span`
	position: fixed;
	bottom: 24px;
	right: 32px;
	z-index: 1000;
`;

export const CenterInFullScreen = styled.div`
	width: 100%;
	height: 100vh;

	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const DefaultMain = styled.main`
	${({ theme }) => css`
		width: 100%;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		${theme["@bp3"]} {
			max-width: 1250px;
		}
	`}
`;
