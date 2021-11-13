import React, {ChangeEvent, FormEvent} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState, updateComment} from "../../store/store";
import {CommentPostForm} from "../Post/CommentPostForm";


export function CommentPostFormContainer() {

    const value = useSelector<RootState, string>(state => state.commentText);
    const dispatch = useDispatch();

    function handleSubmit(evt: FormEvent) {
        evt.preventDefault();
    }

    function handleChange(evt: ChangeEvent<HTMLTextAreaElement>) {
        dispatch(updateComment(evt.target.value))
    }

    return (
        <CommentPostForm
            value={value}
            onChange={handleChange}
            onSubmit={handleSubmit}

        />
    );
}
