import React, {ChangeEvent} from 'react';
import s from './MyCheckbox.module.css';

type PropsType = {
    type: string
    onChange?: (event: ChangeEvent<HTMLInputElement>) => void
    checked?: boolean
}
export const MyCheckbox = (props: PropsType) => {
    return (
        <div>
            <input type={props.type} className={s.checkbox} onChange={props.onChange} checked={props.checked}/>
        </div>
    )
};