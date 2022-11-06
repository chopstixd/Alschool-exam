import   { BrowserRouter as  Router, Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./Pages/Home";
import Collection from "./Pages/Collection";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import User from "./Pages/User";
import SignUp from "./Pages/SignUp";
import Login from "./Pages/Login";

import Navbar from "./components/Navbar";
import Footer from "./components/footer";
import { Helmet} from "react-helmet";
import { ErrorBoundary }  from "./Pages/ErrorBoundary";
import Error404 from "./Error 404";




function App() {
  return (
    <div className="App">
     <Helmet>
      <title>Ticeclothing.com</title>
      <meta name="description"
      content="order quality clothes and shoes"  />
      <meta name="keywords" content="Clothes,shoes" />

     </Helmet>
     <ErrorBoundary>
    <Router>
 <Navbar/>
 <Routes>
<Route path="/" element ={<Home/>}></Route>

<Route path="/User" element={<User/>}></Route>
<Route path="/Contact" element={<Contact/>}></Route>
<Route path="/About" element={<About/>}></Route>  
<Route path="/SignUp" element={<SignUp/>}></Route>
<Route path="/Login" element={<Login/>}></Route>

<Route path="/Collection" element={<Collection/>}></Route>
<Route path="*" element={<ErrorBoundary/>}></Route>
<Route path="*" element={<Error404/>}></Route>

</Routes>

<Footer/>
    </Router>
  </ErrorBoundary>
   </div>
  );
};
 export default App;               
 