import React, { useEffect, useState } from "react";

const NoticeComponent = ( ) => {

    const [alive, setAlive] = useState(true)

    useEffect(()=>{
        setTimeout(setAlive,10000,false);
    },[]) 

    const killNotice = (e) => {
        e.preventDefault();
        setAlive(false);
    }

    return(alive && <div className="notice">
        <p>You are being notified</p>
        <button type="button" onClick={e=>killNotice(e)}>x</button>
    </div>)
}

export default NoticeComponent;