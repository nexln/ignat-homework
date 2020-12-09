import React from 'react';

type PropsType = {
    value: Array<string>

}

export function CustomSelect(props: PropsType) {


    return (
        <select>
            {
                props.value.map(sel => {
                    return <option value={sel} >{sel}</option>
                })
            }
        </select>
    );
}