import Article from "./Article";
import Main from "./Main";
import Aside from "./Aside";
import Boost from "./Boost";

const HomePage = () => {
    return ( 
        <div>
            <Main />
            <Aside />
            <Article />
            <Boost /> 
        </div>
     );
}
 
export default HomePage;