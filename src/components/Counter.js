import React, {useState} from 'react';

function Counter() {
    console.log('Im a counter')

    const [count, setCount] = useState(0);

    function increment() {
        console.log('adding')
        setCount(count + 1)
    }

    function decrement() {
        console.log('subtracting')
        setCount(count - 1)
    }

    return (
        <div className="counter">
            <button onClick={() => decrement() } >-</button>
            <p>count: {count}</p>
            <button onClick={() => increment() } >+</button>
            
        </div>
    )
}

export default Counter