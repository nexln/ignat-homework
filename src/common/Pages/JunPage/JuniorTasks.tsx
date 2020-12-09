import React, {useState} from 'react';

import s from "./JuniorTasks.module.css"
import {EditableSpan} from "../../EditableSpan/EditableSpan";
import {MyButton} from "../../MyButton/MyButton";
import {CustomSelect} from "../../CustomSelect/CustomSelect";


export function Junior() {

    const [title, setTitle] = useState<string>('Hello');

    const selectTitles: Array<string> = ['M54B30', 'M57B30', 'S52B32']

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
                <CustomSelect value={selectTitles}/>
            </div>
        </div>

    );
}
