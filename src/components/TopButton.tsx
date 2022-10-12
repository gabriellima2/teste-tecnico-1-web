import { FaArrowUp } from "react-icons/fa";
import styled, { css } from "styled-components";

import { Icon } from "./Icon";
import { RenderAfterScroll } from "../HOC/RenderAfterScroll";

interface TopButtonProps {
	renderTime?: "afterScroll" | "default";
}

const Container = styled.button`
	${({ theme }) => css`
		padding: ${theme.spaces[3]};
		border-radius: 100%;

		font-size: ${theme.fontSizes[1]};

		cursor: pointer;
		background-color: ${theme.colors.main};
	`}
`;

const Button = () => (
	<Container
		type="button"
		title="Voltar para o topo"
		onClick={() => {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		}}
	>
		<Icon icon={FaArrowUp} ariaLabel="Seta apontando para cima" />
	</Container>
);

export const TopButton = ({ renderTime }: TopButtonProps) => {
	return (
		<>
			{renderTime === "afterScroll" ? (
				<RenderAfterScroll>
					<Button />
				</RenderAfterScroll>
			) : (
				<Button />
			)}
		</>
	);
};

const defaultProps: TopButtonProps = {
	renderTime: "default",
};

TopButton.defaultProps = defaultProps;
