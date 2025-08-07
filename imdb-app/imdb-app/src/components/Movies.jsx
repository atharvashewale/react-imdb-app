import React from 'react'
import MovieCards from './MovieCards'
import axios from 'axios';
import { useEffect, useState } from 'react';
import Pagination from './Pagination';

function Movies() {

  const [movie, setMovie] = useState([]);
  const [pageNum, setPageNum] = useState(1);

  function navToNextPage() 
  {
    setPageNum( pageNum + 1);
  }

  function navToPrevPage()
  {
    if(pageNum === 1)
      setPageNum(1);
    else
      setPageNum( pageNum - 1);
  }

  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/trending/movie/day',
    params: {language: 'en-US', page: pageNum},
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJlMGJmNTM5MDQ1ZGY0MTJmMTRlN2M2YWEyMWI1Yzk3NCIsIm5iZiI6MTc0NzQwMzQ1MS42MjUsInN1YiI6IjY4Mjc0MmJiMjk0NGUyOWYzNDBhODVkNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CWEp1k25D4-oyZSpNJhVr5Tu5QShxLPt0YqUtJutYiU'
    }
  };

  useEffect(() => {
    options.params.page = pageNum;
    axios
    .request(options)
    .then(
      res => {
        setMovie(res.data.results);
      }
    )
    .catch(err => console.error(err));
  }, [pageNum]);

  return (
    <div>
        <div className='text-center text-black text-2xl font-bold m-10'>Trending Movies</div>
        <div className='flex gap-9 justify-evenly flex-wrap'>
            {movie.map((movObj, idx) => {
              return <MovieCards key={idx} name={movObj.title} poster={movObj.poster_path} movObj={movObj}></MovieCards>
            })}
        </div>

        <Pagination navNextPage={navToNextPage} navPrevPage={navToPrevPage} pageNumber={pageNum}></Pagination>
    </div>
  )
}

export default Movies