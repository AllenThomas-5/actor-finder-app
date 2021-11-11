import React,{useState} from 'react'
import { useDispatch} from "react-redux";
import { fetchActors,clearActors, getActorName } from '../redux-components/actions';

const SearchActor = () => {

    const [actorText,setActorText] = useState('')
    const [alert,setAlert] = useState(false)
    
    const dispatch = useDispatch();

    const handleActorNameSubmit = (event) => {
        event.preventDefault();
        if (actorText === '') {
          setAlert(true) 
         
        } else {
          // Dispatch the function to fetch the Actors
          dispatch(fetchActors(actorText))
          // Dispatch the function to Set ActorName in the state
          dispatch(getActorName(actorText))
          setAlert(false)
        }
     
    
      }

      const handleActorName = (event) => {
        setActorText(event.target.value)
      }

      const handleClearActors = () => {
        dispatch(clearActors())

      }

    return (
      <>
          <div className="row mt-4 mb-4">
          <div className="col-lg-6 col-sm-12">
          { alert ? 
             <div class="alert alert-danger" role="alert">
                Please Enter the Actor's Name
            </div> : ''
        }
         
          <form onSubmit={handleActorNameSubmit}>
              <div className="mb-3">
                  <input
                  type="text"
                  className="form-control"
                    id="searchActors" 
                    placeholder="Enter The Actor Name" 
                    aria-describedby="searchActors"  
                    value={actorText}
                    onChange={handleActorName}/>
              </div>
              <div className="d-grid gap-2 d-md-block gx-5">
                  <button className="btn btn-primary me-2" type="submit">Search</button>
                  <button className="btn btn-secondary" type="button" onClick={handleClearActors}>Clear</button>
              </div> 
          </form>
          </div>

          </div>
      </>
    )
}

export default SearchActor
