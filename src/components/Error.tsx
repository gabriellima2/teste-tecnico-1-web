import { CenterInFullScreen } from "../GlobalStyles";

interface ErrorProps {
	message?: string;
}

export const Error = ({ message }: ErrorProps) => (
	<CenterInFullScreen>
		<p>{message}</p>
	</CenterInFullScreen>
);

const defaultProps: ErrorProps = {
	message: "Houve algum erro! Tente novamente",
};

Error.defaultProps = defaultProps;
