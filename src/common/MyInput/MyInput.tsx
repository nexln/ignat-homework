import React, {ChangeEvent, KeyboardEvent} from 'react';
import s from './MyInput.module.css';
type PropsType = {
type: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    placeholder?: string
    value?: string
    onKeyDown?: (event: KeyboardEvent<HTMLInputElement>) => void
}
export const MyInput = (props: PropsType) => {
    return (
        <div>
            <input type={props.type} className={s.txt} onChange={props.onChange} placeholder={props.placeholder} value={props.value} onKeyDown ={props.onKeyDown}/>
        </div>
    )
};
