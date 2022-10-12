import { CustomizedLayout } from "../../layouts/CustomizedLayout";

import { CenterInFullScreen } from "../../GlobalStyles";
import { HomeLink, Title } from "./styles";

export const NotFoundPage = () => (
	<CustomizedLayout>
		<CenterInFullScreen>
			<Title>Desculpe, página não encontrada 😞</Title>

			<HomeLink to="/1">Início</HomeLink>
		</CenterInFullScreen>
	</CustomizedLayout>
);
