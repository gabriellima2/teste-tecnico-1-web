import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: space-between;

		margin-top: ${theme.spaces[10]};
	`}
`;

export const Button = styled.button`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[2]};

		padding: ${theme.spaces[3]} ${theme.spaces[7]};
		border-radius: 12px;

		cursor: pointer;
		background-color: ${theme.colors.util};

		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.7;
		}

		&:disabled {
			opacity: 0.5;
			pointer-events: none;
			background-color: ${theme.colors.background};
		}
	`}
`;
