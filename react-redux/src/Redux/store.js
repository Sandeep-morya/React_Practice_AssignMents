import { legacy_createStore } from "redux";
import reducer from "./reducer";

const initailValue = { todoList: [], count:0};

const store = legacy_createStore(reducer, initailValue);
export default store;
