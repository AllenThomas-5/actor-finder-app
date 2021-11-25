const initialState = {
    todos: [],
    apiKey:'',
    actors:[] ,
    actorDetail:[],
    actorName:'Shawn'       
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'SET_ACTOR_NAME':
            return {...state, actorName: action.payload.actorName}
        case 'FETCH_ACTORS':
            return {...state, actors: action.payload}
        // if none of the cases match, just return the initial state
        case 'CLEAR_ACTOR_DETAIL':
            return {...state, actorDetail: []}
        case 'SELECTED_ACTOR':
            return {...state, actorDetail: action.payload}
        case 'CLEAR_ACTORS':
            return {...state, actors: []}
        default: 
            return state;
    }
}

export default reducer;