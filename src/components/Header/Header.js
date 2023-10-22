import Logo from "./HeaderComponent/Logo"
import Wrapper from "../Helpers/Wrapper"
import Searchbar from "./HeaderComponent/Searchbar"
import ButtonWithIcon from "./HeaderComponent/ButtonWithIcon";
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import './Header.css'
const Header = props =>{
    return <Wrapper>
        <Logo/>
        <div className="header-main-section">
            <Searchbar/> 
            
            <ButtonWithIcon
                title = {"Filter Inventory"}
                icon = {faSliders}
                color = {"var(--DARKER-BLUE)"}
                backgroundColor = {"var(--WHITE)"}
            />
           
            <ButtonWithIcon
                title = {"Add Inventory"}
                icon = {faPlus}
                color = {"var(--WHITE)"}
                backgroundColor = {"var(--ORANGE)"}
            />
        </div>
    </Wrapper>
}

export default Header;