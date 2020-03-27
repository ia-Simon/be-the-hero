import React, { useState } from 'react';

export default function Contador() {
    const [counter, setCounter] = useState(0);

    return (
        <div>
            <h3>{counter}</h3>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </div>
    );
}