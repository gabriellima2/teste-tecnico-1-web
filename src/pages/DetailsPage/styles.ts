import styled, { css } from "styled-components";

export const MainDetails = styled.main`
	${({ theme }) => css`
		height: 100vh;

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		gap: ${theme.spaces[6]};
	`}
`;
