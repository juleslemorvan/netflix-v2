import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { UserAuth } from "../context/AuthContext";

const Movie = ({ item }) => {
  const [like, setLike] = useState(false);
  const [saved, setSaved] = useState(false)
  const {user} = UserAuth()

  const movieId = doc(db, "users", `${user?.email}`)

  const saveMovie = async () => {
    if(user?.email) {
      setLike(!like)
      setSaved(true)
      await updateDoc(movieId, {
        savedMovies : arrayUnion({
          id: item.id,
          title: item.title,
          img: item.backdrop_path
        })
      })
    } else {
      alert("Please, you have to be Login before saving any movies !")
    }
  }


  return (
    <div className="w-[160px] sm:w-[200px] md:w-[240px] lg:w-[280px] inline-block cursor-pointer relative p-2 ">
      <img
        className="w-full h-auto block"
        src={`https://image.tmdb.org/t/p/w500/${item?.backdrop_path}`}
        alt={item.title}
      />
      <div className="absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white">
        <p className="white-space-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center">
          {item?.title}
        </p>
        <p onClick={saveMovie}>
          {like ? (
            <AiFillHeart className="absolute top-4 left-4 text-gray-300" />
          ) : (
            <AiOutlineHeart className="absolute top-4 left-4 text-gray-300" />
          )}
        </p>
      </div>
    </div>
  );
};

export default Movie;
