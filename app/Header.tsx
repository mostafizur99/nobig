import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='py-5 bg-slate-400'>
            <div className='container mx-auto'>
                <Link href={'/'} className='px-1.5 py-1 bg-slate-500 text-white rounded mr-2'>Home</Link>
                <Link href={'/todos'} className='px-1.5 py-1 bg-slate-500 text-white rounded'>Todos</Link>
            </div>
        </header>
    )
}

export default Header