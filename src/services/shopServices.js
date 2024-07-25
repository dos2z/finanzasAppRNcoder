import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realTimeDataBase";








export const shopApi = createApi({
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    endpoints: (builder) => ({
        getCategories: builder.query({
            query:  ()=>`categories.json`
        }),
        getProductsByCategory: builder.query({
            query: (category)=>`products.json?orderBy="category"&equalTo="${category}"`
        }),
        getProductById: builder.query({
            query: (id)=>`products.json?orderBy="id"&equalTo="${id}"` //Si el id es un número, no debe llevar comillas
        }),
    }),
})

export const {useGetCategoriesQuery, useGetProductByIdQuery, useGetProductsByCategoryQuery} = shopApi