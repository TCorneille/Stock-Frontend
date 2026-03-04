import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product, Reservation } from "./types";

export const dropApi = createApi({
  reducerPath: "dropApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
    credentials: "include"
  }),
  tagTypes: ["Product", "Reservation"],
  endpoints: (builder) => ({
    getProduct: builder.query<Product, void>({
      query: () => "/products/limited",
      providesTags: ["Product"]
    }),

    reserveProduct: builder.mutation<Reservation, void>({
      query: () => ({
        url: "/reserve",
        method: "POST"
      }),
      invalidatesTags: ["Product"]
    })
  })
});

export const {
  useGetProductQuery,
  useReserveProductMutation
} = dropApi;