import {Route, Routes, useLocation} from "react-router-dom"
import './App.css';
import LandingPage from './components/LandingPage/LandingPage.jsx';
import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {getAllCountries, getAllActivities} from './redux/actions/actions';
import HomePage from './components/HomePage/HomePage';
import FormPage from './components/FormPage/FormPage';
import DetailPage from './components/DetailPage/DetailPage';
import NavigateBar from './components/NavigateBar/NavigateBar';
import ErrorPage from './components/ErrorPage/ErrorPage';

function App() {
  
  const dispatch = useDispatch();
  const {pathname} = useLocation();
  const dictionary = {'/home': true, '/activity': true};


  return (
    
      <div className="App">
       {dictionary[pathname] && <div className="navBar"> <NavigateBar /> </div>}
       
       <Routes>
          <Route path="/" element={<LandingPage/>}/>
          <Route path="/home" element={<HomePage/>}/>
          <Route path='/activity' element={<FormPage />} />
          <Route path='/detail/:id' element={<DetailPage />} />
          <Route path='*' element={<ErrorPage />} />
       </Routes>
      </div>
      
  )
}

export default App

