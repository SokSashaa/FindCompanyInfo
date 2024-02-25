import {useEffect, useState} from "react";

const useDebounce =<T,>(value:T,delay=500) =>{
const [debounceValue,setDebounceValue] = useState<T>(value);
    useEffect(() => {
        const idTimer = setTimeout(()=>{
            setDebounceValue(value)
        },delay)
        return ()=>clearTimeout(idTimer)
    }, [value,delay]);
    return debounceValue
}
export default useDebounce