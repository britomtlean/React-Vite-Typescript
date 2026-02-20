//Tipagem usando useRef com elementos HTML

import { useRef, useContext, useEffect } from 'react';
import { Context } from '../context/ContextProvider';

const Ref = () => {

    const { setMessage } = useContext(Context)!;
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {setMessage('Seu Mensagem aqui');},[])

    const focarInput = () => {
        if (inputRef.current) setMessage(inputRef.current.value);
    };

    return (
        <>
            <input
                type="text"
                name="text"
                className="bg-slate-300/35 my-8 rounded-xl border p-2 w-1/4"
                ref={inputRef}
            />
            <button onClick={focarInput}>Alterar Menssagem</button>
        </>
    );
};

export default Ref;
