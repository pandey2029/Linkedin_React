/* eslint-disable react/prop-types */
import Input from "../../atoms/input/Input";
import Label from "../../atoms/label/Label";

export default function InputLabel({field,eventHandler={},data,style={},attributes={}}){
    return(
        <>
            <Label id={field.id} style={style} label={field.label}>
                <Input id={field.id} attributes={attributes} eventHandler={eventHandler} data={data ? data[field.id]:""}/>
            </Label>
        </>
    )
}