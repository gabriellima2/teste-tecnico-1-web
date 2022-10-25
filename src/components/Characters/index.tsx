import { FaSkullCrossbones, FaHeartbeat, FaQuestion } from "react-icons/fa";

import { Icon } from "../Icon";

import { InfoInPortuguese } from "../../constants";
import type { CharacterData } from "../../types";

import {
	Content,
	Image,
	List,
	ListItem,
	ItemLink,
	Name,
	Status,
} from "./styles";

interface CharactersProps {
	characters: CharacterData[];
}

const statusInfo = {
	Dead: {
		text: InfoInPortuguese.CharacterStatus.Dead,
		icon: FaSkullCrossbones,
	},
	Alive: { text: InfoInPortuguese.CharacterStatus.Alive, icon: FaHeartbeat },
	unknown: { text: InfoInPortuguese.CharacterStatus.unknown, icon: FaQuestion },
};

const Character = ({ status, ...props }: CharacterData) => (
	<ListItem>
		<ItemLink to={`/details/${props.id}`}>
			<Content>
				<Status>
					{statusInfo[status].text}
					<Icon
						icon={statusInfo[status].icon}
						ariaLabel="Icone que representa o paradeiro do personagem"
					/>
				</Status>
				<Image src={props.image} alt={`Imagem do personagem ${props.name}`} />

				<Name>{props.name}</Name>
			</Content>
		</ItemLink>
	</ListItem>
);

export const Characters = ({ characters }: CharactersProps) => {
	return (
		<section
			aria-live="polite"
			aria-atomic="true"
			style={{ minHeight: "100vh" }}
		>
			<List>
				{characters.map((character) => (
					<Character {...character} key={character.id} />
				))}
			</List>
		</section>
	);
};
