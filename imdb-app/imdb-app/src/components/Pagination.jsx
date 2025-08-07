import React from 'react'

function Pagination({navNextPage, navPrevPage, pageNumber}) {
  return (
    <div className='bg-gray-400 w-[100%] h-[70px] mt-7  flex justify-center items-center'>
        <form className=' flex justify-center items-center'>
            <button onClick={ (e) => { e.preventDefault(); navPrevPage() } } className='p-4'>⬅️</button>
            <div className='p-4'>{pageNumber}</div>
            <button onClick={ (e) => { e.preventDefault(); navNextPage() }} className='p-4'>➡️</button>
        </form>
    </div>
  )
}

export default Pagination