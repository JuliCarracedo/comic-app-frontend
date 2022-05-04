import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { killNotice } from "../../redux/notifications/notificationsReducer";
import "../../styles/notice.css";

const NoticeComponent = ( ) => {

    const [alive, setAlive] = useState(false);
    const [text, setText] = useState('');
    const { type, message, alert } = useSelector(state =>state.notifications)
    const dispatch = useDispatch();

    if (type){
        setAlive(true);
        setText(type === 'message' ? message : alert)
    }else{
        setAlive(false)
    }

    useEffect(()=>{
        setTimeout(dispatch, 10000, killNotice());
    },[]); 

    const shutdown = (e) => {
        e.preventDefault();
        dispatch(killNotice())
    }

    return(alive && <div className={`notice ${type}`}>
        <p>{text}</p>
        <button type="button" onClick={e=>shutdown(e)}>x</button>
    </div>)
}

export default NoticeComponent;