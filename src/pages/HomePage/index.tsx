import { Characters } from "../../components/Characters";
import { Filters } from "../../components/Filters";
import { SearchBar } from "../../components/SearchBar";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { Main } from "./styles";

export const HomePage = () => {
	return (
		<DefaultLayout>
			<Main>
				<SearchBar />
				<Filters />
				<Characters />
			</Main>
		</DefaultLayout>
	);
};
