import { useState } from 'react';

// ** Hook to store and process values of any inputs (values Number | Boolean) :
/*
const [speed, setSpeed] = useOption<number>(2);
console.log(speed);
<input type="range" value={speed} onChange={setSpeed} min="1" max="10" />
*/

const useOption = <T extends number | boolean>(initialValue: T) => {

    const [value, setValue] = useState(initialValue);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (typeof e.currentTarget.value === 'boolean') {
            const newValue = !value;
            setValue(newValue as T);
        } else {
            const newValue = Number(e.currentTarget.value);
            setValue(newValue as T);
        }
    };

    return [value, handleChange] as const;
};

export default useOption;