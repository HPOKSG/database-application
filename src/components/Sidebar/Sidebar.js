import "./Sidebar.css"
import SidebarItem from "./SidebarItem";
import { useState } from "react";
import { faArrowRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { ADMIN_MAIN_CONTENT } from "../../pages/Admin";
const Sidebar = props =>{
    const [currTabItem, setTabItem] = useState(props.items[0])

    function onClickTabItem(tab){
        setTabItem(tab)
        switch (tab.toLowerCase()){
            case ADMIN_MAIN_CONTENT.INVENTORY.toLowerCase():
                props.handleMainContent(ADMIN_MAIN_CONTENT.INVENTORY)
                break
            case ADMIN_MAIN_CONTENT.CATEGORY.toLowerCase():
                props.handleMainContent(ADMIN_MAIN_CONTENT.CATEGORY)
                break
            default:
                props.handleMainContent(ADMIN_MAIN_CONTENT.INVENTORY)
                break
        }
    }

    return <div className ="sidebar">
        {props.items.map((item,index)=>{
            return (<SidebarItem 
                key = {index} 
                icon = {props.icons[index]}
                title = {item}
                handleOnClick = {onClickTabItem}
                currTab={currTabItem}
            />)
        })}
        <SidebarItem 
                key = {props.items.length-1} 
                icon = {faArrowRightFromBracket}
                title = {"Log out"}
                handleOnClick = {onClickTabItem}
                currTab={currTabItem}
        />
        
    </div>
}

export default Sidebar;