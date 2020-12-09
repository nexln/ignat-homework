import React, {useEffect, useState} from 'react';
import './App.css';
import {MyHeader} from "./common/MyHeader/MyHeader";
import {Route} from "react-router";
import {HashRouter} from "react-router-dom";
import {PreJunior} from "./common/Pages/PreJunPage/PreJuniorTasks";
import {Junior} from "./common/Pages/JunPage/JuniorTasks";


// спросить на саппорте про типы router и почему он сам не подтягивает их


function App() {

    const [width, setWidth] = useState('5px');
    const [cursorPos, setCursorPos] = useState<number | null>(null)

    const closeNavBar = () => {
        const zeroWidth = '5px';
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
            document.removeEventListener('mousemove', () => {
            })
        }
    }, [])

    useEffect(() => {
        if (cursorPos && cursorPos < 20) {
            openNavBar()
        } else if (cursorPos && cursorPos >= 250) {
            closeNavBar()
        }
    }, [cursorPos])


    return (
        <HashRouter>
            <div className="App">
                <MyHeader onClose={closeNavBar} widthNav={width}/>
                <Route path='/pre-junior' component={PreJunior}/>
                <Route path='/junior' component={Junior}/>
                <Route path='/middle'/>
            </div>
        </HashRouter>
    );
}

export default App;
