import React from 'react'
import { useLocation } from 'react-router-dom';

const MovieInfos = () => {
  const location = useLocation();

  console.log(location.state.data);

  const path = location.state.data;

  const dateFormater = (date) => {
    return date?.split("-").reverse().join("/");
  };


  const genreFinder =() => {
    let genreArray = []
    for(let i = 0; i < path.genre_ids.length; i++) {
      switch (path.genre_ids[i]) {
        case 28:
          genreArray.push('Action');
          break;
        case 12:
          genreArray.push('Aventure');
          break;
           case 16:
          genreArray.push('Animation');
          break;
           case 35:
          genreArray.push('Comédie');
          break;
           case 80:
          genreArray.push('Policier');
          break;
           case 99:
          genreArray.push('Documentaire');
          break;
           case 18:
          genreArray.push('Drame');
          break;
           case 10751:
          genreArray.push('Famille');
          break;
           case 14:
          genreArray.push('Fantaisie');
          break;
           case 10402:
          genreArray.push('Musique');
          break;
           case 9648:
          genreArray.push('Mystere');
          break;
           case 10749:
          genreArray.push('Romance');
          break;
           case 878:
          genreArray.push('Science-Fiction');
          break;
           case 10770:
          genreArray.push('Telefilm');
          break;
           case 53:
          genreArray.push('Thriller');
          break;
           case 10752:
          genreArray.push('Guerre');
          break;
           case 37:
          genreArray.push('Western');
          break;
          default:
          break
      }
    }
    return genreArray.map((genre) =>  <li className='p-2 border-3 rounded-lg border-solid border-white' key={genre}>{genre}</li>)
  }

  return (
    <div className="text-slate-300">
      <div className="w-full h-[550px] text-white font-mono tracking-wide">
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${path.backdrop_path}`}
          alt={path.id}
        />
      </div>
      <div className="flex justify-center items-center flex-col">
        <h1 className=" text-white  text-5xl p-4">{path.title}</h1>
        <p className="text-white p-4 text-xl font-bold">
          {" "}
          Résumé :{" "}
          <span className="text-sm text-slate-300 tracking-wide">
            {" "}
            {path.overview}
          </span>
        </p>
        <p className='p-2'> <span className="text-white p-4 text-xl font-bold">Titre Originale :</span> {path.original_title}</p>
        <p className='p-2'> <span className="text-white p-4 text-xl font-bold">Date de Sortie :</span> {dateFormater(path.release_date)}</p>
        <p className='p-2'><span className="text-white p-4 text-xl font-bold">Note IMDB :</span> {path.vote_average}/10 ⭐</p>
        <ul className='flex justify-center items-center'>
          <span className="text-white p-4 text-xl font-bold"> Genre :</span>
          {
            path.genre_ids ? genreFinder() : null
          }
        </ul>
      </div>
      
    </div>
  );
};


export default MovieInfos;