import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

import { DefaultLayout } from "../../layouts/DefaultLayout";
import { CharacterDetailsData } from "../../types";

export const DetailsPage = () => {
	const { id } = useParams();
	const { data, errors, isLoading } = useFetch<CharacterDetailsData>(
		`https://rickandmortyapi.com/api/character/${id}`
	);

	if (isLoading) return <p>Carregando...</p>;

	if (errors) return <p>Ocorreu um erro!</p>;

	return (
		<DefaultLayout>
			<main>
				<img src={data.image} alt={`Imagem do personagem ${data.name}`} />

				<section>
					<h1>{data.name}</h1>
					<div>
						<p>
							Origem:
							{data.origin.name !== "unknown"
								? data.origin.name
								: "Desconhecida"}
						</p>
						<p>
							Localização:
							{data.location.name !== "unknown"
								? data.location.name
								: "Desconhecida"}
						</p>
					</div>
					<p>Número de epsódios {data.episode.length}</p>
				</section>
			</main>
		</DefaultLayout>
	);
};
