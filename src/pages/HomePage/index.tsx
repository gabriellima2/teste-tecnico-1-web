import { Characters } from "../../components/Characters";
import { SearchBar } from "../../components/SearchBar";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { Main } from "./styles";

export const HomePage = () => {
	return (
		<DefaultLayout>
			<Main>
				<SearchBar />
				<Characters />
			</Main>
		</DefaultLayout>
	);
};
