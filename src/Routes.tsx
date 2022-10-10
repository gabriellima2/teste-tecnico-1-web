import { BrowserRouter, Routes, Route } from "react-router-dom";

import { DetailsPage } from "./pages/DetailsPage";
import { HomePage } from "./pages/HomePage";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/details/:id" element={<DetailsPage />} />
			</Routes>
		</BrowserRouter>
	);
};
