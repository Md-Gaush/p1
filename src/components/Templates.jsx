import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { IoSearch } from "react-icons/io5";
import { Input } from "./ui/input";
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {IndustryData} from '../utilts/data.js'
import {StylesData} from '../utilts/data.js'
import { Checkbox } from "./ui/checkbox";
import { Button } from "./ui/button";
import {colors} from '../utilts/data.js'
import { useState } from "react";



const Templates = () => {
  const [showAll, setShowAll] = useState(false)
  return (
    <div className="w-full h-full bg-white flex itmes-center justify-between gap-5 ">
      {/* left side */}
     <div className='w-[40%]  mx-5 mt-5 overflow-y-auto'>
     <Accordion
      type="single"
      collapsible
      className="w-full"
      
    >
    

<AccordionItem value="item-1" className="m-3">
  <AccordionTrigger className="text-xl">
    Industry
  </AccordionTrigger>

  <AccordionContent className="flex flex-col gap-4">
    <RadioGroup>
      {(showAll ? IndustryData : IndustryData.slice(0, 5)).map(
        (item, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <RadioGroupItem
              value={item}
              id={`category-${i}`}
              className="bg-gray-100"
            />
            <Label htmlFor={`category-${i}`} className="font-normal">
              {item}
            </Label>
          </div>
        )
      )}
    </RadioGroup>

    {/* Show More / Less */}
    {IndustryData.length > 5 && (
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-sm text-blue-600 hover:underline self-start mt-2"
      >
        {showAll ? "See less" : "Show more"}
      </button>
    )}
  </AccordionContent>
</AccordionItem>


      <AccordionItem value="item-2" className='m-3'> 
        <AccordionTrigger className='text-xl'>Styles & Themes</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4">
    <RadioGroup>
      {(showAll ?  StylesData :  StylesData.slice(0, 5)).map(
        (item, i) => (
          <div className="flex items-center space-x-2" key={i}>
            <RadioGroupItem
              value={item}
              id={`category-${i}`}
              className="bg-gray-100"
            />
            <Label htmlFor={`category-${i}`} className="font-normal">
              {item}
            </Label>
          </div>
        )
      )}
    </RadioGroup>

    {/* Show More / Less */}
    { StylesData.length > 5 && (
      <button
        onClick={() => setShowAll(!showAll)}
        className="text-sm text-blue-600 hover:underline self-start mt-2"
      >
        {showAll ? "See less" : "Show more"}
      </button>
    )}
  </AccordionContent>
      </AccordionItem>


      <AccordionItem value="item-3" className='m-3'>
        <AccordionTrigger className='text-xl'>Logo / Photo Area</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <div className="flex items-center gap-3">
        <Checkbox id="terms" />
        <Label htmlFor="terms">Has Logo/Photo Area</Label>
      </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-4" className='m-3'>
        <AccordionTrigger className='text-xl'>Design colour</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
        <div className="flex gap-3 mt-4 flex-wrap">
        {colors.map((color) => (
          <div
            key={color.name}
          
            className={`h-10 w-10 rounded-full flex items-center justify-center border transition-all`}>
            <Button
              className="h-6 w-6 rounded-full p-0"
              style={{ backgroundColor: color.value }}
            ></Button>
          </div>
        ))}
      </div>
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-5" className='m-3'>
        <AccordionTrigger className='text-xl'>Size & orientation</AccordionTrigger>
        <AccordionContent className="flex flex-col gap-4 text-balance">
         
        </AccordionContent>
      </AccordionItem>
    </Accordion>
     </div>

       {/* right side */}
       <div className="w-[60%] h-screen overflow-y-auto mt-5">
  
  {/* Header */}
  <div className="sticky top-0 z-50 bg-white px-2 pb-4">
    <h1 className="font-semibold text-2xl mt-6">
      Change template
    </h1>
    <p className="text-sm text-gray-700">
      Choose a new template to start editing.
    </p>

    {/* Search */}
    <div className="mt-3 mr-8 relative">
      <Input
        type="text"
        placeholder="Search for content"
        className="pr-10"
      />
      <IoSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 cursor-pointer text-xl" />
    </div>
  </div>

  {/* Radio List */}
  <div className="mt-6 bg-gray-100 px-2">
    <RadioGroup>
      {IndustryData.map((item, i) => (
        <div
          key={i}
          className="flex items-center space-x-3 p-3 rounded-md hover:bg-gray-100 cursor-pointer"
        >
          <RadioGroupItem
            value={item}
            id={`category-${i}`}
          />
          <Label
            htmlFor={`category-${i}`}
            className="font-normal cursor-pointer"
          >
            {item}
          </Label>
          
        </div>
      ))}
    </RadioGroup>
   
  </div>
  <h1 className="mb-10">Hello</h1>
</div>

    </div>
  )
}

export default Templates
