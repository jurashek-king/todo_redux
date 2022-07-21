import React, {FC} from 'react';
import {TodoList} from "./components/TodoList";
import {Stack} from "@mantine/core";
import {TodoForm} from "./components/TodoForm";


const App: FC = () => {

    return (
        <Stack>
            <TodoForm />
            <TodoList/>
        </Stack>
    );
}

export default App;
