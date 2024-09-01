import Navbar from "./components/Navbar";
import "./App.css";
import Textform from "./components/Textform";
import About from "./components/About";
import {
  BrowserRouter as Router,
  Routes,
  Route
  
} from 'react-router-dom';

//import SocialButton from "./components/SocialButtons";
//import GithubButton from "./components/GithubButton";
//import LeetcodeButton from "./components/LeetcodeButton";



function App() {
  return (
    <>
      <Router>
        <Navbar title="My Portfolio" aboutText='About me' />
        <div className="container my-3">
        
        <Routes>
          <Route path="/" element={<Textform heading="Enter text to analyze" />}/>
            
          

          <Route path="/about" element={<About/>}/>
            
          
        </Routes>
        </div>
      </Router>







    </>
  );
}

export default App;
