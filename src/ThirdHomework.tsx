import React, {useState, KeyboardEvent, ChangeEvent} from "react";
import {NameType} from "./common/Pages/PreJunPage/PreJuniorTasks";
import {MyInput} from "./common/MyInput/MyInput";
import {MyButton} from "./common/MyButton/MyButton";

type PropsType = {
    names: Array<NameType>
    sayHello: (name: string) => void
}


export const ThirdHomework = (props: PropsType) => {

    const [title, setTitle] = useState<string>('');
    const sayHello = () => {
        const trimmedTitle = title.trim();
        if (trimmedTitle !== '') {
            props.sayHello(trimmedTitle);
            alert('Hello ' + trimmedTitle + ' ' + props.sayHello.length);
            setTitle('');
        }
    };
    const onKeyPressAddTask = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") {
            sayHello()
        } else if (e.keyCode === 27) {
            setTitle('');
        }
    };

    const onChangeFieldText = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    };
    return (
        <div className='thirdHomework'>
            <MyInput type="text" placeholder={'Введите имя'} value={title}
                     onChange={onChangeFieldText} onKeyDown={onKeyPressAddTask}/>
            <MyButton onClick={sayHello} title={'Press here'}/>
            <div>
                <span>Count of names {props.names.length}</span>
            </div>
            {
                props.names.map(newNames => {
                    return (
                        <div>
                            <span>{newNames.name}</span>
                        </div>
                    )
                })
            }
        </div>
    )
};