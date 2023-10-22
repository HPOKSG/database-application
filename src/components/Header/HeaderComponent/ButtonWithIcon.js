import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import './ButtonWithIcon.css'

const ButtonWithIcon = props =>{
    console.log(props.color)
    return <div 
            className='custom-button'
            style={
                    {
                        color: props.color,
                        backgroundColor: props.backgroundColor
                    }
                }
            >
        {props.title}
        <nav>
            <FontAwesomeIcon 
                icon ={props.icon} 
            />
        </nav>
    </div>
}

export default ButtonWithIcon;