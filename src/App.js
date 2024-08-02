
import './App.css';
// eslint-disable-next-line no-unused-vars

import './App.css';
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
