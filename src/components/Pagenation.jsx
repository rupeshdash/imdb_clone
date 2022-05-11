import React from 'react'

const Pagenation = () => {
  return (
    <>
      <div className="w-full flex justify-center mb-8 drop-shadow-2xl">
        <button className="p-2 border-4 rounded-l-xl border-r-0">
          Previous
        </button>
        <button className="p-2 border-4 bg-gray-100">1</button>
        <button className="p-2 border-4 rounded-r-xl border-l-0">Next</button>
      </div>
    </>
  );
}

export default Pagenation