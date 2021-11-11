// Components That display a card that contains the Actors Name and Image and a link to learn more about the actor
import React from 'react'
import {Link} from 'react-router-dom'

const ActorItem = ({actor}) => {
    const imageUrl = actor.profile_path ? `https://image.tmdb.org/t/p/w500/${actor.profile_path}` : "https://via.placeholder.com/500"
    return (
        <>
        <div className="col">
        <div className="card h-100" >
            <img src={imageUrl} className="card-img-top" alt="..."/>
            <div className="card-body">
                <h5 className="card-title mb-4 text-black-50">{actor.name}</h5>
                 <Link to={`/about/${actor.id}`} className="btn btn-outline-primary btn-sm">Learn More</Link>
            </div>
           
            </div>
        </div>
        </>
    )
}

export default ActorItem