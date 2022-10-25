import { useParams } from "react-router-dom";

import { useSpecificCharacter } from "../../hooks/useSpecificCharacter";

import { Character } from "../../components/Character";
import { Loading } from "../../components/Loading";
import { Error } from "../../components/Error";

import type { ParamTypes } from "../../Routes";

import { MainDetails } from "./styles";

export const DetailsPage = () => {
	const { id } = useParams<ParamTypes>();
	const { data, errors, isLoading } = useSpecificCharacter.ById(id || "");

	if (isLoading) return <Loading />;

	if (errors) return <Error />;

	return (
		<MainDetails>
			<Character character={data} />
		</MainDetails>
	);
};
