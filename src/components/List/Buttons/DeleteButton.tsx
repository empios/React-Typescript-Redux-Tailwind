import React from 'react';
import axios from 'axios';
import toast from "react-hot-toast";
import {useDispatch} from "react-redux";
import {Article} from "../articleReducer";
import {deleteArticle} from "../actions";

type DeleteButtonProps = {
    article: Article,
};

const DeleteButton: React.FC<DeleteButtonProps> = (props:DeleteButtonProps):JSX.Element => {
    const dispatch = useDispatch();
    const notify = () => toast('You have deleted a article');
    const deleteNote = () => {
        axios.delete(`https://60eea1a9eb4c0a0017bf453e.mockapi.io/articles/${props.article.id}`).then((r) => {
            if(r.status === 200){
                dispatch(deleteArticle(props.article));
            }
        });
        notify();
    }
    return (
        <>
            <button className="bg-red-500 hover:bg-red-700 text-white py-2 px-4 font-bold rounded" type="button" onClick={deleteNote}>Delete</button>
        </>
    )
}

export default DeleteButton;