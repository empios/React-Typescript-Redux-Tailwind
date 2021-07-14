import {createStore} from "redux";
import {articleReducer} from "../components/List/articleReducer";

export const store = createStore(articleReducer);