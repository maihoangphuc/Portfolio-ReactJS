import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'animate.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux'
import store from './redux/store/store'
import { Context } from './context/contexts'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Error from './pages/Error'


ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Context>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />}  />
            <Route path="*" element={<Error/>}  />
          </Routes>
        </Provider>
      </Context>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
