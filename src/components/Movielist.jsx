import React from 'react'

const Movielist = (props) => {
  const boxStyle = {
    boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.2), -5px -5px 10px rgba(0, 0, 0, 0.2) '
  }

  const { Title, Year, Type, Poster, imdbID, key } = props;

  return (
    <div
      onClick={imdbID}
      style={boxStyle}
      className='movie-container w-[325px] container flex rounded-xl flex-col p-3 border-[2px] cursor-pointer'>
      <img src={Poster} alt="Movie-img" className=' w-[300px] h-[380px] object-fill cursor-pointer ' />
      <h2 className='font-bold my-2 whitespace-nowrap	text-ellipsis overflow-hidden'>{Title}</h2>
      <div className="details flex justify-between font-medium">
        <p>Year : {Year}</p>
        <p>Type : {Type}</p>
      </div>
      {/* {console.log(props.key)} */}
    </div>
  )
}

export default Movielist