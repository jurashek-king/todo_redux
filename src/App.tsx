import React from 'react';
import {TodoList} from "./components/TodoList";
import {Stack} from "@mantine/core";
import {TodoForm} from "./components/TodoForm";


function App(): JSX.Element {

    return (
        <Stack>
            <TodoForm />
            <TodoList/>
        </Stack>
    );
}

export default App;
