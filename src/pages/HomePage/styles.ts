import styled, { css } from "styled-components";

export const Header = styled.header`
	width: 100%;
`;

export const Main = styled.main`
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
