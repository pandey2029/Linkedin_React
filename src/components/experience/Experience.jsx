import Header from "../../atoms/Header/Header"
import Button from "../../atoms/Button/Button"
import Icon from "../../atoms/icons/Icon"
import Image from "../../atoms/img/Image"
import styles from "./Experience.module.scss"
import flexStyles from "../../styles/flexStyle.module.scss"
import Role from "./Role"
import modalEvent from "../../utils/Event"
export default function Experience(){
    const left=[{type:"text",props:{children:"Experience"}}]
    const right=[{id:"addEduBtn",type:Button,props:{type:"icon",handleClick:addModal,children:<Icon icon="add"/>}},{id:"editEduBtn",type:Button,props:{type:"icon",children:<Icon icon="edit"/>}}]
    const roleArr=[{role:"Senior Software Engineer",duration:"Oct 2022 - Present • 2yrs 4 mos",location:"Bengaluru, Karnataka",skills:"Skills: Web Engineering · Nextjs · Software Design · React.js"},{role:"Senior Software Engineer",duration:"Oct 2022 - Present • 2yrs 4 mos",location:"Bengaluru, Karnataka",skills:"Skills: Web Engineering · Nextjs · Software Design · React.js"}]
    const companyLeft=[{type:Image,props:{className:styles.companyImage,src:"https://media.licdn.com/dms/image/v2/C560BAQGB0W6_ixPclA/company-logo_100_100/company-logo_100_100/0/1630590775082/tekion_logo?e=1745452800&v=beta&t=bl_007bnYv7vo3BhlozrxwCxBJ-cGUSgePTHm8BH1LM"}},
        {type:"div",props:{className:"companyAbout",children:<div className="companyAbout"><div className="companyName">Tekion</div><div className="duration">Full Time • 5yrs 1mo</div></div>}}
    ];
    function addModal(){
        
        modalEvent.emit("activeModal","experience")
    } 
    return(

        
        <div id={styles.experience}>
            <Header leftContent={left} rightContent={right} paddingLR="zero" />
            <div id={styles.experienceWrapper}>
                <div className={styles.experienceTab}>
                    <Header leftContent={companyLeft} rightContent={[]} paddingTB="zero" contentSize="xs" />
                    <div className={flexStyles.flexColumn}>
                        {roleArr.map((role, index) => (
                            <Role key={index} {...role} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
        
    )
}