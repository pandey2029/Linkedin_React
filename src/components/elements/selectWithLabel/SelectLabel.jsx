/* eslint-disable react/prop-types */
import Label from "../label/Label";
import Select from "../select/Select";

export default function SelectLabel({field,eventHandler={},data,style={},attributes={}}){
    return(
        <>
            <Label id={field.id} style={style} label={field.label}>
                <Select eventHandler={eventHandler} data={data[field.id]} field={field} attributes={attributes}/>
            </Label>
        </>
    )
}