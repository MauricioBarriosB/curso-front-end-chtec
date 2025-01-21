import React from 'react';

interface ButtonProps {
    desc: string;
    label: string;
    // buttonOnClick: () => void; // ** Prop with No Event definitions! 
    buttonOnClick: (React.MouseEventHandler<HTMLButtonElement>);
}

const Button: React.FC<ButtonProps> = ({ desc, label, buttonOnClick }) => {
    return (
        <button className="btn btn-primary m-2" data-desc={desc} onClick={buttonOnClick}>
            {label} &raquo;
        </button>
    );
};

export default Button;