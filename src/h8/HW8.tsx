import React, {useState} from 'react';
import {homeWorkReducer} from "./bll/homeWorkReducer";


const initialPeople: initialPeopleType = [
    {_id: 0, name: "Кот", age: 3},
    {_id: 1, name: "Александр", age: 66},
    {_id: 2, name: "Коля", age: 16},
    {_id: 3, name: "Виктор", age: 44},
    {_id: 4, name: "Дмитрий", age: 40},
    {_id: 5, name: "Ирина", age: 55},
]

export type PeopleType = {
    _id: number
    name: string
    age: number
}

export type initialPeopleType = Array<PeopleType>

function HW8() {
    const [people, setPeople] = useState(initialPeople);

    const finalPeople = people.map(p => (
        <div key={p._id} className={'people_item'}>
            <div>{p.name}</div>
            <div>{p.age}</div>
        </div>
    ))

    const sortUp = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "up"}))
    const sortDown = () => setPeople(homeWorkReducer(initialPeople, {type: "sort", payload: "down"}))
    const checkAge = () => setPeople(homeWorkReducer(initialPeople, {type: "check"}))

    return (
        <div className={'sort_people'}>

            <div className={'people_list'}>
                {finalPeople}
            </div>

            <div className={'button_block'}>
                <div>
                    <button onClick={sortUp}>sort up</button>
                </div>
                <div>
                    <button onClick={sortDown}>sort down</button>
                </div>
                <div>
                    <button onClick={checkAge}>check age</button>
                </div>
            </div>


        </div>
    );
}

export default HW8;
