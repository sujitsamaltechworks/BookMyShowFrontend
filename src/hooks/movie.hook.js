import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiInstance } from "../api";

export const useGetAllMovies = () => {
  const query = useQuery({
    queryKey: ["movies"],
    queryFn: async () => {
      const { data } = await apiInstance.get("/admin/movies");
      return data.data;
    },
  });
  return query;
};

export const useCreateMovie = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async function ({
      title,
      description,
      language,
      imageURL,
      durationInMinutes,
    }) {
      const { data } = await apiInstance.post("/admin/movies", {
        title,
        description,
        language,
        imageURL,
        durationInMinutes,
      });

      return data;
    },
    onSuccess: async function () {
      await queryClient.invalidateQueries({ queryKey: ["movies"] });
    },
  });
  return mutation;
};
