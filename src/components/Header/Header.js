import Logo from "./HeaderComponent/Logo"
import Wrapper from "../Helpers/Wrapper"
import Searchbar from "./HeaderComponent/Searchbar"
import ButtonWithIcon from "./HeaderComponent/ButtonWithIcon";


import './Header.css'
const Header = props =>{
    console.log(props.children)
    return <Wrapper>
        <div className="header-main-section">
            <Searchbar/> 
            {props.children}
        </div>
    </Wrapper>
}

export default Header;