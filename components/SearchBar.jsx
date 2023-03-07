"use client"

import React, { useEffect, useState } from 'react'
import Router from 'next/navigation'
import Link from 'next/link'



function SearchBar() {



    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [searchResultsLoading, setSearchResultsLoading] = useState(false)


    return (
        <form
            className="search-bar"
            onSubmit={e => {
                e.preventDefault();
                console.log("searching for: " + search)

            }}
        >

            <input
                type="text"
                placeholder="Search"
                value={search}
                onChange={e => setSearch(e.target.value)}
            />

            <Link
                href="/search/[query]" as={`/search?query=${search}`}

            >
                <button type="submit">Search</button>
            </Link>



        </form>
    );
}

export default SearchBar