import "./Sidebar.css"
import SidebarItem from "./SidebarItem";
const Sidebar = props =>{
    return <div className ="sidebar">
       {
            props.items.map((item,index)=>{
                return <SidebarItem 
                    key = {index} 
                    icon = {props.icons[index]}
                    title = {item}
                />
            })

       }
    </div>
}

export default Sidebar;