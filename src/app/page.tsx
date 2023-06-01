import TodoList from "./components/TodoList"
import AddTodo from "./components/AddTodo"

export default function Home() {
  return (
    <>
      <AddTodo />
      {/* @ts-expect-error Server Component */}
      <TodoList />
    </>
  )
}
