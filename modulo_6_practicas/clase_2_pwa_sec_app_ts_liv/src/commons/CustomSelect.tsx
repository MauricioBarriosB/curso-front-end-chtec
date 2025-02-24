import React from 'react';

interface IOptions {
    id: string | number;
    name: string;
}

type CustomSelectTypes = {
    placeholder?: string;
    options: IOptions[];
    onSelect: (React.ChangeEventHandler<HTMLSelectElement>);
};

const CustomSelect = ({ placeholder, options, onSelect }: CustomSelectTypes) => {
    return (
        <div className="d-flex justify-content-center">
            <select className="form-select" style={{ maxWidth: "350px", cursor: "pointer" }} onChange={onSelect}>
                <option value="0">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomSelect;