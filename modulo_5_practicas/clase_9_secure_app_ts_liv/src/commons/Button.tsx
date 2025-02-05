import React from 'react';

type id = string | number;

interface ButtonProps {
    id: id;
    desc: string;
    label: string;
    // buttonOnClick: () => void; // ** Prop with No Event definitions! 
    buttonOnClick: (React.MouseEventHandler<HTMLButtonElement>);
}

const Button: React.FC<ButtonProps> = ({ id, desc, label, buttonOnClick }) => {
    return (
        <button className="btn btn-primary m-2" data-id={id}  data-desc={desc} onClick={buttonOnClick}>
            {label} &raquo;
        </button>
    );
};

export default Button;