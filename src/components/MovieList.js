import React from 'react'

const MovieList = ({movieDetail}) => {
    const movieImageUrl = movieDetail.poster_path ? `https://image.tmdb.org/t/p/w500${movieDetail.poster_path}` : "https://via.placeholder.com/200"

    return (
        <>
        <div className="row mt-2">
           <div className="col">
           <div className="card mb-3">
               <div className="row g-0">
                   <div className="col-md-4 text-center bg-light bg-gradient">
                   <img src={movieImageUrl} style={{width:'18rem', height:'18rem'}} className="img-fluid rounded-start" alt="..."/>
                   </div>
                   <div className="col-md-8">
                   <div className="card-body">
                       <h5 className="card-title display-6">{movieDetail.title}</h5>
                       <p className="card-text"><small className="text-muted">- {movieDetail.character}</small></p>
                       <p className="card-text">{movieDetail.overview}</p>
                   </div>
                   </div>
               </div>
           </div>
           </div>
       </div>
        </>
    )
}

export default MovieList
