import {ActionCreator, AnyAction, Reducer} from "redux";

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

export type RootState = {
    commentText: string,
    token: string,
}

const initialState = {
    commentText: 'Привет, Redux!',
    token: ''
}

export const updateComment: ActionCreator<AnyAction> = (text) => {
    return {
        type: UPDATE_COMMENT,
        text
    }
}

export const setToken: ActionCreator<AnyAction> = (token) => {
    return {
        type: SET_TOKEN,
        token
    }
}

export const rootReducer: Reducer<RootState> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            }
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }

        default:
            return state;

    }
}