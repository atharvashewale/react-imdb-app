import {useState, useEffect} from 'react'
import genreIDs from '../utility/genreIDs';
import { useContext } from 'react';
import { MovieContext } from './MovieContext';

function Watchlist() {

  const { watchlist, handleAddToWatchlist } = useContext(MovieContext);

  const [ search, setSearch ] = useState('');
  const [ genreList, setGenreList ] = useState(["All Genres"]);
  const [ currGenre, setCurrGenre ] = useState("All Genres");

  useEffect(() => {
    let temp = watchlist.map((movObj) => {
      return genreIDs[movObj.genre_ids[0]];
    });

    temp = new Set(temp)
    setGenreList(["All Genres" , ...temp]);
  }, [watchlist]);

  // function handleSortAscending(param) 
  // {
  //   let sortedWatchlist = watchlist.sort((a, b) => {
  //     return a[param] - b[param];
  //   });

  //   setWatchList(sortedWatchlist);
  // }

  return (
    <>
      {/* filters */}
      <div className='flex justify-center'>
        {
          genreList.map((genreItem, idx) => {
            return <div key={idx} onClick={ () => { setCurrGenre(genreItem) }}  className={ currGenre === genreItem ? 'm-4 bg-blue-400 h-[3rem] w-[7rem] p-4 text-white rounded-xl flex justify-center items-center' : 'm-4 bg-gray-400 h-[3rem] w-[7rem] p-4 text-white rounded-xl flex justify-center items-center'}>{genreItem}</div>
          })
        }
      </div>

      {/* search bar */}
      <div className='flex justify-center my-10'>
        <input onChange={ (e) => { setSearch(e.target.value); } } placeholder='Search Movie' className='bg-gray-200 px-2 h-[2rem] w-[15rem] outline-none border border-black'></input>
      </div>

      {/* movie table */}
      <div className='m-8'>
        <table className='w-full text-center'>
          <thead className='border border-gray-200 bg-gray-200'>
            <tr>
              <th>Name</th>
              <th className='flex justify-center items-end py-2'>Rating</th>
              <th>Popularity</th>
              <th>Genre</th>
              <th></th>
            </tr>
          </thead>

          <tbody>

          { 
            watchlist.filter( movObj => {
              if(currGenre === "All Genres")
                return true;
              else
                return currGenre === genreIDs[movObj.genre_ids[0]]
            }) .filter( movObj => movObj.title.toLowerCase().includes(search.toLowerCase()) ).map((movObj, idx) => (

                <tr key={idx} className='border border-gray-200'>
                <td className='flex py-4 px-2 items-center'>
                  <img src={`https://image.tmdb.org/t/p/original${movObj.backdrop_path}`} className='w-[12rem] h-[7rem]'></img>
                  <div className='ml-5'>{movObj.title}</div>
                </td>
                <td>{movObj.vote_average}</td>
                <td>{movObj.popularity}</td>
                <td>{genreIDs[movObj.genre_ids[0]]}</td>
                <td className='text-red-500'><button onClick={ () => { handleAddToWatchlist(movObj) } }>Delete</button></td>
              </tr>

            ))}
  
          </tbody>
        </table>
      </div>
      

    </>
  )
}

export default Watchlist