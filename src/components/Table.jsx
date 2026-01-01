import React from 'react'
import { LuColumns3 } from "react-icons/lu";
import { Button } from './ui/button';
import { LuRows3 } from "react-icons/lu";

const Table = () => {
  return (
    <>
      <h1 className='m-5 font-semibold text-xl'>Tables</h1>
      <p className='mx-4 text-sm text-gray-500'>Create your table below, then select it to update text, color,layout and more.</p>
      <div className='flex items-center justify-between mx-4 mt-2'>
        <div className='flex gap-2 items-center'>
        <LuColumns3 className='text-2xl' />
        <h1 className=' text-xl'>Columns</h1>
       
        </div>
        <div className='flex items-center gap-2 justify-center '>
            <h1 className='text-4xl'>-</h1>
            <h1 className='text-2xl'>2</h1>
            <h1 className='text-4xl'>+</h1>
        </div>
      </div>
      <div className='flex items-center justify-between mx-4 '>
        <div className='flex gap-2 items-center'>
        <LuRows3 className='text-2xl' />
        <h1 className=' text-xl'>Rows</h1>
       
        </div>
        <div className='flex items-center gap-2 justify-center '>
            <h1 className='text-4xl'>-</h1>
            <h1 className='text-2xl'>2</h1>
            <h1 className='text-4xl'>+</h1>
        </div>
      </div>
      <Button className='mx-4 mt-8 bg-blue-500 hover:bg-blue-800' variant='outline'>Add Table</Button>
    </>
  )
}

export default Table
