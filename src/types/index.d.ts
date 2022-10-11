import { ReactNode } from "react";

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;

export interface Option {
	value: string;
	text: string;
}

export interface CharacterData {
	id: number;
	name: string;
	status: "Dead" | "Alive" | "unknown";
	image: string;
}
