import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import HomePage from './pages/HomePage';
import RecipePage from './pages/RecipePage';
import AddRecipe from './pages/AddRecipe';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<LoginPage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/recipe" element={<RecipePage />}></Route>
        <Route path="/add_recipe" element={<AddRecipe />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
