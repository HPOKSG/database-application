import Header from "./Header";
import ButtonWithIcon from "./HeaderComponent/ButtonWithIcon";
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const HeaderExtension = props =>{

    
    // const [isFilterOpen,setFilterState] = useState(false)

    return (<Header>
        <ButtonWithIcon 
                title = {props.filter}
                icon = {faSliders}
                color = {"var(--DARKER-BLUE)"}
                backgroundColor = {"var(--WHITE)"}
                onClickHandle =  {props.handleAddNewItem}
        />
        <ButtonWithIcon
                title = {props.add}
                icon = {faPlus}
                color = {"var(--WHITE)"}
                backgroundColor = {"var(--ORANGE)"}
                onClickHandle = {props.handleDisplayAddForm}
            />
    
    </Header>)
}
export default HeaderExtension;