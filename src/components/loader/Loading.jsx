import React from 'react';
import { FourSquare } from 'react-loading-indicators'
import '../loader/loader.css';

function Loading() { 
    return <div class="loader">
        <FourSquare color={["rgb(95,0,0)", "rgb(0,0,0)"]} />
        </div>
}

export default Loading