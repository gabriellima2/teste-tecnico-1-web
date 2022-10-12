import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import { NotFoundPage } from "./pages/NotFoundPage";
import { DetailsPage } from "./pages/DetailsPage";
import { HomePage } from "./pages/HomePage";

export const AppRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<NotFoundPage />} />
				<Route path="/" element={<Navigate to="/1" />} />
				<Route path="/:page" element={<HomePage />} />
				<Route path="/:page/details/:id" element={<DetailsPage />} />
			</Routes>
		</BrowserRouter>
	);
};
