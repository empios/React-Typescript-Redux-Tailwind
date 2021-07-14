import React, {MouseEventHandler, useEffect, useState} from 'react';
import axios, {AxiosResponse} from 'axios';
import {useDispatch} from "react-redux";
import {toast} from "react-hot-toast";
import {Article} from "../articleReducer";
import {addArticle, modifyArticle} from "../actions";

type ModalProps = {
    clicked: boolean,
    close: MouseEventHandler,
    action: string,
    article?: Article
};


const modal: React.FC<ModalProps> = (props:ModalProps):JSX.Element => {

    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [text, setText] = useState('');
    const [image, setImage] = useState('');

    const {clicked, close, action, article} = props;
    const dispatch = useDispatch();

    useEffect(() => {
        if (action === 'Edit') {
            if(article){
                setTitle(article.title);
                setAuthor(article.author);
                setText(article.text);
                setImage(article.avatar);
            }
        }
    }, [])

    function handleClick(event: any) {
        event.preventDefault();
        const newArticle: Article = {
            id: article?.id || null,
            author,
            avatar: image,
            text,
            title
        };
        if(action === 'Add'){
            axios.post('https://60eea1a9eb4c0a0017bf453e.mockapi.io/articles', article)
            dispatch(addArticle(newArticle));
            toast.success(`Success ${action} article! Close the window`)
        }
        else {
            axios.put(`https://60eea1a9eb4c0a0017bf453e.mockapi.io/articles/${article?.id}`, {
                title: article?.title,
                avatar: article?.avatar,
                text: article?.text,
                author: article?.author
            })
            dispatch(modifyArticle(newArticle));
            toast.success(`Success ${action} article! Close the window`)
        }
    }
    
    return (
        <>
            {clicked ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">
                            <div
                                className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                <div
                                    className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        {action} a article
                                    </h3>
                                </div>
                                {/* body */}
                                <div className="relative p-6 flex-auto">
                                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="username">
                                                Title
                                                <input
                                                    value={title}
                                                    onChange={e => setTitle(e.target.value)}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="title" type="text"/>
                                            </label>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="text">
                                                Text
                                                <textarea
                                                    value={text}
                                                    onChange={e => setText(e.target.value)}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="text"/>
                                            </label>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="text">
                                                Author
                                                <input
                                                    value={author}
                                                    onChange={e => setAuthor(e.target.value)}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="author" type="text"/>
                                            </label>
                                        </div>
                                        <div className="mb-4">
                                            <label className="block text-gray-700 text-sm font-bold mb-2"
                                                   htmlFor="text">
                                                Image link
                                                <input
                                                    value={image}
                                                    onChange={e => setImage(e.target.value)}
                                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                                    id="image" type="text"/>
                                            </label>
                                        </div>

                                {/* footer */}
                                <div
                                    className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                    <button
                                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={close}
                                    >
                                        Close
                                    </button>
                                    <button
                                        className="bg-blue-500 text-white active:bg-blue-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                        type="button"
                                        onClick={handleClick}
                                    >
                                        {action}
                                    </button>
                                </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"/>
                </>
            ) : null}
        </>
    )
}

export default modal;