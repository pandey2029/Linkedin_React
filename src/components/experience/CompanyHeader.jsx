import Icon from "../../atoms/icons/Icon"
export default function CompanyHeader(){
    return(
        <div id="experienceHeader" className="sectionHeader">
            <div id="experienceHeaderLeft" className="sectionHeaderLeft">
                Experience
            </div>
            <div id="experienceHeaderRight" className="sectionHeaderRight">
                <Icon icon="add" id="add"/>
                <Icon icon="edit" id="option"/>
            </div>
        </div>
    )
}