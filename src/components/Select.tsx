import styled from "styled-components";
import { Option } from "../types";

interface SelectProps {
	options: Option[];
	id: string;
	name: string;
	label: string;
}

const Container = styled.div`
	display: flex;
	flex-direction: column;
`;

export const Select = ({ options, ...props }: SelectProps) => {
	return (
		<Container>
			<label htmlFor={props.id}>{props.label}</label>
			<select name={props.name} id={props.id}>
				<option selected value="all">
					Todos
				</option>
				{options.map(({ text, ...option }, index) => (
					<option {...option} key={index}>
						{text}
					</option>
				))}
			</select>
		</Container>
	);
};
