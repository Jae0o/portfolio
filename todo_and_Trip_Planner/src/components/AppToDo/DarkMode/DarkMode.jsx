import React, { useState, createContext, useEffect } from 'react'

export const DarkModeContext = createContext();

export default function DarkMode({ children }) {
    const [DarkState, setDarkState] = useState(false);

    const DarkModeToggle = () => {
        setDarkState((data) => !data);
        UpdateDarkMode(!DarkState);
    };

    useEffect(() => {
        const IFDark =
            localStorage.theme === 'dark' ||
            (!('theme' in localStorage) &&
                window.matchMedia('(prefers-color-scheme: dark)').matches);
        setDarkState(IFDark);
        UpdateDarkMode(IFDark);
    }, [])

    function UpdateDarkMode(DarkMode) {

        if (DarkMode) {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        };
    };

    return (
        <DarkModeContext.Provider value={{ DarkState: DarkState, DarkModeToggle }}>
            {children}
        </ DarkModeContext.Provider>
    )
}