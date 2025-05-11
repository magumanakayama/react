import React from 'react';
import { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const update = (step) => setCount((c) => c + step);

    console.log(`count : ${count}`);

    return (
        <>
            <h1>カウント: {count}</h1>
            <ExCounter handleClick={update} step={1}/>
            <ExCounter handleClick={update} step={10}/>
            <ExCounter handleClick={update} step={-1}/>
        </>
    );

}

const ExCounter = ({handleClick, step}) => {
    return (
        <button onClick={() => handleClick(step)}>
            {step}
        </button>
    );
}

export default Counter;