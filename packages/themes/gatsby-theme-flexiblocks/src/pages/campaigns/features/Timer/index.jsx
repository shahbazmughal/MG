import React from 'react';
import { navigate } from 'gatsby';
import './floader.css';

export default function Timer() {

    const [seconds, setSeconds] = React.useState(3);

    React.useEffect(() => {
        if (seconds > 0) {
        setTimeout(() => setSeconds(seconds - 1), 1000);
        } else {
        setSeconds(0);
        navigate('/campaigns/');
        }
    });

    return (
    <div className="counterblock">
        <div id="countdown">{seconds}</div>
        <div className="counter-loading"></div>
    </div>
    )

}