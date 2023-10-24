import Header from "./Header";
import ButtonWithIcon from "./HeaderComponent/ButtonWithIcon";
import { faSliders } from '@fortawesome/free-solid-svg-icons';
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const HeaderExtension = ({filter, add,handleFilter, handleOpenAddForm}) =>{

    
    // const [isFilterOpen,setFilterState] = useState(false)
    return (<Header>
        <ButtonWithIcon 
                title = {filter}
                icon = {faSliders}
                color = {"var(--DARKER-BLUE)"}
                backgroundColor = {"var(--WHITE)"}
                onClickHandle =  {handleFilter}
        />
        <ButtonWithIcon
                title = {add}
                icon = {faPlus}
                color = {"var(--WHITE)"}
                backgroundColor = {"var(--ORANGE)"}
                onClickHandle = {handleOpenAddForm}
            />
    
    </Header>)
}
export default HeaderExtension;