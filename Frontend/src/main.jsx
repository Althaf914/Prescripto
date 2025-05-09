// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
// import 'bootstrap/dist/css/bootstrap.css'
// import 'bootstrap/dist/js/bootstrap.bundle'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import App from './App.jsx'
import ProfileContext from './Context/ProfileContext.jsx'
import {BrowserRouter} from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <ProfileContext> <App /></ProfileContext>
  </BrowserRouter>,
)
