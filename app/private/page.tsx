import { auth } from "../auth/provider";
import { TodoForm } from "./create-todo";

export default async function PrivatePage() {
  const session = await auth()
  const name = session?.user?.name
  return (
    <main className="w-full max-w-3xl mx-auto p-10 border rounded-md">
      <div className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-medium text-gray-600 mb-6">
          Olá <strong>{name}</strong>, seja bem vindo(a) a área privada.
        </h1>
        <TodoForm />
      </div>
    </main>
  )
}