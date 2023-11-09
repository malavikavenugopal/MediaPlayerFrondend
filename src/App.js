
import './App.css';
import Home from './Pages/Home';
import LandinPage from './Pages/LandinPage';
import WatchHistory from './Pages/WatchHistory';
import Footer from './Components/Footer';
import Header from './Components/Header';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="">
   
      <Header/>
      <Routes>
       
      <Route path={'/'} element={<LandinPage/>}/>
        <Route path={'/home'} element={<Home/>} /> 
        <Route path={'/WatchHistory'}  element={<WatchHistory/>} /> 
      
      </Routes>
      
    <Footer/>
    </div>
  );
}

export default App;
