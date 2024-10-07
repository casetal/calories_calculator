import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { increment } from '../store/caloreisSlice';

const FormAdd = () => {
    const dispatch = useDispatch();
    const [text, setText] = useState('');

    return (
        <div className="max-w-sm mx-auto">
            <label htmlFor="input" className="mb-2 text-sm font-medium text-gray-900">How many calories did you eat today?</label>
            <input className="input bg-gray-50 rounded-md border border-gray-300 ps-2 p-2.5 m-2" type="text" value={text} onChange={e => setText(e.target.value)}/>
            <button className="text-white bg-blue-700 rounded-md px-5 py-2.5 text-center m-2" onClick={() => { dispatch(increment(text)); setText('');}}>Add</button>
        </div>
    );
}

export default FormAdd;