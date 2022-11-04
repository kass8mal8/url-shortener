import { BrowserRouter,Routes,Route } from "react-router-dom";
import '../styles/app.css'
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import Pricing from "./Pricing";
import Signup from "./Signup";
import {useState} from 'react';

const App =()=> {
  const [isToggled,setIsToggled] = useState(false)

  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route 
                path="/pricing" 
                element = {<Pricing 
                      isToggled = {isToggled}
                      setIsToggled = {setIsToggled} />}/>
            <Route path="/signup" element = {<Signup />} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
