import React, { FC } from "react";
import { Loader } from "@mantine/core";
import { useGetTodosQuery } from "../../redux/apiSlice";
import { Todo } from "../Todo/Todo";
import { StyledTodoWrapper } from "./TodoListStyles";

export const TodoList: FC = () => {
  const {
    data = [],
    isLoading,
    isSuccess,
    isError,
    isFetching,
    error,
  } = useGetTodosQuery();
  let content = null;

  if (isLoading) {
    content = <Loader className="loader" />;
  } else if (isSuccess) {
    content = (
      <StyledTodoWrapper>
        {data.map((item) => (
          <Todo todo={item} key={item.id} loadingStatus={isFetching} />
        ))}
      </StyledTodoWrapper>
    );
  } else if (isError) {
    content = <div>{JSON.stringify(error)}</div>;
  }

  return content;
};
