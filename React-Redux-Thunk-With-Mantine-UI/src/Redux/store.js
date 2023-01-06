import {
  legacy_createStore,
  combineReducers,
  applyMiddleware,
  compose,
} from "redux";

import thunk from "redux-thunk";
import authReducer from "./auth/auth.reducer";
import postsReducer from "./posts/posts.reducer";
import todoReducer from "./todos/todos.reducer";
import usersReducer from "./users/users.reducer";

const rootReducer = combineReducers({
  posts: postsReducer,
  todos: todoReducer,
  users: usersReducer,
  auth: authReducer,
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunk))
);

export default store;
