import { useFetch } from "../../hooks/useFetch";

import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { Filters } from "../../components/Filters";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import type { CharacterData } from "../../types";
import { Main } from "./styles";

interface Data {
	results: CharacterData[];
}

export const HomePage = () => {
	const { data, isLoading, errors } = useFetch<Data>(
		"https://rickandmortyapi.com/api/character/"
	);

	if (isLoading) return <p>Carregando...</p>;

	if (errors) return <p>Ocorreu um erro!</p>;

	return (
		<DefaultLayout>
			<Main>
				<header>
					<SearchBar />
					<Filters />
				</header>

				<section>
					<Characters characters={data.results} />
				</section>
			</Main>
		</DefaultLayout>
	);
};
