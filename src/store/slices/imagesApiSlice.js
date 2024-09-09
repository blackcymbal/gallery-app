import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const imagesApiSlice = createApi({
  reducerPath: 'imagesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }), 
  endpoints: (builder) => ({
    fetchImages: builder.query({
      query: () => 'photos', 
    }),
  }),
});


export const { useFetchImagesQuery } = imagesApiSlice;
