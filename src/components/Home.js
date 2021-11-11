import React,{useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { fetchActors } from '../redux-components/actions';
import SearchActor from './SearchActor'
import ActorItem from './ActorItem';
const Home = () => {
    // Get the List of Actors
    const actorsList = useSelector((state) => state.actors);
    // Get the Actor Name if it is set
    const actorName  = useSelector((state) => state.actorName);
    const dispatch = useDispatch();

    useEffect(() => {
        // Dispacth to Redux Middleware to fetch the Actors
        dispatch(fetchActors(actorName))
    }, [])

    console.log('List of Actors', actorsList)

    return (
        <div>
            <div className="container"> 
                <h1 className="mt-4 display-4">Type in your Actor</h1>
                 <SearchActor/>
                <div className="row row-cols-sm-2 row-cols-lg-4 row-cols-md-3 gx-md-3 g-4">
                    {actorsList && actorsList.map(actor =>(<ActorItem key={actor.id} actor={actor} />))}
                </div>

            </div>


        </div>
    )
}

export default Home
