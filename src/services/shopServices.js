import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realTimeDataBase";

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    tagTypes: ['accountsGet', 'categoriesGet', 'transactionsGet', 'profileImageGet'],
    endpoints: (builder) => ({

        postAccounts: builder.mutation({
            query: ({ accounts, localId }) => ({
                url: `${localId}/accounts.json`,
                method: 'PUT',
                body: accounts,
            }),
            invalidatesTags: ['accountsGet']
        }),

        getAccounts: builder.query({
            query: (localId) => {
                return `${localId}/accounts.json`
            },
            transformResponse: (res) => {
                if (res) {
                    const transformedResponse = Object.values(res);
                    return transformedResponse;
                }
                return [];
            },
            providesTags: ['accountsGet']

        }),

        postCategory: builder.mutation({
            query: ({ categories, localId }) => ({
                url: `${localId}/categories.json`,
                method: 'PUT',
                body: categories,
            }),
            invalidatesTags: ['categoriesGet']
        }),


        getCategories: builder.query({
            query: (localId) => `${localId}/categories.json`,
            transformResponse: (res) => {
                if (res) {
                    const transformedResponse = Object.values(res);
                    return transformedResponse;
                }
                return [];
            },
            providesTags: ['categoriesGet']

        }),

        postTransaction: builder.mutation({
            query: ({transactions, localId}) => ({
                url: `${localId}/transactions.json`,
                method: 'PUT',
                body: transactions,
            }),
            invalidatesTags: ['transactionsGet']
        }),

        getTransactions: builder.query({
            query: (localId) => `${localId}/transactions.json`,
            transformResponse: (res) => {
                if (res) {
                    const transformedResponse = Object.values(res);
                    return transformedResponse;
                }
                return [];
            },
            providesTags: ['transactionsGet']
        }),


        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']

        }),
        postProfileImage: builder.mutation({
            query: ({ image, localId }) => ({
                url: `profileImages/${localId}.json`,
                method: 'PUT',
                body: {
                    image: image
                },
            }),
            invalidatesTags: ['profileImageGet']
        })
    }),
})

export const {
    usePostAccountsMutation,
    usePostCategoryMutation,
    usePostTransactionMutation,
    useGetCategoriesQuery,
    useGetAccountsQuery,
    useGetTransactionsQuery,
    useGetProfileImageQuery,
    usePostProfileImageMutation
} = shopApi