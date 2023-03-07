import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";

export default function FetchSearchResult({ searchParams, query }) {
    const [results, setResults] = useState([]);
    const [totalPages, setTotalPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);

    // Listen for searchParams change and reset state variables
    useEffect(() => {
        setResults([]);
        setTotalPages(0);
        setCurrentPage(1);
    }, [searchParams]);

    const fetchResults = async (page) => {
        const apiKey = "d9ca72e6e734288573f3247462cf2c1b";
        const searchQuery = searchParams.query;
        const response = await fetch(
            `https://api.themoviedb.org/3/search/multi?api_key=${apiKey}&language=en-US&query=${searchQuery}&page=${page}&include_adult=false`
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
        fetchResults(currentPage);
    }, [currentPage, searchParams]);

    return (
        <>
            <div>{results.length}</div>

            <InfiniteScroll
                dataLength={results.length}
                next={handleLoadMore}
                hasMore={currentPage < totalPages}
                loader={<h4>Loading...</h4>}
            >
                {results.map((item, index) => (
                    <ol key={index}>
                        <li>{item.title || item.name}</li>
                        <li>{item.overview}</li>
                    </ol>
                ))}
            </InfiniteScroll>
        </>
    );
}
