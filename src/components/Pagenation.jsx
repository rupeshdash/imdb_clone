import React, { useState } from 'react'

const Pagenation = () => {
  const [page, setPage] = useState(1);
  return (
    <>
      <div className="w-full flex justify-center mb-8 drop-shadow-2xl">
        <button className="p-2 border-4 rounded-l-xl border-r-0" onClick={() => page>0 ? setPage(page-1) : page}>
          Previous
        </button>
        <button className="p-2 border-4 bg-gray-100">{page}</button>
        <button className="p-2 border-4 rounded-r-xl border-l-0" onClick={() => setPage(page + 1)}>Next</button>
      </div>
    </>
  );
}

export default Pagenation