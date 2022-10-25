import { KeyboardEvent, useState } from "react";
import { FaSearch } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { Icon } from "../Icon";

import { Container, Input, SearchIcon } from "./styles";

export const SearchBar = () => {
	const [searchValue, setSearchValue] = useState("");
	const navigate = useNavigate();

	const handleSearch = (searchValue: string) => {
		if (!searchValue.trim()) return;

		navigate(`/search/${searchValue}`);
	};

	const handleKeyDown = ({ key }: KeyboardEvent<HTMLInputElement>) => {
		if (key !== "Enter") return;

		handleSearch(searchValue);
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
			<SearchIcon onClick={() => handleSearch(searchValue)}>
				<Icon ariaLabel="Icone de pesquisar" icon={FaSearch} />
			</SearchIcon>
		</Container>
	);
};
