import { useNavigate } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";
import { usePagination } from "../../hooks/usePagination";

import { PaginationButton } from "../../components/Buttons/PaginationButton";
import { TopButton } from "../../components/Buttons/TopButton";
import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import type { CharacterData } from "../../types";
import { API_URL, PAGE_INITIAL, PAGE_LIMIT } from "../../constants";

import { Header } from "./styles";
import { DefaultMain, Float } from "../../GlobalStyles";

interface Data {
	results: CharacterData[];
}

export const HomePage = () => {
	const navigate = useNavigate();
	const { currentPage, handlePageChange } = usePagination(PAGE_LIMIT);
	const { data, isLoading, errors } = useFetch<Data>(
		`${API_URL}?page=${currentPage}`,
		[currentPage]
	);

	const handleSearch = (value: string) => {
		if (!value.trim()) return;

		navigate(`/search/${value}`);
	};

	if (isLoading) return <Loading />;

	if (errors) return <Error />;

	return (
		<DefaultLayout>
			<Float>
				<TopButton renderTime="afterScroll" />
			</Float>
			<DefaultMain>
				<Header>
					<SearchBar handleSearch={handleSearch} />
				</Header>

				<Characters characters={data.results} />

				<PaginationButton
					currentPage={currentPage}
					pageInitial={PAGE_INITIAL}
					pageLimit={PAGE_LIMIT}
					handleClick={handlePageChange}
				/>
			</DefaultMain>
		</DefaultLayout>
	);
};
