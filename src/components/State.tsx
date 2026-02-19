import { useState } from 'react';

const State = () => {
    const [count, setCount] = useState<number>(0);

    return (
        <>
            <h2 className="m-4 text-black text-7xl">{count}</h2>
            <button
                onClick={() => {
                    setCount(count + 1);
                }}
            >
                Click para adicionar
            </button>
        </>
    );
};

export default State;
