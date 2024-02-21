import {FC} from "react";
import './Form.scss'
const Form:FC = ()=>{
    return(
        <div className={'form'}>
            <div className={'headerForm'}>
                <p>Организации</p>
            </div>
            <input type={'text'} placeholder={'Наименование, ИНН'}/>
        </div>
    )
}
export default Form