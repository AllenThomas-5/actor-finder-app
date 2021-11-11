import movieDbApi from "../api/movieDbApi"
export const clearActors = () => ({
    type: 'CLEAR_ACTORS',
})

export const clearActorDetail = () => ({
    type: 'CLEAR_ACTOR_DETAIL',
})

// Async Function to fetch the actors using the Middleware
export const fetchActors = (actorName='Shawn') => {
    return async function(dispatch) {
        const apiKey = '7652452df82ba14786973f2884922822'
        const responseData = await movieDbApi.get(`/search/person?api_key=${apiKey}&language=en-US&query=${actorName}&page=1&include_adult=false`)
        console.log(responseData)
        dispatch({
            type:'FETCH_ACTORS',
            payload: responseData.data.results
        })
    }
}

// Async Function to fetch a single actor using the Middleware
export const fetchActorDetail = (actorId) => {
    return async function(dispatch) {
        const apiKey = '7652452df82ba14786973f2884922822'
        const responseData = await movieDbApi.get(`/person/${actorId}?api_key=${apiKey}&language=en-US`)
        const ActorData = await movieDbApi.get(`/person/${actorId}/movie_credits?api_key=${apiKey}&language=en-US`)

        dispatch({
            type:'SELECTED_ACTOR',
            payload: {...responseData.data,...ActorData.data}
        })
    }
}



export const getActorName = (actorName) => ({
    type: 'GET_ACTOR_NAME',
    payload: { actorName }
})

