import React from 'react';
import './Logo.css'
import Burger from './Burger.png';
import Tilt from 'react-tilt';

const Logo = () => {
    return (
        <Tilt className="Tilt" options={{ max : 100 }} style={{ height: 100, width: 100}}>
            <div className="logo Tilt-inner shadow pushLeft">
                <img src={Burger} alt='Brain'/>
            </div>
        </Tilt>
    );
}

export default Logo;