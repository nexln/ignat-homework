import React from 'react';
import './App.css';
import {MessageType} from "./App";

type PropsType = {
    message: Array<MessageType>
}


export const FirstHomework = (props: PropsType) => {
    return (
        <div>
            {
                props.message.map(newMessages => {
                    return (
                        <div className='message'>
                            <div className='friendName'>{newMessages.name}</div>
                            <div className='textMessage'>{newMessages.text}</div>
                            <div className='timeMessage'>{newMessages.time}</div>
                        </div>
                    )
                })
            }
        </div>
    )
};

