import React from 'react'
import { LuColumns3 } from "react-icons/lu";
import { Button } from './ui/button';
import { LuRows3 } from "react-icons/lu";

const Table = () => {
  return (
    <>
   <div className="h-full flex flex-col">

  <h1 className="m-5 font-semibold text-xl">Tables</h1>

 
  <p className="mx-5 text-sm text-gray-500 leading-relaxed">
    Create your table below, then select it to update text, color, layout and more.
  </p>

 
  <div className="mx-4 my-4 h-px bg-gray-200" />

  
  <div className="flex items-center justify-between mx-4 py-3 rounded-lg hover:bg-gray-100 transition">
    <div className="flex gap-3 items-center">
      <LuColumns3 className="text-xl text-gray-600" />
      <h1 className="text-base font-medium">Columns</h1>
    </div>

    <div className="flex items-center gap-4">
      <div className="h-8 w-8 flex items-center justify-center rounded-full border text-xl cursor-pointer hover:bg-gray-200">
        −
      </div>
      <span className="text-base font-medium">2</span>
      <div className="h-8 w-8 flex items-center justify-center rounded-full border text-xl cursor-pointer hover:bg-gray-200">
        +
      </div>
    </div>
  </div>


  <div className="flex items-center justify-between mx-4 py-3 rounded-lg hover:bg-gray-100 transition">
    <div className="flex gap-3 items-center">
      <LuRows3 className="text-xl text-gray-600" />
      <h1 className="text-base font-medium">Rows</h1>
    </div>

    <div className="flex items-center gap-4">
      <div className="h-8 w-8 flex items-center justify-center rounded-full border text-xl cursor-pointer hover:bg-gray-200">
        −
      </div>
      <span className="text-base font-medium">2</span>
      <div className="h-8 w-8 flex items-center justify-center rounded-full border text-xl cursor-pointer hover:bg-gray-200">
        +
      </div>
    </div>
  </div>

 
  <Button className="mx-4 mt-6 bg-blue-500 hover:bg-blue-600 text-white rounded-xl">
    Add Table
  </Button>
</div>

    </>
  )
}

export default Table
