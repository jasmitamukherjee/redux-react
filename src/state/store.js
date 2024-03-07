// import { applyMiddleware} from "redux";
// import reducers from "./reducers";
// import { thunk } from "redux-thunk";
// // import { createStoreHook } from "react-redux";
// import { legacy_createStore as createStore } from "redux";

// export const store= createStore(reducers,{

// },applyMiddleware(thunk))

import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers";
import {thunk} from "redux-thunk";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
