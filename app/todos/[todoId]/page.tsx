import React from 'react'
import { notFound } from 'next/navigation';
import { Todo } from '../../../typings'

export const dynamicParams = true;

type PageProps = {
    params: {
        todoId: string
    }
}

const fetchTodoById = async (ID: string) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${ID}`, { next: { revalidate: 60 } });
    const todo: Todo = await res.json();
    return todo
}

const TodoDetails = async ({ params: { todoId } }: PageProps) => {
    const todo = await fetchTodoById(todoId);
    // console.log('todo', todo)

    if (!todo.id) return notFound()

    return (
        <div className='container mx-auto py-5'>
            <h2 className='text-center font-bold text-xl'>Todo Details Page {todo.id}</h2>
            <div className='flex justify-center mt-5'>
                {/* details-card  */}
                <div className='shadow w-fit px-10 py-6 bg-slate-300 rounded'>
                    <p>Title: {todo.title}</p>
                    <p>Completed: {todo.completed ? 'Yes' : 'No'}</p>
                    <p>User: {todo.userId}</p>
                </div>
            </div>
        </div>
    )
}

export default TodoDetails


export async function generateStaticParams() {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos: Todo[] = await res.json();

    return todos.slice(0, 10).map((item) => ({
        todoId: item.id.toString(),
    }));
}