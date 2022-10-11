import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";

import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import type { CharacterData } from "../../types";
import { Main } from "./styles";

interface Data {
	results: CharacterData[];
}

function searchByName(characters: CharacterData[], name: string) {
	return characters.filter((character) =>
		character.name.toLocaleLowerCase().includes(name)
	);
}

export const HomePage = () => {
	const [searchValue, setSearchValue] = useState("");
	const { data, isLoading, errors } = useFetch<Data>(
		"https://rickandmortyapi.com/api/character/",
		[]
	);

	if (isLoading) return <p>Carregando...</p>;

	if (errors) return <p>Ocorreu um erro!</p>;

	const dataFiltered: CharacterData[] = searchValue
		? searchByName(data.results, searchValue)
		: [];

	return (
		<DefaultLayout>
			<Main>
				<header>
					<SearchBar value={searchValue} updateValue={setSearchValue} />
				</header>

				<section>
					<Characters characters={searchValue ? dataFiltered : data.results} />
				</section>
			</Main>
		</DefaultLayout>
	);
};
