/* eslint-disable react/prop-types */

export default function TextArea({field,handleChange,data}){
    return(
        <>
          <label id={field.id} style={{order:field.columnOrder}}>
             {field.label}
             <textarea placeholder={field.placeholder} name={field.id} onChange={handleChange} value={data[field.id]}/>
          </label>
        </>
    )
}