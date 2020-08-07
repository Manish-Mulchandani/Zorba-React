import React, {useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import Login from "./Login";
import Checkout from "./Checkout";
import { useStateValue } from './StateProvider';
import { auth } from "./firebase";

function App() {

  const [{ user }, dispatch] = useStateValue();

  // useEffect <<<<<<<<<< PowerFul
  //Piece of Code which runs based on a given condition

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //the user is logged in...

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        //the user is logged out...
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });

    return () => {
      //Any cleanup operations go in here...
      unsubscribe();
    };


  }, []);

  console.log("USER IS >>>", user);
  
  return (
    <Router>
      <div className="app">
        <Switch>
          <Route path="/checkout">
            <Header/>

            <Checkout />
          </Route>
        
          <Route path="/login">
            <Login />
            <h1>Still Working on it.</h1>
          </Route>
          {/*Bottom one is the default route. */}
          <Route path="/">
            <Header />
            <Home />

          </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;

















      {/*We need React-Router to create different webpages in the main page, it switches between pages without talking to the server*/}
