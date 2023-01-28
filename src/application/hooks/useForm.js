import { useState } from "react";
export const useform = ({ defaultformValues }) => {
    const [formValues, setformValues] = useState (defaultFormValues);
    const onInputChange = (e) => {
        const eventName = e.target.name;
    const { validateInput } = formValues [eventName] ;
    setFormValues ( (prevFormValues) => {
    return {
    ...prevFormValues,
    [eventName]: {
    ...prevFormValues [eventName],
    value: e.target.value,
    
    error: validateInput ? validateInput (e.target. value) : "",
    },
    };
    });

    
    };

    const checkButtonDisable = (values) => {
    for (const [key, objValue] of object.entries (values)) {
    if (objValue, recuired && (objValue.error || !objValue.value)) {
        return true;
    }
    }
    };
    const clearForm = (obj) => {
        setformValues(obj);
        };
        return {
            formValues, 
            setformValues,
            onInputChange,
            clearForm,
            checkButtonDisable
        }
    }