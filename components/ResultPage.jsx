import Image from 'next/image';
import React, { useEffect, useState } from 'react'

function ResultPage({ searchString }) {

    const [results, setResults] = useState([]);

    const fetchResults = async (searchString) => {

        const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=d9ca72e6e734288573f3247462cf2c1b&language=en-US&query=${searchString}&page=1&include_adult=false`)
        const data = await res.json()
        setResults(data.results)
        console.log(data)
    }

    useEffect(() => {
        fetchResults(searchString)
    }, [searchString])

    return (
        <div>
            {searchString}

            {results.map((item, index) => (
                <div key={index}>

                    <h2>{item.title || item.name}</h2>

                    <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name}
                        width={100} height={100} />
                </div>

            ))}

        </div>



    )
}

export default ResultPage
