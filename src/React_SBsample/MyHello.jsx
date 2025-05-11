import React from 'react';

const MyHello = (props) => {
    return (
        <div>
            <p>こんにちは、{props.myName}さん！</p>
            <p>あなたの年齢は{props.age}歳です。</p>
        </div>
    );
}

export default MyHello;