import { useSelector } from 'react-redux';


const Total = () => {
    const total = useSelector(state => state.calories.value);
    
    return (
        <h1 className="inline-block text-3xl text-gray-900 p-1.5">Total calories: {total}</h1>
    );
}

export default Total;
