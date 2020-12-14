import React, {ChangeEvent, InputHTMLAttributes, DetailedHTMLProps} from "react";

type DefaultRadioPropsType = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>

type SuperRadioPropsType = DefaultRadioPropsType & {
    options?: any[]
    onChangeOption?: (option: string) => void
}

const SuperRadio: React.FC<SuperRadioPropsType> = (
    {
        type, name,
        options, value,
        onChange, onChangeOption,
        ...restProps
    }
) => {
    const onChangeCallback = (e: ChangeEvent<HTMLInputElement>) => {
        onChangeOption && onChangeOption(e.currentTarget.value)

    }

    const mappedOptions: any[] = options ? options.map((o, i) => (
        <label key={name + "-" + i}>
            <input type={"radio"}  onChange={onChangeCallback} value={o} checked={(value === o)}/>{o}</label> )) : [];
    return (
        <div {...restProps}>
            {mappedOptions}
        </div>
    );
}

export default SuperRadio;
