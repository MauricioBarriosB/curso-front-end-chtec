import React from 'react';

type Option = {
    id: string | number;
    name: string;
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
                    <option key={option.id} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

export default CustomSelect;