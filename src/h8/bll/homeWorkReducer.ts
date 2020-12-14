import {initialPeopleType} from "../HW8";

type actionType = {
    type: string
    payload?: any
}

export const homeWorkReducer = (state: initialPeopleType, action: actionType): initialPeopleType => {
    switch (action.type) {
        case "sort": {
            let newState = state.map(t => ({...t}))
            if(action.payload === "up") {
                newState.sort((a: any, b: any) => {
                    return a.name.toLowerCase() < b.name.toLowerCase() ? -1 : 1
                } )
            }

            if(action.payload === "down") {
                return newState.sort((a: any, b: any) => {
                    return b.name.toLowerCase() < a.name.toLowerCase() ? -1 : 1
                })
            }

            return newState
        }
        case "check": {
            let newState = state.map(t => ({...t}))
            return newState.filter(a => a.age > 18)
        }
        default: return state
    }
};