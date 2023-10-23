import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ButtonWithIcon.css'

const ButtonWithIcon = props =>{
    console.log(props.color)
    return <div 
            className='custom-button'
            style={{color: props.color,
                    backgroundColor: props.backgroundColor}}
            onClick={props.onClickHandle}
            >
        {props.title}
        <nav>
            <FontAwesomeIcon 
                icon ={props.icon} 
            />
        </nav>
        <div> {props.children}</div>
    </div>
}

export default ButtonWithIcon;