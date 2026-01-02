import React, { useState } from 'react'
import { Button } from './ui/button'
import frontImage from '../assets/image.png'
import backImage from '../assets/backImage.png'
import varticalFront from '../assets/verticalFront.png'
import varticalBack from '../assets/verticalBack.png'
import Result from '@/Result'

const Product = ({ data,setData}) => {
  const [view, setView] = useState("front")
  const [orientation, setOrientation] = useState("horizontal")


  return (
    <div className="flex gap-10  w-full h-full bg-gray-100 rounded-l-3xl">
    <div className="w-[60%]  flex items-center justify-center">
 
 {
  orientation === 'horizontal' && (
    <div className="relative  mx-10">
    
      <Result data={data} setData={setData} view={view} />

      <div className="absolute  left-1/2 -translate-x-1/2 flex gap-3">
      <Button 
     variant={view === "front" ? "default" : "outline"}

      onClick={() => setView("front")}>
        Front</Button>
      <Button 
      variant={view === "back" ? "default" : "outline"}
      onClick={() => setView("back")}
      >Back</Button>
    </div>
     </div>
  )
 }
   

   {
    orientation === 'vertical' && (
      <div className="flex flex-col items-center gap-4">
      <img
        src={view === "front" ? varticalFront : varticalBack}
        alt="img"
        className="h-[300px] transition-all duration-300"
      />

      <div className="flex gap-3">
        <Button
          variant={view === "front" ? "default" : "outline"}
          onClick={() => setView("front")}
        >
          Front
        </Button>

        <Button
          variant={view === "back" ? "default" : "outline"}
          onClick={() => setView("back")}
        >
          Back
        </Button>
      </div>
    </div>
    )
   }
   
  

   </div>

    <div className='w-[40%] mt-8 flex flex-col items-start justify-between mb-3'>
       <div className='mx-3 flex flex-col space-y-4'>
      <h1 className='font-bold text-xl'>Change orientation</h1>
      <p className='text-sm '>The design adjusts to your selected options.</p>
      <div className=''>
        <h1 className='font-semibold text-xl'>Product Orientation</h1>
       <div className='flex gap-3'>
       <Button
     
        variant={orientation === "horizontal" ? "default" : "outline"}

        onClick={() => setOrientation("horizontal")}
        >Horizontal</Button>

       <Button 
        variant={orientation === "vertical" ? "default" : "outline"}
        onClick={() => setOrientation("vertical")}
       >Vertical</Button>
       </div>
      </div>
       </div>
       <div className=''>
         <p className='text-xl'>100 for ₹200.00</p>
         <Button 
         variant="outline" 
         className='w-[30vw] bg-blue-400 hover:bg-blue-600'
         disabled={orientation !== "vertical"}
         >Vertical</Button>
       </div>
    </div>
    </div>
  )
}

export default Product
