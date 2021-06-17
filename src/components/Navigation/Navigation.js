import React, { Fragment } from 'react';
import Logo from './Logo/Logo'
import './Navigation.css'

const Navigation = ({ onChangeRoute, isSignedIn }) => {
    return (
        <nav className='navContainer'>
            <div className='pushLeft'>
                <Logo />
            </div>
            
            {   isSignedIn 
                ?
                    <p className='text pointer' onClick={() => onChangeRoute('signin') } >Sign out</p>
                    
                :
                    <Fragment>
                        <p className='text pointer' onClick={() => onChangeRoute('signin') } >Sign in</p>
                        <p className='text pointer' onClick={() => onChangeRoute('register') } >Register</p>
                    </Fragment>

            }
        </nav>
    );
}

export default Navigation;