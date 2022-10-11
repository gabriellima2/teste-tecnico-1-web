import styled, { css } from "styled-components";

const Container = styled.footer`
	${({ theme }) => css`
		width: 100vw;

		padding: ${theme.spaces[4]};
		margin-top: ${theme.spaces[10]};

		text-align: center;

		background-color: ${theme.colors.util};
	`}
`;

const Author = styled.small`
	font-weight: 500;
`;

export const Footer = () => (
	<Container>
		<Author>Gabriel - {new Date().getFullYear()}</Author>
	</Container>
);
