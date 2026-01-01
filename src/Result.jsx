import React, { useState } from "react";

const Result = ({ data,view = "front" }) => {
  console.log("data result mai show ho raha hai", data);
   console.log("yaha dekhna hai view ko",view)
  // const [view,setView] = useState("front")

  return (
    
    <>
    {view === "front" ? (
      <div
        className="bg-gray-700 h-[300px] w-[400px] flex flex-col items-center"
        style={{ backgroundColor: data?.color?.value }}
      >
        <div className="h-[280px] w-[380px] flex flex-col items-center space-y-4 border border-dashed border-green-400 mx-4 my-4 text-white">
          <div className="flex mt-2">
            <div className="h-[140px] w-[30%]">
              <img
                src={
                  data?.imagePreview ||
                  "https://www.freeiconspng.com/uploads/doctor-logo-png-medical-dr-symbol-download-1.png"
                }
                alt="img"
              />
            </div>

            <div className="flex flex-col items-center justify-center w-[70%]">
              <h1>{data?.name?.toUpperCase() || "FULL NAME"}</h1>
              <h1>{data?.job?.toUpperCase() || "JOB TITLE"}</h1>
              <p className="border border-dashed border-gray-300 w-[50%] m-2"></p>
              <h1>{data?.phone || "PHONE"}</h1>
              <h1>{data?.email || "EMAIL"}</h1>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <h1>{data?.company || "COMPANY NAME"}</h1>
            <div className="flex gap-3 text-sm">
              <h1>{data?.address1 || "ADDRESS 1"}</h1>
              <h1>{data?.address2 || "ADDRESS 2"}</h1>
            </div>
          </div>
          <div className="border-3 rounded-full bg-yellow-500 w-[80%] mb-0"></div>
        </div>
      </div>
    ) : (
      <div className="h-[300px] w-[400px] bg-white border-2 flex items-center justify-center">
        <h1 className="text-white font-bold "></h1>
      </div>
    )}
  </>
      
        
    
   
  );
};

export default Result;
