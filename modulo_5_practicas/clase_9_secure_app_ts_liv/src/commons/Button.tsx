import React from 'react';

// ** Prop with No Event definitions :  
// ** buttonOnClick: () => void;

interface ButtonProps {
    id: string | number;
    desc: string;
    label: string;
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