import React, { useEffect, useState } from "react";

export function useFetch<TData>(url: string, deps?: React.DependencyList) {
	const [isLoading, setIsLoading] = useState(true);
	const [data, setData] = useState<TData>({} as TData);
	const [errors, setErrors] = useState<null | unknown>(null);

	useEffect(() => {
		(async () => {
			try {
				const response = await fetch(url);
				const data: TData = await response.json();

				setData(data);
			} catch (err) {
				setErrors(err);
			}

			setIsLoading(false);
		})();
	}, deps);

	return {
		data,
		isLoading,
		errors,
	};
}
