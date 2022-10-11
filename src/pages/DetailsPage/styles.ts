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

export const Image = styled.img`
	${({ theme }) => css`
		width: 100%;
		max-width: 240px;
		border-radius: 100%;

		${theme["@bp1"]} {
			width: auto;
			max-width: none;
		}
	`}
`;

export const Name = styled.h1`
	${({ theme }) => css`
		font-size: ${theme.fontSizes[5]};
		text-align: center;

		&::after {
			content: "";
			display: block;

			width: 100%;
			height: 3px;

			margin-top: ${theme.spaces[3]};
			border-radius: 4px;

			background-color: ${theme.colors.util};

			${theme["@bp2"]} {
				margin-top: ${theme.spaces[4]};
			}
		}

		${theme["@bp1"]} {
			font-size: ${theme.fontSizes[7]};
		}
	`}
`;

export const Content = styled.section`
	${({ theme }) => css`
		width: 100%;
		align-self: flex-start;

		display: flex;
		flex-direction: column;
		gap: ${theme.spaces[6]};
	`}
`;

export const Text = styled.p`
	${({ theme }) => css`
		font-weight: 500;
		margin-bottom: ${theme.spaces[1]};

		& > span {
			font-weight: 300;
			font-size: 0.9rem;
		}
	`}
`;

export const Episodes = styled(Text)`
	${({ theme }) => css`
		width: 100%;
		text-align: center;

		padding: ${theme.spaces[4]};
		border-radius: 8px;

		background-color: ${theme.colors.util};
	`}
`;
