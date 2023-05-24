import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:9000" }),
  endpoints: (builder) => ({
    signinUser: builder.mutation({
      query: (body: { email: string; password: string }) => {
        return {
          url: "/user/signin",
          method: "POST",
          body,
        };
      },
    }),
  }),
});

export const { useSigninUserMutation } = authApi;
