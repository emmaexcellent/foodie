import React from 'react'

const SearchBar = () => {
  return (
    <div className="relative mt-5">
      <input
        className="h-12 rounded-xl placeholder:px-3 text-sm w-[300px] md:w-[450px] border"
        placeholder="Search..."
      />
      <button className="absolute top-1 right-1 h-10 px-8 rounded-xl bg-black text-white font-semibold hover:bg-black/70">
        Search
      </button>
    </div>
  );
}

export default SearchBar