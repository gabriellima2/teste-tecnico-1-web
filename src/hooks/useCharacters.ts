import { useFetch } from "./useFetch";
import { usePagination } from "./usePagination";

import { API_URL, PAGE_LIMIT } from "../constants";
import type { CharactersResponse } from "../types";

export function useCharacters() {
	const { currentPage, handlePageChange } = usePagination(PAGE_LIMIT);
	const { data, isLoading, errors } = useFetch<CharactersResponse>(
		`${API_URL}?page=${currentPage}`,
		[currentPage]
	);

	return {
		data,
		isLoading,
		errors,
		currentPage,
		changeCurrentPage: handlePageChange,
	};
}
