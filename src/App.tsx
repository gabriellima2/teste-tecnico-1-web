import { ThemeProvider } from "styled-components";

import { AppRoutes } from "./Routes";
import { GlobalStyles } from "./GlobalStyles";

import { themes } from "./themes";

function App() {
	return (
		<ThemeProvider theme={themes}>
			<GlobalStyles />
			<AppRoutes />
		</ThemeProvider>
	);
}

export default App;
