import { useFetch } from "./useFetch";

import { API_URL } from "../constants";
import type { CharacterDetailsData, CharactersResponse } from "../types";

function ByName(characterName: string) {
	const response = useFetch<CharactersResponse>(
		`${API_URL}?name=${characterName}`,
		[characterName]
	);

	return { ...response };
}

function ById(characterId: string) {
	const response = useFetch<CharacterDetailsData>(
		`${API_URL}${characterId}`,
		[]
	);

	return { ...response };
}

export const useSpecificCharacter = { ByName, ById };
