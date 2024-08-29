import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { apiInstance } from "../api";

export const useGetAllTheatres = () => {
  const query = useQuery({
    queryKey: ["theatres"],
    queryFn: async () => {
      const { data } = await apiInstance.get("/admin/theatres");
      return data.data;
    },
  });
  return query;
};

export const useGetAllTheatreHalls = (theatreId) => {
  const query = useQuery({
    queryKey: ["theatreHalls", theatreId],
    enabled: !!theatreId,
    queryFn: async () => {
      const { data } = await apiInstance.get(
        `/admin/theatres/${theatreId}/halls`
      );
      return data.data;
    },
  });
  return query;
};

export const useCreateTheatre = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async function ({
      name,
      plot,
      street,
      city,
      state,
      country,
      pinCode,
    }) {
      const { data } = await apiInstance.post("/admin/theatres", {
        name,
        plot,
        street,
        city,
        state,
        country,
        pinCode,
      });

      return data;
    },
    onSuccess: async function () {
      await queryClient.invalidateQueries({ queryKey: ["theatres"] });
    },
  });
  return mutation;
};

export const useCreateTheatreHall = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async function ({ number, seatingCapacity, theatreId }) {
      const { data } = await apiInstance.post(
        `/admin/theatres/${theatreId}/halls`,
        {
          number,
          seatingCapacity,
          theatreId,
        }
      );

      return data;
    },
    onSuccess: async function () {
      await queryClient.invalidateQueries({ queryKey: ["theatreHalls"] });
    },
  });
  return mutation;
};

export const useGetShowsByMovie = (movieId) => {
  const query = useQuery({
    queryKey: ["shows", movieId],
    enabled: !!movieId,
    queryFn: async () => {
      const { data } = await apiInstance.get(`/admin/shows/${movieId}`);
      return data.data;
    },
  });
  return query;
};

export const useCreateShow = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: async function ({
      movieId,
      theatreHallId,
      startTimestamp,
      endTimestamp,
      price,
    }) {
      const { data } = await apiInstance.post(`/shows`, {
        movieId,
        theatreHallId,
        startTimestamp,
        endTimestamp,
        price,
      });

      return data;
    },
    onSuccess: async function () {
      await queryClient.invalidateQueries({ queryKey: ["shows"] });
    },
  });
  return mutation;
};
