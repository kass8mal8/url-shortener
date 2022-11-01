import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import '../styles/app.css'
import Aside from "./Aside";

const App =()=> {
  return (
    <div className="App">
      <Header />
      <Main />
      <Aside />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
