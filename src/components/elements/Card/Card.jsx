/* eslint-disable react/prop-types */
export default function Card({header,body,id}){
    return(
        
        <div id={id}>
        {header}
        {body}
        </div>
        )
}