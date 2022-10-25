import type { ReactNode } from "react";
import { CenterInFullScreen } from "../GlobalStyles";

interface ErrorProps {
	message?: string;
	children?: ReactNode;
}

export const Error = ({ children, ...props }: ErrorProps) => (
	<CenterInFullScreen>
		<p>{props.message}</p>
		{children}
	</CenterInFullScreen>
);

const defaultProps: Pick<ErrorProps, "message"> = {
	message: "Houve algum erro! Tente novamente",
};

Error.defaultProps = defaultProps;
