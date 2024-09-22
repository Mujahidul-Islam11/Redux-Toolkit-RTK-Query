import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({          // <= fetching
      query: () => "/products",
    }),

    getProductById: builder.query({         // <= fetching
      query: (id) => `/products/${id}`,       
    }),

    addNewProduct: builder.mutation({        // <= mutating/adding/updating/deleting
      query: (newProduct) => ({
        url: `/products/add`,
        method: "Post",
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),
  }),
});

export const { useGetAllProductsQuery, useGetProductByIdQuery, useAddNewProductMutation } = productsAPI;
