import React, {useEffect, useState} from 'react';
import './App.css';
import {FirstHomework} from "./FirstLesson";
import {SecondHomework} from "./SecondHomework";
import {v1} from "uuid";
import {ThirdHomework} from "./ThirdHomework";
import {MyButton} from "./common/MyButton/MyButton";
import {MyCheckbox} from "./common/MyCheckbox/MyCheckbox";
import {MyInput} from "./common/MyInput/MyInput";
import {MyHeader} from "./common/MyHeader/MyHeader";

export type MessageType = {
    name: string
    text: string
    time: string
    avatarImg: string
}

export type TaskType = {
    id: string
    title: string
    done: boolean
}

export type NameType = {
    id: string
    name: string
}

function App() {

    const [width, setWidth] = useState('0px');
    const [cursorPos, setCursorPos] = useState<number | null>(null)
    const messages = [
        {name: 'Artem', text: 'Privet', time: '20:00', avatarImg: 'https://i.pinimg.com/564x/f2/c6/51/f2c6512288f5065b652879a8d22f49c3.jpg'},
        {name: 'Lena', text: 'Kak dela', time: '20:01', avatarImg: 'https://i.pinimg.com/564x/72/43/cc/7243ccdc44fec5e96a09843257299e9c.jpg'},
        {name: 'Anton', text: 'It-incubator', time: '20:02', avatarImg: 'https://i.pinimg.com/564x/17/a6/aa/17a6aa09f19636772b90f0d98d70e2a3.jpg'},
    ];

    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: 'React', done: false},
        {id: v1(), title: 'HTML', done: true},
        {id: v1(), title: 'CSS', done: true},
        {id: v1(), title: 'SaSS', done: true},
        {id: v1(), title: 'Less', done: true},
    ]);

    const [nam, newName] = useState<Array<NameType>>(
        []
    );

    function removeTask(taskID: string) {
        const newTasks = tasks.filter(task => task.id !== taskID);
        setTasks(newTasks)
    }

    function sayHello(name: string) {
        const newN: NameType =  {id: v1(), name: name};
        newName([newN, ...nam])
    }

    const changeTask = (taskID: string, done: boolean) => {
        const changedTasks = tasks.find(task => task.id === taskID);
        if (changedTasks) {
            changedTasks.done = done;
            setTasks([...tasks])
        }
    };

    const closeNavBar = () => {
        const zeroWidth = '0px';
        setWidth(zeroWidth)
    }
    const openNavBar = () => {
        const zeroWidth = '250px';
        setWidth(zeroWidth)
    }

    const checkCursorPosition = (e: MouseEvent) => {
        setCursorPos(e.clientX)
    }

    useEffect(() => {
        document.addEventListener('mousemove', checkCursorPosition)
        return () => {
            document.removeEventListener('mousemove', () => {})
        }
    }, [])

    useEffect(() => {
        if(cursorPos && cursorPos < 20){
            openNavBar()
        } else if (cursorPos && cursorPos >= 250){
            closeNavBar()
        }
    }, [cursorPos])


    return (
        <div className="App">
            <MyHeader onClose={closeNavBar} widthNav={width}/>

            <FirstHomework message={messages}/>
            <SecondHomework tasks={tasks} removeTask={removeTask} changeTask={changeTask}/>
            <ThirdHomework names={nam} sayHello={sayHello}/>
            <div className='customComponent'>
                <MyButton title={'Button 1'} onClick={() => console.log('Button 1')}/>
                <MyButton title={'Button 2'} onClick={() => console.log('Button 2')} color={'red'}/>
                <MyCheckbox type={'checkbox'}/>
                <MyInput type={'input'}/>
            </div>

        </div>
    );
}

export default App;
