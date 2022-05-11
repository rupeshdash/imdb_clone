import React from 'react'
import logo from '../imdblogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <>
      <div className="pl-12 pt-6 flex space-x-8 items-center text-lg antialiased font-extrabold  	 ">
        <img src={logo} style={{ height: "3rem", weight: "3rem" }} />
        <Link to="/" className="text-3xl">Movies</Link>
        <Link to="favourites">Favourites</Link>
      </div>
    </>
  );
}

export default Navbar