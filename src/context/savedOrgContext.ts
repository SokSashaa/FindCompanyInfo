import React from "react";
import {getCompany} from "../fetchData";

type savedOrgContext = {
    savedOrg: getCompany[],
    setSaved0rg: React.Dispatch<React.SetStateAction<any>>,
}
export const savedOrgContext = React.createContext<savedOrgContext>({
    savedOrg: [],
    setSaved0rg: () => {
    }
});
