import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { baseUrl } from "../database/realTimeDataBase";

export const shopApi = createApi({
    reducerPath: 'shopApi',
    baseQuery: fetchBaseQuery({
        baseUrl: baseUrl
    }),
    tagTypes: ['accountsGet', 'categoriesGet', 'transactionsGet', 'profileImageGet'],
    endpoints: (builder) => ({
        
        //----------------------------------------

        /*  getAccounts: builder.query({
             query: (localId)=> `accounts.json?orderBy="localId"equalTo=${localId}`
         }), */

        getAccounts: builder.query({
            query: (localId) => `accounts/${localId}.json`

        }),

        /* getCategories: builder.query({
            query: (localId) => `categories.json?orderBy="localId"equalTo=${localId}`
        }), */

        getCategories: builder.query({
            query: (localId) => `categories${localId}/json`
        }),

        /*  getTransactions: builder.query({
             query: (localId) => `transactions.json?orderBy="localId"equalTo=${localId}`
         }), */
        getTransactions: builder.query({
            query: (localId) => `transactions/${localId}.json`
        }),


        /* postAccount: builder.mutation({
            query: ({...account}) =>({
                url: 'accounts.json',
                method: 'POST',
                body: 'account',
            })
        }), */
        postAccount: builder.mutation({
            query: ( {account, localId}) => ({
                url: `accounts/${localId}.json`,
                method: 'PUT',
                body: 'account',
            })
        }),

        /* postTransaction: builder.mutation({
            query: ({...transaction}) =>({
                url: 'transactions',
                method: 'POST',
                body: 'transaction',
            })
        }), */

        postTransaction: builder.mutation({
            query: ({ ...transaction }, localId) => ({
                url: `transactions/${localId}.json`,
                method: 'PUT',
                body: 'transaction',
            })
        }),

        /* postCategory: builder.mutation({
            query: ({ ...category }) => ({
                url: 'categories.json',
                method: 'POST',
                body: 'category',
            })
        }), */

        postCategory: builder.mutation({
            query: ({category, localId}) => ({
                url: `categories/${localId}.json`,
                method: 'PUT',
                body: 'category',
            })
        }),

        getProfileImage: builder.query({
            query: (localId) => `profileImages/${localId}.json`,
            providesTags: ['profileImageGet']

        }),
        postProfileImage: builder.mutation({
            query: ({image, localId}) => ({
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

export const { usePostAccountMutation,
    usePostCategoryMutation,
    usePostTransactionMutation,
    useGetCategoriesQuery,
    useGetAccountsQuery,
    useGetTransactionsQuery,
    useGetProfileImageQuery,
    usePostProfileImageMutation
} = shopApi