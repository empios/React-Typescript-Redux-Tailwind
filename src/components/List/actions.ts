import {Article} from "./articleReducer";

export type Action = {type: string, payload: Article}

export const addArticle = (article: Article):Action => ({
        type: "ADD_ARTICLE",
        payload: article
});

export const deleteArticle = (article: Article):Action => ({
        type: "DELETE_ARTICLE",
        payload: article
});

export const modifyArticle = (article: Article):Action => ({
        type: "EDIT_ARTICLE",
        payload: article
})