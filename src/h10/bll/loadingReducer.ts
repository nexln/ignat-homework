
type loadingState = {
    loading: boolean
}

let initState = {
    loading: false
};


export type loadingAC = {
    type: "TOGGLE_LOADING",
    loading: boolean
}

export type ActionType = loadingAC

export const loadingReducer = (state = initState, action: ActionType): loadingState => {
    switch (action.type) {
        case "TOGGLE_LOADING": {
            return {...state, loading: action.loading};
        }
        default:
            return state;
    }
};

export const loadingAC = (loading: boolean): ActionType => (
    {type: "TOGGLE_LOADING", loading}
);