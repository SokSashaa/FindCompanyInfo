import React, {FC, useMemo, useState} from "react";
import './FindOrg.scss'
import fetchData, {getCompany} from "../../fetchData";
import ItemList from "../ItemList/ItemList";
import debounce from 'lodash/debounce'

const FindOrg: FC = () => {
    const [arrayCompany, setArrayCompany] = useState([])


    const handleInputChange = useMemo(() => debounce(e => {
        const { value } = e.target;
        fetchData(value).then(setArrayCompany);
    }, 800), [])

    return (<>
        <input type={'text'} placeholder={'Наименование, ИНН'} onChange={handleInputChange}/>
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