import { Provider } from "react-redux";
import Head from "./components/Head";
import Body from "./components/Body";
import './App.css';
import Store from "./utils/Store";
function App() {
  return (
    <div className="App">
     <Provider store={Store}>
     <Head/>
     <Body/>
     </Provider>
    </div>
  );
}

export default App;
