import styled, { css } from "styled-components";

export const Main = styled.main`
	${({ theme }) => css`
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		${theme["@bp4"]} {
			max-width: 90%;
		}
	`}
`;
