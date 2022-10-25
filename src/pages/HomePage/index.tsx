import { useCharacters } from "../../hooks/useCharacters";

import { PaginationButton } from "../../components/Buttons/PaginationButton";
import { TopButton } from "../../components/Buttons/TopButton";
import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { PAGE_INITIAL, PAGE_LIMIT } from "../../constants";

import { Header } from "./styles";
import { DefaultMain } from "../../GlobalStyles";

export const HomePage = () => {
	const { data, errors, isLoading, currentPage, changeCurrentPage } =
		useCharacters();

	if (isLoading) return <Loading />;

	if (errors) return <Error />;

	return (
		<DefaultLayout>
			<TopButton.Float />
			<DefaultMain>
				<Header>
					<SearchBar />
				</Header>

				<Characters characters={data.results} />

				<PaginationButton
					currentPage={currentPage}
					pageInitial={PAGE_INITIAL}
					pageLimit={PAGE_LIMIT}
					handleClick={changeCurrentPage}
				/>
			</DefaultMain>
		</DefaultLayout>
	);
};
