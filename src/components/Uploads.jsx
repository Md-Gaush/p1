import React, { useRef, useState } from "react";
import { Input } from "@/components/ui/input";
import { TbCloudUpload } from "react-icons/tb";
import { MdQrCodeScanner } from "react-icons/md";
import { readFileDataUrl } from "@/lib/utils";
import { MdDelete } from "react-icons/md";

const Uploads = ({ data, setData }) => {
  const fileRef = useRef(null);

  // const [file, setFile] = useState("");
  // const [imagePreview, setImagePreview] = useState("");

  const fileChangeHandler = async (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const dataUri = await readFileDataUrl(file);
    setData((prev)=>({
      ...prev,
      file:file,
      imagePreview: dataUri,
    }))
  };
  // remove-image
  const removeImage = () => {
    setData((prev)=>({
      ...prev,
      file:"",
      imagePreview:""
    }))
    if (fileRef.current) {
      fileRef.current.value = "";
    }
  };

  return (
    <div className="flex flex-col">
      <h2 className="text-xl font-semibold m-4">Uploads</h2>

      {/* Upload Card */}
      <div
        onClick={() => fileRef.current.click()}
        className=" mx-4 flex flex-row rounded-xl items-center gap-2 justify-center cursor-pointer bg-blue-400 mt-5 h-10"
      >
        <TbCloudUpload className="text-3xl " />
        <p className="text-sm font-medium ">Upload from this device</p>

        <Input
          ref={fileRef}
          type="file"
          className="hidden"
          onChange={fileChangeHandler}
        />
      </div>

      <div
      
        className=" mx-4 flex flex-row rounded-xl items-center gap-2 justify-center cursor-pointer border-2 hover:bg-gray-200 mt-2 h-10"
      >
        <MdQrCodeScanner className="text-3xl" />
        <p className="text-sm font-medium ">Upload from phone</p>

        <Input type="" className="hidden" />
      </div>
  
  {/* show image */}

      <div className="flex-1 mx-10">
  {data?.imagePreview && (
    <div className="relative w-30 h-30 mt-3 rounded-md overflow-hidden border flex items-center justify-center">
      
      <img
        src={data?.imagePreview}
        alt="preview"
        className="object-contain w-full h-full"
      />

      {/* Delete Icon */}
      <button
        onClick={removeImage}
        className="absolute top-1 right-1 bg-black/60 text-white p-1 rounded-full hover:bg-red-600 transition"
      >
        <MdDelete size={16} />
      </button>

    </div>
  )}
</div>

      <div className="mt-15 flex flex-col items-center justify-center space-y-1 fixed bottom-10 ">
        <p className="text-sm">Sign in to access previous uploads.</p>
        <div className=" mx-4 flex flex-row rounded-xl items-center gap-2 justify-center cursor-pointer border-2 hover:bg-gray-200 w-65 h-10">
          <p className="text-sm font-medium ">Sign in</p>
        </div>
      </div>
    </div>
  );
};

export default Uploads;
