import { fetchTodosStart, fetchTodosSuccess, fetchTodosFailure } from "../../Features/TodoApi/TodoApiSlice";

export const fetchTodos = () => async (dispatch) => {
        dispatch(fetchTodosStart())
        try {
                await fetch('https://dummyjson.com/todos')
                        .then(res => res.json())
                        .then(res => console.log(dispatch(fetchTodosSuccess(res.todos))));
        } catch (error) {
                dispatch(fetchTodosFailure(error.message));
        }
};
