import {ADD_VALUE} from '../actions/action-type'

export const initialState = {
    allData:[]
}

export const allReducer = (state = initialState, {type,payload}) => {
    switch (type) {
        case ADD_VALUE:
            return { allData:[...state.allData,payload] }
        default:
            return state
    }
}