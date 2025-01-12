import "./App.css";
import AllRoutes from "./routes/AllRoutes";
import { Header} from "./components";
import ScrollToTop from "./components/ScrollToTop";
import FooterTwo from '../src/components/FooterTwo'

function App() {
  return (
    <div className="App dark:bg-darkbg">
      <Header/> 
      <ScrollToTop/>
      <AllRoutes></AllRoutes>
      <FooterTwo/>
    </div>
  );
}

export default App;
