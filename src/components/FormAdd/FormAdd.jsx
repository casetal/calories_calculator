import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { increment } from '../store/caloreisSlice';

const FormAdd = () => {
    const dispatch = useDispatch();
    const [countCcal, setCountCcal] = useState('');
    const [countGram, setCountGram] = useState('');

    const calculateCalories = countCcal / 100 * countGram;

    return (
        <div className="max-w-sm mx-auto">
            <div>
                <label htmlFor="input-ccal" className="mb-2 block text-sm font-medium text-gray-900">How many calories are in 100g?</label>
                <input className="input-ccal bg-gray-50 rounded-md border border-gray-300 ps-2 p-2.5 m-2" type="text" value={countCcal} onChange={e => setCountCcal(e.target.value)}/>
            </div>
            <div>
                <label htmlFor="input-gram" className="mb-2 block text-sm font-medium text-gray-900">How many grams?</label>
                <input className="input-gram bg-gray-50 rounded-md border border-gray-300 ps-2 p-2.5 m-2" type="text" value={countGram} onChange={e => setCountGram(e.target.value)}/>
            </div>
            <p>Result: {calculateCalories}</p>
            <button
                className="text-white bg-blue-700 rounded-md px-5 py-2.5 text-center m-2"
                onClick={() => {
                    setcurrentViewAdd(true);
                    dispatch(increment(calculateCalories));
                    setCountCcal('');
                    setCountGram('');
                }}>Add</button>

        </div>
    );
}

export default FormAdd;