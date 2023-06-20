import React from 'react'

export default function HeaderButton({ State, value, OnFilter }) {
    return (
        <header>
            <ul className='ButtonMenu'>
                {State.map((data, index) => (
                    <li key={index}>
                        <button className={`HeaderButton ${data === value && "selected"}`}
                            onClick={() => OnFilter(data)}>
                            {data}
                        </button>
                    </li>
                ))}
            </ul>
        </header >
    )
}
