import React, {useEffect} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./routers";
import "./App.scss";
import { useDispatch } from 'react-redux'
import { fetchUser } from './redux/actions/authAction'
import Alert from './components/customer/Alert/Alert';
import { getCategory } from './redux/actions/categoryAction'
import { CartProvider } from "react-use-cart";

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('access_token')

  useEffect(() => {
    dispatch(fetchUser(token))
    dispatch(getCategory())
  }, [dispatch, token]);

  return (
    <Router>
      <CartProvider>
        <Alert />
        <Body />
      </CartProvider>
    </Router>
  );
}

export default App;
