import React, { useEffect, useState } from 'react'
import DoList from './List/DoList';
import AddButton from './Button/AddButton';

function localStorageData() {
    const data = localStorage.getItem('List')
    return data ? JSON.parse(data) : [];
};

export default function ToDo({ FilterState }) {
    const [List, setList] = useState(() => localStorageData());


    // filter
    function OnFilter(List, Filter) {
        if (Filter === "All") {
            return List;
        }
        return List.filter(list => list.state === Filter);
    };
    // Update Function
    const AddHandle = (data) => { setList([...List, data]) };
    const DeleteHandle = (data) => {
        setList(
            List.filter((e) => e.id !== data)
        )
    };
    const UpdataHandle = (data) => {
        setList(List.map((list) => list.id === data.id ? data : list))
    };

    useEffect(() => {
        localStorage.setItem('List', JSON.stringify(List))
    }, [List]);

    const Filtered = OnFilter(List, FilterState);

    return (
        <div className='MainBox'>
            <ul className='ListBox'>
                {Filtered.map((data) => {
                    return (<DoList key={data.id} data={data} OnDelete={DeleteHandle} OnUpdate={UpdataHandle} />)
                })}
            </ul>
            <AddButton OnAdd={AddHandle} />
        </div>
    )
};