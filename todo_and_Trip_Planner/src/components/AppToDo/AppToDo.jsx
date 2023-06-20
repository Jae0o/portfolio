import React, { useState } from 'react'
import ToDo from './ToDo'
import HeaderButton from './Button/HeaderButton';
// import '../../CSS/AppToDo.css'
import DarkMode from './DarkMode/DarkMode';
import DarkModeButton from './DarkMode/DarkModeButton';

const Category = ['All', 'Active', 'Completed']
export default function AppToDo() {
    const [State, setState] = useState(Category[0]);

    return (
        <DarkMode >
            <div className='AppToDo'>
                <DarkModeButton />
                <HeaderButton State={Category} value={State} OnFilter={(e) => setState(e)} />
                <ToDo FilterState={State} />
            </div>
        </DarkMode >
    )
}
