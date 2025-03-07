import Para from "../../../atoms/para/Para"
import Button from "../../../atoms/Button/Button"
import Input from "../../../atoms/input/Input"

import "./SkillAdd.css"
import { useState } from "react"
import Flex from "../../../atoms/flex/Flex"
import Icon from "../../../atoms/icons/Icon"
export default function SkillAdd(){
    const [skillList,setSkillList]=useState(['C++','SQL','Js'])
    const [active,setActive]=useState(false);
    const [newSkill,setNewSkill]=useState('');
    function handleClick(){
        setActive(true);
    }
    function save(){
        setSkillList([...skillList,newSkill]);
        setNewSkill("");
        setActive(false);
        console.log(skillList);
    }
    function remove(index){
        setSkillList((pre)=>[...pre.slice(0,index),...pre.slice(index+1)])
    }
    return(
        <>
            <h2>Skills</h2>
            <Para text="Show your top skills — add up to 5 skills you want to be known for. They will also appear in your Skills section."/>
            <Flex id="skillCon" direction="column" gap="m">
                {skillList.map((skill,index)=>
                <Flex key={`index-${skill}`} justifyContent={"space-between"} >
                    <Flex gap="xs">
                        <Icon icon="close" id="delete" handleClick={()=>remove(index)}/>
                        {skill}
                    </Flex>
                    <Icon icon="menu" />
                </Flex>)}   
            </Flex>
            {active && <Input eventHandler={{onKeyDown:(e)=>{
                if(e.key==="Enter"){
                save()
            }
            },
            onChange:(e)=>setNewSkill(e.target.value)
            }} value={newSkill}/>}
            {!active && <Button text="add skill" eventHandler={{onClick:handleClick}}/>}


            
        </>
    )
}
