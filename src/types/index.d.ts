import { ReactNode } from "react";

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;

export interface Option {
	value: string;
	display: string;
}

export interface CharacterData {
	id: number;
	name: string;
	status: "Dead" | "Alive" | "unknown";
	species: "Human" | "Alien";
	image: string;
}

export interface CharacterDetailsData extends CharacterData {
	origin: {
		name: string;
	};
	location: {
		name: string;
	};
	episode: [string];
}
