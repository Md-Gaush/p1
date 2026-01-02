import React, { useState } from 'react'
import Editor from './Editor'


const Text = ({data,setData }) => {
   const [show , setShow] = useState(false)

       const handleInput = (e)=>{
         setData((prev)=>({
          ...prev,[e.target.name]:e.target.value
         }))
        
       }


  return (
    <div className="flex flex-col h-full rounded-2xl  ">
      <form className=" flex flex-col space-y-5 overflow-y-scroll px-4 py-3 rounded-2xl">
        <div className='flex items-center justify-between'>
          <h1 className="font-bold text-3xl">Text</h1>
        
        </div>
        <p className="text-sm">
          Edit your text below, or click on the field you'd like to edit directly on your design.
        </p>
       

        
         <input 
        placeholder="Enter Name" 
        className="border-b-2 outline-none"
        name='name'
        value={data?.name}
        onChange={handleInput}
        
        />
                     
         <input
         placeholder="Job Title" 
         className="border-b-2 outline-none" 
         name='job'
         value={data?.job}
         onChange={(e)=>setData({...data,job:e.target.value})}
         />
        <input 
        placeholder="Phone / Other" 
        className="border-b-2 outline-none" 
        name='phone'
        value={data?.phone}
        onChange={(e)=>setData({...data,phone:e.target.value})}
        />
        <input 
        placeholder="Email / Other" 
        className="border-b-2 outline-none" 
        name='email'
        value={data?.email}
        onChange={(e)=>setData({...data,email:e.target.value})}
        />
        <input 
        placeholder="COMPANY NAME" 
        className="border-b-2 outline-none" 
        name='company'
        value={data?.company}
        onChange={(e)=>setData({...data,company:e.target.value})}
        />
        <input 
        placeholder="Address Line 1" 
        className="border-b-2 outline-none" 
        name='address1'
        value={data?.address1}
        onChange={(e)=>setData({...data,address1:e.target.value})}
        />
        <input 
        placeholder="Address Line 2" 
        className="border-b-2 outline-none" 
        name='address2'
        value={data?.address2}
        onChange={(e)=>setData({...data,address2:e.target.value})}
        />
      </form>
         <button className="bg-blue-400 m-4 h-12 rounded-2xl">
        New Text Field
      </button>
    </div>
  )
}

export default Text
