import React, { useState } from 'react'
import Movies from './Movies';

const Pagenation = ({ pageProp, pageInc, pageDec }) => {
  return (
    <>
      <div className="w-full flex justify-center mb-8 drop-shadow-2xl">
        <button
          className="p-2 border-4 rounded-l-xl border-r-0"
          onClick={pageDec}
        >
          Previous
        </button>
        <button className="p-2 border-4 bg-gray-100">{pageProp}</button>
        <button
          className="p-2 border-4 rounded-r-xl border-l-0"
          onClick={pageInc}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Pagenation