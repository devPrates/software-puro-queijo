import { getTodos } from "#/actions/todo"
import { auth } from "../auth/provider"
import { CheckTodo } from "./check-todo"
import { DeleteTodo } from "./delete-todo"

export async function TodosList() {
  const session = await auth()
  const isAdmin = session?.user.role === 'admin'
  const todos = await getTodos()
  return (
    <ul className="w-80 min-h-80 p-8 border rounded-md bg-violet-50">
      {todos.map(todo => (
        <li key={todo.id} className="mb-1">
          <label className="flex items-center gap-2">
            <CheckTodo>{todo.todo}</CheckTodo>
            {
              isAdmin && <DeleteTodo id={todo.id}/>
            }
          </label>
        </li>
      ))}
    </ul>
  )
}