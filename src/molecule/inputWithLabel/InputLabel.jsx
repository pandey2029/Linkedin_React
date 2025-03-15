/* eslint-disable react/prop-types */
import Input from "../input/Input";
import Label from "../label/Label";

export default function InputLabel({field,eventHandler={},data,style={},attributes={}}){
    return(
        <>
            <Label id={field.id} style={style} label={field.label}>
                <Input attributes={attributes} eventHandler={eventHandler} data={data[field.id]}/>
            </Label>
        </>
    )
}