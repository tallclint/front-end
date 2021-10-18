import React from "react";
import { useHistory } from "react-router";
import homepage from './images/homepage.jpg'
import './HomePage.css';

const HomePage = () => {
    
    const history = useHistory();

    const routeToSignIn = () => {
        history.push('/sign-in');
    }

    return (
        <div>
            <img src={homepage} alt='plants'/>
            <button onClick={routeToSignIn} id='signIn'>Sign In</button>
        </div>
    )
}

export default HomePage;