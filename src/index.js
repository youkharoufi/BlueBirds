import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/superhero/bootstrap.css';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './Redux-Store/configureStore';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root'));
const store = configureStore();


root.render(
    <>
        <Provider store={store}>

            <BrowserRouter>
                <App />
            </BrowserRouter>

        </Provider>


</>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
