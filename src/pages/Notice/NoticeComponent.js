import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { killNotice } from "../../redux/notifications/notificationsReducer";
import "../../styles/notice.css";

const NoticeComponent = ( ) => {

    const { type, message, alert } = useSelector(state =>state.notifications);
    
    const dispatch = useDispatch();

    useEffect(()=>{
        setTimeout(dispatch, 10000, killNotice());
    },[]); 

    const shutdown = (e) => {
        e.preventDefault();
        dispatch(killNotice())
    }

    return(type ? <div className={`notice ${type}`}>
        <p>{message || alert}</p>
        <button type="button" onClick={e=>shutdown(e)}>x</button>
    </div>: null)
}

export default NoticeComponent;