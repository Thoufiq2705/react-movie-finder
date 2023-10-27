import React, { useEffect, useState } from 'react'
import X from '../Assets/X.png';

const Movieinfo = (props) => {

  const [movieinfo, setMovieInfo] = useState("useState");

  const { property, hide } = props;

  useEffect(() => {
    fetch(`https://www.omdbapi.com/?i=${property}&apikey=5cff916`)
      .then((response) => response.json())
      .then((json) => {
        setMovieInfo(json)
      })
  }, [property])


  return (
    <div className=' w-full flex justify-between'>
      <div className='flex flex-row py-10 px-16 h-[30rem] justify-start  items-center container'>
        <img src={movieinfo.Poster} alt="click-movie" className='w-[300px] h-[380px] object-fill mr-5' />
        <div className="details flex flex-col items-start justify-start h-[100%] py-3 px-5 gap-y-1">
          <h2 className='text-2xl font-bold mb-4'>Movie :&nbsp;{movieinfo.Title} </h2>
          <p><span className='text-lg font-medium'>IMDB Ratings: {movieinfo.imdbRating} </span></p>
          <p><span className='text-lg font-medium'>Year: {movieinfo.Year}</span></p>
          <p><span className='text-lg font-medium'>Language: {movieinfo.Language} </span></p>
          <p><span className='text-lg font-medium'>Rated: {movieinfo.Rated} </span></p>
          <p><span className='text-lg font-medium'>Released: {movieinfo.Released} </span></p>
          <p><span className='text-lg font-medium'>Runtime: {movieinfo.Runtime} </span></p>
          <p><span className='text-lg font-medium'>Genre: {movieinfo.Genre} </span></p>
          <p><span className='text-lg font-medium'>Actors: {movieinfo.Actors} </span></p>
          <p><span className='text-lg font-medium whitespace-normal	text-ellipsis overflow-x-hidden'>Plot : {movieinfo.Plot} </span></p>
        </div>
      </div>
      <img src={X} alt="" className=' w-28 h-28 px-3 cursor-pointer m-5'
        onClick={hide}
      ></img>
    </div>
  )
}

export default Movieinfo