import { InfoInPortuguese } from "../../constants";
import type { CharacterDetailsData } from "../../types";

import { Container, Content, Episodes, Image, Name, Text } from "./styles";

interface TextInfoProps {
	text: {
		title: string;
		value: string;
	};
}

interface CharacterProps {
	character: CharacterDetailsData;
}

const TextInfo = ({ text }: TextInfoProps) => (
	<li>
		<Text>
			<span>{text.title}:</span> {""}
			{text.value === "unknown" ? "Sem Informações" : text.value}
		</Text>
	</li>
);

export const Character = ({ character }: CharacterProps) => {
	const textsInfo = [
		{ title: "Localização", value: character.location.name },
		{ title: "Origem", value: character.origin.name },
		{
			title: "Espécie",
			value: InfoInPortuguese.CharacterSpecies[character.species],
		},
		{
			title: "Status",
			value: InfoInPortuguese.CharacterStatus[character.status],
		},
	];

	return (
		<Container>
			<Image
				src={character.image}
				alt={`Imagem do personagem ${character.name}`}
			/>

			<Content>
				<Name>{character.name}</Name>
				<section>
					<ul>
						{textsInfo.map((text, index) => (
							<TextInfo text={text} key={index} />
						))}
					</ul>
				</section>
				<Episodes>Total de epsódios {character.episode.length}</Episodes>
			</Content>
		</Container>
	);
};
