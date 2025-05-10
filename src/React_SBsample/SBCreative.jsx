import React, { useState } from 'react';

const SBCreative = ({ myName, number }) => {

    const [nowTime, setNowTime] = useState();

    const timeDisplay = () => {
        const now = new Date();
        const formattedTime = now.toLocaleString();
        setNowTime(formattedTime);
        console.log(`現在時刻：${formattedTime}`);
    }

    return (
        <>
            <div>名前：{myName}</div>
            <button onClick={timeDisplay}>現在時刻を表示</button>
            <div>{nowTime}</div>
        </>
    )
}

export default SBCreative;