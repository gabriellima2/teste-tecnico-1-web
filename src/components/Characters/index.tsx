import { Link } from "react-router-dom";
import { FaSkullCrossbones, FaHeartbeat, FaQuestion } from "react-icons/fa";

import { Content, Image, List, ListItem, Name, Status } from "./styles";
import { Icon } from "../Icon";

interface CharacterProps {
	id: number;
	name: string;
	status: "Dead" | "Alive" | "unknown";
	image: string;
}

const characters: CharacterProps[] = [
	{
		id: 1,
		name: "Rick Sanchez",
		status: "Alive",
		image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	},
	{
		id: 2,
		name: "Rick Sanchez",
		status: "Dead",
		image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	},
	{
		id: 3,
		name: "Rick Sanchez",
		status: "unknown",
		image: "https://rickandmortyapi.com/api/character/avatar/1.jpeg",
	},
];

const statusInfo = {
	Dead: { text: "Morto", icon: FaSkullCrossbones },
	Alive: { text: "Vivo", icon: FaHeartbeat },
	unknown: { text: "Desconhecido", icon: FaQuestion },
};

const Character = ({ status, ...props }: CharacterProps) => (
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

export const Characters = () => {
	return (
		<List>
			{characters.map((character) => (
				<Character {...character} key={character.id} />
			))}
		</List>
	);
};
