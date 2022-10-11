import { Link } from "react-router-dom";
import { FaSkullCrossbones, FaHeartbeat, FaQuestion } from "react-icons/fa";

import { Icon } from "../Icon";

import type { CharacterData } from "../../types";
import { Content, Image, List, ListItem, Name, Status } from "./styles";

interface CharactersProps {
	characters: CharacterData[];
}

const statusInfo = {
	Dead: { text: "Morto", icon: FaSkullCrossbones },
	Alive: { text: "Vivo", icon: FaHeartbeat },
	unknown: { text: "Desconhecido", icon: FaQuestion },
};

export const Character = ({ status, ...props }: CharacterData) => (
	<ListItem>
		<Link to={`details/${props.id}`}>
			<Content>
				<Status>
					{statusInfo[status].text}
					<Icon
						icon={statusInfo[status].icon}
						aria-label="Icone que representa o paradeiro do personagem"
					/>
				</Status>
				<Image src={props.image} alt={`Imagem do personagem ${props.name}`} />

				<Name>{props.name}</Name>
			</Content>
		</Link>
	</ListItem>
);

export const Characters = ({ characters }: CharactersProps) => {
	return (
		<List>
			{characters.map((character) => (
				<Character {...character} key={character.id} />
			))}
		</List>
	);
};
