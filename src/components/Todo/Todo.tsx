import React, { FC } from "react";
import { TODO } from "../../types";
import { Grid } from "@mantine/core";
import { StyledText, TodoWrapper } from "./TodoStyles";
import { CircleDashed, Trash, CircleCheck } from "tabler-icons-react";
import { JustButton } from "../JustButton/JustButton";
import { TodoFooter } from "../TodoFooter/TodoFooter";

import {
  useCompleteTodoMutation,
  useDeleteTodoMutation,
  useUncompleteTodoMutation,
} from "../../redux/apiSlice";

type TodoProps = {
  todo: TODO;
  loadingStatus: boolean;
};

export const Todo: FC<TodoProps> = ({ todo, loadingStatus }) => {
  const [deleteTodo] = useDeleteTodoMutation();
  const [completeTodo] = useCompleteTodoMutation();
  const [uncompleteTodo] = useUncompleteTodoMutation();

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleTodoStatus = () => {
    todo.completed ? uncompleteTodo(todo.id) : completeTodo(todo.id);
  };

  return (
    <TodoWrapper>
      <Grid.Col span={1}>
        <JustButton onClick={handleTodoStatus} disabled={loadingStatus}>
          {todo.completed ? (
            <CircleCheck strokeWidth={2} color={"#40bf48"} />
          ) : (
            <CircleDashed strokeWidth={2} color={"#40bf48"} />
          )}
        </JustButton>
      </Grid.Col>
      <Grid.Col span={10}>
        <StyledText>{todo.text}</StyledText>
        <TodoFooter
          createdDate={todo.createdDate}
          completedDate={todo.completedDate}
        />
      </Grid.Col>
      <Grid.Col span={1}>
        <JustButton onClick={handleDelete} disabled={loadingStatus}>
          <Trash strokeWidth={2} color={"#000"} />
        </JustButton>
      </Grid.Col>
    </TodoWrapper>
  );
};
