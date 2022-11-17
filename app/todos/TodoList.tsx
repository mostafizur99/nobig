import Link from 'next/link';
import React from 'react'
import { Todo } from '../../typings';

const fetchTodos = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/todos');
    const todos: Todo[] = await res.json();
    return todos
}

const TodoList = async () => {
    const todos = await fetchTodos();
    // console.log('todos', todos[0])
    return (
        <div>
            <h3 className='font-medium text-lg'>Todos List</h3>
            <div>
                {todos.slice(0, 10).map((todo: Todo, index: number) => (
                    <Link key={index} href={`/todos/${todo.id}`}>
                        <p className='py-2 font-semibold hover:text-slate-500'>Todo: {todo.id}. {todo.title}</p>
                    </Link>
                ))}
            </div>
        </div >
    )
}

export default TodoList