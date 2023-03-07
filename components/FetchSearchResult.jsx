import Image from "next/image";
import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function FetchSearchResult({ searchString }) {
    const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1)


    console.log(searchString)

    // Listen for searchString change and reset state variables
    useEffect(() => {
        console.log("searchString changed 1 ")
        setResults([]);
        setTotalPages(0);
        setCurrentPage(1);
        console.log("searchString changed 2")
    }, [searchString]);

    const fetchResults = async (page) => {
        const apiKey = "d9ca72e6e734288573f3247462cf2c1b";
        // const searchQuery = searchString;
        // console.log(searchQuery)
        const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchString}&page=${page}&include_adult=false`
        );
        const data = await response.json();
        setResults((prevResults) => [...prevResults, ...data.results]);
        setTotalPages(data.total_pages);
        console.log(data);
        console.log(data.results);
    };

    const handleLoadMore = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    useEffect(() => {
        console.log("useEffect called")
        fetchResults(currentPage);
        console.log("useEffect called 2")
    }, [currentPage, searchString]);

    return (
        <>
            <div>{results.length}</div>
            {results.length > 0 ? "Yes Results" : "No Results"}

            <InfiniteScroll
                dataLength={results.length}
                next={handleLoadMore}
                hasMore={currentPage < totalPages}
                loader={<h4>Loading...</h4>}
            >
                {results.map((item, index) => (
                    <ol key={index}>
                        <Image src={`https://image.tmdb.org/t/p/w500${item.poster_path}`} alt={item.title || item.name} width={100} height={100} />

                        <li>{item.title || item.name}</li>
                        <li>{item.overview}</li>
                    </ol>
                ))}
            </InfiniteScroll>
        </>
    );
}
