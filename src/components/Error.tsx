import { HomeLink } from "./HomeLink";
import { CenterInFullScreen } from "../GlobalStyles";

interface ErrorProps {
	message?: string;
	withHomeLink?: boolean;
}

export const Error = ({ withHomeLink, ...props }: ErrorProps) => (
	<CenterInFullScreen>
		<p>{props.message}</p>
		{withHomeLink && <HomeLink />}
	</CenterInFullScreen>
);

const defaultProps: ErrorProps = {
	message: "Houve algum erro! Tente novamente",
};

Error.defaultProps = defaultProps;
