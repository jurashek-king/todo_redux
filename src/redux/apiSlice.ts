import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TODO } from "../types";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["TODO"],
  endpoints: (builder) => ({
    getTodos: builder.query<TODO[], void>({
      query: () => "/tasks",
      providesTags: (result) =>
        result
          ? [
              ...result.map((todo) => ({ type: "TODO" as const, id: todo.id })),
              "TODO",
            ]
          : ["TODO"],
    }),
    addTodo: builder.mutation<void, Pick<TODO, "text">>({
      query: (todo) => ({
        url: "/tasks",
        method: "POST",
        body: todo,
      }),
      invalidatesTags: ["TODO"],
    }),
    deleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["TODO"],
    }),
    completeTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}/complete`,
        method: "POST",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "TODO", id: arg }],
    }),
    uncompleteTodo: builder.mutation<void, string>({
      query: (id) => ({
        url: `/tasks/${id}/incomplete`,
        method: "POST",
      }),
      invalidatesTags: (result, error, arg) => [{ type: "TODO", id: arg }],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useDeleteTodoMutation,
  useCompleteTodoMutation,
  useUncompleteTodoMutation,
} = apiSlice;
