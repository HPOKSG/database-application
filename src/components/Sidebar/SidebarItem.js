import "./SidebarItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const SidebarItem = props => {
    
    return (<div className="sidebar__item">
                <div className="clicked"></div>
                <div className="sidebar__content">
                    <FontAwesomeIcon icon={props.icon} size="xs" style={{color: "#10737F" }}></FontAwesomeIcon>
                    <p>{props.title}</p>
                </div>
            </div>)
}

export default SidebarItem