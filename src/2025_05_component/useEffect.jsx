import { useState, useEffect } from 'react';

const StateEffect = ({props}) => {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date().toLocaleString());

    // console.log(`count: ${count}`);
    // console.log(`date: ${date}`);

    useEffect (() => {
        console.log(`count: ${count}`);
    }, [count]);
    useEffect (() => {
        console.log(`date: ${date}`);
    }, [date]);

    const handleClick = () => setCount((c) => c + 1);
    const handleDateClick = () => setDate(new Date().toLocaleString());

    return (
        <>
            <button onClick={handleClick}>count</button>
            <p>{count}回クリックされました</p>
            <button onClick={handleDateClick}>Date</button>
            <p>現在時刻：{date}</p>
        </>
    );

}

export default StateEffect;