import {FC, useContext, useEffect, useState} from "react";
import {savedOrgContext} from "../../context/savedOrgContext";
import ItemList from "../ItemList/ItemList";
import {getCompany} from "../../fetchData";

const SavedOrg: FC = () => {
    const {savedOrg} = useContext(savedOrgContext)
    return (<>

        {savedOrg.map((item:getCompany) =>
            <ItemList dataCompany={item} nameSavedButton={false} key={item.inn}/>
        )}
    </>)
}
export default SavedOrg