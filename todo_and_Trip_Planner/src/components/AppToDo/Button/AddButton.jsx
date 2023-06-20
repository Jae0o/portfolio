import React, { useState } from 'react'
import { v1 as uudiv1 } from 'uuid';
import { MdOutlinePostAdd } from 'react-icons/md'

export default function AddButton({ OnAdd }) {
    const [Text, setText] = useState("");

    const onEventText = (e) => setText(e.target.value);

    const OnClick = (e) => {
        e.preventDefault();
        if (Text.trim().length === 0) {
            return;
        }
        OnAdd({ id: uudiv1(), work: Text.trim(), state: 'Active' });
        setText("");
    };

    return (
        <form className='AddBox' onSubmit={OnClick}>
            <input type='text' value={Text}
                onChange={onEventText} />
            <button><MdOutlinePostAdd /></button>
        </form>
    )
}
