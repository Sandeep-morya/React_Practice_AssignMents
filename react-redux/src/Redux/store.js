import { compose, legacy_createStore } from "redux";
import reducer from "./reducer";

const initailValue = { todoList: [], count:0};
const Enhancer= window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(reducer, initailValue,Enhancer());
export default store;
