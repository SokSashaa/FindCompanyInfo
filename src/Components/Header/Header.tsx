import {FC} from "react";
import './header.scss'
import logo from '../../images/logo.svg'
const Header:FC = ()=>{
    return(
        <div className={'header'}>
            <img src={logo} alt={''}/>
        </div>
    )
}
export default Header