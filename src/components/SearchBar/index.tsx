import { FaSearch } from "react-icons/fa";

import { Icon } from "../Icon";

import { Container, Input, SearchButton } from "./styles";

interface SearchBarProps {
	value: string;
	updateValue: (newValue: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
	return (
		<Container>
			<label style={{ width: "100%" }}>
				<Input
					type="text"
					name="valueSearch"
					id="valueSearch"
					placeholder="Faça alguma pesquisa..."
					value={props.value}
					onChange={(e) => props.updateValue(e.target.value)}
				/>
			</label>
			<SearchButton type="button">
				<Icon ariaLabel="Icone de pesquisar" icon={FaSearch} />
			</SearchButton>
		</Container>
	);
};
