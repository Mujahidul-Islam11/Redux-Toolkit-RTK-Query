import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const productsAPI = createApi({
    reducerPath: "products",
    baseQuery: fetchBaseQuery({baseUrl: 'https://dummyjson.com'}),
    endpoints: (builder) => {
        // Get all data
        getAllProducts: builder.query({
            query: ()=> "/products"
        })
    }
})

export const { useGetAllProductsQuery } = productsAPI;