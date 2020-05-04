import React from 'react';

import RegistrationPage from 'views/Auth/AuthPages/Registration';
import LoginPage from 'views/Auth/AuthPages/Login';
import Verify from 'views/Auth/AuthPages/VerificationCode';
import Home from 'views/Home/Home';
import { Switch, Route, Router, Link} from 'react-router-dom';


 const Authentication = () => {

    const [usuario, setUsuario] = React.useState({
        username: "",
        email: "",
        password: "",
        phone_number: "+",
        code: "",
        user: null // Este objeto contendra los datos del usuario cuando inicie sesion
    });

    const [page, setPage] = React.useState("SignUp");

    const handleFormInput = e => {
        setUsuario({
            ...usuario,
            [e.target.id] : e.target.value
        });
        console.log(usuario.username);
    }

    const handlePage = (changePage) =>{
        setPage(changePage);
    }

    
        /* switch (page){
            case "SignUp":
                return(
                    <RegistrationPage
                        inputs={usuario}
                        handleFormInput={handleFormInput}
                        switchPage={handlePage}  
                     />
                );
            case "SignIn":
                return(
                    <LoginPage
                        inputs={usuario} 
                        handleFormInput={handleFormInput}
                        switchPage={handlePage}   
                    />
                );
            case "Verify":
                return(
                    <Verify 
                        inputs={usuario}
                        handleFormInput={handleFormInput}
                        switchPage={handlePage}  
                    />
                );
            case "Welcome":
                return(
                    <Home />
                );
            default:
                return(
                    <RegistrationPage 
                        inputs={usuario}
                        handleFormInput={handleFormInput}
                        switchPage={handlePage}
                    />
                );
        } */

        return(
            <div>
               <Switch>
               <Route path="/login">
                    <LoginPage
                        inputs={usuario} 
                        handleFormInput={handleFormInput}
                        switchPage={handlePage}  
                    />
               </Route>
               <Route path="/register">
                    <RegistrationPage
                        inputs={usuario}
                        handleFormInput={handleFormInput}
                        switchPage={handlePage}  
                    />
               </Route>
               <Route path="/verify">
                     <Verify 
                        inputs={usuario}
                        handleFormInput={handleFormInput}
                        switchPage={handlePage}  
                    />
                    />
               </Route>
               <Route path="/home">
                      <h1>Pin Pan Pun Logeado</h1>
               </Route>
               <Route path="/">
                    <RegistrationPage
                        inputs={usuario}
                        handleFormInput={handleFormInput}
                        switchPage={handlePage}  
                    />
               </Route>
               </Switch>
                
            </div>
        );

       
    }

export default Authentication;