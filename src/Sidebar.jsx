import React from 'react'
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

const Sidebar = ({ data,setData}) => {
  return (
    <div className="h-[100vh]  mt-0 space-y-5 overflow-y-auto ">

    <Sheet>
    <SheetTrigger asChild>
     <div className="flex flex-col items-center text-center mt-10 cursor-pointer ">
        <IoOptionsSharp  size='28'/>
          <h1>Product Options</h1>
     </div>
     </SheetTrigger>
     <SheetContent
      side="right"
     className="w-[90vw] max-w-none sm:max-w-none">
      <Product data={data} setData={setData} />
     </SheetContent>

     </Sheet>

     <Sheet >
    <SheetTrigger asChild>
    <div className="flex flex-col items-center text-center  cursor-pointer">
    <BiText   size='28' className="bg-blue-400"/>
      <h1>Text</h1>
    </div>
   </SheetTrigger>
   <SheetContent className=' h-[400px] w-[300px]  left-[8%] mt-[5%] rounded-2xl' side="left" >
   <Text data={data} setData={setData} />
   </SheetContent>
      </Sheet>
    
     <Sheet >
    <SheetTrigger asChild>
    <div className="flex flex-col items-center text-center  cursor-pointer" >
    <CiImageOn  size='28'/>
      <h1>Uploads</h1>
    </div>
    </SheetTrigger>
    <SheetContent className=' h-[400px] w-[300px] left-[8%] mt-[5%] rounded-2xl' side="left" >
      <Uploads data={data} setData={setData} />
    </SheetContent>
      </Sheet>

     <Sheet>
      <SheetTrigger asChild>
    <div className="flex flex-col items-center text-center cursor-pointer">
    <SiTaichigraphics  size='28'/>
      <h1>Graphics</h1>
    </div>
    </SheetTrigger>
    <SheetContent className=' h-[400px] w-[300px]  left-[8%] mt-[5%] rounded-2xl' side="left" >
      <Graphics/>
    </SheetContent>
      </Sheet>


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

        <Sheet>
      <SheetTrigger asChild>
    <div className="flex flex-col items-center text-center  cursor-pointer">
    <IoColorFillOutline  size='28'/>
      <h1>Template Color</h1>
    </div>
    </SheetTrigger>
    <SheetContent className=' h-[400px] w-[300px]  left-[8%] mt-[5%] rounded-2xl' side="left" >
      <TemplateColor data={data} setData={setData}/>
    </SheetContent>
         </Sheet>


       <Sheet>
    <SheetTrigger asChild>
    <div className="flex flex-col items-center text-center  cursor-pointer">
    <FaQrcode  size='28'/>
      <h1>QR-codes</h1>
    </div>
    </SheetTrigger>
    <SheetContent className=' h-[400px] w-[300px]  left-[8%] mt-[5%] rounded-2xl' side="left" >
      <Qr/>
    </SheetContent>
         </Sheet>

       <Sheet>
      <SheetTrigger asChild>
    <div className="flex flex-col items-center text-center  mb-20 cursor-pointer">
    <CiViewTable  size='28'/>
      <h1>Table</h1>
    </div>
    </SheetTrigger>
    <SheetContent className=' h-[400px] w-[300px]  left-[8%] mt-[5%] rounded-2xl' side="left" >
      <Table/>
    </SheetContent>
        </Sheet>

    </div>

  )
}

export default Sidebar
