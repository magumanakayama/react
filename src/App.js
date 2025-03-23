// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from 'react';
import Article from "./components/Article"
import TextInput from "./components/TextInput"
import Counter from "./components/Counter"
import ToggleButton from "./components/ToggleButton"
import Button from "@mui/material/Button"

function App() {
    const [name, setName] = useState('')
    const [id, setId] = useState('magumanakayama')
    const ids = ['magumanakayama', 'aws', 'google', 'facebook']
    const getRandomId = () => {
        const _id = ids[Math.floor(Math.random() * ids.length)]
        setId(_id)
    }


    useEffect( () => {
        fetch(`https://api.github.com/users/${id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data)
                setName(data.name)
            })
            .catch(error => {
                console.error(error)
            })
    }, [id])

    return (
        <div>
        {/* <Article
            title={'タイトルです'}
            content={'コンテンツです'}
        /> */}
        {/* <TextInput />
        <Counter />
        <ToggleButton /> */}
        {/* {"aiueo"} */}
        <p>{id}の、GitHub上の名前は{name}です。</p>
        <Button variant="contained" onClick={getRandomId}>IDを変更</Button>
        </div>
    )
};

export default App;