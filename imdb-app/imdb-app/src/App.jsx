import NavBar from "./components/NavBar"
import Banner from "./components/Banner"
import Movies from "./components/Movies"
import Watchlist from "./components/Watchlist"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState, useEffect } from "react"
import { MovieContext } from "./components/MovieContext"

function App() {
  
  const [ watchlist, setWatchList ] = useState([]);

  function handleAddToWatchlist(movObj) 
  {
    const updatedWatchList = [...watchlist];

    for(let i = 0; i < updatedWatchList.length; i++) 
    {
      if(!updatedWatchList.length)
      {
        updatedWatchList.push(movObj);
        localStorage.setItem('movieWatchlist', JSON.stringify(updatedWatchList));
        setWatchList(updatedWatchList);
        return;
      }

      if(updatedWatchList[i].id === movObj.id)
      {
        updatedWatchList.splice(i,1);
        localStorage.setItem('movieWatchlist', JSON.stringify(updatedWatchList));
        setWatchList(updatedWatchList);
        return;
      }
    }

    updatedWatchList.push(movObj);
    localStorage.setItem('movieWatchlist', JSON.stringify(updatedWatchList));
    setWatchList(updatedWatchList);
  }

  useEffect(() => {
    if(localStorage.getItem('movieWatchlist'))
      setWatchList(JSON.parse(localStorage.getItem('movieWatchlist')));
  }, []);

  return (
    <>
      <BrowserRouter>
        <MovieContext.Provider value={{handleAddToWatchlist, watchlist, setWatchList}}>
          <NavBar></NavBar>
          <Routes>
            <Route path="/" element={<><Banner></Banner><Movies></Movies></>}></Route>
            <Route path="/watchlist" element={<><Watchlist></Watchlist></>}></Route>
          </Routes>
        </MovieContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
