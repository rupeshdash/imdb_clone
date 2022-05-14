import React, { useEffect, useState } from "react";
import Pagenation from "./Pagenation";
import Image from "../banner.png";
import axios from "axios";
import { Rings } from "react-loader-spinner";

function Movies() {
  const [movie, setMovie] = useState([]);
  const [page, setPage] = useState(1);
  const [hover, setHover] = useState("");
  const [favourites, setFavourites] = useState([]);
  const pageInc = () => {
    setPage(page + 1);
  };

  const pageDec = () => {
    if (page > 1) {
      setPage(page - 1);
    }
  };
  useEffect(
    function () {
      axios
        .get(
          `https://api.themoviedb.org/3/trending/movie/week?api_key=231c3be51ba09a912d3b9aa0bd982f17&page=${page}`
        )
        .then((res) => {
          //console.table(res.data.results);
          setMovie(res.data.results);
          let oldFav = localStorage.getItem("imdb");
          oldFav = JSON.parse(oldFav);
          setFavourites([...oldFav])
        });
    },
    [page]
  );

  // const add = (movieObj) => {
  //   let newMovies = [...favourites, movie];
  //   console.log(newMovies);
  //   setFavourites([...newMovies]);

  // }

  let add = (movie) => {
    let newArray = [...favourites, movie];
    setFavourites([...newArray]);
    console.log(newArray);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };
  let remove = (movie) => {
    let newArray = favourites.filter((m) => m.id !== movie.id);
    setFavourites([...newArray]);
    console.log(newArray);
    localStorage.setItem("imdb", JSON.stringify(newArray));
  };


  return (
    <>
      <div className="mb-8">
        <div className="mt-8 mb-8 font-bold text-2xl text-center">
          Trending Movies
        </div>
        {movie.length === 0 ? (
          <div className="flex justify-center">
            <Rings
              color="#00BFFF"
              height={100}
              width={100}
              className="items-center"
            />
          </div>
        ) : (
          <div className="flex flex-wrap justify-center">
            {movie.map((movieObj) => {
              return (
                <div
                  className={`
                        bg-[url(https://image.tmdb.org/t/p/original/${movieObj.backdrop_path})] 
                        md:h-[30vh] md:w-[250px] 
                        h-[25vh] w-[150px]
                        bg-center bg-cover
                        rounded-xl
                        flex items-end
                        m-4
                        hover:scale-110
                        ease-out duration-300
                        drop-shadow-2xl
                        relative	
                    `}
                  onMouseEnter={() => {
                    // onsole.log(movieObj.id);
                    setHover(movieObj.id);
                  }}
                  onMouseLeave={() => {
                    setHover("");
                  }}
                >
                  {hover == movieObj.id && (
                    <>
                      {!favourites.find((m) => m.id == movieObj.id) ? (
                        <div
                          className="absolute top-2 right-2
                                    p-2
                                    bg-gray-800
                                    rounded-xl
                                    text-xl
                                    cursor-pointer
                                    "
                          onClick={() => add(movieObj)}
                        >
                          😍
                        </div>
                      ) : (
                        <div
                          className="absolute top-2 right-2
                                    p-2
                                    bg-gray-800
                                    rounded-xl
                                    text-xl
                                    cursor-pointer
                                    "
                          onClick={() => remove(movieObj)}
                        >
                          ❌
                        </div>
                      )}
                    </>
                  )}

                  <div className="w-full bg-gray-900 text-white py-2 font-bold text-center rounded-b-xl">
                    {movieObj.original_title}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
      <Pagenation
        pageProp={page}
        pageInc={pageInc}
        pageDec={pageDec}
      ></Pagenation>
    </>
  );
}

export default Movies;
