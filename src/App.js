import {HashRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';
import Genre from './pages/Genre';
import Navbar from './components/Navbar';
import BookInfo from './pages/BookInfo';
import AllBooks from './pages/AllBooks';
import Footer from './components/Footer';


function App() {

  
  //may need to change initial route to * later on in deployment
  return (
    <div className="App">
      <HashRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/all' element={<AllBooks />} />
          <Route path='/Fantasy' element={<Genre />} />
          <Route path='/Mystery' element={<Genre />} />
          <Route path='/Science Fiction' element={<Genre />} />
          <Route path='/Romance' element={<Genre />} />
          
        </Routes>
        <Footer />
      </HashRouter>
     
    </div>
  );
}

export default App;
