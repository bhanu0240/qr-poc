import React, { useState } from 'react';
import { useZxing } from "react-zxing";
import "./react-zxing.scss"

export const ReactZxing = () => {
  const [result, setResult] = useState("");
  const { ref } = useZxing({
    onDecodeResult(result) {
      setResult(result.getText());
    },
  });


  return (
    <div className='react-zxing'>
      <div className="video-element">
        <video ref={ref} />
      </div>
      <p>
        <span>Last result:</span>
        <span>{result}</span>
      </p>
    </div>
  );
};

export default ReactZxing;