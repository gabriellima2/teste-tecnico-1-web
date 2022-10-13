import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const MyLink = styled(Link)`
	${({ theme }) => css`
		border-radius: 8px;
		padding: ${theme.spaces[3]} ${theme.spaces[4]};
		margin-top: ${theme.spaces[5]};
		background-color: ${theme.colors.util};

		transition: opacity 0.2s ease;

		&:hover {
			opacity: 0.7;
		}
	`}
`;

export const HomeLink = () => <MyLink to="/">Início</MyLink>;
