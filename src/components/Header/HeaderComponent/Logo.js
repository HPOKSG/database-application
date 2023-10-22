import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTruck } from "@fortawesome/free-solid-svg-icons"
import "./Logo.css"

const Logo = props =>{
    return <div className="logo">
        Storeal
        <nav><FontAwesomeIcon icon={faTruck} color="#F48A26"/></nav>
    </div>
}
export default Logo