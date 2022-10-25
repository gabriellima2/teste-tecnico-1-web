enum CharacterStatus {
	Alive = "Vivo",
	Dead = "Morto",
	unknown = "Desconhecido",
}

enum CharacterSpecies {
	Human = "Humano",
	Alien = "Alien",
	unknown = "Desconhecida",
}

export const InfoInPortuguese = { CharacterStatus, CharacterSpecies };

export const API_URL = "https://rickandmortyapi.com/api/character/";

export const PAGE_INITIAL = 1;

export const PAGE_LIMIT = 30;
