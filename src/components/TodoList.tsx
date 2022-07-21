import React, {FC} from "react";
import {List, Loader} from "@mantine/core";
import {useGetTodosQuery} from "../redux/apiSlice";


export const TodoList: FC = () => {

    const {data = [], isLoading, isSuccess, isError, error} = useGetTodosQuery();
    let content = null;

    if (isLoading) {
        content = <Loader className="loader"/>;
    } else if (isSuccess) {
        content = <List>
            {data.map(item => <List.Item key={item.id}>{item.text}</List.Item>)}
        </List>
    } else if (isError) {
        content = <div>{JSON.stringify(error)}</div>
    }

    return (

        content

    )
}