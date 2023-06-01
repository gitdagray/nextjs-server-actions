import Todo from "./Todo"
import fetchTodos from "@/lib/fetchTodos"

export default async function TodoList() {
    const todos = await fetchTodos()

    let content
    if (!todos || todos.length === 0) {
        content = (
            <p>No Todos Available</p>
        )
    } else {
        const sortedTodos = todos.reverse()

        content = (
            <>
                {sortedTodos.map(todo => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </>
        )
    }

    return content
}