import {useState, useEffect} from "react"

export function useLocalStorage<T>( key: string, initianValue: T | (()=> T)) {
    const [value, setValue] = useState<T>(()=> {
        const jsonValue = localStorage.getItem(key)

        if (jsonValue == null) {
            if ( typeof initianValue === "function") {
                return (initianValue as () => T) ()
            } else {
                return initianValue
            }
        } else {
            return JSON.parse(jsonValue)
        }
    })

    useEffect (() => {
        localStorage.setItem(key, JSON.stringify(value))
    }, [value, key])

    return [value, setValue] as [T, typeof setValue]
}