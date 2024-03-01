import React, {FC, useEffect, useState} from "react";
import './Form.scss'
import FindOrg from "../FindOrg/FindOrg";
import {savedOrgContext} from "../../context/savedOrgContext";
import SavedOrg from "../SavedOrg/SavedOrg";
import {getCompany} from "../../fetchData";

enum statesForm {
    search,
    saved
}

const Form: FC = () => {
    const [form, setForm] = useState<statesForm>(statesForm.search);

    const [savedOrg, setSavedOrg] = useState<getCompany[]>([]);

    useEffect(() => {
        if (savedOrg.length === 0) setForm(statesForm.search)
    }, [savedOrg, savedOrg.length])


    return (
        <savedOrgContext.Provider value={{savedOrg: savedOrg, setSaved0rg: setSavedOrg}}>
            <div className={'form'}>
                <div className={'headerForm'}>
                    <p>Организации</p>
                </div>
                <div className={'choiceForm'}>
                    <button onClick={() => setForm(statesForm.search)}>Поиск</button>
                    <button onClick={() => setForm(statesForm.saved)}
                            disabled={savedOrg.length === 0}>Сохраненные({savedOrg.length})
                    </button>
                </div>


                <div className={'wrapperForm'}>
                    {form === statesForm.search ? <FindOrg/> : <SavedOrg/>}
                </div>
            </div>
        </savedOrgContext.Provider>
    )
}
export default Form