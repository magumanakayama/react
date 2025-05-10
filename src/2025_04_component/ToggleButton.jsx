import React, { useState, useEffect } from 'react';

const ToggleButton = () => {
    const [open, setOpen] = useState(false)

    const toggle = () => {
        setOpen(prevState => !prevState)
    }

    useEffect(() => {
        console.log("useEffect:" + open)

        if (open) {
            console.log("読み込み中")
        }

        return () => {
            console.log("クリーンアップ処理" )
        }
    })

    return (
        <button onClick={toggle}>
            {open ? "OPEN" : "CLOSE"}
        </button>
    )
}

export default ToggleButton;