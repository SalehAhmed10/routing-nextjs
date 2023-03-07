"use client"

import React from 'react'
import FetchSearchResult from '../../../components/FetchSearchResult'

const page = ({ searchParams
    // get search params from url
    , params
    // get root params from url


}) => {

    console.log(params)

    // get the value of the query parameter
    searchParams.query = searchParams.query || params.query

    console.log(searchParams.query)

    console.log(searchParams)
    return (
        <div>
            {/* display root params from url */}
            <h2>Root Params: {JSON.stringify(params)}</h2>
            {/* display search params from url */}
            <h2>Search Params: {JSON.stringify(searchParams)}</h2>

            <FetchSearchResult
                searchParams={searchParams}
            // send query to fetch search result component


            />
        </div>
    )
}

export default page