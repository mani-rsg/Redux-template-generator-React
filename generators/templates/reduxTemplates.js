const INDEX_JS = `import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import store from './store';

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );`;


const STORE_JS = `import {createStore} from 'redux';
import {reducerFn:reducer} from './reducers/reducer.js'
const initialState={};
const store = createStore(reducer, initialState);
export default store;
`;

const ACTION_JS = `export const action = (dispatch)=>{
    dispatch({
        type: "your_type",
        payload:{}
    })
}`;

const REDUCER_JS = `export const reducer = (state = {}, action) => {
    switch (action.type) {
        case <type_1>:
            return {...state,}
        case <type_2>:
            return { ...state, }
        default:
            return state
    }
}`

module.exports = { INDEX_JS, STORE_JS, ACTION_JS, REDUCER_JS };