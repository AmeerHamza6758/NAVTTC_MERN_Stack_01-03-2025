import { createContext, useState } from "react";

export const MyContext = createContext("")

export const ContextProvider = ({ children }) => {
    const [username, setUsername] = useState('John Doe')
    const [classname, setClassname] = useState()
    const [count, setCount] = useState(0)
    function addToCart() {
        setCount(count + 1)
    }

    function removeToCart() {
        setCount(count - 1)
    }

    return (
        <>
            < MyContext.Provider value={{ username, count, addToCart }} >{children}</MyContext.Provider >
        </>
    )
}