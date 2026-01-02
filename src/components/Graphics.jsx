import React from 'react'
import { Input } from './ui/input'
import { IoSearch } from "react-icons/io5";
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
}  from "@/components/ui/carousel"
import { IoIosArrowForward } from "react-icons/io";

import img1 from "../assets/img-1.jpg"
import img2 from '../assets/img-2.jpg'
import img3 from '../assets/img-3.jpg'
import img4 from '../assets/img-4.jpg'
import img5 from '../assets/img-5.jpg'

import icon1 from '../assets/icons/icon-1.png'
import icon2 from '../assets/icons/icon-2.png'
import icon3 from '../assets/icons/icon-3.png'
import icon4 from '../assets/icons/icon-4.png'
import icon5 from '../assets/icons/icon-5.png'
import icon6 from '../assets/icons/icon-6.png'


import ill1 from '../assets/Illustrations/ill-1.png'
import ill2 from '../assets/Illustrations/ill-2.png'
import ill3 from '../assets/Illustrations/ill-3.png'
import ill4 from '../assets/Illustrations/ill-4.png'
import ill5 from '../assets/Illustrations/ill-5.png'


import s1 from '../assets/shapes/s-1.png'
import s2 from '../assets/shapes/s-2.avif'
import s3 from '../assets/shapes/s-3.png'
import s4 from '../assets/shapes/s-4.png'


const imgs = [
  img1,img2,img3,img4,img5
]

const icons = [
  icon1,icon2,icon3,icon4,icon5,icon6
]

const ills = [ill1,ill2,ill3,ill4,ill5]

const shapes = [s1,s2,s3,s4]

const Graphics = () => {
  return (
   <>
 <div className="h-full overflow-y-auto scrollbar-hide">
   <h1 className='text-3xl font-semibold mt-5 mx-5'>Graphics</h1>
     <div className="mx-4 relative">
     <Input
          type="text"
            placeholder="Search for content"
            className="pr-10"/>
     <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-2xl" />
     </div>
     <div className=' overflow-y-auto mb-3'>

     {/* Shapes */}
     <div className='m-2'>
        <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-2xl'>Shapes</h1>
        <IoIosArrowForward className='text-2xl'/>
        </div>
        
        <div className=''>
        <Carousel
           opts={{ align: "start" }}
               className="w-full h-full">
          <CarouselContent className="h-full items-stretch">
             {shapes.map((shape, index) => (
             <CarouselItem
               key={index}
                className="h-full basis-full sm:basis-1/2 lg:basis-1/3 flex" >
              <Card className="w-full h-full overflow-hidden cursor-pointer">
                 <CardContent className="p-0 w-full h-full flex">
                 <img
                   src={shape}
                    alt="img"
                    className="w-full h-[70px] object-cover"/>
                        </CardContent>
                           </Card>
                        </CarouselItem>
                   ))}
                             </CarouselContent>
         </Carousel>
    
        </div>
     </div>

        {/* images */}
     <div className='m-2'>
     <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-2xl'>Images</h1>
        <IoIosArrowForward className='text-xl'/>
        </div>
        <div className=''>
        <Carousel
  opts={{ align: "start" }}
  className="w-full h-full"
>
  <CarouselContent className="h-full items-stretch">
    {imgs.map((img, index) => (
      <CarouselItem
        key={index}
        className="h-full basis-full sm:basis-1/2 lg:basis-1/3 flex"
      >
        <Card className="w-full h-full overflow-hidden cursor-pointer">
          <CardContent className="p-0 w-full h-full flex">
            <img
              src={img}
              alt="img"
              className="w-full h-[70px] object-cover"
            />
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
           </Carousel>



    
        </div>
     </div>

        {/* Icons */}
     <div className='m-2'>
     <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-2xl'>Icons</h1>
        <IoIosArrowForward className='text-xl'/>
        </div>
        <div className=''>
        <Carousel
  opts={{ align: "start" }}
  className="w-full h-full">
  <CarouselContent className="h-full items-stretch">
    {icons.map((icon, index) => (
      <CarouselItem
        key={index}
        className="h-full basis-full sm:basis-1/2 lg:basis-1/3 flex"
      >
        <Card className="w-full h-full overflow-hidden cursor-pointer">
          <CardContent className="p-0 w-full h-full flex">
            <img
              src={icon}
              alt="img"
              className="w-full h-[70px] object-cover"
            />
          </CardContent>
        </Card>
      </CarouselItem>
    ))}
  </CarouselContent>
           </Carousel>
    
        </div>
     </div>

       
     {/* Illustrations */}
     <div className='m-2'>
     <div className='flex items-center justify-between'>
        <h1 className='font-semibold text-2xl'>Illustrations</h1>
        <IoIosArrowForward className='text-xl'/>
        </div>
        <div className=''>
        <Carousel
           opts={{ align: "start" }}
               className="w-full h-full">
          <CarouselContent className="h-full items-stretch">
             {ills.map((ill, index) => (
             <CarouselItem
               key={index}
                className="h-full basis-full sm:basis-1/2 lg:basis-1/3 flex" >
              <Card className="w-full h-full overflow-hidden cursor-pointer">
                 <CardContent className="p-0 w-full h-full flex">
                 <img
                   src={ill}
                    alt="img"
                    className="w-full h-[70px] object-cover"/>
                        </CardContent>
                           </Card>
                        </CarouselItem>
                   ))}
                             </CarouselContent>
         </Carousel>
    
                         </div>
                     </div>

     
     </div>
   </div>
    
   
     
   </>
  )
}

export default Graphics
