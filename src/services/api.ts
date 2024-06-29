import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Restaurante } from "../pages/Home";

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "https://fake-api-tau.vercel.app/api/efood",
  }),
  endpoints: (builder) => ({
    getRestaurantSelected: builder.query<Restaurante, string>({
      query: (id) => `restaurantes/${id}`,
    }),
    getRestaurants: builder.query<Restaurante[], void>({
      query: () => "restaurantes",
    }),
  }),
});

export const { useGetRestaurantSelectedQuery, useGetRestaurantsQuery } = api;

export default api;
