import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './MyHeader.module.css';

type PropsType = {
    widthNav: string
    onClose: () => void
}
export const MyHeader = (props: PropsType) => {
    return (

        <div id={s.mySidenav} className={s.sidenav} style={{width: props.widthNav}}>
            <a href="javascript:void(0)" className={s.closeBtn} onClick={props.onClose}>&times;</a>
            <NavLink to={'/pre-junior'}>Pre-junior</NavLink>
            <NavLink to={'/junior'}>Junior</NavLink>
            <NavLink to={'/middle'}>Middle</NavLink>
            <NavLink to={'/clock'}>Clock</NavLink>
        </div>
    )
};
