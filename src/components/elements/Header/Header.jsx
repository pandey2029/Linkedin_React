/* eslint-disable react/prop-types */
export default function Header({heading,symbol1,symbol2,name,handleClick,handleEdit}){
    return(
        <>
            
            <div className="sectionHeader">
                    <div className="sectionHeaderLeft">
                        {heading}
                    </div>
                    <div className="sectionHeaderRight">
                        <i className="material-icons" id={`add${name}btn`} onClick={handleClick}>{symbol1}</i>
                        <i className="material-icons" id={`edit${name}btn`} onClick={handleEdit}>{symbol2}</i>
                    </div>
            </div>
            

        
        
        </>
    )
}