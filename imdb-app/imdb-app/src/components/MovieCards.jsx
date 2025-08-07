import { useContext } from "react";
import { MovieContext } from "./MovieContext";

function MovieCards({name, poster, movObj}) {

  const {handleAddToWatchlist, watchlist} = useContext(MovieContext);
  const posterURL = `https://image.tmdb.org/t/p/original/${poster}`;

  function inWatchlistFn(movObj) 
  {
    for(let i = 0; i < watchlist.length; i++) 
    {
      if(movObj.id === watchlist[i].id)
        return true;
    }

    return false;
  }

  return (
    <div style={ {backgroundImage: `url(${posterURL})`}} className= 'w-[15rem] h-[20rem] bg-cover rounded-lg flex flex-col justify-between hover:scale-110 m-2 duration-300'>
        <div onClick={() => { handleAddToWatchlist(movObj); }} className='self-end p-1'>
          { inWatchlistFn(movObj) ? "✅" : "😍" }
        </div>
        <div className='text-center text-white text-xl bg-gray-900/70 p-2 rounded-lg w-full'>
            {name}
        </div>
    </div>
  )
}

export default MovieCards