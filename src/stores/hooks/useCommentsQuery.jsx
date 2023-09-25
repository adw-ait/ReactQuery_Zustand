import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useCommentsQuery() {
  return useQuery({
    queryKey: ["comments"],
    queryFn: async () => {
      const response = axios.get(`http://localhost:3000/Comments`);
      return (await response).data;
    },
  });
}
