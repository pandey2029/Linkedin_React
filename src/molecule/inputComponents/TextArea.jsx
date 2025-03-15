/* eslint-disable react/prop-types */

import TextareaLabel from "../textareaWithLabel/TextareaLabel"

export default function TextArea({field,handleChange,data}){
    return(
        // <>
        //   <label id={field.id} style={{order:field.columnOrder}}>
        //      {field.label}
        //      <textarea placeholder={field.placeholder} name={field.id} onChange={handleChange} value={data[field.id]}/>
        //   </label>
        // </>
        <TextareaLabel field={field} eventHandler={{onChange:handleChange}} data={data} style={{order:field.columnOrder}} attributes={{placeholder:field.placeholder,name:field.id}}/>
    )
}






