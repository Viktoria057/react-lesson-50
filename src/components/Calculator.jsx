import React, { useMemo, useState, useCallback } from 'react';

const Calculator = () => {
    const [count, setCount] = useState(0)
    const [number, setNumber] = useState(5)

    // useMemo
    const squared = useMemo(() => {
        console.log("Calculating square...")
        return number * number
    }, [number])

    // useCallback
    const increment = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])



    return (
        <div>
            <h2>Counter: {count}</h2>
            <button onClick={increment}>Increase Counter</button>


            <input type="number" value ={number} onChange={(e) => setNumber(Number(e.target.value))} />

            <h3>Square of {number} = {squared}</h3>
        </div>
    );
}

export default Calculator

