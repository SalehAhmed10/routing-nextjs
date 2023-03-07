"use client"

import React, { useEffect, useState } from 'react'

import Link from 'next/link'

import { useSearchParams } from 'next/navigation'
import { usePathname } from 'next/navigation'
import { useRouter } from 'next/navigation'



function SearchBar() {
    const [search, setSearch] = useState("")
    const [searchResults, setSearchResults] = useState([])
    const [searchResultsLoading, setSearchResultsLoading] = useState(false)

    // const { search: searchParam } = useSearchParams()
    const router = useRouter();

    const { search: searchParam } = useSearchParams()
    const hanldeSubmit = (e) => {
        e.preventDefault();
        console.log("searching for: " + search)

        // use SearchParams to update the URL
        const params = new URLSearchParams()
        params.set('search', search)

        // use Router to navigate to the new URL

        router.push(`/search?${params.toString()}`)

    }

    return (
        <>
            <form
                className="search-bar"
                // onSubmit={e => {
                //     e.preventDefault();
                //     console.log("searching for: " + search)

                // }}
                onSubmit={hanldeSubmit}
            >

                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                {/* <Link
                href={
                    {
                        pathname: '/search',
                        query: { search: search }
                    }
                }

            > */}
                <button type="submit">Search</button>
                {/* </Link> */}

            </form>



        </>
    );
}

export default SearchBar