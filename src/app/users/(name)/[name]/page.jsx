"use client"

import React from 'react'

const page = ({ params, searchParams }) => {

    console.log(searchParams)
    return (
        <div>
            Other Names : {params.name}
        </div>
    )
}

export default page