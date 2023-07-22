'use client'
import { createContext, useState } from "react";

const PageContext = createContext({
    pageData: 0,
    setPageData: (value: number) => {}
});
export default PageContext;

export function PageProvider({children} : any) {
    const [pageData, setPageData] = useState(0);


    return (
        <PageContext.Provider value={{pageData, setPageData}}>
            {children}
        </PageContext.Provider>
    )
}