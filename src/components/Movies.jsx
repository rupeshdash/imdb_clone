import React, { useEffect, useState } from "react";
import Image from "../banner.png";
import axios from "axios";
import { Rings } from "react-loader-spinner";
function Movies() {
  const [movie, setMovie] = useState([]);
  useEffect(() => {
    axios
      .get(
        "https://api.themoviedb.org/3/trending/movie/week?api_key=231c3be51ba09a912d3b9aa0bd982f17"
      )
      .then((res) => {
        console.table(res.data.results);
        setMovie(res.data.results);
      });
  }, []);

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
              console.log(movieObj.original_title);
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
                    `}
                >
                  <div className="w-full bg-gray-900 text-white py-2 font-bold text-center rounded-b-xl">
                    {movieObj.original_title}
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </>
  );
}

export default Movies;
