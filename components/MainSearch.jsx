"use client";

import Link from 'next/link';
import { useRouter } from 'next/navigation';

import Router from 'next/router';
import React, { useState } from 'react'

export default function MainSearch() {

    const [search, setSearch] = useState("")

    const router = useRouter();



    const hanldeSubmit = (e) => {
        e.preventDefault();
        console.log("searching for: " + search)

        //<Link href={`/user?query=${search}`}> converts to this into router.push
        router.push(`/user?query=${search}`)

    }




    return (
        <div>

            <form onSubmit={hanldeSubmit}>
                <input
                    type="text"
                    placeholder="Search"
                    value={search}
                    onChange={e => setSearch(e.target.value)}
                />

                {/* <Link href={`/user?query=${search}`}> */}

                <button
                    type="submit"

                >
                    Main Search
                </button>
                {/* </Link> */}
            </form>

        </div>
    )
}
