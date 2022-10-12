import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";

import { PaginationButton } from "../../components/Buttons/PaginationButton";
import { TopButton } from "../../components/Buttons/TopButton";
import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import type { ActionPagination, CharacterData } from "../../types";
import { API_URL, PAGE_INITIAL } from "../../constants";

import { Main, Header } from "./styles";
import { Float } from "../../GlobalStyles";

interface Data {
	results: CharacterData[];
}

function searchByName(characters: CharacterData[], name: string) {
	return characters.filter((character) =>
		character.name.toLocaleLowerCase().includes(name)
	);
}

export const HomePage = () => {
	const [currentPage, setCurrentPage] = useState(PAGE_INITIAL);
	const [searchValue, setSearchValue] = useState("");
	const { data, isLoading, errors } = useFetch<Data>(
		`${API_URL}?page=${currentPage}`,
		[currentPage]
	);

	if (isLoading) return <Loading />;

	if (errors) return <Error />;

	const handleChangePage = (action: ActionPagination) => {
		if (action === "next") return setCurrentPage((prevState) => prevState + 1);

		setCurrentPage((prevState) => prevState - 1);
	};

	const filteredData: CharacterData[] = searchValue
		? searchByName(data.results, searchValue)
		: [];

	return (
		<DefaultLayout>
			<Float>
				<TopButton renderTime="afterScroll" />
			</Float>
			<Main>
				<Header>
					<SearchBar value={searchValue} updateValue={setSearchValue} />
				</Header>

				<section
					aria-live="polite"
					aria-atomic="true"
					style={{ minHeight: "100vh" }}
				>
					<Characters characters={searchValue ? filteredData : data.results} />
				</section>

				{!searchValue && (
					<PaginationButton
						currentPage={currentPage}
						pageInitial={PAGE_INITIAL}
						pageLimit={20}
						handleClick={handleChangePage}
					/>
				)}
			</Main>
		</DefaultLayout>
	);
};
