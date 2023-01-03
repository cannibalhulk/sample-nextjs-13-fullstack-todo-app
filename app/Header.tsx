import React from 'react'
import Link from 'next/link'
function Header(){
  return (
    <header className='p-5 bg-blue-500'>
        <Link href="/" className='px-1 py-1 bg-white text-blue-500 rounded-md'>Home</Link>
    </header>
  )
}

export default Header
