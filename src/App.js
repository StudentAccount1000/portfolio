import About from './components/about/about';
import Contact from './components/contact/contact';
import Home from './components/home/home';
import './App.css';
import { BrowserRouter as Router, Routes, Route, Link, Outlet } from 'react-router-dom';
import { AppBar, CssBaseline, Toolbar, Typography } from '@mui/material';
import { useWindowScroll } from '@uidotdev/usehooks';



function App() {
  const [{x_pos, y_pos}, scroll] = useWindowScroll();

  return (
    
    <div className="App">
      <div className='App-Background'>
      <Router>
        <AppBar position='sticky' style={{backgroundColor:"black"}}>
          <Toolbar>
            <CssBaseline/>
            <div className="AppBar-Logo">
              <Typography variant='h3'>
                Portfolio
              </Typography>
            </div>
          <div className="navlinks">
            <Link to="/" className="AppBar-Link">Home</Link>
            <Link to="/About" className="AppBar-Link">About</Link>
            <Link to="/Contact" className="AppBar-Link">Contact</Link>
          </div>
          </Toolbar>
        </AppBar>
        <div><Routes>
          <Route path="/" element={<Outlet/>}>
            <Route index element={<Home/>}/>
            <Route path="about" element={<About/>}/>
            <Route path="contact" element={<Contact/>}/>
            <Route path="portfolio" element={<Home/>}/>
          </Route>
        </Routes></div>
      </Router>
      <br/>
      <div style={{display: "flex", alignContent: "flex-end", justifyContent: "flex-end"}}>
        <button class="to-top-btn" onClick={() => scroll({left: 0, top: 0, behavior: "smooth"})}>
          <svg viewBox="0 0 384 512" class="svgIcon">
            <path d="M214.6 41.4c-12.5-12.5-32.8-12.5-45.3 0l-160 160c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 
              45.3 0L160 141.2V448c0 17.7 14.3 32 32 32s32-14.3 32-32V141.2L329.4 246.6c12.5 12.5 32.8 
              12.5 45.3 0s12.5-32.8 0-45.3l-160-160z"
            ></path>
          </svg>
        </button>
      </div>
      </div>
    </div>
  );
}

export default App;
