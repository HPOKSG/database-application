import "./Sidebar.css"
import SidebarItem from "./SidebarItem";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
const Sidebar = props =>{
    return <div className ="sidebar">
        {props.items.map((item,index)=>{
            return (<SidebarItem 
                key = {index} 
                icon = {props.icons[index]}
                title = {item}
            />)
        })}
        <SidebarItem 
                key = {props.items.length} 
                icon = {faArrowRightFromBracket}
                title = {"Log out"}
        />
        
    </div>
}

export default Sidebar;