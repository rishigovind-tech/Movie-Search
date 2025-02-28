import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div class="flex flex-col bg-gradient-to-r from-[#5E5368]  to-[#000000]  shadow-sm border border-slate-200 rounded-lg my-6 w-60 h-[430px]">
      <div class="m-2.5 overflow-hidden rounded-md h-80 flex justify-center items-center">
        <img
          class="w-full h-full object-cover"
          src={movie.Poster}
          alt="profile-picture"
        />
      </div>
      <div class="p-6 text-center">
        <h4 class="mb-1 text-xl font-semibold text-white">
        {movie.Title}
        </h4>
        
        <p class="text-base text-white mt-4 font-light ">
        {movie.Year}
        </p>
      </div>
      
    </div>
  );
};

export default MovieCard;

// <div className="max-w-xs bg-white shadow-lg rounded-2xl overflow-hidden border border-gray-200">
//   <img className="w-full h-60 object-cover" src={movie.Poster}/>
//   <div className="p-4 text-center">
//     <h2 className="text-xl font-semibold text-gray-800">{movie.Title}</h2>
//     <p className="text-gray-600 text-sm">{movie.Year}</p>
//   </div>
// </div>
