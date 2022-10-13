import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { DetailsPage } from "./pages/DetailsPage";
import { HomePage } from "./pages/HomePage";
import { SearchPage } from "./pages/SearchPage";

export type ParamTypes = {
	id: string;
	searchValue: string;
};

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<Navigate to="/1" />} />
				<Route path="/:page" element={<HomePage />} />
				<Route path="/details/:id" element={<DetailsPage />} />
				<Route path="/search/:searchValue" element={<SearchPage />} />
			</Routes>
		</BrowserRouter>
	);
};
