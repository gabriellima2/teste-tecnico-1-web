import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const List = styled.ul`
	${({ theme }) => css`
		width: 100%;

		display: flex;
		align-items: center;
		justify-content: center;
		flex-wrap: wrap;

		gap: ${theme.spaces[4]};

		${theme["@bp1"]} {
			display: grid;
			grid-template-columns: repeat(2, 1fr);
			grid-template-rows: auto;
		}

		${theme["@bp3"]} {
			grid-template-columns: repeat(3, 1fr);
		}

		${theme["@bp4"]} {
			grid-template-columns: repeat(4, 1fr);
		}
	`}
`;

export const ListItem = styled.li`
	${({ theme }) => css`
		width: 100%;
		max-width: 220px;

		position: relative;
		border: "1px solid transparent";

		${theme["@bp1"]} {
			max-width: none;
		}
	`}
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
`;

export const ItemLink = styled(Link)`
	&::after {
		content: "";
		display: block;

		width: 100%;
		height: 100%;

		position: absolute;
		top: 0;
		left: 0;

		background: transparent;
		transition: background 0.4s ease;
	}

	&:hover::after,
	&:focus::after {
		background: rgba(0, 0, 0, 0.2);
	}
`;

export const Image = styled.img`
	width: 100%;
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
