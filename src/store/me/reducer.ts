import {Reducer} from "react";
import {IUserData, ME_ERROR, ME_REQUEST, ME_SUCCESS, MeErrorAction, MeRequestAction, MeSuccessAction} from "./actions";

export type MeState = {
    loading: boolean,
    error: string,
    data: IUserData
}

type MeActions =  MeSuccessAction
    | MeRequestAction
    | MeErrorAction


export const meReducer: Reducer<MeState, MeActions> = (state, action) => {
    switch (action.type) {
        case ME_REQUEST:
            return {
                ...state,
                loading: true
            }
        case ME_ERROR:
            return {
                ...state,
                error: action.error,
                loading: false
            }
        case ME_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            }
        default:
            return state
    }
}