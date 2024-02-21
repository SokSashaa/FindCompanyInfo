import React, {FC, useEffect, useState} from "react";
import './Form.scss'
import FindOrg from "../FindOrg/FindOrg";
import {savedOrgContext} from "../../context/savedOrgContext";
import SavedOrg from "../SavedOrg/SavedOrg";


const Form: FC = () => {
    const [form, setForm] = useState(false);
    
    const [savedOrgButton, setSavedOrgButton] = useState(false);
    
    const [savedOrg, setSavedOrg] = useState([]);

    useEffect(() => {
        if (savedOrg.length > 0) {
            setSavedOrgButton(true)
        }
        if(savedOrg.length === 0) {setSavedOrgButton(false); setForm(false)}
    }, [savedOrg, savedOrg.length])


    return (
        <savedOrgContext.Provider value={{savedOrg: savedOrg, setSaved0rg: setSavedOrg}}>
        <div className={'form'}>
            <div className={'headerForm'}>
                <p>Организации</p>
            </div>
            <div className={'choiceForm'}>
                <button onClick={() => setForm(false)}>Поиск</button>
                <button onClick={() => setForm(true)} disabled={!savedOrgButton}>Сохраненные({savedOrg.length})</button>
            </div>


                <div className={'wrapperForm'}>
                    {!form &&
                        <FindOrg/>
                    }
                    {form &&
                        <SavedOrg/>}
                </div>
        </div>
        </savedOrgContext.Provider>
    )
}
export default Form