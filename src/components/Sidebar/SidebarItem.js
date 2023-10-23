import "./SidebarItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
const SidebarItem = props => {
    const isShow = props.currTab === props.title ? " show" : ""
    console.log(isShow)
    return (<div onClick={()=>{props.handleOnClick(props.title)}} className={"sidebar__item" + isShow}>
                <div className="clicked"></div>
                <div className="sidebar__content">
                    <FontAwesomeIcon icon={props.icon} size="xs" style={{color: "#10737F" }}></FontAwesomeIcon>
                    <p>{props.title}</p>
                </div>
            </div>)
}

export default SidebarItem