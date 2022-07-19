import React from "react";
import {Form ,Field} from "react-final-form";
import {TODO} from "../types";
import {useAddTodoMutation} from "../redux/apiSlice";

export const TodoForm = (): JSX.Element => {


    const [addTodo] = useAddTodoMutation()
    const onSubmit = (values: Pick<TODO, 'text'>): void => {
        addTodo(values);
    };
    return (
        <Form onSubmit={onSubmit}
              initialValues={{text: ''}}
              render={(props) => (
                  <form onSubmit={props.handleSubmit}>
                      <label>Add Todo</label>
                      <Field name="text" component="input" placeholder="todo" type="text"/>
                      <button type="submit" disabled={props.submitting}>Add Todo</button>
                      {/*<pre>{JSON.stringify(props.values, null, 2)}</pre>*/}
                  </form>
                  )
              }
        />

        )
}