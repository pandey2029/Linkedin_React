
import Header from "../../atoms/Header/Header"
import modalEvent from "../../utils/Event"

import Institute from "./Institute"
import Button from "../../atoms/Button/Button"
import Icon from "../../atoms/icons/Icon"
import flexStyles from "../../styles/flexStyle.module.scss"
import styles from "./Education.module.scss"
export default function Education({data}){
    
    function addModal(){
        
        modalEvent.emit("activeModal","education")
    }
    //let data=[{school:"LNMIIT",branch:"cse",year:"2021-2025",grade:"8.4"},{school:"LNMIIT",branch:"cse",year:"2021-2025",grade:"8.4"}]
    
    const left=[{type:"text",props:{children:"Education"}}]
    const right=[{id:"addEduBtn",type:Button,props:{type:"icon",handleClick:addModal,children:<Icon icon="add"/>}},{id:"editEduBtn",type:Button,props:{type:"icon",children:<Icon icon="edit"/>}}]
    return(
        <>
        <div id="education" className={styles.education}>
            <Header leftContent={left} rightContent={right} />
            <div id="educationContentContainer">        
                {data.map((content)=>(<Institute key={content.school} school={content.school} branch={content.degree} year={{startMonth:content.startMonth,endMonth:content.endMonth,startYear:content.startYear,endYear:content.endYear}} grade={`Grade: ${content.grade}`}/>))}
            </div> 
        </div>
        </>
    )

    // <div>
    //     <Card header footer>
    //         <>data.map(<EducvationINfo data={}></Educvation>)</>
    //     </Card>
    // </div>
}