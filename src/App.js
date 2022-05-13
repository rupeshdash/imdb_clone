
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import Movies from './components/Movies';
import Pagenation from './components/Pagenation';
import Favourites from './components/Favourites';

import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar ></Navbar>
        <Routes>
          <Route path='/' element={<> <Banner></Banner>
            <Movies></Movies>
            </>} />
          
          <Route path='/favourites' element={<><Favourites></Favourites></>}/>
         
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
