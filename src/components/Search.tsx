//Pegando dados da url usando useSearchParams

import { useSearchParams } from 'react-router-dom';

const Search = () => {

    const [searchParams] = useSearchParams();
    const title = searchParams.get('title');
    const description = searchParams.get('description');

    return (
        <>
            <div className="text-center text-black text-[0.8rem] mt-8">
                <h1>{title}</h1>
                <h1>{description}</h1>
            </div>
        </>
    );
};

export default Search;
