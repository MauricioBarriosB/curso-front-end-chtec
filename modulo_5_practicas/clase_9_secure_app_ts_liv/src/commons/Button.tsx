import React from 'react';

// ** Prop with No Event definitions :  
// ** buttonOnClick: () => void;

type ButtonTypes = {
    id: string | number;
    desc: string;
    label: string;
    buttonOnClick: (React.MouseEventHandler<HTMLButtonElement>);
}

const Button = ({ id, desc, label, buttonOnClick } : ButtonTypes) => {
    return (
        <button className="btn btn-primary m-2" data-id={id}  data-desc={desc} data-label={label} onClick={buttonOnClick}>
            {label} &raquo;
        </button>
    );
};

export default Button;