import {TODO} from "./types";
const URL = 'http://localhost:8080';

export const fetchTodos = async (): Promise<TODO[]> => {
    const response = await fetch(`${URL}/tasks`);
    const data = await response.json();
    return data;
}