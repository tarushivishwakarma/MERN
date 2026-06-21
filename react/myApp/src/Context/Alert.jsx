import {createContext} from 'react'
export const AlertContext=createContext()
export const AlertProvider=({children})=>{
    alert("Welcome")
    return(
        <AlertContext.Provider>
            {children}
        </AlertContext.Provider>
    )
}