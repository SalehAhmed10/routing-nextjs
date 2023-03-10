"use client"

import React from 'react'
import FetchSearchResult from '../../../components/FetchSearchResult'

const page = ({ searchParams
    // get search params from url
    , params
    // get root params from url


}) => {



    // get the value of the query parameter
    const searchString = searchParams.query

    console.log(searchString)


    return (
        <div>
            {/* display root params from url */}
            <h2>Root Params: {JSON.stringify(params)}</h2>
            {/* display search params from url */}
            <h2>Search Params: {JSON.stringify(searchParams.query)}</h2>

            <FetchSearchResult
                searchString={searchString}
            // send query to fetch search result component


            />
        </div>
    )
}

export default page