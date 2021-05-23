import React,{useEffect} from "react";
import "./App.css";
import Nav from "./Nav";

import { loadUser } from "./actions/authActions"
import { Provider } from 'react-redux'
import store from "../store"
import New from './SearchComponents/NewLayout';


function App() {

  useEffect(() => {
    store.dispatch(loadUser());
  }, [])

  return (
    // <New></New>
    <Provider store={store}>
      <div className="app">
        <Nav></Nav>
      </div>
    </Provider>

  );
}

export default App;
