import { useState, useEffect } from 'react';
import './css/HookTimer.css';

const HookTimer = ({startTime, name}) => {
    const [count, setCount] = useState(startTime);
    
    useEffect (() => {
        const t = setInterval(() => {
            setCount((c) => c - 1);
        }, 1000);
        return () => clearInterval(t); // クリーンアップ関数
    }, []);

    return (
        <div className={count < 0 ? 'warn' : ''}>
            現在のカウント: {count}秒
        </div>
    );

}

export default HookTimer;