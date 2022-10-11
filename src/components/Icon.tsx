import React from "react";
import type { IconType } from "react-icons";
import styled from "styled-components";

interface IconProps {
	icon: IconType;
	style?: React.CSSProperties;
	ariaLabel: string;
}

const Container = styled.i`
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Icon = ({ icon, ...props }: IconProps) => (
	<Container aria-label={props.ariaLabel} style={props.style}>
		{React.createElement(icon, null)}
	</Container>
);
