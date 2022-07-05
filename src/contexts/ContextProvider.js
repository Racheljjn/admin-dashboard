import React, { useContext, createContext,useState } from "react";

const StateContext = createContext()

const initialState={
 cart:false,
 useProfile:false,
 notification:false
}


export const ContextProvider=({children})=>{

 const [activeMenu, setActiveMenu] = useState(true)
 const [isClicked,setIsClicked] = useState(initialState)
 const [screenSize, setScreenSize] = useState(undefined)
 const [currentMode, setCurrentMode] = useState("Light")
 const [currentColor,setCurrentColor] = useState("#03C9D7")
 const [themeSettings, setThemeSettings] = useState(false)
 const handleClick=(Clicked)=>{
  setIsClicked({...initialState,[Clicked]:true})
 }
 const setMode=(e)=>{
  setCurrentMode(e.target.value)
  localStorage.setItem("themeMode",e.target.value)
  setThemeSettings(false);

 }
 const setColor=(mode)=>{
  setCurrentColor(mode)
  localStorage.setItem("colorMode",mode)
  setThemeSettings(false)
 }
 
 return (
   <StateContext.Provider
     value={{
       activeMenu,
       setActiveMenu,
       isClicked,
       setIsClicked,
       handleClick,
       screenSize,
       setScreenSize,
       currentMode,
       setMode,
       currentColor,
       setCurrentColor,
       themeSettings,
       setThemeSettings,
       setColor,
       setCurrentMode,
     }}
   >
     {children}
   </StateContext.Provider>
 );

}

export const useStateContext = ()=> useContext(StateContext)