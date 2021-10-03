import { subTitle, SET_SUBTITLE, Action } from './Actions';
import { AnyAction } from 'redux';

const initialState:subTitle = {
    subTitle: 'Popular Series And Movies'
}

function reducer(state:subTitle = initialState, action: AnyAction){
    switch(action.type){
        case SET_SUBTITLE: return {
            ...state,
            subTitle: action.payload
        }
        default: return state;
    }
}

export default reducer;