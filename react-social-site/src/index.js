import './index.scss';
import { state, subscribe } from './redux/state';
import reportWebVitals from './reportWebVitals';
import React from 'react';
import ReactDOM from 'react-dom';
import {addPost} from './redux/state';
import App from './App';


const render = (state) => {
    ReactDOM.render(
        <React.StrictMode>
            <App state={state} addPost={addPost} />
        </React.StrictMode>,
        document.getElementById('root')
    );
}
render(state);
subscribe(render);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
