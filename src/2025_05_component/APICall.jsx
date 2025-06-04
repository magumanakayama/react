import React, { useState } from 'react';

const APICall = () => {
  const [result, setResult] = useState('');
  const [loading, setLoading] = useState(false);

  const callAPI = async () => {
    setLoading(true);
    setResult('');
    try {
      // frontもexpressも同じdockerネットワーク上で動いている場合は
      // サービス名（express）でアクセスする必要があります
    //   const res = await fetch('http://express:4000/');
      const res = await fetch('"https://randomuser.me/api/"'); 
      if (!res.ok) throw new Error('API error');
      const text = await res.text();
      setResult(text);
    } catch (e) {
      setResult('エラー: ' + e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <button onClick={callAPI} disabled={loading}>
        {loading ? '通信中...' : 'APIコール'}
      </button>
      <div style={{ marginTop: 10 }}>
        結果: {result}
      </div>
    </div>
  );
};

export default APICall;
