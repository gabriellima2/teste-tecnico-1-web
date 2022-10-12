import { useEffect, useState } from "react";

import { WithChildren } from "../types";

export const RenderAfterScroll = ({ children }: WithChildren) => {
	const [isScrolling, setIsScrolling] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;

			if (scrollY < 10) return setIsScrolling(false);

			setIsScrolling(true);
		};

		window.addEventListener("scroll", handleScroll);

		return () => removeEventListener("scroll", handleScroll);
	}, []);

	if (!isScrolling) return null;

	return <>{children}</>;
};
