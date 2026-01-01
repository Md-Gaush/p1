import { useState } from "react";
import Result from "./Result";
import Text from "./components/Text";

import Sidebar from "./Sidebar";
import Uploads from "./components/Uploads";

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
  const [sideBarOpen, setSideBarOpen] = useState(false);

   

  return (
    <>
  <div className="h-screen flex flex-col">
  
  <div className="h-16 w-full border-2 flex items-center justify-center shrink-0">
    {/* <h1 className="text-4xl">Navbar</h1> */}
  </div>

  
  <div className="flex flex-1">
   
    <div className="w-[10%] flex items-center justify-center">
      <Sidebar
        open={() => setSideBarOpen(!sideBarOpen)}
        data={data}
        setData={setData}
      />
    </div>

   
    <div className="w-[90%] flex items-center justify-center bg-gray-300 ">
      <Result data={data} setData={setData} />
    </div>
  </div>
</div>


    </>
  );
}

export default App;
