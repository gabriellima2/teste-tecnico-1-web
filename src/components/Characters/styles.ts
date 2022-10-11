import styled, { css } from "styled-components";

export const List = styled.ul`
	${({ theme }) => css`
		width: 100%;

		display: flex;
		justify-content: center;
		align-items: center;
		flex-wrap: wrap;

		gap: ${theme.spaces[4]};
	`}
`;

export const ListItem = styled.li`
	position: relative;
	border: "1px solid transparent";

	&:hover {
		border-color: #fff;
	}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const Image = styled.img`
	${({ theme }) => css`
		max-width: 200px;
		max-height: 210px;

		${theme["@bp1"]} {
			max-width: none;
			max-height: none;
		}
	`}
`;

export const Name = styled.p`
	${({ theme }) => css`
		width: 100%;

		padding: ${theme.spaces[3]};
		background-color: ${theme.colors.util};
	`}
`;

export const Status = styled.span`
	${({ theme }) => css`
		width: 100%;

		position: absolute;
		top: 0;

		display: flex;
		align-items: center;
		justify-content: flex-end;

		font-size: 0.8rem;
		letter-spacing: 0.4px;
		font-weight: 300;

		padding: ${theme.spaces[2]};

		background-color: ${theme.colors.util}ab;

		i {
			font-size: ${theme.fontSizes[1]};
			margin-left: ${theme.spaces[1]};
		}

		${theme["@bp2"]} {
			i {
				font-size: ${theme.fontSizes[2]};
			}
		}
	`}
`;
