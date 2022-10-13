import { useNavigate, useParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";

import { TopButton } from "../../components/Buttons/TopButton";
import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";
import { HomeLink } from "../../components/HomeLink";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { API_URL } from "../../constants";
import type { CharacterData } from "../../types";
import type { ParamTypes } from "../../Routes";

import { DefaultMain, Float } from "../../GlobalStyles";

import { Header } from "./styles";

interface Data {
	results: CharacterData[];
}

export const SearchPage = () => {
	const navigate = useNavigate();
	const { searchValue } = useParams<ParamTypes>();

	const { data, errors, isLoading } = useFetch<Data>(
		`${API_URL}?name=${searchValue}`,
		[searchValue]
	);

	const handleSearch = (value: string) => {
		if (!value.trim()) return;

		navigate(`/search/${value}`);
	};

	if (isLoading) return <Loading />;

	if (errors)
		return (
			<Error
				withHomeLink={true}
				message="Verifique sua conexão ou tente novamente!"
			/>
		);

	return (
		<DefaultLayout>
			<Float>
				<TopButton renderTime="afterScroll" />
			</Float>
			<DefaultMain>
				<Header>
					<SearchBar handleSearch={handleSearch} />
					<HomeLink />
				</Header>

				<Characters characters={data.results} />
			</DefaultMain>
		</DefaultLayout>
	);
};
