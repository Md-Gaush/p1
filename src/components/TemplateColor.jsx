import React, { useState } from "react";
import { Button } from "./ui/button";


const colors = [
  { name: "Dark Gray", value: "#374151" },
  { name: "Blue", value: "#2563EB" },
  { name: "Green", value: "#16A34A" },
  { name: "Red", value: "#DC2626" },
  { name: "Purple", value: "#7C3AED" },
  { name: "Orange", value: "#EA580C" },
];

const TemplateColor = ({data,setData}) => {
  const [selected, setSelected] = useState(colors[0]);

const handleClickColor = (color)=>{
  setSelected(color)
  setData((prev)=>({
    ...prev,
    color:color
  }))
}

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Template Color</h1>

      <p className="mt-1 text-sm text-gray-600">
        Select Color:{" "}
        <span className="font-semibold text-gray-900">
          {selected.name}
        </span>
      </p>

      <div className="flex gap-3 mt-4">
        {colors.map((color) => (
          <button
            key={color.name}
            onClick={() => handleClickColor(color)}
            className={`h-10 w-10 rounded-full flex items-center justify-center border transition-all 
              ${selected.name === color.name 
                ? "ring-2 ring-black border-black" 
                : "hover:bg-gray-100"
              }`}>
            <Button
              className="h-6 w-6 rounded-full p-0"
              style={{ backgroundColor: color.value }}
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default TemplateColor;
