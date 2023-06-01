'use client'

import { updateTodo } from '@/lib/actions'
//import { useTransition } from 'react'
import { experimental_useFormStatus as useFormStatus } from 'react-dom'
import { useRouter } from 'next/navigation'
import { experimental_useOptimistic as useOptimistic } from 'react'

export default function UpdateCheckbox({
    todo,
}: {
    todo: Todo,
}) {
    //const [isPending, startTransition] = useTransition()
    const router = useRouter()
    const { pending } = useFormStatus()
    const [optimisticTodo, addOptimisticTodo] = useOptimistic(
        todo,
        (
            state: Todo,
            completed: boolean
        ) => ({ ...state, completed })
    )

    return (

        <input
            type="checkbox"
            checked={optimisticTodo.completed}
            //checked={todo.completed}
            id="completed"
            name="completed"
            //onChange={() => startTransition(() => updateTodo(todo))}
            onChange={async () => {
                addOptimisticTodo(!todo.completed)
                await updateTodo(todo)
                router.refresh() // updates client-side cache 
            }}
            disabled={pending}
            className="min-w-[2rem] min-h-[2rem]"
        />

    )
}