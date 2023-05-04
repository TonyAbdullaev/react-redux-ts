import React, {useEffect} from "react";
import {useTypeSelector} from "../hooks/useTypeSelector";
import {useAction} from "../hooks/useAction";

const TodoList: React.FC = () => {
    const {page, error, loading, todos, limit} = useTypeSelector(state => state.todos)
    const {fetchTodos, setTodoPage} = useAction()
    const pages = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];


    useEffect(() => {
        fetchTodos(page, limit)
    }, [page])
    console.log("todos", page);
    if (loading) {
        return <h2>Loading...</h2>
    }

    if (error) {
        return <h2>{error}</h2>
    }


    return (
        <div>
            {
                todos.map((todo) => (
                    <div key={todo.id}>
                        {todo.id} - {todo.title}
                    </div>
                ))
            }
            <div style={{display: "flex"}}>
                {
                    pages.map(p =>
                        <div key={p}
                             onClick={() => setTodoPage(p)}
                             style={{border: p === page ? '2px solid green' : '1px solid gray', padding: 10, margin: 5}}
                        >
                            {p}
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default TodoList;