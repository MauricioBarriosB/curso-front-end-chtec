import { useState } from 'react';
import DOMPurify from "dompurify";

// ** Hook to clean and check min lenght of Form Inputs -> Check with {JSON.stringify(form)}

const useRefForm = (initialValue: object, useFormCallBack: Function) => {

    const [form, setform] = useState(initialValue);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setform({ ...form, [name]: DOMPurify.sanitize(value) });
    }

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let flagSubmit: boolean = true;
        for (const [key, value] of Object.entries(form)) {
            console.log(`* key: ${key} -> value: ${value}`);

            if (value.length < 4) {
                flagSubmit = false;
                break;
            }
        }
        useFormCallBack(flagSubmit);
    };

    return {
        form,
        handleChange,
        handleSubmit
    } as const;
}

export default useRefForm;