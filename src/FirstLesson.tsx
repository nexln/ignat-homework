import React from 'react';
import './App.css';
import {MessageType} from "./App";

type PropsType = {
    message: Array<MessageType>
}


export const FirstHomework = (props: PropsType) => {
    return (
        <div className='messageContainer'>
            {
                props.message.map(newMessages => {
                    return (
                        <div className='container'>
                        <div className='avatar' style={{backgroundImage: `url(${newMessages.avatarImg})`}} />
                        <div className='message'>
                            <div className='friendName'>{newMessages.name}</div>
                            <div className='textMessage'>{newMessages.text}</div>
                            <div className='timeMessage'>{newMessages.time}</div>
                        </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

