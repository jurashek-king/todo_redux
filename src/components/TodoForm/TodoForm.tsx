import React, { FC } from "react";
import { Field, Form } from "react-final-form";
import { TODO } from "../../types";
import { useAddTodoMutation } from "../../redux/apiSlice";
import { StyledForm } from "./TodoFormStyles";
import { StyledButton } from "../JustButton/JustButtonStyles";
import { Send } from "tabler-icons-react";

export const TodoForm: FC = () => {
  const [addTodo] = useAddTodoMutation();
  const onSubmit = (values: Pick<TODO, "text">) => {
    addTodo(values);
  };
  const validator = (value: string) => (value ? null : "Required field");

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={{ text: "" }}
      render={(props) => (
        <StyledForm
          onSubmit={(event) => {
            event.preventDefault();
            props.handleSubmit();
            props.form.reset();
          }}
        >
          <StyledButton type="submit" disabled={props.submitting}>
            <Send strokeWidth={2} color={"#000"} />
          </StyledButton>
          <Field id="todo" name="text" validate={validator}>
            {(fieldProps) => (
              <>
                <input
                  {...fieldProps.input}
                  type="text"
                  placeholder="Add todo"
                />
                {fieldProps.meta.error && fieldProps.meta.touched && (
                  <div>{fieldProps.meta.error}</div>
                )}
              </>
            )}
          </Field>
        </StyledForm>
      )}
    />
  );
};
