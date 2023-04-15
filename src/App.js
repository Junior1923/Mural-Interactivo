import './App.css';
import{BrowserRouter as Router, Routes, Route, Link} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import CreatePost from "./pages/CreatePost";
import { useState } from "react";
import { signOut } from 'firebase/auth';
import { auth } from './ConfiguracionFirebase';

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth"));

  const signUserOut = () => {
    signOut(auth).then (() => {
      localStorage.clear();
      setIsAuth(false);
      window.location.pathname = "/login";
    });
  };

  return (
    <Router>
      <nav>
        <Link to= "/"> Inicio </Link>

        {!isAuth ? (<Link to= "/login"> Iniciar </Link>) : ( <>

        <Link to= "/createpost"> Post </Link>
         <button className='BTNCerrar' onClick={signUserOut}>Cerrar Sesion</button>
         </>
        )}
      </nav>
      <Routes>
        <Route path ="/" element={<Home />} />
        <Route path ="/login" element={<Login setIsAuth={setIsAuth} />} />
        <Route path ="/createpost" element={<CreatePost isAuth={isAuth} />} />
      </Routes>
    </Router>
    
  );
}
export default App;

