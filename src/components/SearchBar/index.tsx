import { FaSearch } from "react-icons/fa";

import { Icon } from "../Icon";

import { Container, Input, SearchButton } from "./styles";

export const SearchBar = () => {
	return (
		<Container>
			<label style={{ width: "100%" }}>
				<Input
					type="text"
					name=""
					id="valueSearch"
					placeholder="Faça alguma pesquisa..."
				/>
			</label>
			<SearchButton type="button">
				<Icon aria-label="Icone de pesquisar" icon={FaSearch} />
			</SearchButton>
		</Container>
	);
};
