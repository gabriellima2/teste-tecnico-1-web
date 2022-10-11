import styled from "styled-components";
import { Select } from "./Select";

const states = [
	{
		value: "Alive",
		text: "Vivo",
	},
	{
		value: "Dead",
		text: "Morto",
	},
	{
		value: "unknown",
		text: "Desconhecido",
	},
];

const species = [
	{
		value: "Human",
		text: "Humano",
	},
	{
		value: "Alien",
		text: "Alien",
	},
];

const genders = [
	{
		value: "Male",
		text: "Masculino",
	},
	{
		value: "Female",
		text: "Feminino",
	},
];

const Container = styled.section`
	display: flex;
	gap: 16px;
`;

export const Filters = () => {
	return (
		<Container>
			<Select options={states} id="state" name="state" label="Estado" />
			<Select options={species} id="specie" name="specie" label="Espécies" />
			<Select options={genders} id="gender" name="gender" label="Genêro" />
		</Container>
	);
};
