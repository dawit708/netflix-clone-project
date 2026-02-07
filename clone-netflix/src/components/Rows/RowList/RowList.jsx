import React from 'react';
import Row from '../Row/Row';
import './RowList.css'
const API_KEY = "a46e623e4444ca766c7ce0e71987a583";

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchTvShow: `tv/popular?api_key=${API_KEY}&language=en-US&page=1`

};

function RowList() {
    return (
        <div className="rowList">
            <Row 
                title="NETFLIX ORIGINALS" 
                fetchUrl={requests.fetchNetflixOriginals} 
                isLargeRow 
            />
            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
             <Row title="TV Shows" fetchUrl={requests.fetchTvShow}/> 
        
        </div>
    );
}

export default RowList;