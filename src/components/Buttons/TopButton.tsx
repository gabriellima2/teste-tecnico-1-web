import { FaArrowUp } from "react-icons/fa";
import styled, { css } from "styled-components";

import { Icon } from "../Icon";
import { RenderAfterScroll } from "../../HOC/RenderAfterScroll";

import { scrollToTop } from "../../utils/scrollToTop";
import { FloatElement } from "../../GlobalStyles";

const Container = styled.button`
	${({ theme }) => css`
		padding: ${theme.spaces[3]};
		border-radius: 100%;

		font-size: ${theme.fontSizes[1]};

		cursor: pointer;
		background-color: ${theme.colors.main};
	`}
`;

const Default = () => (
	<Container type="button" title="Voltar para o topo" onClick={scrollToTop}>
		<Icon icon={FaArrowUp} ariaLabel="Seta apontando para cima" />
	</Container>
);

const AfterScroll = () => (
	<RenderAfterScroll>
		<Default />
	</RenderAfterScroll>
);

const Float = () => (
	<FloatElement>
		<AfterScroll />
	</FloatElement>
);

export const TopButton = { Default, AfterScroll, Float };
