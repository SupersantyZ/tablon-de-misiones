import { ReactComponent as CheckIcon } from "./check.svg";
import { ReactComponent as CloseIcon } from "./close.svg";
import "./todoIcon.css";



const iconTypes = {
  check: (color) => <CheckIcon fill={color} className="Icon-Svg check-icon"/>,
  delete: (color) => <CloseIcon fill={color} className="Icon-Svg close-icon" />
}

function TodoIcon({ type, color, onClick }) {

  return (
    <span className={`icon-container icon-container-${type}`} onClick={onClick} >
      {iconTypes[type](color) }
      
    </span>
  )
}

export { TodoIcon };