import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import TokenData from './compenents/TokenData';
import PairData from './compenents/PairData';

function App() {
  return (
    <div className="App">
  <Navbar/>
     <Routes>
      <Route path='/' element={<TokenData/>}/>
      <Route path='/Pair' element={<PairData/>}/>
     </Routes>
    </div>
  );
}

export default App;
