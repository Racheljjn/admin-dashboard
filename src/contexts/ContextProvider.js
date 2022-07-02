import React, { useContext, createContext,useState } from "react";

const StateContext = createContext()

const initialState={
 chat:false,
 cart:false,
 useProfile:false,
 notification:false
}


export const ContextProvider=({children})=>{

 const [activeMenu, setActiveMenu] = useState(true)
 const [isClicked,setIsClicked] = useState(initialState)
 const [screenSize, setScreenSize] = useState(undefined)
 const handleClick=(Clicked)=>{
  setIsClicked({...initialState,[Clicked]:true})
 }
 return(
  <StateContext.Provider value={{activeMenu,setActiveMenu,isClicked,setIsClicked,handleClick,screenSize,setScreenSize}}>
   {children}
  </StateContext.Provider>
 )

}

export const useStateContext = ()=> useContext(StateContext)