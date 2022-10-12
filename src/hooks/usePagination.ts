import { useNavigate, useParams } from "react-router-dom";

import type { ActionPagination } from "../types";

export function usePagination(limit: number) {
	const currentPage = Number(useParams().page);
	const navigate = useNavigate();

	const handlePageChange = (action: ActionPagination) => {
		if (currentPage === limit) return;

		if (action === "next") return navigate(`/${currentPage + 1}`);

		navigate(`/${currentPage - 1}`);
	};

	return {
		currentPage,
		handlePageChange,
	};
}
