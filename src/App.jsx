import React, { useRef, useState } from 'react';

import './App.css'
function App() {

  const [movies, setMovies] = useState([

    {title:'Red',Rating:'5',posterURL:'https://www.impericon.com/432x624x90/media/catalog/product/g/b/gbydco194_sl.jpg'},
    {title:'Wednesday',Rating:'4',posterURL:'https://th.bing.com/th/id/OIP.y8jtHsGA6hLQWW0BuChgxAHaK-?pid=ImgDet&rs=1'},
    {title:'Alice in Borderland',Rating:'3.5',posterURL:'https://i.pinimg.com/originals/6d/ba/bc/6dbabc878bb43364e9c9bea6a62e7b0e.jpg'}
    ]);

  const p1=useRef()
  const p2=useRef()
  const p3=useRef()

  const add=() =>{
    setMovies([...movies,
      { title:p1.current.value,
        Rating:p2.current.value,
        posterURL:p3.current.value
    }
    ])
  }

  return (
    <div >
     <h1>Movie App</h1> 
    
    <input type="text" ref={p1} placeholder="Title" />
    <input type="number" ref={p2} placeholder="Rating" />
    <input type="url" ref={p3} placeholder="Poster URL"  />
    <button onClick={add}>Add Movie</button>
    <div className="movies">
    {movies.map(e=><div className='movieCard'>
        <img src={e.posterURL}></img>
        <div className="info">
        <h2>{e.title}</h2>
        <h3>Rating : {e.Rating}</h3><br/>
      </div>
    </div>)}</div>
    </div>
  )
}

export default App
