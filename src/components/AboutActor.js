import React,{useEffect} from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import { useDispatch, useSelector } from "react-redux";
import { fetchActorDetail , clearActorDetail} from '../redux-components/actions';
import MovieList from './MovieList'

const AboutActor = () => {
    const {actorId} = useParams();
    let navigate = useNavigate();
    const dispatch = useDispatch();

       // Get the List of Actors
       const actorDetail = useSelector((state) => state.actorDetail);
       // Get the Actor Name if it is set
       const actorName  = useSelector((state) => state.actorName);
   

    const imageUrl = actorDetail.profile_path ? `https://image.tmdb.org/t/p/w500/${actorDetail.profile_path}` : "https://via.placeholder.com/500"


    // When the compoenet loads, fill in the Actor Detials
    useEffect(() => {
         window.scrollTo(0, 0) // Scroll to the top of the window when the component mounts 
        if (actorId && actorId !== "") dispatch(fetchActorDetail(actorId))
      return  () => {
        dispatch(clearActorDetail());
      };
    }, [])

    // Function to move back to the previous page
    const handleClickBack = () => {
      navigate('/');

    }
      // Get the list of movies the actor is known for
          const movies = actorDetail.cast;
          console.log('Actor Detail in Use Effect',actorDetail)

    return (
      
        <div className="container">
          {/* Back Button */}
          <div className="row mt-2">
            <div className="d-grid gap-3 d-md-block">
            <button type="button" class="btn btn-outline-secondary" onClick={handleClickBack}>Back</button>
            </div>
          </div>
        {/* Image and Bio */}
        <div className="row  mt-4 mb-6">
            <div className="col-lg-6 text-center bg-light bg-gradient ">
                <img src={imageUrl}  style={{width:'400px'}}alt="" />
            </div>
            <div className="col-lg-6">
                  <h1 className="display-1 mb-4">{actorDetail.name}</h1>

                <h4 className="text-black-50">Summary:</h4>
                {/* <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque beatae exercitationem assumenda quibusdam placeat? Corrupti numquam eum eos minima facere?</p> */}
               <p>{actorDetail.biography ? actorDetail.biography :`The information for ${actorDetail.name } is not Available`}</p>
               <p></p>
                <div>
                <dl class="row">
                    <dt className="col-sm-4 text-black-50"> Date of Birth</dt>
                    <dd className="col-sm-8 ">{actorDetail.birthday ? actorDetail.birthday : 'N/A'}</dd>
                    
                    <dt className="col-sm-4 text-black-50 ">Place of Birth</dt>
                    <dd className="col-sm-8"> {actorDetail.place_of_birth ? actorDetail.place_of_birth : 'N/A'}</dd>
  
                </dl>
                </div>
            </div>
        </div>
        <div className="mt-4 mb-4">
                <h2 className="display-5">Movies Known For</h2>
        </div>
        {/* Showing movies listed */}
        {movies && movies.map( movieDetail => (  <MovieList key={movieDetail.id} movieDetail={movieDetail}/>))} 
     

      </div>
      
    )
}

export default AboutActor
