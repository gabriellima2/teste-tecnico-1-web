import { ReactNode } from "react";

export type WithChildren<T = unknown> = {
	children: ReactNode;
} & T;

export interface Option {
	value: string;
	text: string;
}
