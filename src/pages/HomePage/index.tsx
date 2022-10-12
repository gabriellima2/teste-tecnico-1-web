import { useState } from "react";

import { useFetch } from "../../hooks/useFetch";

import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { TopButton } from "../../components/TopButton";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import type { CharacterData } from "../../types";
import { API_URL } from "../../constants";

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
	const [searchValue, setSearchValue] = useState("");
	const { data, isLoading, errors } = useFetch<Data>(API_URL, []);

	if (isLoading) return <Loading />;

	if (errors) return <Error />;

	const dataFiltered: CharacterData[] = searchValue
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
					<Characters characters={searchValue ? dataFiltered : data.results} />
				</section>
			</Main>
		</DefaultLayout>
	);
};
