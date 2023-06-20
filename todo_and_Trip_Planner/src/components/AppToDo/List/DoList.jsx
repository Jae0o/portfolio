import React from 'react'
import { FaTrashAlt } from 'react-icons/fa';

export default function DoList({ data, OnDelete, OnUpdate }) {

    const DeleteButton = () => OnDelete(data.id);

    const UpdateButton = (e) => {
        const state = e.target.checked ? "Completed" : "Active";
        OnUpdate({ ...data, state: state });
    };

    return (
        <li className='List'>
            <div className='InputBox'>
                <input className='CheckBoxInput'
                    type='checkbox'
                    id={data.id}
                    checked={data.state === "Completed"}
                    onChange={UpdateButton} />
                <label className='checkBox' htmlFor={data.id}></label>
                <label htmlFor={data.id}>{data.work}</label>
            </div>


            <button className='TrashButton'
                onClick={DeleteButton}><FaTrashAlt /></button>

        </li>
    )
}