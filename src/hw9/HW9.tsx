import React, {useState} from 'react';
import s from './HW9.module.css'


export const HW9 = () => {
    const deg = 6;

    const [hr, setHr] = useState<string>('')
    const [mn, setMn] = useState<string>('')
    const [sc, setSc] = useState<string>('')
    const [dt, setDt] = useState<string>('')
    const [dN, setDn] = useState<string>('none')
    const [intervalId, setIntervalId] = useState<any>()


    const setData = () => {
        let day = new Date();
        let angleHh = day.getHours() * 30;
        let angleMm = day.getMinutes() * deg;
        let angleSs = day.getSeconds() * deg;
        setHr('rotateZ(' + (angleHh + (angleMm / 12)) + 'deg)');
        setMn('rotateZ(' + angleMm + 'deg)')
        setSc('rotateZ(' + angleSs + 'deg)')
        setDt(`${day.getDate()}.${day.getMonth() + 1}.${day.getFullYear()}`)
    }

    const stopInterval = () => {
        clearInterval(intervalId)
    }
    const startInterval = () => {
        clearInterval(intervalId)
       let id = setInterval(setData, 1000)
        setIntervalId(id)
    }
    return (
        <div className={s.container}>
            <div className={s.clock} onMouseEnter={() => setDn('flex')} onMouseLeave={() => setDn('none')}>
                <div className={s.hour}>
                    <div className={s.hr} id="hr" style={{transform: hr}}/>
                </div>
                <div className={s.min}>
                    <div className={s.mn} id="mn" style={{transform: mn}}/>
                </div>
                <div className={s.sec}>
                    <div className={s.sc} id="sc" style={{transform: sc}}/>
                </div>
                <div className={s.date} style={{display: dN}}>{dt}</div>
            </div>
            <button className={s.startButton} onClick={startInterval}>Start</button>
            <button className={s.stopButton} onClick={stopInterval}>Stop</button>
        </div>
    );
}
