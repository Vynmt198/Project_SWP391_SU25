import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css';
import HomePage from './homepages/HomePages';
import Signup from './signuppages/Signup';
import Login from './loginpages/login';
function App() {
  const navigate = useNavigate();

  return (
    <>
    <HomePage />
    <Signup />
    

    
    </>
  );
}

export default App;