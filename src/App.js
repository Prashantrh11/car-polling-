import { Route, Routes } from "react-router-dom";
import './App.css';
import Dashboard from './Components/Dashboard';
import Error from './Components/Error';
import Home from './Components/Home';
import Login from './Components/Login';
import MapContainer from './Components/MapContainer'; // Import the MapContainer

function App() {
  return (
    <>
      {/* <Headers /> */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='login' element={<Login />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/map' element={<MapContainer />} /> {/* Add Map route */}
        <Route path='*' element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
