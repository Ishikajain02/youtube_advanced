import { Provider } from "react-redux";
import Head from "./components/Head";
import Body from "./components/Body";
import './App.css';
import Store from "./utils/Store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
const appRouter= createBrowserRouter([{
  path:"/",
  element:<Body/>,
  children:[{
    path:'/',
    element:<MainContainer/>
  },
  {
    path:'watch',
    element:<WatchPage/>
  }
  ]
}])
function App() {
  return (
    <div className="App">
     <Provider store={Store}>
     <Head/>
     <RouterProvider router={appRouter}/>
  
     </Provider>
    </div>
  );
}

export default App;
