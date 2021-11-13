import {ActionCreator, AnyAction, Reducer} from "redux";
import {ME_ERROR, ME_REQUEST, ME_SUCCESS, MeErrorAction, MeRequestAction, MeSuccessAction} from "./me/actions";
import {meReducer, MeState} from "./me/reducer";

const UPDATE_COMMENT = 'UPDATE_COMMENT';
const SET_TOKEN = 'SET_TOKEN';

export type RootState = {
    commentText: string,
    token: string,
    me: MeState
}

const initialState = {
    commentText: 'Привет, Redux!',
    token: '',
    me: {
        loading: false,
        error: '',
        data: {}
    }
}

export type UpdateCommentAction = {
    type: typeof UPDATE_COMMENT;
    text: string
}

export type SetTokenAction = {
    type: typeof SET_TOKEN;
    token: string
}


type MyAction = UpdateCommentAction
    | SetTokenAction
    | MeSuccessAction
    | MeRequestAction
    | MeErrorAction

export const updateComment: ActionCreator<UpdateCommentAction> = (text) => {
    return {
        type: UPDATE_COMMENT,
        text
    }
}

export const setToken: ActionCreator<SetTokenAction> = (token) => {
    return {
        type: SET_TOKEN,
        token
    }
}

export const rootReducer: Reducer<RootState, MyAction> = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_COMMENT:
            return {
                ...state,
                commentText: action.text
            };
        case SET_TOKEN:
            return {
                ...state,
                token: action.token
            }
        case ME_REQUEST:
        case ME_SUCCESS:
        case ME_ERROR:
            return {
                ...state,
                me: meReducer(state.me, action)
            }
        default:
            return state;

    }
}