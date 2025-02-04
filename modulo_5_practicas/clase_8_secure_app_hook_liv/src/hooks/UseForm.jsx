import { useState, useRef } from 'react';
import DOMPurify from "dompurify";

const useForm = (callback) => {

    const [values, setValues] = useState({});
    const isValid = useRef();

    const handleSubmit = (event) => {
        event.preventDefault();
        isValid.current = true;

        for (const [key, value] of Object.entries(values)) {
            console.log(`* key: ${key} -> value: ${value}`);     
            if (value.length < 4) {
                isValid.current = false;
                break;
            }
        }
        callback();
    };

    const handleChange = (event) => {
        event.persist();
        setValues(values => ({ ...values, [event.target.name]: DOMPurify.sanitize(event.target.value) }));
    };

    const resetForm = () => {
        setValues({});
    };

    return {
        handleChange,
        handleSubmit,
        resetForm,
        values,
        isValid
    }
};

export default useForm;