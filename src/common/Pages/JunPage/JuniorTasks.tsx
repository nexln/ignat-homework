import React, {useState} from 'react';

import s from "./JuniorTasks.module.css"
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import {MyButton} from "../../MyButton/MyButton";
import HW7 from "../../../h7/HW7";
import HW8 from "../../../h8/HW8";
import {HW10} from "../../../h10/HW10";


export function Junior() {

    const [title, setTitle] = useState<string>('Hello');


    const changeTitle = (newValue: string) => {
        setTitle(newValue)
    };

    function setLocalTitle() {
        localStorage.setItem('localTitle', title.toString());
    }

    const getLocalTitle = () => {
        let locTitle = localStorage.getItem('localTitle')
        if (locTitle !== null) {
            setTitle(locTitle)
        }
    }

    return (
        <div className={s.contentContainer}>
            <div className={s.editSpan}>
                <EditableSpan title={title} changeValue={changeTitle}/>
                <MyButton title={'Save'} onClick={setLocalTitle}/>
                <MyButton title={'GetLastTitle'} onClick={getLocalTitle}/>
            </div>
            <div className={s.customSel}>
                <HW7/>
            </div>
            <div className={s.reduc}>
                <HW8/>
            </div>
            <div className={s.preload}>
                <HW10/>
            </div>
        </div>

    );
}
