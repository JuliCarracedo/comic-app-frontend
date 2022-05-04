import React, { useEffect, useState } from "react";

const NoticeComponent = ( ) => {

    const [alive, setAlive] = useState(true)

    useEffect(()=>{
        if(!alive){setAlive(true)}
        setTimeout(setAlive(false),4000)
    },[]) 

    return(alive && <div>
        You are being notified
    </div>)
}

export default NoticeComponent;