import {createContext} from "react"
export const GlobalContext=createContext()
export const GlobalProvider=({children})=>{
    const land="10 acres"
    return(
        <GlobalContext.Provider value={land}>
            {children}
        </GlobalContext.Provider>
    )
}

