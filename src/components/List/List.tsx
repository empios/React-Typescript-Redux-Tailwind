import React, {useEffect} from 'react';
import axios from 'axios';
import {useSelector, useDispatch} from "react-redux";
import EditButton from './Buttons/EditButton';
import DeleteButton from './Buttons/DeleteButton';
import {Article, ArticleState} from "./articleReducer";
import {addArticle} from "./actions";

type ListProps = {
};

const List: React.FC<ListProps> = ():JSX.Element => {
    const articles = useSelector<ArticleState, ArticleState["articles"]>((state => state.articles))
    const dispatch = useDispatch();
    useEffect(() => {
        const fetchData = async () => {
            await axios.get<Article[]>('https://60eea1a9eb4c0a0017bf453e.mockapi.io/articles', {
                headers: {
                    "Content-Type": "application/json"
                }
            }).then(response => {
                response.data.forEach((data) => {
                    dispatch(addArticle(data));
                })

            });
        };
        fetchData();
    }, []);
    return (
        <>
            {articles.map((x) => (
                <div className='max-w-md py-4 px-8 bg-white shadow-lg rounded-lg my-32 mx-auto' key={x.id}>
                    <div className="flex justify-center md:justify-end -mt-16">
                        <img alt={x.author} className="w-20 h-20 object-cover rounded-full border-2 border-indigo-500"
                             src={x.avatar} />
                    </div>
                    <div>
                        <h2 className='text-gray-800 text-3xl font-semibold'>{x.title}</h2>
                        <p className='mt-2 text-gray-600'>{x.text}</p>
                    </div>
                    <div className='flex justify-end mt-4"'>
                        <p className="text-xl font-medium text-indigo-500">{x.author}</p>
                    </div>
                    <div className='flex justify-start mt-4"'>
                        <EditButton article={x}/>
                        <DeleteButton article={x}/>
                    </div>
                </div>
            ))}
        </>


    );
}
export default List;
