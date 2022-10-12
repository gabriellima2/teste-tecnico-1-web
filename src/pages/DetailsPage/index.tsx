import { useParams } from "react-router-dom";

import { useFetch } from "../../hooks/useFetch";

import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import { CustomizedLayout } from "../../layouts/CustomizedLayout";

import {
	API_URL,
	SpecieInfoInPortuguese,
	StatusInfoInPortuguese,
} from "../../constants";
import type { CharacterDetailsData } from "../../types";

import { MainDetails, Content, Episodes, Image, Name, Text } from "./styles";

export const DetailsPage = () => {
	const { id } = useParams();
	const { data, errors, isLoading } = useFetch<CharacterDetailsData>(
		`${API_URL}${id}`,
		[]
	);

	if (isLoading) return <Loading />;

	if (errors) return <Error />;

	const textsInfo = [
		{ title: "Localização", value: data.location.name },
		{ title: "Origem", value: data.origin.name },
		{ title: "Espécie", value: SpecieInfoInPortuguese[data.species] },
		{ title: "Status", value: StatusInfoInPortuguese[data.status] },
	];

	return (
		<CustomizedLayout>
			<MainDetails>
				<Image src={data.image} alt={`Imagem do personagem ${data.name}`} />

				<Content>
					<Name>{data.name}</Name>
					<section>
						<ul>
							{textsInfo.map((text, index) => (
								<li key={index}>
									<Text>
										<span>{text.title}:</span> {""}
										{text.value === "unknown" ? "Sem Informações" : text.value}
									</Text>
								</li>
							))}
						</ul>
					</section>
					<Episodes>Total de epsódios {data.episode.length}</Episodes>
				</Content>
			</MainDetails>
		</CustomizedLayout>
	);
};
