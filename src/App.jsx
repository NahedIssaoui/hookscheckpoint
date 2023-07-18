import React, { useRef, useState} from 'react';
import './App.css'
import StarRatingComponent from 'react-star-rating-component';
import Addmovie from './Addmovie';


function App() {

 const [movies, setMovies] = useState([
    {title:'Red',Rating:'5',posterURL:'https://www.impericon.com/432x624x90/media/catalog/product/g/b/gbydco194_sl.jpg'},
    {title:'Wednesday',Rating:'4',posterURL:'https://th.bing.com/th/id/OIP.y8jtHsGA6hLQWW0BuChgxAHaK-?pid=ImgDet&rs=1'},
    {title:'Alice in Borderland',Rating:'3',posterURL:'https://i.pinimg.com/originals/6d/ba/bc/6dbabc878bb43364e9c9bea6a62e7b0e.jpg'},
    {title:'The seven deadly sins',Rating:'5',posterURL:'https://www.themoviedb.org/t/p/w440_and_h660_face/pE4pGQpb7VST7kd6lNQHm6RwBjn.jpg'},
    {title:'Tokyo Ghoul',Rating:'4',posterURL:'https://images-na.ssl-images-amazon.com/images/I/61zNE0m7lRL._AC_SY741_.jpg'},
    {title:'Rick & Morty',Rating:'5',posterURL:'https://th.bing.com/th/id/R.929c72f63fba0a9d51872254fcd294e0?rik=sLOeLT2vKzD50Q&pid=ImgRaw&r=0'},
    {title:'Demon Slayer',Rating:'3',posterURL:'https://th.bing.com/th/id/R.dd97a431e69284f019ccff97e4384356?rik=H%2bUr0UhqTX%2bEtQ&pid=ImgRaw&r=0'},
    
  ]);

 const [filteredMovies, setFilter] = useState(movies);

 const search=useRef()
 const ratingSearch=useRef()

 const filteredByTitle=() =>{
    setFilter(movies.filter(e => e.title.toUpperCase().includes(search.current.value.toUpperCase())))
 }

 const filteredByRating=() =>{
   setFilter(movies.filter(e => e.Rating.includes(ratingSearch.current.value)))

 }

  return (
    <div className='App'>
      <br />
      <div className='filtre'>
        <input type={"search"} placeholder="search by title" ref={search} onChange={filteredByTitle} ></input>
        <input type={"search"} placeholder="search by rating" ref={ratingSearch} onChange={filteredByRating}></input>
        <Addmovie movies={movies} setMovies={setMovies} />
     </div>
     <div className="movies">
       {filteredMovies.map(e=>
        <div className='movieCard'>
          <img src={e.posterURL} alt='img'></img>
          <div className="info">
            <h2>{e.title}</h2>
            <StarRatingComponent 
              name="rate1" 
              starCount={5}
              value={e.Rating}
            />
          </div>
        </div>)}
      </div>
    </div>
  )
}

export default App