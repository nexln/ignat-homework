import React, {MouseEvent} from 'react';
import s from './MyButton.module.css'

type PropsType = {
    title: string
    onClick: (event: MouseEvent<HTMLButtonElement>) => void
    color?: 'red' | 'green'
}
export const MyButton = (props: PropsType) => {
    const style = props.color === 'red' ? `${s.btn} ${s.red}` : `${s.btn} ${s.green}`
    return (
        <div>
            <button className={`${style} ${s.btn}` } color={props.color} onClick={props.onClick}>{props.title}</button>
        </div>

    )
};