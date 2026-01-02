import { useState } from "react";
import Result from "./Result";
import Text from "./components/Text";

import Sidebar from "./Sidebar";
import Uploads from "./components/Uploads";
import Graphics from "./components/Graphics";
import TemplateColor from "./components/TemplateColor";
import Qr from "./components/Qr";
import Table from "./components/Table";
import Editor from "./components/Editor";

function App() {
  const [data, setData] = useState({
    name: "",
    job: "",
    phone: "",
    email: "",
    company: "",
    address1: "",
    address2: "",
    file:"",
    imagePreview :"",
    color:""
  });

  const [activeTool, setActiveTool] = useState('text');
   

  return (
    <>
  <div className="h-screen flex flex-col overflow-y-hidden">
  
  <div className="h-16 w-full border-2 flex items-center justify-center shrink-0">
    {/* <h1 className="text-4xl">Navbar</h1> */}
  </div>

  
  <div className="flex flex-1">
   
    <div className="w-[10%] flex items-center justify-center">
      <Sidebar
        
        data={data}
        setData={setData}
        activeTool={activeTool}
        setActiveTool={setActiveTool}
      />
    </div>
        
   
    <div className="w-[90%] flex items-center justify-between bg-gray-300 px-4">
        
        <div className=" w-[50%] h-full   ">
        <div className="h-[400px] w-[300px] bg-white rounded-2xl mt-3">
        {activeTool === "text" && (
              <Text data={data} setData={setData} />
         )}

          {activeTool === "upload" && (
              <Uploads data={data} setData={setData} />
             )}

           {activeTool === "Graphics" && (
              <Graphics data={data} setData={setData} />
             )}  

             {activeTool === "Color" && (
              <TemplateColor data={data} setData={setData} />
             )}          
          {activeTool === "Qr" && (
              <Qr data={data} setData={setData} />
             )}

          {activeTool === "Tables" && (
              <Table data={data} setData={setData} />
             )}

          </div>
        </div>

        <div className=" w-full h-full flex flex-col items-center">
          <div className="h-[15%] w-full border-2">
          <Editor/>
            </div>
          <div className="h-[90%] w-full border-2 flex items-start">
          <Result data={data} setData={setData} />
          </div>
        </div>

      </div>



  </div>
</div>


    </>
  );
}

export default App;
