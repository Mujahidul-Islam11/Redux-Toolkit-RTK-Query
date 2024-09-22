import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const productsAPI = createApi({
  reducerPath: "products",
  baseQuery: fetchBaseQuery({ baseUrl: "https://dummyjson.com" }),
  endpoints: (builder) => ({
    getAllProducts: builder.query({
      query: () => "/products",
    }),

    getProductById: builder.query({
      query: (id) => `/products/${id}`,
    }),

    addNewProduct: builder.mutation({
      query: (newProduct) => ({
        url: `/products/add`,
        method: "POST",  
        headers: { "Content-Type": "application/json" },
        body: newProduct,
      }),
    }),

    updateProduct: builder.mutation({
      query: (updatedProduct) => ({
        url: `/products/${updatedProduct.id}`,
        method: "PUT",  
        headers: { "Content-Type": "application/json" },
        body: updatedProduct,
      }),
    }),
  }),
});

export const {
  useGetAllProductsQuery,
  useGetProductByIdQuery,
  useAddNewProductMutation,
  useUpdateProductMutation,
} = productsAPI;
