import type { FunctionComponent, ReactNode } from 'react';

type Props = {
    nome: string;
    idade: number;
    children?: ReactNode;
};

const Home: FunctionComponent<Props> = ({ nome, idade, children }) => {
    return (
        <>
            <header>
                <h1>LOGO</h1>
                <ul>
                    <li>Nome: {nome}</li>
                    <li>Idade: {idade}</li>
                </ul>
            </header>
            {children}
            <footer>
                <h1>Todos os direitos reservados.</h1>
            </footer>
        </>
    );
};

export default Home;
