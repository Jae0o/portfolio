import React, { useContext } from 'react'
import { DarkModeContext } from './DarkMode'

export default function DarkModeButton() {
    const { DarkModeToggle } = useContext(DarkModeContext);
    return (
        <nav>
            <button onClick={() => DarkModeToggle()}> dd</button>
        </nav>
    )
}
