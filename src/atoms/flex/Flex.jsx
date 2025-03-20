/* eslint-disable react/prop-types */
import "./Flex.css"
export default function Flex({className="",id="",direction="",gap="",justifyContent="",alignItem="",children=""}){
    direction=direction ? `flex-${direction}`:"";
    gap=gap ? `flex-gap-${gap}`:"";
    justifyContent=justifyContent ? `justifyContent-${justifyContent}`:"";
    alignItem=alignItem ? `alignItem-${alignItem}`:"";


    const classStyle=`${className} ${direction} ${gap} ${justifyContent} ${alignItem} flex-box`
    return(
        <div className={classStyle} id={id}>
            {children}
        </div>
    )
}