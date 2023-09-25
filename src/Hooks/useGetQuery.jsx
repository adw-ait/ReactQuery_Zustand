import axios from "axios";
import { endpoints } from "../endpoints";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url, config) => {
  try {
    const response = await axios(url, config);
    return response.data;
  } catch (error) {
    throw new Error(`network response not found: ${error.message}`);
  }
};

export const useGetQuery = (
  endpointKey,
  endpointQuery,
  queryKey,
  queryParams = {},
  pathParams = [],
  data = null
) => {
  const endpoint = endpoints?.[endpointKey]?.[endpointQuery];

  const endpointUrl = endpoint?.url;
  const endpointMethod = endpoint?.method;

  if (!endpointUrl) throw new Error(`invalid endpoint ${endpoint}`);

  let finalUrl =
    typeof endpointUrl === "function"
      ? endpointUrl([...pathParams])
      : endpointUrl;

  if (endpointMethod) {
    if (Object.keys(queryParams).length) {
      const params = new URLSearchParams(queryParams);
      finalUrl += `?${params.toString()}`;
    }
  }

  const config = {
    method: endpointMethod,
    headers: {
      "Content-Type": "application/json",
    },
    data,
  };

  return useQuery({
    queryKey: [queryKey],
    queryFn: () => fetchData(finalUrl, config),
  });
};
