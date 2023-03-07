"use client"

import React, { use, useEffect, useState } from 'react'
import FetchSearchResult from '../../../components/FetchSearchResult'
import ResultPage from '../../../components/ResultPage'

const page = ({ searchParams }) => {


    // get the value of the query parameter
    const searchString = searchParams.search


    console.log(searchParams.search)

    // fetch tmdb api multi

    // const fetchData = async () => {
    //     const res = await fetch(`https://api.themoviedb.org/3/search/multi?api_key=d9ca72e6e734288573f3247462cf2c1b&language=en-US&query=${searchString}&page=1&include_adult=false`)
    //     const data = await res.json()
    //     console.log(data)
    // }





    return (
        <div>
            {/* display root params from url */}

            {/* display search params from url */}
            {/* <h2>Search Params: {JSON.stringify(searchParams.query)}</h2> */}

            {/* <h2>{JSON.stringify(searchParams)}</h2>

            <button onClick={fetchData}>Fetch Data</button> */}

            <ResultPage
                searchString={searchString}
            />

        </div>
    )
}

export default page