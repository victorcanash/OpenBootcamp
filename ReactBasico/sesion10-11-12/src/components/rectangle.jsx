import React, { useState } from 'react';

const RectangleComponent = () => {

    const [red, setRed] = useState('0');
    const [green, setGreen] = useState('0');
    const [blue, setBlue] = useState('0');
    const [colorInterval, setColorInterval] = useState(null);

    const rectStyle = {
        width: '255px', 
        height: '255px', 
        border: '1px solid black', 
        backgroundColor: `rgb(${red},${green},${blue})`,
        color: 'black'
    }

    const setRandomNumber = (min, max) => {
        return Math.round(Math.random() * (max - min) + min);
    }

    const onMouseEnter = () => {
        setColorInterval(setInterval(() => {
            console.log(colorInterval);
            setRed(setRandomNumber(0, 255).toString());
            setGreen(setRandomNumber(0, 255).toString());
            setBlue(setRandomNumber(0, 255).toString());
        }, 1000));
    }

    const onMouseOut = () => {
        clearInterval(colorInterval);
    }

    const onDoubleClick = () => {
        clearInterval(colorInterval);
    }

    return (
        <div style={{position: 'absolute', width: '100%', height: '100%', display: 'flex', alignItems: 'center', flexDirection: 'column', justifyContent: 'center'}}>
            <div style={rectStyle} 
                onMouseEnter={onMouseEnter} 
                onMouseOut={onMouseOut} 
                onDoubleClick={onDoubleClick}>
            </div>
        </div>
    );
}

export default RectangleComponent;
