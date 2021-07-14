import {Action} from "./actions";

export interface ArticleState {
    articles: Article[]
}
export interface Article {
    id: any,
    author: string,
    avatar: string,
    text: string,
    title: string
}
const initialState = {
    articles: []

};


export const articleReducer = (state: ArticleState = initialState, action: Action) => {
    switch(action.type){
        case "ADD_ARTICLE": {
            return {...state, articles: [...state.articles, action.payload]}
        }
        case "DELETE_ARTICLE": {
            return {...state, articles: state.articles.filter(item => item.id !== action.payload.id)};
        }
        case "EDIT_ARTICLE": {
            const item = state.articles.find(item => item.id === action.payload.id);
            if(item) {
                item.text = action.payload.text;
                item.title = action.payload.title;
                item.author = action.payload.author;
                item.avatar = action.payload.avatar;
            }
            return {...state, articles: [...state.articles]}
        }
        default: {
            return state;
        }

    }
}