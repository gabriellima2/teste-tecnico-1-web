import { KeyboardEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";

import { Icon } from "../Icon";

import { Container, Input, SearchIcon } from "./styles";

interface SearchBarProps {
	handleSearch: (value: string) => void;
}

export const SearchBar = (props: SearchBarProps) => {
	const [searchValue, setSearchValue] = useState("");

	const handleKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>) => {
		if (key !== "Enter") return;

		props.handleSearch(searchValue);
	};

	return (
		<Container>
			<label style={{ width: "100%" }}>
				<Input
					type="text"
					name="valueSearch"
					id="valueSearch"
					placeholder="Faça alguma pesquisa..."
					value={searchValue}
					onChange={(e) => setSearchValue(e.target.value)}
					onKeyDown={handleKeyDown}
				/>
			</label>
			<SearchIcon onClick={() => props.handleSearch(searchValue)}>
				<Icon ariaLabel="Icone de pesquisar" icon={FaSearch} />
			</SearchIcon>
		</Container>
	);
};
