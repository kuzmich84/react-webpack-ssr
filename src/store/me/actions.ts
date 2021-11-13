import {Action, ActionCreator} from "redux";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";
import axios from "axios";
import {useSelector} from "react-redux";

export const ME_REQUEST = 'ME_REQUEST';
export const ME_SUCCESS = 'ME_SUCCESS';
export const ME_ERROR = 'ME_ERROR';

export type MeRequestAction = {
    type: typeof ME_REQUEST;
}

export interface IUserData {
    name?: string,
    iconImg?: string
}

export type MeSuccessAction = {
    type: typeof ME_SUCCESS;
    data: IUserData
}

export type MeErrorAction = {
    type: typeof ME_ERROR;
    error: string,
}


export const meRequest: ActionCreator<MeRequestAction> = () => ({
    type: ME_REQUEST
})

export const meSuccess: ActionCreator<MeSuccessAction> = (data) => ({
    type: ME_SUCCESS,
    data
})


export const meError: ActionCreator<MeErrorAction> = (error) => ({
    type: ME_ERROR,
    error
})


export const meRequestAsync=(): ThunkAction<void, RootState, unknown, Action<string>> =>(dispatch, getState)=>{

    dispatch(meRequest());
    axios.get('https://oauth.reddit.com/api/v1/me',
        {
            headers: {Authorization: `bearer ${getState().token}`}
        }
    )
        .then((resp) => {
            const userData = resp.data;
            // @ts-ignore
            const myUserData: IUserData = {name: userData.name, iconImg: userData.icon_img};
            dispatch(meSuccess(myUserData))
        })
        .catch((error) => {
            console.log(error);
            dispatch(meError(error))
        })
}
