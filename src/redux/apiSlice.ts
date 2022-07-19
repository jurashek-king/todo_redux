import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {TODO} from "../types";

export const apiSlice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:8080'}),
    tagTypes:['TODO'],
    endpoints: builder => ({
        getTodos: builder.query<TODO[], void>({
            query: () => '/tasks',
            providesTags:['TODO']
        }),
        addTodo: builder.mutation({
            query: initialPost => ({
                url: '/tasks',
                method: 'POST',
                body: initialPost
            }),
            invalidatesTags:['TODO']
        })
    })
})

export const {useGetTodosQuery, useAddTodoMutation} = apiSlice;