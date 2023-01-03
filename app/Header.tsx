import React from 'react'
import Link from 'next/link'
function Header(){
  return (
    <header className='p-5 bg-blue-500'>
        <Link href="/" className='px-1 py-1 bg-white text-blue-500 font-bold rounded-md'>Home</Link>
        <Link href='/search' className='ml-3 px-2 py-1 bg-blue-700 text-white font-bold hover:underline rounded-md' >Search Page→</Link>
        <Link href='/todos' className='ml-3 px-2 py-1 bg-blue-700 text-white font-bold hover:underline rounded-md' >Todos Page→</Link>
    </header>
  )
}

export default Header
