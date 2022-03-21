import React, {useEffect} from 'react'
import { BrowserRouter as Router } from "react-router-dom";
import Body from "./routers";
import "./App.scss";
import { useDispatch } from 'react-redux'
import { fetchUser } from './redux/actions/authAction'

function App() {
  const dispatch = useDispatch()
  const token = localStorage.getItem('access_token')

  useEffect(() => {
    dispatch(fetchUser(token))
  }, [dispatch, token]);
  
  return (
    <Router>
      <Body />
    </Router>
  );
}

export default App;
