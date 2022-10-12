import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: ${theme.spaces[8]} 0px;
	`}
`;

export const Input = styled.input`
	${({ theme }) => css`
		width: 100%;
		height: 40px;

		padding: ${theme.spaces[4]};

		font-size: 0.9rem;

		border-top-left-radius: 16px;
		border-bottom-left-radius: 16px;
		border: 2px solid ${theme.colors.util};

		&:focus {
			border-color: ${theme.colors.main};
		}

		${theme["@bp1"]} {
			height: 52px;

			font-size: ${theme.fontSizes[1]};
		}
	`}
`;

export const SearchIcon = styled.span`
	${({ theme }) => css`
		height: 40px;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: 0px ${theme.spaces[4]};

		border-top-right-radius: 16px;
		border-bottom-right-radius: 16px;

		background-color: ${theme.colors.util};

		${theme["@bp1"]} {
			height: 52px;
			padding: 0px ${theme.spaces[6]};
		}
	`}
`;
