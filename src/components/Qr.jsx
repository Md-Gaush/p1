import React, { useState } from "react"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { QRCodeCanvas } from "qrcode.react"

const Qr = () => {
  const [url, setUrl] = useState("")
  const [showQr, setShowQr] = useState(false)

  return (
    <div className="max-w-md mx-auto mt-0 relative">
     
      <div className="rounded-xl border bg-white shadow-sm p-6 space-y-6">
        
      
        <div className="space-y-1">
          <h1 className="text-xl font-semibold">QR Code Generator</h1>
          <p className="text-sm text-muted-foreground">
            Enter a URL to generate a QR code.
          </p>
        </div>

        
        <Input
          placeholder="https://www.example.com"
          value={url}
          onChange={(e) => {
            setUrl(e.target.value)
            setShowQr(false)
          }}
          className="h-11"
        />

        {/* Button */}
        <Button
          className="w-full"
          disabled={!url.trim()}
          onClick={() => setShowQr(true)}
        >
          Generate QR Code
        </Button>

        {showQr && (
          <div className="pt-4 flex justify-center  ">
            <div className="rounded-lg border p-4 bg-gray-50">
              <QRCodeCanvas
                value={url}
                size={110}
                bgColor="#ffffff"
                fgColor="#000000"
                level="H"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Qr
