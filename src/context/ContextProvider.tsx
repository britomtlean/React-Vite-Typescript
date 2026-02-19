import { useState, createContext } from 'react';
import type { PropsWithChildren } from 'react';

export type ContextType = {
    theme: string;
    setTheme: React.Dispatch<React.SetStateAction<string>>;
    status: boolean;
    setStatus: React.Dispatch<React.SetStateAction<boolean>>;
    message: string;
    setMessage: React.Dispatch<React.SetStateAction<string>>;
};

//function createContext<T>(defaultValue: T): React.Context<T>

//createContext() Deve receber um tipo e ser atribuido pelo mesmo tipo
export const Context: React.Context<ContextType | null> = createContext<ContextType | null>(null);

/************************************************************************************** */

export const ContextProvider = ({ children }: PropsWithChildren) => {
    
    const [theme, setTheme] = useState<string>('default');
    const [status, setStatus] = useState<boolean>(true);
    const [message, setMessage] = useState<string>('Hello Context');

    return (
        <Context.Provider value={{ theme, setTheme, status, setStatus, message, setMessage }}>
            {children}
        </Context.Provider>
    );
};

export default ContextProvider;
