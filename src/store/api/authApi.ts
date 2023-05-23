import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({
    getAuth: builder.query({
      query: () => "/auth",
    }),
  }),
});

export const { useGetAuthQuery } = authApi;
