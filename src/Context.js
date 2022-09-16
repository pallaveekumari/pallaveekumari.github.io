import { createContext, useState ,useReducer} from "react";

export const themeContext=createContext()
const initalState={darkMode:true}

const themeReducer=(state,action)=>{
    switch(action.type)
    {
        case "toggle":
            return {darkMode : !state.darkMode}
default:
    return state;
    } 
}

export const ThemeProvider=(props)=>{
    const [state,dispatch]=useReducer(themeReducer,initalState)

    return(
        <themeContext.Provider value={{state,dispatch}}>
            {props.children}
        </themeContext.Provider>
    );
};