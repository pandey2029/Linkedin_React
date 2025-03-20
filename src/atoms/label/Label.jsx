/* eslint-disable react/prop-types */
export default function Label({label="",children,id,style={}}){
    return(
        <label id={id} style={style}>
            {label}
            {children}
        </label>
    )
}