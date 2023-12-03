/** @jsxImportSource preact */
import { useState } from 'preact/hooks';

export function PreactCounter({ children }) {
    const [count, setCount] = useState(0);
    const add = () => setCount((i) => i + 1);
    const subtract = () => setCount((i) => i - 1);

    return (
        <>
            <div className="counter-card">
                <button className="counter-button" onClick={subtract}>-</button>
                <pre className="counter-value">{count}</pre>
                <button className="counter-button" onClick={add}>+</button>
            </div>
            <div className="counter-message">{children}</div>
        </>
    );
}
