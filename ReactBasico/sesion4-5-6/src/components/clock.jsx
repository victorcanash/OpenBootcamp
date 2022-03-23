import React, { useState, useEffect } from 'react';
import '../styles/clock.scss';

export const ClockComponent = (props) => {

    const initDate = new Date();
    const initAge = 0;
    const initName = 'Martín';
    const initSurname = 'San José';

    const [date, setDate] = useState(initDate);
    const [age, setAge] = useState(initAge);
    const [name, setName] = useState(initName);
    const [surname, setSurname] = useState(initSurname);

    const timerID = () => {
        setInterval(() => {
            tick();
        }, 1000);
    }

    const tick = () => {
        setAge(age + 1);
        setDate(new Date());
    };

    useEffect(() => {
        // After mount
        timerID();
        return () => {
            // Before unmount
            clearInterval(timerID)
        };
    });

    return (
        <div>
            <h2>
                Hora Actual: { date.toLocaleTimeString() }
            </h2>
            <h3>
                { name } { surname }
            </h3>
            <h1>
                Edad: {age}
            </h1>
        </div>
     );
}
