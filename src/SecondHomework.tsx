import React, {ChangeEvent} from "react";
import {MyButton} from "./common/MyButton/MyButton";
import {MyCheckbox} from "./common/MyCheckbox/MyCheckbox";
import {TaskType} from "./common/Pages/PreJunPage/PreJuniorTasks";

type PropsType = {
    tasks: Array<TaskType>
    removeTask: (taskID: string) => void
    changeTask: (taskID: string, done: boolean) => void
}

export const SecondHomework = (props: PropsType) => {


    return (
        <div className='secondHomework'>
<ul>
    {
        props.tasks.map(t => {
            const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                props.changeTask(t.id, e.currentTarget.checked)
            };
            return (
                <li key={t.id}>
                    <MyCheckbox type="checkbox" onChange={onChangeHandler} checked={t.done}/>
                    <span>{t.title}</span>
                    <MyButton onClick={() => props.removeTask(t.id)} title={'X'}/>
                </li>
            )
        })
    }
</ul>
        </div>
    )
};