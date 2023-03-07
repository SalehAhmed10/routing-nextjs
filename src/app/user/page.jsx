'use client';

import { useSearchParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function SearchBar() {
    const searchParams = useSearchParams();

    const query = searchParams.get('query');

    // URL -> `/dashboard?search=my-project`

    // `search` -> 'my-project'

    const [result, setResult] = useState([])

    const getData = async (query) => {

        const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=d9ca72e6e734288573f3247462cf2c1b&language=en-US&query=${query}&page=1&include_adult=false`)
        const data = await res.json()
        setResult(data.results)
    }

    useEffect(() => {
        getData(query)
    }, [query])



    return (
        <>
            Search: {query}

            {result.map((item, index) => (
                <div key={index}>
                    <h2>{item.title || item.name}</h2>
                </div>
            ))}


        </>
    );
}