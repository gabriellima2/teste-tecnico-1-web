import { Footer } from "../components/Footer";

import { WithChildren } from "../types";

export const DefaultLayout = ({ children }: WithChildren) => (
	<>
		{children}
		<Footer />
	</>
);
