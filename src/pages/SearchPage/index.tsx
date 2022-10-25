import { useParams } from "react-router-dom";

import { useSpecificCharacter } from "../../hooks/useSpecificCharacter";

import { TopButton } from "../../components/Buttons/TopButton";
import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { HomeLink } from "../../components/HomeLink";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import type { ParamTypes } from "../../Routes";

import { DefaultMain } from "../../GlobalStyles";
import { Header } from "./styles";

export const SearchPage = () => {
	const { searchValue } = useParams<ParamTypes>();
	const { data, errors, isLoading } = useSpecificCharacter.ByName(
		searchValue || ""
	);

	if (isLoading) return <Loading />;

	if (errors)
		return (
			<Error message="Verifique sua conexão ou tente novamente!">
				<HomeLink />
			</Error>
		);

	return (
		<DefaultLayout>
			<TopButton.Float />
			<DefaultMain>
				<Header>
					<SearchBar />
					<HomeLink />
				</Header>

				<Characters characters={data.results} />
			</DefaultMain>
		</DefaultLayout>
	);
};
