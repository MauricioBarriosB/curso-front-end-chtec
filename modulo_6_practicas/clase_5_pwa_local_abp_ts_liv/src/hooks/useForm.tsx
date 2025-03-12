import { useState } from 'react';
import DOMPurify from "dompurify";

// ** Hook to clean, reset and check form min lenght -> Form Inputs -> Check with {JSON.stringify(form)}

const useForm = (initialValue: object, useFormCallBack: Function) => {

    const [form, setform] = useState(initialValue); 

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>  | React.ChangeEvent<HTMLTextAreaElement>) => {
        const { name, value } = target;
        setform({ ...form, [name]: DOMPurify.sanitize(value) });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        
        let flagSubmit: boolean = true;
        for (const [key, value] of Object.entries(form)) {

            // console.log(`* key: ${key} -> value: ${value}`);

            if (key.length < 4 || value.length < 4) {
                flagSubmit = false;
                break;
            }
        }
        useFormCallBack(flagSubmit);
    };

    const updateForm = (initialValue: object) => {
        setform(initialValue);
    };

    const resetForm = () => {
        let resetKeys : Record<string, string> = {};
        for (const [key] of Object.entries(form)) resetKeys[key]  = '';
        setform(resetKeys);
    };

    return {
        form,
        handleChange,
        handleSubmit,
        updateForm,
        resetForm
    } as const;
}

export default useForm;