import { BrowserRouter,Routes,Route } from "react-router-dom";
import '../styles/app.css'
import HomePage from "./HomePage";
import Header from "./Header";
import Footer from "./Footer";
import Pricing from "./Pricing";

const App =()=> {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
          <Routes>
            <Route path="/" element = {<HomePage />} />
            <Route path="/pricing" element = {<Pricing/>} />
          </Routes>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
