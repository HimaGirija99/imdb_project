
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import the necessary components

import Banner from './components/Banner';
import NavBar from './components/navBar';
import Movies from './components/Movies';
import WatchList from './components/WatchList'; 

function App() {
  return (    
    <>
     <BrowserRouter>
      <NavBar />

      <Routes>
          <Route
            path="/"
            element={
              <>
                <Banner />
                <Movies />
              </>
            }
          />

          <Route path="/watchlist" element={<WatchList />} />
        </Routes>
      </BrowserRouter>
    </>  
    
  );
}

export default App;
