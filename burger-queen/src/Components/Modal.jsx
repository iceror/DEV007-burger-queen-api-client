import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import '../css/build.css'
import ReactDom from "react-dom";


const Modal = ({ show, children, onHide }) => {

  const { user } = useContext(UserContext);
  // console.log(user);
  if(!show){
    return null
  }
  return ReactDom.createPortal (
    <div className="modal-overlay" onClick={onHide}>
      <div className="modal">
        <h2>¡Ups!</h2>
        <p >{children}</p> {/* Display the error message. Find a way to translate error */}
        
      </div>
    </div>,
    document.getElementById('portal')
  )
}
export default Modal
