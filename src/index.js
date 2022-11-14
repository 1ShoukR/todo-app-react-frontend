import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import rootReducer from './reducers/rootReducer';
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';
import Navbar from './components/Navbar';
import CreateAccount from './components/CreateAccount';
import Login from './components/Login';

const store = createStore(rootReducer, applyMiddleware(logger));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<BrowserRouter>
		<Provider store={store}>
			<Navbar />
			<Routes>
				<Route path="/" element={<App />} />
				<Route path="/create_account" element={<CreateAccount />} />
				<Route path="/login" element={<Login />} />
			</Routes>
		</Provider>
	</BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
