import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

export const Title = styled.h1`
	text-align: center;
`;

export const HomeLink = styled(Link)`
	${({ theme }) => css`
		padding: ${theme.spaces[3]} ${theme.spaces[5]};
		border-radius: 8px;
		margin-top: ${theme.spaces[10]};

		font-size: ${theme.fontSizes[2]};
		font-weight: 500;

		background-color: ${theme.colors.main};
		transition: all 0.3s ease;

		&:hover {
			opacity: 0.8;
		}
	`}
`;
