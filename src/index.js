import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Home from './Home';
import RecipesList from './components/recipesList.component';
import IngredientsSearch from './components/ingridientsSearch.component';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    
    <Router>
      <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/login">
            <App />
          </Route>
          <Route path="/recipeslist">
            <RecipesList />
          </Route>
          <Route path="/ingredients-search">
            <IngredientsSearch />
          </Route>
      </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
