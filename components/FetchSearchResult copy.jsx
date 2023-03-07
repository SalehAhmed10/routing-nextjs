"use client"

import Image from "next/image"
import { useEffect, useState } from "react"


export default function FetchSearchResult({ query, searchParams }) {

    const searchParamsString = JSON.stringify(searchParams)

    console.log(searchParamsString)



    // console.log(searchParamsString)

    /// searchParam is an object with a query property that is a string of the search query
    const [searchQuery, setSearchQuery] = useState(searchParams.query)
    const [page, setPage] = useState(1); // how to increment page number on scroll down





    const [searchResults, setSearchResults] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            const result = await fetch(
                // tmdb multi search api
                `https://api.themoviedb.org/3/search/multi?api_key=d9ca72e6e734288573f3247462cf2c1b&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
            ).then(res => res.json()
            ).then(data => {
                console.log(data)
                // keep adding to search results
                setSearchResults([...searchResults, ...data.results])
            }
            )
        }
        fetchData()
    },
        // only run when search query changes
        [searchQuery, page])




    // }, [query])

    return (
        <div>
            <button onClick={() => setPage(page + 1)}>Next Page</button>
            {searchResults.length}
            {searchResults.map((result) => {
                return (
                    <div key={result.id}>
                        <Image
                            src={`https://image.tmdb.org/t/p/w500${result.poster_path}`}
                            alt={result.title || result.name}
                            width={20}
                            height={20}
                            loading="lazy"

                        />
                        <h2>{result.title || result.name}</h2>
                        <p>{result.overview}</p>
                    </div>
                )
            })
            }

            {/* use page state */}




        </div>
    )

}


