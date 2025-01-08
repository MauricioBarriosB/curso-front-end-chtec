import React, { useState } from 'react';
import PropTypes from "prop-types";

function CustomSelect({initial, options, onChange }) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleSelectChange = (event) => {
        const newValue = event.target.value;
        setSelectedValue(newValue);
        if (onChange) {
            onChange(newValue);
        }
    };

    return (
        <div className="d-flex justify-content-center">
            <select className="form-select" style={{ maxWidth:"350px",cursor:"pointer"}} value={selectedValue} onChange={handleSelectChange} required>
                <option value="">{initial}</option>
                {options.map((option) => (
                    <option key={Math.random()} value={option.id}>
                        {option.name}
                    </option>
                ))}
            </select>
        </div>
    );
};

CustomSelect.propTypes = {
    initial: PropTypes.string.isRequired,
    options: PropTypes.array.isRequired,
    onChange: PropTypes.func.isRequired,
};

export default CustomSelect;