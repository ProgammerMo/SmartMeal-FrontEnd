import React from 'react';
import './ImageLinkForm.css'

const ImageLinkForm = ({onInputChange, onSubmit}) => {
    return (
        <div className='linkMainContainer'>
            <p className='text' >This Magic Burger will get you recipes.</p>
            <div className='linkContainer shadow'>
                <input className='link shadow linkInput' placeholder='Calories' type='number' onChange={onInputChange}/>
                <button className='link linkButton shadow'onClick={onSubmit}>Plan</button>
            </div>
        </div>
    );
}

export default ImageLinkForm;