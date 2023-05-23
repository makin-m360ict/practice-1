import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const userApi = createApi({
    reducerPath: "userApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    tagTypes: ["Users"],
    endpoints: builder => ({
        getUser: builder.query<any, void>({
            query: () => "users",
            providesTags: ["Users"]
        }),
        postUser: builder.mutation<any, any>({
            query: data => ({
                url: "posts",
                body: data,
                method: "POST"
            }),
            invalidatesTags: ["Users"]
        })
    })
})
export const { useGetUserQuery, usePostUserMutation } = userApi;


export const postsApi = createApi({
    reducerPath: "postsApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://jsonplaceholder.typicode.com/"
    }),
    tagTypes: ["Posts"],

    endpoints: builder => ({
        getPosts: builder.query<any, void>({
            query: () => "posts",
            providesTags: ["Posts"]
        }),
        uploadPost: builder.mutation<any, any>({
            query: (data) => ({
                url: "posts",
                body: data,
                method: "POST"
            }),
            invalidatesTags: ["Posts"]
        })
    })
})


export const { useGetPostsQuery ,useUploadPostMutation} = postsApi;