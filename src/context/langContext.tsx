'use client'
import { createContext, useState } from "react";

const LangContext = createContext({
    lang: "en",
    setLang: (value: string) => {}
});
export default LangContext;

export function LangProvider({children} : any) {
    const [lang, setLang] = useState("en");


    return (
        <LangContext.Provider value={{lang, setLang}}>
            {children}
        </LangContext.Provider>
    )
}