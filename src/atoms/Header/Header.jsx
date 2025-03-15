/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./Header.css"
import Icon from "./../../atoms/icons/Icon"
import Button from "./../../atoms/Button/Button"
export default function Header({idLeft,idRight,id,leftContent,rightContent,border=""}){
    const classStyle=border ? `sectionHeader border-${border}`:"sectionHeader";
    function renderContent(contentList) {
        return contentList.map((comp,index) => {
          const { id,type, props = {} } = comp;
          if (typeof type === "function") {
            return <type key={id? id:index} id={id? id:""} {...props} />;
          }
          else if (typeof type === "string") {
            if(type==="text"){
                return props.children
            }
            const Element = type;
            return <Element id={id ?id:""}key={id? id:index} {...props}></Element>;
          }
          

          return null; 
        });
      }
    return(
        <>
            
            <div id={id ? id:undefined} className={classStyle}>
                    <div id={idLeft ? idLeft:undefined} className="sectionHeaderLeft">
                        {renderContent(leftContent)}
                    </div>
                    <div id={idRight ? idRight:undefined} className="sectionHeaderRight">
                        {renderContent(rightContent)}
                    </div>
            </div>
            

        
        
        </>
    )
}