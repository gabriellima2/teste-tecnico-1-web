import styled, { css } from "styled-components";

export const Container = styled.div`
	${({ theme }) => css`
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;

		padding: ${theme.spaces[8]} 0px;

		${theme["@bp2"]} {
			max-width: 600px;
		}
	`}
`;

export const Input = styled.input`
	${({ theme }) => css`
		width: 100%;

		padding: ${theme.spaces[2]} ${theme.spaces[3]};

		font-size: 0.9rem;

		border-bottom: 1px solid ${theme.colors.util};

		&:focus {
			border-bottom-color: ${theme.colors.main};
		}
	`}
`;

export const SearchButton = styled.button`
	${({ theme }) => css`
		padding: ${theme.spaces[3]};

		cursor: pointer;
		background-color: ${theme.colors.util};

		&:hover {
			transition: opacity 0.2s ease;
			opacity: 0.8;
		}
	`}
`;
