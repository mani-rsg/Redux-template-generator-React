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
import {reducerFn as reducer} from './reducers/reducer.js'

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
        case "<type_1>":
            return {...state,}
        case "<type_2>":
            return { ...state, }
        default:
            return state
    }
}`;

const SRC_ARR = [{
    name: 'index.js',
    template: INDEX_JS
},
{
    name: 'store.js',
    template: STORE_JS
}];

const ACTION_ARR=[{
    name: 'action.js',
    template: ACTION_JS
}];

const REDUCER_ARR = [{
    name: 'reducer.js',
    template: REDUCER_JS
}];


module.exports = { SRC_ARR, ACTION_ARR, REDUCER_ARR };