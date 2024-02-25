import React, {ChangeEvent, FC, useMemo, useState} from "react";
import './FindOrg.scss'
import fetchData, {getCompany} from "../../fetchData";
import ItemList from "../ItemList/ItemList";
import useDebounce from "../../hooks/useDebounce";

const FindOrg: FC = () => {
    const [arrayCompany, setArrayCompany] = useState([])
    const [valueInput,setValueInput] = useState('')
    const valueInputDebounce = useDebounce(valueInput,800)

    const setArray = useMemo(()=>fetchData(valueInputDebounce).then(setArrayCompany),[valueInputDebounce])


    return (<>
        <input type={'text'} placeholder={'Наименование, ИНН'} onChange={(event:ChangeEvent<HTMLInputElement>) => setValueInput(event.target.value)}/>
        <ul>
            {
                arrayCompany.slice(0, 5).map((item: getCompany) =>
                    <ItemList key={item.inn} dataCompany={item} nameSavedButton={true}/>
                )
            }
        </ul>
    </>)

}
export default FindOrg