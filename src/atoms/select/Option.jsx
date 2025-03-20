/* eslint-disable react/prop-types */
export default function Option({key,value}){
    return(
        <option key={key} value={value}>{value}</option>
    )
}