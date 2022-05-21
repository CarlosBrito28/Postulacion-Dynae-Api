
import { useState } from "react"

export const useFetch = (initialState = {}) => {
    const [values, setValues] = useState(initialState)

    const handleImputChange = ({target}) => {
        setValues({
            ...values,
            [ target.name ]: target.value
        });
    }
    return [values, handleImputChange];

}







