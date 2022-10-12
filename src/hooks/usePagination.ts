import { useNavigate, useParams } from "react-router-dom";

import type { ActionPagination } from "../types";

export function usePagination(limit: number) {
	let currentPage = Number(useParams().page);
	const navigate = useNavigate();

	if (isNaN(currentPage)) {
		currentPage = 1;
	}

	const handlePageChange = (action: ActionPagination) => {
		if (typeof currentPage !== "number") return navigate("/1");

		if (currentPage === limit) return;

		if (action === "next") return navigate(`/${currentPage + 1}`);

		navigate(`/${currentPage - 1}`);
	};

	return {
		currentPage,
		handlePageChange,
	};
}
