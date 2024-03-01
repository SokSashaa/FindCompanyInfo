import React, {FC, useContext, useState} from "react";
import './ItemList.scss'
import arrow from '../../images/arrow.png'
import {getCompany} from "../../fetchData";
import {savedOrgContext} from "../../context/savedOrgContext";

type itemListProps = {
    dataCompany: getCompany,
    nameSavedButton: boolean,
}

const ItemList: FC<itemListProps> = ({dataCompany, nameSavedButton}) => {
    const [expansion, setExpansion] = useState(false)
    const nameButton = nameSavedButton ? 'Сохранить' : 'Удалить';
    const {savedOrg, setSaved0rg} = useContext(savedOrgContext)

    const addElementInSavedOrgArray = () => {
        if(savedOrg.findIndex(item => item.inn===dataCompany.inn)===-1) setSaved0rg([...savedOrg, dataCompany])
    }

    const delElementInSavedOrgArray = () => {
        savedOrg.splice(savedOrg.findIndex(item => item.inn === dataCompany.inn),1)
        setSaved0rg([...savedOrg])
    }

    return (
        <>

            {!expansion ? <div className={'itemListWrapperNotExpansion'}>
                    <div className={'infoCompany'}>
                        <p className={'nameCompany'}>{dataCompany.name}</p>
                        <div className={'otherInfoCompany'}>
                            <p>{'ИНН ' + dataCompany.inn}</p>
                            <p>{'ОГРН ' + dataCompany.ogrn}</p>
                        </div>

                    </div>
                    <img className={'imgItem'} src={arrow} alt={''} onClick={() => {
                        setExpansion(!expansion)
                    }}/>
                </div>
                :
                <div className={'itemListWrapperExpansion'}>
                    <div className={'infoCompany'}>
                        <p className={'nameCompany'}>{dataCompany.name}</p>
                        <div className={'otherInfoCompany'}>
                            <div className={'spanInfo'}>
                                <p>{'ИНН: ' + dataCompany.inn}</p>
                                <p>{'ОГРН: ' + dataCompany.ogrn}</p>
                            </div>
                            {dataCompany.kpp && <p>{'КПП: ' + dataCompany.kpp}</p>}
                            <p>{'Адрес: ' + dataCompany.address}</p>

                            {dataCompany.management && <p>{dataCompany.management.post + ' - ' + dataCompany.management.name}</p>}
                        </div>
                        <button onClick={() => {
                            nameSavedButton ? addElementInSavedOrgArray() : delElementInSavedOrgArray()
                        }}>{nameButton}
                        </button>

                    </div>

                    <img className={'imgItem'} src={arrow} alt={''} onClick={() => {
                        setExpansion(!expansion)
                    }}/>
                </div>
            }
        </>

    )
}
export default ItemList