import styled, { css } from "styled-components";

export const Header = styled.header`
	width: 100%;
`;

export const Main = styled.main`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		${theme["@bp3"]} {
			max-width: 1400px;
		}
	`}
`;
