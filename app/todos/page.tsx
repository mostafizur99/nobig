import React from 'react'
import TodoList from './TodoList'

const Todos = () => {
    return (
        <div className='container mx-auto py-5'>
            <h2 className='text-center font-bold text-xl'>Todos Page</h2>
            {/* @ts-ignore */}
            <TodoList />
        </div>
    )
}

export default Todos