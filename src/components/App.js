import Article from "./Article";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";
import '../styles/app.css'

const App =()=> {
  return (
    <div className="App">
      <Header />
      <Main />
      <Article />
      <Footer />
    </div>
  );
}

export default App;
