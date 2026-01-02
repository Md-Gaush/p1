import React, { useState } from 'react'
import { IoOptionsSharp } from "react-icons/io5";
import { BiText } from "react-icons/bi";
import { CiImageOn } from "react-icons/ci";
import { SiTaichigraphics } from "react-icons/si";
import { GrTemplate } from "react-icons/gr";
import { IoColorFillOutline } from "react-icons/io5";
import { FaQrcode } from "react-icons/fa";
import { CiViewTable } from "react-icons/ci";

import Text from './components/Text';
import { Sheet, SheetContent, SheetTrigger } from './components/ui/sheet';
import Uploads from './components/Uploads';
import Product from './components/Product';
import Graphics from './components/Graphics';
import Templates from './components/Templates';
import TemplateColor from './components/TemplateColor';
import Qr from './components/Qr';
import Table from './components/Table';
import Editor from './components/Editor';

const Sidebar = ({ data, setData, setActiveTool,activeTool }) => {

  const [productOpen, setProductOpen] = useState(false);

  return (
    <div className="h-[100vh]  mt-0 space-y-5 overflow-y-auto ">

<Sheet open={productOpen} onOpenChange={setProductOpen}>
    <SheetTrigger asChild>
     <div className="flex flex-col items-center text-center mt-10 cursor-pointer ">
        <IoOptionsSharp  size='28' className={`${productOpen ? "bg-blue-400 text-white" : ""}`}/>
          <h1>Product Options</h1>
     </div>
     </SheetTrigger>
     <SheetContent
      side="right"
     className="w-[90vw] max-w-none sm:max-w-none rounded-l-3xl">
      <Product data={data} setData={setData} />
     </SheetContent>
     </Sheet>




    
    <div 
    className="flex flex-col items-center text-center  cursor-pointer " 
    onClick={() => setActiveTool("text")}
    
    >
  <BiText   size='28' className={`${activeTool === 'text' ? 'bg-blue-400' : ''}`}/>
      <h1>Text</h1>
    </div>
 
           
   
 

    
   
    <div className="flex flex-col items-center text-center  cursor-pointer" onClick={() => setActiveTool("upload")} >
    <CiImageOn  size='28' className={`${activeTool === 'upload' ? 'bg-blue-400' : ''}`}/>
      <h1>Uploads</h1>
    </div>
   


     
    <div className="flex flex-col items-center text-center cursor-pointer" onClick={() => setActiveTool("Graphics")}>
    <SiTaichigraphics  size='28' className={`${activeTool === 'Graphics' ? 'bg-blue-400' : ''}`}/>
      <h1>Graphics</h1>
    </div>
    


       <Sheet>
      <SheetTrigger asChild>
    <div className="flex flex-col items-center text-center cursor-pointer">
    <GrTemplate  size='28'/>
      <h1>Template</h1>
    </div>
    </SheetTrigger>
    <SheetContent
      side="right"
     className="w-[90vw] max-w-none sm:max-w-none">
      <Templates/>
    </SheetContent>
        </Sheet>

   
    <div 
    className="flex flex-col items-center text-center  cursor-pointer"
    onClick={() => setActiveTool("Color")}
    >
    <IoColorFillOutline  size='28' className={`${activeTool === 'Color' ? 'bg-blue-400' : ''}`}/>
      <h1>Template Color</h1>
    </div>
   


     
    <div 
    className="flex flex-col items-center text-center  cursor-pointer"
    onClick={() => setActiveTool("Qr")}
    >
    <FaQrcode  size='28'  className={`${activeTool === 'Qr' ? 'bg-blue-400' : ''}`}/>
      <h1>QR-codes</h1>
    </div>
   

     
    <div 
    className="flex flex-col items-center text-center  mb-20 cursor-pointer"
    onClick={() => setActiveTool("Tables")}
    >
    <CiViewTable  size='28' className={`${activeTool === 'Tables' ? 'bg-blue-400' : ''}`}/>
      <h1>Table</h1>
    </div>
   

    </div>

  )
}

export default Sidebar
