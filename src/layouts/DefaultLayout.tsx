import { WithChildren } from "../types";

export const DefaultLayout = ({ children }: WithChildren) => (
	<>
		<header></header>
		{children}
		<footer></footer>
	</>
);
