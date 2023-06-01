import { FaTrash } from "react-icons/fa"
import Link from "next/link"
import { deleteTodo } from "@/lib/actions"
import UpdateCheckbox from "./UpdateCheckbox"

export default function Todo(todo: Todo) {

    return (
        <form className="my-4 flex justify-between items-center">

            <label htmlFor="completed" className="text-2xl hover:underline">
                <Link href={`/edit/${todo.id}`}>{todo.title}</Link>
            </label>

            <div className="flex items-center gap-4">
                <UpdateCheckbox todo={todo} />

                <button
                    formAction={async () => {
                        'use server'
                        await deleteTodo(todo)
                    }}
                    className="p-3 text-xl rounded-2xl text-black border-solid border-black border-2 max-w-xs bg-red-400 hover:cursor-pointer hover:bg-red-300">
                    <FaTrash />
                </button>
            </div>
        </form>
    )
}