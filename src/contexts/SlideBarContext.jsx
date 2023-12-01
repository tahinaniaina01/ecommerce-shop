import { createContext, useState } from "react";

export const SlideBarContext = createContext();

export const SlideBarProvider = ({children}) => {
    const [isOpen,setIsOpen] = useState(false);

    return (
        <SlideBarContext.Provider value={{isOpen,setIsOpen}}>
            {children}
        </SlideBarContext.Provider>
    );
}