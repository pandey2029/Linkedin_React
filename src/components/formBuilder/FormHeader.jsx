/* eslint-disable react/prop-types */
import modalEvent from "../../utils/Event";
import Header from "../../atoms/Header/Header";
import Icon from "../../atoms/icons/Icon";
import Button from "../../atoms/Button/Button";
import styles from "./Form.module.scss"
export default function FormHeader({heading}){
    function quit(){
        modalEvent.emit("activeModal","");
    }
    const left=[{type:"text",props:{children:heading}}]
    const right=[{id:styles.quit,type:Button,props:{type:"icon",handleClick:quit,children:<Icon icon="close"/>}}]
        
    return(
     
        <Header id={styles.headerWrapper} leftContent={left} rightContent={right}/>
    )
}


