import React from 'react';
import s from './MyHeader.module.css';

type PropsType = {
    widthNav: string
    onClose: () => void
}
export const MyHeader = (props: PropsType) => {
    return (

            <div id={s.mySidenav} className={s.sidenav} style={{width: props.widthNav}}>
                <a href="javascript:void(0)" className={s.closeBtn} onClick={props.onClose}>&times;</a>
                <a href="#">Pre-junior</a>
                <a href="#">Junior</a>
                <a href="#">Middle</a>
            </div>

    )
};