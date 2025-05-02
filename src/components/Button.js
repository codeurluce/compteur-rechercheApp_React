import React from 'react';
import './Button.css';
export default function Button({content, click}){
    return  <button className='button' onClick={click}>{content}</button>
}