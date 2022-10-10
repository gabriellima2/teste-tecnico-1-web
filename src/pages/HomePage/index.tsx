import { Characters } from "../../components/Characters";

import { DefaultLayout } from "../../layouts/DefaultLayout";

import { Main } from "./styles";

export const HomePage = () => {
	return (
		<DefaultLayout>
			<Main>
				<Characters />
			</Main>
		</DefaultLayout>
	);
};
