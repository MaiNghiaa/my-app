import React from 'react'
// import Router from './routes/Router'
import { BrowserRouter,  Router, Route } from "react-router-dom";



import Home from "./pages/Home"
import Chat  from './pages/Chat'
import SignIn  from './pages/SignIn'
import SignUp  from './pages/SignUp'

function App() {
    return ( 


        

        <BrowserRouter>

            <Router>
        <Route path="/" element={<Home/>}></Route>
       <Route path="/chat" element={<Chat/>}></Route>
       <Route path="/signin" element={<SignIn/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>
            </Router>
        </BrowserRouter>

          
           
     );
}

export default App;