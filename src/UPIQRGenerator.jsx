import React, { useState } from "react";
import QRCode from "qrcode.react";

function UPIQRGenerator() {
  const [upiData, setUpiData] = useState("");

  const handleInputChange = (e) => {
    setUpiData(e.target.value);
  };

  return (
    <div>
      <h2>UPI QR Code Generator</h2>
      <label>Enter UPI Data:</label>
      <input
        type="text"
        value={upiData}
        onChange={handleInputChange}
        placeholder="Enter UPI data here"
      />
      {upiData && (
        <div>
          <QRCode value={upiData} size={128} />
        </div>
      )}
    </div>
  );
}

export default UPIQRGenerator;
