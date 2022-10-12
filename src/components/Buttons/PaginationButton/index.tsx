import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

import { Icon } from "../../Icon";

import type { ActionPagination } from "../../../types";
import { scrollToTop } from "../../../utils/scrollToTop";

import { Button, Container } from "./styles";

interface ButtonDefaultProps {
	currentPage: number;
	pageInitial: number;
	pageLimit: number;
	handleClick: (action: ActionPagination) => void;
}

interface PaginationButtonProps extends ButtonDefaultProps {}

const NextButton = (props: ButtonDefaultProps) => (
	<Button
		type="button"
		disabled={props.currentPage === props.pageLimit}
		onClick={() => {
			scrollToTop();
			props.handleClick("next");
		}}
	>
		<Icon icon={FaArrowRight} ariaLabel="Seta para Direita" />
	</Button>
);

const PrevButton = (props: ButtonDefaultProps) => (
	<Button
		type="button"
		disabled={props.currentPage === props.pageInitial}
		onClick={() => props.handleClick("prev")}
	>
		<Icon icon={FaArrowLeft} ariaLabel="Seta para Esquerda" />
	</Button>
);

export const PaginationButton = (props: PaginationButtonProps) => {
	return (
		<Container>
			<PrevButton {...props} />
			<NextButton {...props} />
		</Container>
	);
};
