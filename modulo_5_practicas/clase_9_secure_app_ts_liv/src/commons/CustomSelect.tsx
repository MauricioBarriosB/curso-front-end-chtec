import React from 'react';

type Option = {
    label: string;
    value: string | number;
}

interface SelectProps {
    placeholder?: string;
    options: Option[];
    onSelect: (React.ChangeEventHandler<HTMLSelectElement>);
};

const CustomSelect: React.FC<SelectProps> = ({ placeholder, options, onSelect }) => {

    return (
        <div className="d-flex justify-content-center">
            <select className="form-select" style={{ maxWidth: "350px", cursor: "pointer" }} onChange={onSelect}>
                <option value="0">{placeholder}</option>
                {options.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomSelect;