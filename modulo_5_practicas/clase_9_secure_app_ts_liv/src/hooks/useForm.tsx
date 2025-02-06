import { useState, useRef } from 'react';
import DOMPurify from "dompurify";

// ** Hook to clean and check min lenght of Form Inputs -> Check with {JSON.stringify(form)}

const useForm = (initialValue:Object, useFormCallBack:Function) => {

    const [form, setform] = useState(initialValue);

    const status = useRef<boolean>(false);

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = target;
        setform({ ...form, [name]: DOMPurify.sanitize(value)});
    }
 
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        let flag:boolean = true;
        for (const [key, value] of Object.entries(form)) {

             console.log(`* key: ${key} -> value: ${value}`);  

            if (value.length < 4) {
                flag = false;
                break;
            }
        }
        status.current = flag;
        useFormCallBack();
    };
 
    return {
        form,
        status,
        handleChange,
        handleSubmit
    } as const;
}

export default useForm;