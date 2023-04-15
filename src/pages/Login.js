import React from "react";
import {auth, provider} from "../ConfiguracionFirebase"; 
import {signInWithPopup} from "firebase/auth";
import { useNavigate } from "react-router-dom";

function Login({setIsAuth}) {
  let navigate = useNavigate();

  const SignInWithGoogle = () => {
    signInWithPopup (auth, provider).then((result) => {
      localStorage.setItem ("isAuth", true);
      setIsAuth (true);
      navigate("/");
    });
  };

  return (
    <div className="login">
      <p>Inicia sesion con Google para continuar...</p>
      <button className="BTNLogin" onClick={SignInWithGoogle}>
        Iniciar sesion
      </button>
    </div>
  )
}

export default Login;
