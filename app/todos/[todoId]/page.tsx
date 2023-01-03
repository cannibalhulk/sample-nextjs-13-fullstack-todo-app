import React from 'react'
import { Todo } from "../../../typings"
import { notFound } from 'next/navigation'

export const dynamicParams = true

type PageProps = {
  params: {
    todoId: string;
  }
}

const fetchTodo = async (todoId: string) => {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/todos/${todoId}`,
    { next: { revalidate: 60 } }
  );

  const todo: Todo = await res.json();
  return todo
}

async function TodoPage({ params: { todoId } }: PageProps) {
  const todo = await fetchTodo(todoId)

  //throw not found message on the screen
  if(!todo.id) return notFound();

  return (
    <div className="p-10 bg-yellow-200 border-2 m-2 shadow-lg">
      <p>
        #{todo.id}: {todo.title}
      </p>
      <p>Completed: {todo.completed ? "Yes" : "No"}</p>
      <p className="border-t border-black mt-5 text-right">
        By User: {todo.userId}
      </p>
    </div>
  )
}

export default TodoPage

export async function  generateStaticParams(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/`);
  const todos : Todo[] = await res.json();

  //for this DEMO , we are only prebuilding the first 10 pages to avoid being rate limited bt the DEMO API
  const trimmmedTodos = todos.slice(0,10)

  return trimmmedTodos.map((todo)=>({
    todoId : todo.id.toString()
  }))
}