import React, { useEffect, useState } from "react";
import "../../styles/notice.css";

const NoticeComponent = ( ) => {

    const [alive, setAlive] = useState(false);
    // const [type, setType] = useState('idle');

    // const {}

    useEffect(()=>{
        setTimeout(setAlive, 10000, false);
    },[]); 

    const killNotice = (e) => {
        e.preventDefault();
        setAlive(false);
    }

    return(alive && <div className="notice message">
        <p>You are being notified</p>
        <button type="button" onClick={e=>killNotice(e)}>x</button>
    </div>)
}

export default NoticeComponent;